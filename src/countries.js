
function createWikiURL(countryString) {
  return `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&exsentences=3&explaintext&titles=${countryString}&format=json`
}

const BaseURL = "https://api.worldbank.org/v2/countries/"

export function getWorldBankIndicatorURL(countryCode,indicatorCode) {
  return `${BaseURL}${countryCode}/indicators/${indicatorCode}`
}

export class Country {
    constructor(countryName, countryCode, flagURL, GPSCoords) {
        this.countryName = countryName
        this.countryCode = countryCode
        this.flagURL = flagURL
        this.GPSCoords = GPSCoords
        this.wikiURL = createWikiURL(countryName)
        this.GDPURL = getWorldBankIndicatorURL(countryCode,"NY.GDP.MKTP.CD")
        this.CPIURL = getWorldBankIndicatorURL(countryCode,"FP.CPI.TOTL")
    }
}

export let countries = [
    new Country("Albania","ALB","https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",{long:19.8172,lat:41.3317}),
    new Country("Algeria","DZA","https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",{long:3.05097,lat:36.7397}),
    new Country("Andorra","AND","https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",{long:1.5218,lat:42.5075}),
    new Country("Angola","AGO","https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg",{long:13.242,lat:-8.81155}),
    new Country("Antigua and Barbuda","ATG","https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg",{long:-61.8456,lat:17.1175}),
    new Country("Argentina","ARG","https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",{long:-58.4173,lat:-34.6118}),
    new Country("Armenia","ARM","https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",{long:44.509,lat:40.1596}),
    new Country("Australia","AUS","https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",{long:149.129,lat:-35.282}),
    new Country("Austria","AUT","https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",{long:16.3798,lat:48.2201}),
    new Country("Azerbaijan","AZE","https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",{long:49.8932,lat:40.3834}),
    new Country("The Bahamas","BHS","https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg",{long:-77.339,lat:25.0661}),
    new Country("Bahrain","BHR","https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg",{long:50.5354,lat:26.1921}),
    new Country("Bangladesh","BGD","https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",{long:90.4113,lat:23.7055}),
    new Country("Barbados","BRB","https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg",{long:-59.6105,lat:13.0935}),
    new Country("Belarus","BLR","https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",{long:27.5766,lat:53.9678}),
    new Country("Belgium","BEL","https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",{long:4.36761,lat:50.8371}),
    new Country("Belize","BLZ","https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg",{long:-88.7713,lat:17.2534}),
    new Country("Benin","BEN","https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg",{long:2.6323,lat:6.4779}),
    new Country("Bhutan","BTN","https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",{long:89.6177,lat:27.5768}),
    new Country("Bolivia","BOL","https://upload.wikimedia.org/wikipedia/commons/b/b3/Bandera_de_Bolivia_%28Estado%29.svg",{long:-66.1936,lat:-13.9908}),
    new Country("Bosnia and Herzegovina","BIH","https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",{long:18.4214,lat:43.8607}),
    new Country("Botswana","BWA","https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg",{long:25.9201,lat:-24.6544}),
    new Country("Brazil","BRA","https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",{long:-47.9292,lat:-15.7801}),
    new Country("Brunei","BRN","https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg",{long:114.946,lat:4.94199}),
    new Country("Bulgaria","BGR","https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",{long:23.3238,lat:42.7105}),
    new Country("Burkina Faso","BFA","https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg",{long:-1.53395,lat:12.3605}),
    new Country("Burundi","BDI","https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg",{long:29.3639,lat:-3.3784}),
    new Country("Cambodia","KHM","https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg",{long:104.874,lat:11.5556}),
    new Country("Cameroon","CMR","https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg",{long:11.5174,lat:3.8721}),
    new Country("Canada","CAN","https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",{long:-75.6919,lat:45.4215}),
    new Country("Cape Verde","CPV","https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg",{long:-23.5087,lat:14.9218}),
    new Country("Central African Republic","CAF","https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg",{long:21.6407,lat:5.63056}),
    new Country("Chad","TCD","https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg",{long:15.0445,lat:12.1048}),
    new Country("Chile","CHL","https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",{long:-70.6475,lat:-33.475}),
    new Country("China","CHN","https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",{long:116.286,lat:40.0495}),
    new Country("Columbia","COL","https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",{long:-74.082,lat:4.60987}),
    new Country("Comoros","COM","https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg",{long:43.2418,lat:-11.6986}),
    new Country("Democratic Republic of Congo","ZAR","https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg",{long:15.3222,lat:-4.325}),
    new Country("Republic of the Congo","COG","https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg",{long:15.2662,lat:4.2767}),
    new Country("Costa Rica","CRI","https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg",{long:-84.0089,lat:9.63701}),
    new Country("Croatia","HRV","https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",{long:15.9614,lat:45.8069}),
    new Country("Cuba","CUB","https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg",{long:-82.3667,lat:23.1333}),
    new Country("Cyprus","CYP","https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg",{long:33.3736,lat:35.1676}),
    new Country("Czech Republic","CZE","https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",{long:14.4205,lat:50.0878}),
    new Country("Denmark","DNK","https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Denmark_%28state%29.svg",{long:12.5681,lat:55.6763}),
    new Country("Djibouti","DJI","https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg",{long:43.1425,lat:11.5806}),
    new Country("Dominica","DMA","https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg",{long:-61.39,lat:15.2976}),
    new Country("Dominican Republic","DOM","https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg",{long:-69.8908,lat:18.479}),
    new Country("East Timor","TMP","https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg",{long:125.567,lat:-8.56667}),
    new Country("Ecuador","ECU","https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",{long:-78.5243,lat:-0.229498}),
    new Country("Egypt","EGY","https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",{long:31.2461,lat:30.0982}),
    new Country("El Salvador","SLV","https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg",{long:-89.2073,lat:13.7034}),
    new Country("Equitorial Guinea","GNQ","https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg",{long:8.7741,lat:3.7523}),
    new Country("Eritrea","ERI","https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg",{long:38.9183,lat:15.3315}),
    new Country("Estonia","EST","https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",{long:24.7586,lat:59.4392}),
    new Country("Ethiopia","ETH","https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg",{long:38.7468,lat:9.02274}),
    new Country("Fiji","FJI","https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg",{long:178.399,lat:-18.1149}),
    new Country("Finland","FIN","https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",{long:24.9525,lat:60.1608}),
    new Country("France","FRA","https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",{long:2.35097,lat:48.8566}),
    new Country("Gabon","GAB","https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg",{long:9.45162,lat:0.38832}),
    new Country("The Gambia","GMB","https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg",{long:-16.5885,lat:13.4495}),
    new Country("Georgia","GEO","https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",{long:44.793,lat:41.71}),
    new Country("Germany","DEU","https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",{long:13.4115,lat:52.5235}),
    new Country("Ghana","GHA","https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",{long:-0.20795,lat:5.57045}),
    new Country("Greece","GRC","https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",{long:23.7166,lat:37.9792}),
    new Country("Grenada","GRD","https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg",{long:-61.7449,lat:12.0653}),
    new Country("Guatemala","GTM","https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg",{long:-90.5328,lat:14.6248}),
    new Country("Guinea","GIN","https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg",{long:-13.7,lat:9.51667}),
    new Country("Guinea-Bissau","GNB","https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg",{long:-15.1804,lat:11.8037}),
    new Country("Guyana","GUY","https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg",{long:-58.1548,lat:6.80461}),
    new Country("Haiti","HTI","https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg",{long:-72.3288,lat:18.5392}),
    new Country("Honduras","HND","https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg",{long:-87.4667,lat:15.1333}),
    new Country("Hong Kong","HKG","https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg",{long:114.109,lat:22.3964}),
    new Country("Hungary","HUN","https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",{long:19.0408,lat:47.4984}),
    new Country("Iceland","ISL","https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",{long:-21.8952,lat:64.1353}),
    new Country("India","IND","https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",{long:77.225,lat:28.6353}),
    new Country("Indonesia","IDN","https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",{long:106.83,lat:-6.19752}),
    new Country("Iran","IRN","https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",{long:51.4447,lat:35.6878}),
    new Country("Iraq","IRQ","https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",{long:44.394,lat:33.3302}),
    new Country("Ireland","IRL","https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",{long:-6.26749,lat:53.3441}),
    new Country("Israel","ISR","https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",{long:35.2035,lat:31.7717}),
    new Country("Italy","ITA","https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",{long:12.4823,lat:41.8955}),
    new Country("Ivory Coast","CIV","https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg",{long:-4.0305,lat:5.332}),
    new Country("Jamaica","JAM","https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg",{long:-76.792,lat:17.9927}),
    new Country("Japan","JPN","https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",{long:139.77,lat:35.67}),
    new Country("Jordan","JOR","https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",{long:35.9263,lat:31.9497}),
    new Country("Kazakhstan","KAZ","https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",{long:71.4382,lat:51.1879}),
    new Country("Kenya","KEN","https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",{long:36.8126,lat:-1.27975}),
    new Country("Kiribati","KIR","https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg",{long:172.979,lat:1.32905}),
    new Country("North Korea","PRK","https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg",{long:125.754,lat:39.0319}),
    new Country("South Korea","KOR","https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",{long:126.957,lat:37.5323}),
    new Country("Kuwait","KWT","https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg",{long:47.9824,lat:29.3721}),
    new Country("Kyrgyzstan","KGZ","https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg",{long:74.6057,lat:42.8851}),
    new Country("Laos","LAO","https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg",{long:102.177,lat:18.5826}),
    new Country("Latvia","LVA","https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",{long:24.1048,lat:56.9465}),
    new Country("Lebanon","LBN","https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",{long:35.5134,lat:33.8872}),
    new Country("Lesotho","LSO","https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg",{long:27.7167,lat:-29.5208}),
    new Country("Liberia","LBR","https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg",{long:-10.7957,lat:6.30039}),
    new Country("Libya","LBY","https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg",{long:13.1072,lat:32.8578}),
    new Country("Liechtenstein","LIE","https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg",{long:9.52148,lat:47.1411}),
    new Country("Lithuania","LTU","https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg",{long:25.2799,lat:54.6896}),
    new Country("Luxembourg","LUX","https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",{long:6.1296,lat:49.61}),
    new Country("Madagascar","MDG","https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg",{long:45.7167,lat:-20.4667}),
    new Country("Malawi","MWI","https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg",{long:33.7703,lat:-13.9899}),
    new Country("Malaysia","MYS","https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",{long:101.684,lat:3.12433}),
    new Country("Maldives","MDV","https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg",{long:73.5109,lat:4.1742}),
    new Country("Mali","MLI","https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg",{long:-7.50034,lat:13.5667}),
    new Country("Malta","MLT","https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg",{long:14.5189,lat:35.9042}),
    new Country("Marshall Islands","MHL","https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg",{long:171.135,lat:7.11046}),
    new Country("Mauritania","MRT","https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg",{long:-15.9824,lat:18.2367}),
    new Country("Mauritius","MUS","https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg",{long:57.4977,lat:-20.1605}),
    new Country("Mexico","MEX","https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",{long:-99.1276,lat:19.427}),
    new Country("Federated States of Micronesia","FSM","https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg",{long:158.185,lat:6.91771}),
    new Country("Moldova","MDA","https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",{long:28.8497,lat:47.0167}),
    new Country("Monaco","MCO","https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg",{long:7.41891,lat:43.7325}),
    new Country("Mongolia","MNG","https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg",{long:106.937,lat:47.9129}),
    new Country("Morocco","MAR","https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",{long:-6.8704,lat:33.9905}),
    new Country("Mozambique","MOZ","https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg",{long:32.5713,lat:-25.9664}),
    new Country("Myanmar","MMR","https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg",{long:95.9562,lat:21.914}),
    new Country("Namibia","NAM","https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg",{long:17.0931,lat:-22.5648}),
    new Country("Nauru","NRU","https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg",{long:166.920867,lat:-0.5477}),
    new Country("Nepal","NPL","https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",{long:85.3157,lat:27.6939}),
    new Country("Netherlands","NLD","https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",{long:4.89095,lat:52.3738}),
    new Country("New Zealand","NZL","https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",{long:174.776,lat:-41.2865}),
    new Country("Nicaraua","NIC","https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg",{long:-86.2734,lat:12.1475}),
    new Country("Niger","NER","https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg",{long:2.1073,lat:13.514}),
    new Country("Nigeria","NGA","https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",{long:7.48906,lat:9.05804}),
    new Country("North Macedonia","MKD","https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg",{long:21.4361,lat:42.0024}),
    new Country("Norway","NOR","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/640px-Flag_of_Norway.svg.png",{long:10.7387,lat:59.9138}),
    new Country("Oman","OMN","https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg",{long:58.5874,lat:23.6105}),
    new Country("Pakistan","PAK","https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",{long:72.8,lat:30.5167}),
    new Country("Palau","PLW","https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg",{long:134.479,lat:7.34194}),
    new Country("Panama","PAN","https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg",{long:-79.5188,lat:8.99427}),
    new Country("Papua New Guinea","PNG","https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg",{long:147.194,lat:-9.47357}),
    new Country("Paraguay","PRY","https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg",{long:-57.6362,lat:-25.3005}),
    new Country("Peru","PER","https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",{long:-77.0465,lat:-12.0931}),
    new Country("Philippines","PHL","https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",{long:121.035,lat:14.5515}),
    new Country("Poland","POL","https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",{long:21.02,lat:52.26}),
    new Country("Portugal","PRT","https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",{long:-9.13552,lat:38.7072}),
    new Country("Qatar","QAT","https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",{long:51.5082,lat:25.2948}),
    new Country("Romania","ROM","https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",{long:26.0979,lat:44.4479}),
    new Country("Russia","RUS","https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",{long:37.6176,lat:55.7558}),
    new Country("Rwanda","RWA","https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg",{long:30.0587,lat:-1.95325}),
    new Country("Saint Kitts and Nevis","KN","https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg",{long:-62.7309,lat:17.3}),
    new Country("Samoa","WSM","https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg",{long:-171.752,lat:-13.8314}),
    new Country("San Marino","SMR","https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg",{long:12.4486,lat:43.9322}),
    new Country("São Tomé and Príncipe","STP","https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg",{long:6.6071,lat:0.20618}),
    new Country("Saudi Arabia","SAU","https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",{long:46.6977,lat:24.6748}),
    new Country("Senegal","SEN","https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",{long:-17.4734,lat:14.7247}),
    new Country("Serbia","SRB","https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",{long:20.4656,lat:44.8024}),
    new Country("Seychelles","SYC","https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg",{long:55.4466,lat:-4.6309}),
    new Country("Sierra Leone","SLE","https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg",{long:28.1871,lat:-25.746}),
    new Country("Singapore","SGP","https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",{long:103.85,lat:1.28941}),
    new Country("Slovakia","SVK","https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",{long:17.1073,lat:48.1484}),
    new Country("Slovenia","SVN","https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",{long:14.5044,lat:46.0546}),
    new Country("Solomon Islands","SLB","https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg",{long:159.949,lat:-9.42676}),
    new Country("Somalia","SOM","https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg",{long:45.3254,lat:2.07515}),
    new Country("South Africa","ZAF","https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",{long:28.1871,lat:-25.746}),
    new Country("Spain","ESP","https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",{long:-3.70327,lat:40.4167}),
    new Country("Sri Lanka","LKA","https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",{long:79.8528,lat:6.92148}),
    new Country("Sudan","SDN","https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",{long:32.5363,lat:15.5932}),
    new Country("Suriname","SUR","https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg",{long:-55.1679,lat:5.8232}),
    new Country("Sweden","SWE","https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",{long:18.0645,lat:59.3327}),
    new Country("Switzerland","CHE","https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg",{long:7.44821,lat:46.948}),
    new Country("Syria","SYR","https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg",{long:36.3119,lat:33.5146}),
    new Country("Taiwan","TWN","https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg",{long:121.31,lat:25.04}),
    new Country("Tajikistan","TJK","https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg",{long:68.7864,lat:38.5878}),
    new Country("Tanzania","TZA","https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg",{long:35.7382,lat:-6.17486}),
    new Country("Thailand","THA","https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",{long:100.521,lat:13.7308}),
    new Country("Togo","TGO","https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg",{long:1.2255,lat:6.1228}),
    new Country("Tonga","TON","https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg",{long:-175.216,lat:-21.136}),
    new Country("Trinidad and Tobago","TTO","https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg",{long:-61.4789,lat:10.6596}),
    new Country("Tunisia","TUN","https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",{long:10.21,lat:36.7899}),
    new Country("Turkey","TUR","https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",{long:32.3606,lat:39.7153}),
    new Country("Turkmenistan","TKM","https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg",{long:58.3794,lat:37.9509}),
    new Country("Tuvalu","TUV","https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg",{long:179.089567,lat:-8.6314877}),
    new Country("Uganda","UGA","https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg",{long:32.5729,lat:0.314269}),
    new Country("Ukraine","UKR","https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",{long:30.5038,lat:50.4536}),
    new Country("United Arab Emirates","ARE","https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",{long:54.3705,lat:24.4764}),
    new Country("United Kingdom","GBR","https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",{long:-0.126236,lat:51.5002}),
    new Country("United States","USA","https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",{long:-77.032,lat:38.8895}),
    new Country("Uruguay","URY","https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg",{long:-56.0675,lat:-34.8941}),
    new Country("Uzbekistan","UZB","https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",{long:69.269,lat:41.3052}),
    new Country("Vanuatu","VUT","https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg",{long:168.321,lat:-17.7404}),
    new Country("Venezuela","VEN","https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg",{long:-69.8371,lat:9.08165}),
    new Country("Vietnam","VNM","https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",{long:105.825,lat:21.0069}),
    new Country("Yemen","YEM","https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",{long:44.2075,lat:15.352}),
    new Country("Zambia","ZMB","https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",{long:28.2937,lat:-15.3982}),
    new Country("Zimbabwe","ZWE","https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",{long:31.0672,lat:-17.8312})
  ]