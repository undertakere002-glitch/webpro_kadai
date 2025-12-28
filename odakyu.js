const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));


  let station2 = [
    { id:0,  code:"OH01", name:"新宿駅", type:"特急ロマンスカー，快速急行，急行，各駅停車", change:"JR線（埼京線，湘南新宿ライン，中央・青梅・五日市線，中央・総武線各駅停車，山手線），京王線，東京メトロ丸ノ内線，都営新宿線，都営大江戸線"},
    { id:1,  code:"OH02", name:"南新宿駅", type:"各駅停車", change:"-"},
    { id:2,  code:"OH03", name:"参宮橋駅", type:"各駅停車", change:"-"},
    { id:3,  code:"OH04", name:"代々木八幡駅", type:"各駅停車", change:"-"},
    { id:4,  code:"OH05", name:"代々木上原駅", type:"快速急行，急行，準急，各駅停車", change:"東京メトロ千代田線"},
    { id:5,  code:"OH06", name:"東北沢駅", type:"各駅停車", change:"-"},
    { id:6,  code:"OH07", name:"下北沢駅", type:"快速急行，急行，準急，各駅停車", change:"京王井の頭線"},
    { id:7,  code:"OH08", name:"世田谷代田駅", type:"各駅停車", change:"-"},
    { id:8,  code:"OH09", name:"梅ヶ谷駅", type:"各駅停車", change:"-"},
    { id:9,  code:"OH10", name:"豪徳寺駅", type:"各駅停車", change:"東急世田谷線"},
    { id:10, code:"OH11", name:"経堂駅", type:"急行，準急，各駅停車", change:"-"},
    { id:11, code:"OH12", name:"千歳船橋駅", type:"準急，各駅停車", change:"-"},
    { id:12, code:"OH13", name:"祖師ヶ谷大蔵駅", type:"準急，各駅停車", change:"-"},
    { id:13, code:"OH14", name:"成城学園前駅", type:"特急ロマンスカー，急行，準急，各駅停車", change:"-"},
    { id:14, code:"OH15", name:"喜多見駅", type:"準急，各駅停車", change:"-"},
    { id:15, code:"OH16", name:"狛江駅", type:"準急，各駅停車", change:"-"},
    { id:16, code:"OH17", name:"和泉多摩川駅", type:"準急，各駅停車", change:"-"},
    { id:17, code:"OH18", name:"登戸駅", type:"快速急行，急行，準急，各駅停車", change:"JR南武線"},
    { id:18, code:"OH19", name:"向ヶ丘遊園駅", type:"急行，準急，各駅停車", change:"-"},
    { id:19, code:"OH20", name:"生田駅", type:"準急，各駅停車", change:"-"},
    { id:20, code:"OH21", name:"読売ランド前駅", type:"準急，各駅停車", change:"-"},
    { id:21, code:"OH22", name:"百合ヶ丘駅", type:"準急，各駅停車", change:"-"},
    { id:22, code:"OH23", name:"新百合ヶ丘駅", type:"特急ロマンスカー，快速急行，急行，準急，各駅停車", change:"小田急多摩線"},
    { id:23, code:"OH24", name:"柿生駅", type:"準急，各駅停車", change:"-"},
    { id:24, code:"OH25", name:"鶴川駅", type:"準急，各駅停車", change:"-"},
    { id:25, code:"OH26", name:"玉川学園前駅", type:"準急，各駅停車", change:"-"},
    { id:26, code:"OH27", name:"町田駅", type:"特急ロマンスカー，快速急行，急行，準急，各駅停車", change:"JR横浜線"},
    { id:27, code:"OH28", name:"相模小野駅", type:"特急ロマンスカー，快速急行，急行，準急，各駅停車", change:"小田急江ノ島線"},
    { id:28, code:"OH29", name:"小田急相模原駅", type:"準急，各駅停車", change:"-"},
    { id:29, code:"OH30", name:"相武台前駅", type:"準急，各駅停車", change:"-"},
    { id:30, code:"OH31", name:"座間駅", type:"準急，各駅停車", change:"-"},
    { id:31, code:"OH32", name:"海老名駅", type:"特急ロマンスカー，快速急行，急行，準急，各駅停車", change:"JR相模線，相鉄線"},
    { id:32, code:"OH33", name:"厚木駅", type:"準急，各駅停車", change:"JR相鉄線"},
    { id:33, code:"OH34", name:"本厚木駅", type:"特急ロマンスカー，快速急行，急行，準急，各駅停車", change:"-"},
    { id:34, code:"OH35", name:"愛甲石田駅", type:"快速急行，急行，各駅停車", change:"-"},
    { id:35, code:"OH36", name:"伊勢原駅", type:"特急ロマンスカー，快速急行，急行，各駅停車", change:"-"},
    { id:36, code:"OH37", name:"鶴巻温泉駅", type:"快速急行，急行，各駅停車", change:"-"},
    { id:37, code:"OH38", name:"東海大学前駅", type:"快速急行，急行，各駅停車", change:"-"},
    { id:38, code:"OH39", name:"秦野駅", type:"特急ロマンスカー，快速急行，急行，各駅停車", change:"-"},
    { id:39, code:"OH40", name:"渋沢駅", type:"快速急行，急行，各駅停車", change:"-"},
    { id:40, code:"OH41", name:"新松田駅", type:"快速急行，急行，各駅停車", change:"JR御殿湯線"},
    { id:41, code:"OH42", name:"開成駅", type:"快速急行，急行，各駅停車", change:"-"},
    { id:42, code:"OH43", name:"栢山駅", type:"各駅停車", change:"-"},
    { id:43, code:"OH44", name:"富水駅", type:"各駅停車", change:"-"},
    { id:44, code:"OH45", name:"螢田駅", type:"各駅停車", change:"-"},
    { id:45, code:"OH46", name:"足柄駅", type:"各駅停車", change:"-"},
    { id:46, code:"OH47", name:"小田原駅", type:"特急ロマンスカー，快速急行，急行，各駅停車", change:"JR東海道新幹線，JR東海道線，大雄山線"},
    { id:47, code:"OH48", name:"箱根板橋駅", type:"各駅停車", change:"-"},
    { id:48, code:"OH49", name:"風祭駅", type:"各駅停車", change:"-"},
    { id:49, code:"OH50", name:"入生田駅", type:"各駅停車", change:"-"},
    { id:50, code:"OH51", name:"箱根湯本駅", type:"特急ロマンスカー，各駅停車", change:"-"},
    { id:51, code:"OE01", name:"東林間駅", type:"各駅停車", change:"-"},
    { id:52, code:"OE02", name:"中央林間駅", type:"快速急行，急行，各駅停車", change:"東急田園都市線"},
    { id:53, code:"OE03", name:"南林間駅", type:"各駅停車", change:"-"},
    { id:54, code:"OE04", name:"鶴間駅", type:"各駅停車", change:"-"},
    { id:55, code:"OE05", name:"大和駅", type:"特急ロマンスカー，快速急行，急行，各駅停車", change:"相鉄線"},
    { id:56, code:"OE06", name:"桜ヶ丘駅", type:"各駅停車", change:"-"},
    { id:57, code:"OE07", name:"高座渋谷駅", type:"各駅停車", change:"-"},
    { id:58, code:"OE08", name:"長後駅", type:"各駅停車", change:"-"},
    { id:59, code:"OE09", name:"湘南台駅", type:"快速急行，急行，各駅停車", change:"相鉄いづみ野銭，横浜市営地下鉄戦"},
    { id:60, code:"OE10", name:"六会日大前駅", type:"各駅停車", change:"-"},
    { id:61, code:"OE11", name:"善行駅", type:"各駅停車", change:"-"},
    { id:62, code:"OE12", name:"藤沢本町駅", type:"各駅停車", change:"-"},
    { id:63, code:"OE13", name:"藤沢駅", type:"特急ロマンスカー，快速急行，急行，各駅停車", change:"JR東海道線，江の電線"},
    { id:64, code:"OE14", name:"本鵠沼駅", type:"各駅停車", change:"-"},
    { id:65, code:"OE15", name:"鵠沼海岸駅", type:"各駅停車", change:"-"},
    { id:66, code:"OE16", name:"片瀬江ノ島駅", type:"特急ロマンスカー，急行，各駅停車", change:"-"},
    { id:67, code:"OT01", name:"五月台駅", type:"急行，各駅停車", change:"-"},
    { id:68, code:"OT02", name:"栗平駅", type:"快速急行，急行，各駅停車", change:"-"},
    { id:69, code:"OT03", name:"黒川駅", type:"急行，各駅停車", change:"-"},
    { id:70, code:"OT04", name:"はるひ野駅", type:"急行，各駅停車", change:"-"},
    { id:71, code:"OT05", name:"小田急永山駅", type:"快速急行，急行，各駅停車", change:"京王相模原線"},
    { id:72, code:"OT06", name:"小田急多摩センター駅", type:"快速急行，急行，各駅停車", change:"京王相模原線，多摩モノレール"},
    { id:73, code:"OT07", name:"唐木田駅", type:"快速急行，急行，各駅停車", change:"-"},
  ];
 
  app.get("/odakyu", (req, res) => {
    res.render('odakyu', { data: station2 });
  });

// Delete
app.get("/odakyu2/delete/:id", (req, res) => {
  const id = Number(req.params.id)
  const index = station2.findIndex(a => a.id === id);
  station2.splice( index, 1 );
  res.redirect('/odakyu' );
});

// Create
app.get("/odakyu/create", (req, res) => {
  res.redirect('/public/odakyu_add.html');
});

// Read
app.get("/odakyu_detail", (req, res) => {
  const id = Number(req.query.id);

  // id が一致する空港を探す
  const odakyuData = station2.find(a => a.id === id);

  res.render("odakyu_detail", { data: odakyuData });
});

// Edit
app.get("/odakyu/edit/:id", (req, res) => {
  const id = Number(req.params.id);
  const odakyuData = station2.find(a => a.id === id);
  res.render('odakyu_edit', { data: odakyuData } );
});

// Update
app.post("/odakyu2/update/:id", (req, res) => {
  const id = Number(req.params.id);
  
  const odakyuData = station2.find(a => a.id === id );
  odakyuData.id = Number(req.body.id);
  odakyuData.code = req.body.code;
  odakyuData.name = req.body.name;
  odakyuData.type = req.body.type;
  odakyuData.change = req.body.change;
  console.log( station2 );
  res.redirect('/odakyu' );
});

app.post("/odakyu_add", (req, res) => {
  const id = Number(req.body.id);
  const code = req.body.code;
  const name = req.body.name;
  const type = req.body.type;
  const change = req.body.change;
 station2.push({
      id: id, 
      code: code,
      name: name,
      type: type,
      change: change
     });
     console.log( station2 )
    res.redirect("/odakyu")

});
  
  app.listen(8080, () => console.log("Example app listening on port 8080!"));
  

    