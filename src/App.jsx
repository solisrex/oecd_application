import { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { OrbitControls, PerspectiveCamera, useGLTF, Image } from '@react-three/drei';
import { XMLParser } from 'fast-xml-parser';
import * as THREE from 'three';
import { countries } from './countries';

function createRotationQuat(long,lat) {

  // Declare X and Y axes
  var axisX = new THREE.Vector3(1, 0, 0);
  var axisY = new THREE.Vector3(0, 1, 0);
  var axisZ = new THREE.Vector3(0, 0, 1);

  // Init quaternions that will rotate along each axis
  var quatX = new THREE.Quaternion();
  var quatY = new THREE.Quaternion();
  var quatZ = new THREE.Quaternion();

  // Set quaternions from each axis (in radians)...
  quatX.setFromAxisAngle(axisX, -lat);
  quatY.setFromAxisAngle(axisY, long);
  quatZ.setFromAxisAngle(axisZ, 0);

  // ...then multiply them to get final rotation
  quatY.multiply(quatX);
  quatZ.multiply(quatY);
  return quatZ
  // https://stackoverflow.com/questions/36107867/three-js-setfromrotationmatrix-strange-behavior-when-rotation-is-over-90-degrees
}

const countryNames = countries.map((x,i)=>{return {value : i, label : x.countryName}})

function App() {
  const [ selectedOption, setSelectedOption] = useState(0);
  const selector = useRef(null)
  useEffect(()=> {
    selector.current.selectedIndex = selectedOption
  },[selectedOption])
  return (
    <div style={{textAlign:'center'}}>
        <select ref={selector}>
          {countryNames.map((x,i)=><option onClick={()=>setSelectedOption(i)}>{x.label}</option>)}
        </select>
      <div className="leftPanel">
        {showCountry(countries[selectedOption])}
      <h1>References</h1>
      <ul style={{textAlign:"left"}}>
        <li><span>Flag url: </span><a href={countries[selectedOption].flagURL}>{countries[selectedOption].flagURL}</a></li>
        <li><span>Wiki summary url: </span><a href={countries[selectedOption].wikiURL}>{countries[selectedOption].wikiURL}</a></li>
        <li><span>GDP url: </span><a href={countries[selectedOption].GDPURL}>{countries[selectedOption].GDPURL}</a></li>
        <li><span>CPI url: </span><a href={countries[selectedOption].CPIURL}>{countries[selectedOption].CPIURL}</a></li>
      </ul>
      </div>
    <div className="App">
      <Canvas>
        <PerspectiveCamera makeDefault near={0.01} position={[1.75*Math.sin(Math.PI/180*130)*Math.cos(Math.PI/180*-25),1.75*Math.sin(Math.PI/180*-25),1.75*Math.cos(Math.PI/180*130)*Math.cos(Math.PI/180*-25)]}/>
        <ambientLight intensity={1}/>
        <directionalLight color="white" intensity={0.24} position={[0,0,5]}/>
            {countries.map((c,i)=>{
              return <group>
            <Image onClick={()=>{setSelectedOption(i)}} quaternion={createRotationQuat(Math.PI/180*c.GPSCoords.long,Math.PI/180*c.GPSCoords.lat)}  scale={[0.02,0.01]} position={[1.01*Math.sin(Math.PI/180*c.GPSCoords.long)*Math.cos(Math.PI/180*c.GPSCoords.lat),1.01*Math.sin(Math.PI/180*c.GPSCoords.lat),1.01*Math.cos(Math.PI/180*c.GPSCoords.long)*Math.cos(Math.PI/180*c.GPSCoords.lat)]} url={c.flagURL}/>
            </group>
          })}
          <Model url={"/globe_lowres.glb"} />
        <OrbitControls minDistance={1.01} maxDistance={3} enablePan={false}/>
      </Canvas>
    </div>
    </div>
  )
}


function Model({ url }) {
  const { scene } = useGLTF(url)
  return <primitive rotation={[0,Math.PI*190/180,0]} object={scene} />
}


function showCountry(country) {
  const [summary, setSummary] = useState('Loading...');
  const [gdpData, setGDP] = useState(null);
  const [cpiData, setCPI] = useState(null);
  const [magnitude, setMagnitude] = useState("Million")
  const [ticks, setTicks] = useState([])
 
  function labelMagnitude(n) {
    if (3 <= n && n < 6 ) {
      return "Thousand"
    } else if ( 6 <= n && n < 9) {
      return "Million"
    } else if (9 <= n && n < 12) {
      return "Billion"
    } else if (12 <= n && n < 15) {
      return "Trillion"
    } else if (15 <= n && n < 18) {
      return "Quadrillion"
    }
  }
  const fetchProcessAndSet = async (url,process,setContent) => {
    const fetchResponse = await fetch(url)
    const processedResponse = await process(fetchResponse)
    setContent(processedResponse)
  }

  const processWikiSummary = async (fetchResponse) => {
    const wikiSummaryJSON = await fetchResponse.json()
    
    const pages = wikiSummaryJSON['query']['pages']
    const pagesKeys = Object.keys(pages)
    return pages[pagesKeys[0]]['extract']
  }

  const processGdpData = async (fetchResponse) => {
    
    const GDPDataText = await fetchResponse.text()
    const xmlParser = new XMLParser()
    const GDPDataJSON = xmlParser.parse(GDPDataText)
    const GDPDataRaw = GDPDataJSON['wb:data']['wb:data'].map(x=>{return {date:x["wb:date"],gdp:parseFloat(x["wb:value"])}}).reverse()
    console.log(GDPDataRaw)
    const maxGdp = Math.max(...GDPDataRaw.filter(x=>x.gdp==x.gdp).map(x=>x.gdp))

    const dateRange = [Math.min(...GDPDataRaw.map(x=>x.date)),Math.max(...GDPDataRaw.map(x=>x.date))]
    const dateSpan = Math.floor(dateRange[1]/10)-Math.ceil(dateRange[0]/10)+1
    const orderOfMagnitude = Math.ceil(Math.log10(maxGdp))
    const scale = 10**(-(orderOfMagnitude-(orderOfMagnitude%3)))
    const scaledData = GDPDataRaw.map((x)=>{return {date : x.date, gdp : scale*x.gdp}})

    return [Array(dateSpan).fill().map((x,i)=>Math.ceil(dateRange[0]/10)*10+10*i),scaledData,orderOfMagnitude]
  }

  const setGdpData = (dataBundle) => {
    setTicks(dataBundle[0])
    setGDP(dataBundle[1])
    setMagnitude(dataBundle[2])
  }

  const processCpiData = async (fetchResponse) => {
    const CpiDataText = await fetchResponse.text()
    const xmlParser = new XMLParser()
    const CpiDataJSON = xmlParser.parse(CpiDataText)
    const CpiDataRaw = CpiDataJSON['wb:data']['wb:data'].map(x=>{return {date:x["wb:date"],cpi:parseFloat(x["wb:value"])}}).reverse()
    return CpiDataRaw
  }

  const fetchData = async () => {
    fetchProcessAndSet(country.wikiURL,processWikiSummary,setSummary)
    fetchProcessAndSet(country.GDPURL,processGdpData,setGdpData)
    fetchProcessAndSet(country.CPIURL,processCpiData,setCPI)
  }
  useEffect(() => {
    fetchData()
  },[country])
  
  return <div>
    <h1>Flag</h1>
          <img className="flag" src={country.flagURL}/>
    <h1>Wikipedia Summary</h1>
        <p>{summary}</p>
    <h1>Real GDP</h1>
    {plotData(gdpData,'date','gdp','#55ffff','#00ffff',`Year vs GDP (${labelMagnitude(magnitude)} USD)`,ticks)}
    <h1>CPI</h1>
    {plotData(cpiData,'date','cpi','#55ffff','#00ffff',`Year vs Consumer Price Index`,null)}
    </div>
}



function plotData(data,xDataKey,yDataKey, gridStrokeColor, lineStrokeColor, label, ticks) {
  return <div className='chart'>
      <ResponsiveContainer width='100%' height='auto' aspect={2}>
      <LineChart data={data} margin={{ top: 0, right: 0, left: 50, bottom: 0 }}>
        <XAxis  dataKey={xDataKey} ticks={ticks}/>
        <YAxis domain={[0, dataMax => Math.ceil(dataMax)]}/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line dataKey={yDataKey} stroke={lineStrokeColor}  fill='#003333'/>
      </LineChart>
      </ResponsiveContainer>
      <span>{label}</span>
      </div>
}

export default App
