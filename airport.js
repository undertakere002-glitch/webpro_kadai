const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

let airport2 = [
    { id:1,  icao:"RJCW", iata:"WKJ", name:"稚内空港", nickname:"-", runway:"08/26", ft:"27", destination:"CTS,HND", company:"ANA", location:"北海道稚内市声問村"},
    { id:2,  icao:"RJER", iata:"RIS", name:"利尻空港", nickname:"-", runway:"07/25", ft:"99", destination:"OKD", company:"JAL", location:"北海道利尻郡利尻富士町"},
    { id:3,  icao:"RJEB", iata:"MBE", name:"紋別空港", nickname:"オホーツク紋別空港", runway:"12/32", ft:"58", destination:"HND", company:"ANA", location:"北海道紋別市"},
    { id:4,  icao:"RJCM", iata:"MMB", name:"女満別空港", nickname:"-", runway:"18/36", ft:"109", destination:"OKD,CTS,HND", company:"ANA,JAL,ADO", location:"北海道網走郡大空街女満別中央"},
    { id:5,  icao:"RJEC", iata:"AKJ", name:"旭川空港", nickname:"北海道のまん中・旭川空港", runway:"16/34", ft:"690", destination:"HND,NRT", company:"ANA,JAL,ADO,JJP", location:"北海道川上郡東神楽町"},
    { id:6,  icao:"RJCN", iata:"SHB", name:"中標津空港", nickname:"根室中標津空港", runway:"08/26", ft:"214", destination:"OKD,CTS,HND", company:"ANA,JAL", location:"北海道標津中標津町"},
    { id:7,  icao:"RJCK", iata:"KUH", name:"釧路空港", nickname:"たんちょう釧路空港", runway:"17/35", ft:"311", destination:"OKD,CTS,HND", company:"ANA,JAL,ADO", location:"北海道釧路市"},
    { id:8,  icao:"RJCB", iata:"OBO", name:"帯広空港", nickname:"とかち帯広空港", runway:"17/35", ft:"190", destination:"HND", company:"JAL,ADO", location:"北海道帯広市"},
    { id:9,  icao:"RJCO", iata:"OKD", name:"丘珠空港", nickname:"-", runway:"14/32",ft:"26",destination:"RIS,MMB,SHB,KUH,HKD,MSJ,AXT,KIJ,NGO",company:"JAL,TOK",location:"北海道札幌市東区丘珠町"},
    { id:10, icao:"RJCC", iata:"CTS", name:"新千歳空港", nickname:"-", runway:"01L/19R,01R/19L",ft:"69.8",destination:"WKJ,MMB,SHB,KUH,HKD,AOJ,AXT,HNA,GAJ,SDJ,FKS,KIJ,MMJ,IBR,NRT,HND,TOY,KMQ,FSZ,NGO,ITM,UKB,KIX,OKJ,HIJ,FUK,OKA",company:"ANA,JAL,SKY,ADO,JJP,SJO,APJ,FDA,IBX",location:"北海道千歳市"},
    { id:11, icao:"RJCH", iata:"HKD", name:"函館空港", nickname:"-", runway:"12/30",ft:"111.9",destination:"OKD,CTS,HND,NGO,ITM",company:"ANA,JAL,ADO",location:"北海道函館市"},
    { id:12, icao:"RJSA", iata:"AOJ", name:"青森空港", nickname:"-", runway:"06/24",ft:"650",destination:"CTS,HND,NKM,ITM,UKB",company:"ANA,JAL,FDA",location:"青森県青森市"},
    { id:13, icao:"RJSM", iata:"MSJ", name:"三沢飛行場", nickname:"-", runway:"10/28",ft:"119",destination:"OKD,HND,ITM",company:"JAL",location:"青森県三沢市"},
    { id:14, icao:"RJSR", iata:"ONJ", name:"代官能代空港", nickname:"あきた北空港", runway:"11/29",ft:"276",destination:"HND",company:"ANA",location:"秋田県北秋田市"},
    { id:15, icao:"RJSK", iata:"AXT", name:"秋田空港", nickname:"-", runway:"10/28",ft:"305",destination:"OKD,HND,ITM,NGO",company:"ANA,JAL,ORC",location:"秋田県秋田市"},
    { id:16, icao:"RJSI", iata:"HNA", name:"花巻空港", nickname:"いわて花巻空港", runway:"02/20",ft:"294",destination:"CTS,HKM,ITM,UKB,FUK",company:"JAL,FDA",location:"岩手県花巻市"},
    { id:17, icao:"RJSI", iata:"SYO", name:"庄内空港", nickname:"おいしい庄内空港", runway:"09/27",ft:"72",destination:"HND",company:"ANA",location:"山形県酒田市"},
    { id:18, icao:"RJSC", iata:"GAJ", name:"山形空港", nickname:"おいしい山形空港", runway:"01/19",ft:"345",destination:"CTS,HND,HKM,ITM",company:"JAL,FDA",location:"山形県東根市"},
    { id:19, icao:"RJSS", iata:"SDJ", name:"仙台空港", nickname:"-", runway:"09/27,12,30",ft:"5.6",destination:"CTS,NGO,ITM,UKB,KIX,HIJ,FUK,OKA",company:"ANA,JAL,SKY,IBX,ADO,SFJ,FDA,APJ",location:"宮城県名取市・岩沼市"},
    { id:20, icao:"RJSF", iata:"FKS", name:"福島空港", nickname:"-", runway:"01/19",ft:"1220",destination:"CTS,ITM",company:"ANA,IBX",location:"福島県石川郡玉川村・須賀川市"},
    { id:21, icao:"RJSN", iata:"KIJ", name:"新潟空港", nickname:"-", runway:"04/22,10/28",ft:"4.6",destination:"OKD,CTS,HKM,NGO,ITM,UKB,FUK",company:"ANA,JAL,FDA,IBX,TOK",location:"新潟県新潟市東区"},
    { id:22, icao:"RJAF", iata:"MMJ", name:"松本空港", nickname:"信州まつもと空港", runway:"18/36",ft:"2157",destination:"CTS,UKB,FUK",company:"FDA",location:"長野県松本市・塩尻市"},
    { id:23, icao:"RJAH", iata:"IBR", name:"百里飛行場", nickname:"茨城空港", runway:"03L/21R,03R/21L",ft:"107",destination:"CTS,UKB,FUK,OKA",company:"SKY",location:"茨城県小美玉市"},
    { id:24, icao:"RJAA", iata:"NRT", name:"成田国際空港", nickname:"-", runway:"16R/34L,16L/34R",ft:"135",destination:"AKJ,CTS,NGO,ITM,KIX,HIJ,TAK,MYJ,KCZ,FUK,OIT,NGS,KMJ,KMI,KOJ,ASJ,OKA,ISG",company:"ANA,JAL,JJP,APJ,SJO",location:"千葉県成田市"},
    { id:25, icao:"RJTT", iata:"HND", name:"東京国際空港", nickname:"羽田空港", runway:"16L/34R,16R/34R,04/22,05/23",ft:"21",destination:"WKJ,MBE,MMB,AKJ,SHB,KUH,OBO,CTS,HKD,AOJ,MSJ,,ONJ,AXT,SYO,GAJ,HAC,NTQ,TOY,KMQ,NGO,ITM,UKB,KIX,SHM,TTJ,YGJ,IZO,IWJ,OKJ,HIJ,UBJ,TKS,TAK,MYJ,KCZ,KKJ,FUK,OIT,NGS,KMJ,KMI,KOJ,ASJ,UEO,OKA,SHI,MMY,ISG",company:"ANA,JAL,SKY,SFJ,ADO,SNJ",location:"東京都大田区"},
    { id:26, icao:"RJTH", iata:"HAC", name:"八丈島空港", nickname:"-", runway:"08/26",ft:"301",destination:"HND",company:"ANA",location:"東京都八丈町"},
    { id:27, icao:"RJNW", iata:"NTQ", name:"能登空港", nickname:"のと里山空港", runway:"07/25",ft:"718",destination:"HND",company:"ANA",location:"石川県輪島市三井町洲衛"},
    { id:28, icao:"RJNT", iata:"TOY", name:"富山空港", nickname:"富山きときと空港", runway:"02/20",ft:"77",destination:"CTS,HND",company:"ANA",location:"富山県富山市"},
    { id:29, icao:"RJNK", iata:"KMQ", name:"小松飛行場", nickname:"-", runway:"06/24",ft:"22",destination:"CTS,HND,FUK,OKA",company:"ANA,JAL,JTA,ORC",location:"石川県小松市"},
    { id:30, icao:"RJNA", iata:"HKM", name:"名古屋飛行場", nickname:"小牧空港", runway:"16/34",ft:"46",destination:"AOJ,HNA,GAJ,KIJ,IZO,KCZ,FUK,KMJ",company:"FDA",location:"愛知県名古屋市・小牧市・西春日井郡豊山町・春日井市"},
    { id:31, icao:"RJNS", iata:"FSZ", name:"静岡空港", nickname:"富士山静岡空港", runway:"12/30",ft:"433",destination:"CTS,IZO,FUK,KOJ,OKA",company:"ANA,JAL,FDA",location:"静岡県牧之原市・島田市"},
    { id:32, icao:"RJGG", iata:"NGO", name:"中部国際空港", nickname:"セントレア空港", runway:"18/36",ft:"12",destination:"OKD,CTS,HKD,AXT,SDJ,KIJ,NRT,HND,IZO,MYJ,KCZ,FUK,OIT,KMI,KOJ,OKA,MMY,ISG",company:"ANA,JAL,JTA,SKY,ADO,SNJ,SFJ,APJ,FDA,IBX,ORC,TOK,JJP",location:"愛知県常滑市"},
    { id:33, icao:"RJBT", iata:"TJH", name:"但馬飛行場", nickname:"コウノトリ但馬空港", runway:"01/19",ft:"578",destination:"ITM",company:"JAL",location:"兵庫県豊岡市"},
    { id:34, icao:"RJOO", iata:"ITM", name:"大阪国際空港", nickname:"伊丹空港", runway:"14R/32L,14L32R",ft:"39",destination:"CTS,HKD,AOJ,MSJ,AXT,HNA,SDJ,GAJ,FKS,KIJ,NRT,HND,OKI,IZO,MYJ,KCZ,FUK,NGS,OIT,KMJ,KMI,KOJ,KUM,ASJ,OKA,",company:"ANA,JAL,IBX,AHX",location:"大阪府豊中市・池田市・兵庫県伊丹市"},
    { id:35, icao:"RJBE", iata:"UKB", name:"神戸空港", nickname:"マリンエア", runway:"09/27",ft:"18",destination:"CTS,SDJ,KIJ,MMJ,IBR,HND,NGS,KOJ,OKA,SHI,MMY",company:"ANA,SKY,FDA,ADO,SNJ,TOK",location:"兵庫県神戸市中央区"},
    { id:36, icao:"RJBB", iata:"KIX", name:"関西国際空港", nickname:"-", runway:"06R/24L,06L/24R",ft:"17.4",destination:"CTS,SDJ,NRT,HND,FUK,NGS,KMI,KOJ,OKA,MMY,ISG",company:"ANA,JAL,JTA,SFJ,JJP,APJ",location:"大阪府泉佐野市・泉南郡田尻町・泉南市"},
    { id:37, icao:"RJBD", iata:"SHM", name:"南紀白浜空港", nickname:"熊野白浜リゾート空港", runway:"15/33",ft:"293",destination:"HND",company:"JAL",location:"和歌山県西牟婁郡"},
    { id:38, icao:"RJOR", iata:"TTJ", name:"鳥取空港", nickname:"鳥取砂丘コナン空港", runway:"10/28",ft:"48",destination:"HND",company:"ANA",location:"鳥取県鳥取市"},
    { id:39, icao:"RJNO", iata:"OKI", name:"隠岐空港", nickname:"隠岐世界ジオパーク空港", runway:"08/26",ft:"262",destination:"ITM,IZO",company:"JAL",location:"島根県隠岐郡隠岐の島町"},
    { id:40, icao:"RJOH", iata:"YGJ", name:"米子空港", nickname:"米子鬼太郎空港", runway:"07/25",ft:"13",destination:"HND",company:"ANA",location:"島根県境港市佐斐神町"},
    { id:41, icao:"RJOC", iata:"IZO", name:"出雲空港", nickname:"出雲縁結び空港", runway:"07/25",ft:"6",destination:"HND,HKM,FSZ,NGO,ITM,OKI,FUK",company:"JAL,FDA",location:"島根県出雲市"},
    { id:42, icao:"RJOW", iata:"IWJ", name:"石見空港", nickname:"萩・石見空港", runway:"11/29",ft:"177",destination:"HND",company:"ANA",location:"島根県益田市"},
    { id:43, icao:"RJOB", iata:"OKJ", name:"岡山空港", nickname:"岡山桃太郎空港", runway:"07/25",ft:"785",destination:"CTS,HND,OKA",company:"ANA,JAL,JTA",location:"岡山県岡山市北区"},
    { id:44, icao:"RJOA", iata:"HIJ", name:"広島空港", nickname:"-", runway:"10/28",ft:"1086",destination:"CTS,SDJ,NRT,HND,OKA",company:"ANA,JAL,IBX,SJO",location:"広島県三原市"},
    { id:45, icao:"RJDC", iata:"UBJ", name:"山口宇部空港", nickname:"-", runway:"07/25",ft:"15",destination:"HND",company:"ANA,JAL,SFJ",location:"山口県宇部市"},
    { id:46, icao:"RJOS", iata:"TKS", name:"徳島飛行場", nickname:"徳島阿波おどり空港", runway:"11/29",ft:"37.4",destination:"HND,FUK",company:"ANA,JAL",location:"徳島県板野郡松茂町"},
    { id:47, icao:"RJOT", iata:"TAK", name:"高松空港", nickname:"-", runway:"08/26",ft:"607",destination:"NRT,HND,OKA",company:"ANA,JAL,JJP",location:"香川県高松市"},
    { id:48, icao:"RJOM", iata:"MYJ", name:"松山空港", nickname:"-", runway:"14/32",ft:"13",destination:"NRT,HND,ITM,NGO,FUK,KOJ,OKA",company:"ANA,JAL,JJP",location:"愛媛県松山市"},
    { id:49, icao:"RJOK", iata:"KCZ", name:"高知空港", nickname:"高知龍馬空港", runway:"14/32",ft:"29",destination:"NRT,HND,KMQ,NGO,ITM,UKB,FUK,KMJ",company:"ANA,JAL,FDA,JJP",location:"高知県南国市"},
    { id:50, icao:"RJDT", iata:"TSJ", name:"対馬空港", nickname:"対馬やまねこ空港", runway:"14/32",ft:"207",destination:"FUK,NGS",company:"ANA,JAL,ORC",location:"長崎県対馬市"},
    { id:51, icao:"RJDB", iata:"IKI", name:"壱岐空港", nickname:"-", runway:"02/20",ft:"41",destination:"NGS",company:"ANA,JAL,ORC",location:"長崎県壱岐市"},
    { id:52, icao:"RJFR", iata:"KKJ", name:"北九州空港", nickname:"-", runway:"18/36",ft:"21",destination:"HND",company:"ANA,JAL,SFJ",location:"福岡県北九州市"},
    { id:53, icao:"RJFF", iata:"FUK", name:"福岡空港", nickname:"-", runway:"16R/34L,16L/34R",ft:"30",destination:"CTS,HNA,SDJ,KIJ,MMJ,IBR,NRT,HND,KMQ,HKM,FSZ,NGO,ITM,IZO,TKS,MYJ,KCZ,TSJ,FUJ,AXJ,KMI,KOJ,KUM,ASJ,OKA,ISG",company:"ANA,JAL,JTA,SKY,SFJ,SNJ,ADO,APJ,JJP,FDA,IBX,AHK,ORC",location:"福岡県福岡市"},
    { id:54, icao:"RJFO", iata:"OIT", name:"大分空港", nickname:"-", runway:"01/19",ft:"17",destination:"NRT,NRT,NGO,ITM",company:"ANA,JAL,SNA,IBX,JJP",location:"大分県国東市"},
    { id:55, icao:"RJFE", iata:"FUJ", name:"福江空港", nickname:"五島つばき空港", runway:"03/21",ft:"251",destination:"FUK,NGS",company:"ANA,ORC",location:"長崎県五島市上大津町"},
    { id:56, icao:"RJFS", iata:"HSG", name:"佐賀空港", nickname:"九州佐賀国際空港", runway:"11/29",ft:"6",destination:"HND",company:"ANA",location:"佐賀県佐賀市川副街"},
    { id:57, icao:"RJFU", iata:"NGS", name:"長崎空港", nickname:"-", runway:"14/32",ft:"8",destination:"NRT,HND,NGO,ITM,UKB,TSJ,IKI,FUJ",company:"ANA,JAL,SKY,SNJ,JJP,APJ,ORC",location:"長崎県大村市箕島町"},
    { id:58, icao:"RJFT", iata:"KMJ", name:"熊本空港", nickname:"阿蘇くまもと空港", runway:"07/25",ft:"632",destination:"NRT,HND,HKM,FSZ,NGO,ITM,AXJ,OKA",company:"ANA,JAL,SNJ,FDA,JJP,AMX",location:"熊本県上益城郡益城町"},
    { id:59, icao:"RJDA", iata:"AXJ", name:"天草飛行場", nickname:"", runway:"01/19",ft:"340",destination:"FUK,KMJ",company:"ANA,JAL,AMX",location:"熊本県天草市五和町"},
    { id:60, icao:"RJFM", iata:"KMI", name:"宮崎空港", nickname:"宮崎ブーゲンビリア空港", runway:"09/27",ft:"19",destination:"NRT,HND,KIX,NGO,ITM,FUK,OKA",company:"ANA,JAL,SNJ,APJ,JJP,ORC",location:"宮崎県宮崎市大字赤江"},
    { id:61, icao:"RJFK", iata:"KOJ", name:"鹿児島空港", nickname:"-", runway:"16/34",ft:"891",destination:"NRT,HND,FSZ,NGO,ITM,UKB,KIX,,MYJ,FUK,ASJ,TNE,KUM,KKX,TKN,OKE,RNJ,OKA",company:"ANA,JAL,SKY,SNJ,FDA,IBX,JJP,APJ",location:"鹿児島県霧島市溝辺町麓"},
    { id:62, icao:"RJFG", iata:"TNE", name:"種子島空港", nickname:"コスモポート種子島空港", runway:"13/31",ft:"768",destination:"KOJ",company:"JAL",location:"鹿児島県熊毛郡中種子町"},
    { id:63, icao:"RJFC", iata:"KUM", name:"屋久島空港", nickname:"-", runway:"14/32",ft:"122",destination:"ITM,FUK,KOJ",company:"JAL",location:"鹿児島県熊毛郡屋久島町"},
    { id:64, icao:"RJKA", iata:"ASJ", name:"奄美空港", nickname:"-", runway:"03/21",ft:"41",destination:"NRT,HND,ITM,FUK,KOJ,KKX,TKN,RNJ",company:"JAL,SKY,APJ",location:"鹿児島県奄美市笠利町"},
    { id:65, icao:"RJKI", iata:"KKX", name:"喜界空港", nickname:"-", runway:"07/25",ft:"15.26",destination:"KOJ,ASJ",company:"ANA,JAL",location:"鹿児島県大島郡喜界町"},
    { id:66, icao:"RJKN", iata:"TKN", name:"徳之島空港", nickname:"徳之島子宝空港", runway:"01/19",ft:"8",destination:"KOJ,ASJ,OKE",company:"JAL",location:"鹿児島県大島郡天城町"},
    { id:67, icao:"RJKB", iata:"OKE", name:"沖永良部空港", nickname:"えらぶゆりの空港", runway:"04/22",ft:"88",destination:"KOJ,TKN,OKA",company:"ANA,JAL",location:"鹿児島県大島郡和泊町"},
    { id:68, icao:"RORY", iata:"RNJ", name:"与論空港", nickname:"-", runway:"14/32", ft:"47", destination:"KOJ,OKA", company:"JAL,RAC" ,location:"鹿児島県大島郡与論町"},
    { id:69, icao:"ROKJ", iata:"UEO", name:"久米島空港", nickname:"-", runway:"03/21", ft:"22.7", destination:"OKA", company:"JTA,RAC", location:"沖縄県島尻郡久米島町"},
    { id:70, icao:"ROAH", iata:"OKA", name:"那覇空港", nickname:"-", runway:"18R/36L,18L/36R", ft:"11", destination:"CTS,SDJ,IBR,NRT,HND,KMQ,FSZ,NGO,ITM,UKB,KIX,OKJ,HIJ,TAK,MYJ,FUK,KMJ,KMI,KOJ,ASJ,RNJ,UEO,KTD,MMD,SHI,MMY,ISG,ONG", company:"ANA,JAL,JAC,JTA,RAC,JJP,APJ,SNJ,SKY",location:"沖縄県那覇市"},
    { id:71, icao:"RORK", iata:"KTD", name:"北大東空港", nickname:"-", runway:"03/21", ft:"70.9", destination:"OKA,", company:"RAC", location:"沖縄県島尻郡北大東村"},
    { id:72, icao:"ROMD", iata:"MMD", name:"南大東空港", nickname:"-", runway:"02/20", ft:"158.5", destination:"OKA", company:"RAC", location:"沖縄県島尻郡南大東村"},
    { id:73, icao:"RORS", iata:"SHI", name:"下地島空港", nickname:"みやこ下地島空港", runway:"17/35", ft:"25", destination:"HND,UKB,OKA", company:"SKY", location:"沖縄県宮古島市下地島"},
    { id:74, icao:"ROMY", iata:"MMY", name:"宮古空港", nickname:"-", runway:"18/36", ft:"140", destination:"HND,NGO,KIX,OKA,ISG,TRA", company:"ANA,JAL,JTA,RAC", location:"沖縄県宮古島市宮古島"},
    { id:75, icao:"RORT", iata:"TRA", name:"多良間空港", nickname:"かりゆす多良間空港", runway:"18/36", ft:"33.8", destination:"MMY", company:"RAC", location:"沖縄県宮古郡多良間町"},
    { id:76, icao:"ROIG", iata:"ISG", name:"石垣空港", nickname:"南ぬ島石垣空港", runway:"04/22", ft:"102", destination:"HND,NRT,NGO,KIX,FUK,OKA,MMY,OGN", company:"ANA,JAL,JTA,RAC,SNA,APJ", location:"沖縄県石垣市"},
    { id:77, icao:"ROYN", iata:"OGN", name:"与那国空港", nickname:"-", runway:"08/26", ft:"49", destination:"OKA,ISG", company:"RAC", location:"沖縄県八重山郡与那国町"},
    
];



app.get("/airport", (req, res) => {
  res.render('airport', { data: airport2 });
});
  
// Delete
app.get("/airport2/delete/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = airport2.findIndex(a => a.id === id);
  airport2.splice(index, 1 );
  res.redirect('/airport' );
});

// Create
app.get("/airport/create", (req, res) => {
  res.redirect('/public/airport_add.html');
});

// Read
app.get("/airport_detail", (req, res) => {
  const id = Number(req.query.id);

  // id が一致する空港を探す
  const airportData = airport2.find(a => a.id === id);

  res.render("airport_detail", { data: airportData });
});

// Edit
app.get("/airport/edit/:id", (req, res) => {
  const id = Number(req.params.id);
  const airportData = airport2.find(a => a.id === id);
  res.render('airport_edit', { data: airportData } );
});

// Update
app.post("/airport2/update/:id", (req, res) => {
  const id = Number(req.params.id);
  
  const airportData = airport2.find(a => a.id === id );
  airportData.id = Number(req.body.id);
  airportData.icao = req.body.icao;
  airportData.iata = req.body.iata;
  airportData.name = req.body.name;
  airportData.nickname = req.body.nickname;
  airportData.runway = req.body.runway;
  airportData.ft = req.body.ft;
  airportData.destination = req.body.destination;
  airportData.company = req.body.company;
  airportData.location = req.body.location;
  console.log( airport2 );
  res.redirect('/airport' );
});

app.post("/airport_add", (req, res) => {
  const id = Number(req.body.id);
  const icao = req.body.icao;
  const iata = req.body.iata;
  const name = req.body.name;
  const nickname = req.body.nickname;
  const runway = req.body.runway;
  const ft = req.body.ft;
  const destination = req.body.destination;
  const company = req.body.company;
  const location = req.body.location;
  airport2.push( {
    id: id,
    icao: icao,
    iata: iata,
    name: name,
    nickname: nickname,
    runway: runway,
    ft: ft,
    destination: destination,
    company: company,
    location: location
    } );
    console.log( airport2 )
    res.redirect("/airport")

});
  
  app.listen(8080, () => console.log("Example app listening on port 8080!"));
  