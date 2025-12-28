const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

let airplane2 = [
    {id:0,  name:"ボーイング787-10（78K/781）",seat:"429席",length:"68.3m",width:"60.1m",height:"17.0m",speed:"910km/h",distance:"10,700km",altitude:"12,500m",weight:"242.7ton",model:"GEnx-1B67",power:"31,479kg✕2基",fuel:"126kl"},
    {id:1,  name:"ボーイング787-9（789）",seat:"395席",length:"62.8m",width:"60.1m",height:"17.0m",speed:"910km/h",distance:"10,690km",altitude:"13,100m",weight:"226.8ton",model:"Trent 1000-A2",power:"28,940kg✕2基",fuel:"126kl"},
    {id:2,  name:"ボーイング787-9（78G/789）",seat:"375席",length:"62.8m",width:"60.1m",height:"17.0m",speed:"910km/h",distance:"10,900km",altitude:"13,100m",weight:"226.8ton",model:"GEnx-1B64",power:"29,030kg✕2基",fuel:"126kl"},
    {id:3,  name:"ボーイング787-8（78P/788）",seat:"335席",length:"56.7m",width:"60.1m",height:"16.9m",speed:"910km/h",distance:"4,890km",altitude:"13,100m",weight:"172.9ton",model:"Trent 1000-H",power:"26,300kg✕2基",fuel:"126kl"},
    {id:4,  name:"ボーイング777-300 （773）",seat:"514席",length:"73.9m",width:"60.9m",height:"18.5m",speed:"890km/h",distance:"3,800km",altitude:"13,100m",weight:"234.0ton",model:"PW4090",power:"40,910kg✕2基",fuel:"171kl"},
    {id:5,  name:"ボーイング777-200（772）",seat:"405席",length:"63.7m",width:"60.9m",height:"18.5m",speed:"890km/h",distance:"3,800km",altitude:"13,100m",weight:"202.9ton",model:"PW4074",power:"33,790kg✕2基",fuel:"117kl"},
    {id:6,  name:"ボーイング777-200（722）",seat:"392席",length:"63.7m",width:"60.9m",height:"18.5m",speed:"890km/h",distance:"3,300km",altitude:"13,100m",weight:"233.6ton",model:"PW4074",power:"33,790kg✕2基",fuel:"117kl"},
    {id:7,  name:"ボーイング767-300（76P/763）",seat:"270席",length:"54.9m",width:"47.6m",height:"15.9m",speed:"880km/h",distance:"3,370km",altitude:"13,100m",weight:"131.0ton",model:"CF6-80-C2B2",power:"23,500kg✕2基",fuel:"46kl"},
    {id:8,  name:"ボーイング737-800（738）",seat:"166席",length:"39.5m",width:"35.8m",height:"12.5m",speed:"830km/h",distance:"3,900km",altitude:"12,500m",weight:"71.0ton",model:"CFM56-7B24",power:"10,890kg✕2基",fuel:"26kl"},
    {id:9,  name:"エアバスA321（321）",seat:"194席",length:"44.5m",width:"35.8m",height:"11.8m",speed:"840km/h",distance:"5,130km",altitude:"12,100m",weight:"89.0ton",model:"PW 1130G-JM",power:"13,744kg(30,300lbf)✕2基",fuel:"23.6kl"},
    {id:10, name:"デ・ハビランド・カナダ Dash 8-400",seat:"74席",length:"32.8m",width:"28.4m",height:"8.3m",speed:"650km/h",distance:"2,020km",altitude:"7,500m",weight:"29.0ton",model:"PW 150A",power:"5,070SHP✕2基",fuel:"6.5kl"},
    {id:11, name:"ボーイング787-10（781）",seat:"294席",length:"68.3m",width:"60.1m",height:"17.0m",speed:"910km/h",distance:"11,600km",altitude:"12,500m",weight:"242.7ton",model:"Trent 1000",power:"33,480kg✕2基",fuel:"126kl"},
    {id:12, name:"ボーイング787-9（789）",seat:"246席",length:"62.8m",width:"60.1m",height:"17.0m",speed:"910km/h",distance:"14,200km",altitude:"13,100m",weight:"247.2ton",model:"Trent 1000",power:"31,660kg✕2基",fuel:"126kl"},
    {id:13, name:"ボーイング787-8（788）",seat:"240席",length:"56.7m",width:"60.1m",height:"16.9m",speed:"910km/h",distance:"12,020km",altitude:"13,100m",weight:"212.0ton",model:"Trent 1000",power:"28,940kg✕2基",fuel:"126kl"},
    {id:14, name:"ボーイング777-300ER（77W）",seat:"212席",length:"73.9m",width:"64.8m",height:"18.5m",speed:"890km/h",distance:"14,900km",altitude:"13,100m",weight:"348.8ton",model:"GE90-115BL",power:"52,160kg✕2基",fuel:"181kl"},
    {id:15, name:"ボーイング767-300ER（763）",seat:"202席",length:"54.9m",width:"50.9m",height:"15.9m",speed:"870km/h",distance:"10,820km",altitude:"13,100m",weight:"181.4ton",model:"CF6-80-C2B6",power:"27,900kg✕2基",fuel:"90kl"},
    {id:16, name:"エアバスA380-800（388）",seat:"520席",length:"72.7m",width:"79.8m",height:"24.1m",speed:"910km/h",distance:"13,330km",altitude:"13,100m",weight:"560.0ton",model:"Trent 970",power:"34,088kg✕4基",fuel:"320kl"},
    {id:17, name:"エアバスA320neo（320）",seat:"146席",length:"37.6m",width:"35.8m",height:"11.8m",speed:"840km/h",distance:"5,790km",altitude:"12,100m",weight:"79.0ton",model:"PW1127G-JM",power:"12,160kg(26,800lbf)✕2基",fuel:"23.7kl"},
];

app.get("/airplane", (req, res) => {
  res.render('airplane', { data: airplane2 });
});

// Delete
app.get("/airplane2/delete/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = airplane2.findIndex(a => a.id === id);
  airplane2.splice(index, 1 );
  res.redirect('/airplane' );
});

// Create
app.get("/airplane/create", (req, res) => {
  res.redirect('/public/airplane_add.html');
});

// Read
app.get("/airplane_detail", (req, res) => {
  const id = Number(req.query.id);

  // id が一致する空港を探す
  const airplaneData = airplane2.find(a => a.id === id);

  res.render("airplane_detail", { data: airplaneData });
});

// Edit
app.get("/airplane/edit/:id", (req, res) => {
  const id = Number(req.params.id);
  const airplaneData = airplane2.find(a => a.id === id);
  res.render('airplane_edit', { data: airplaneData } );
});

// Update
app.post("/airplane2/update/:id", (req, res) => {
  const id = Number(req.params.id);
  
    const airplaneData = airplane2.find(a => a.id === id );
    airplaneData.id = Number(req.body.id);
    airplaneData.name = req.body.name;
    airplaneData.seat = req.body.seat;
    airplaneData.length = req.body.length;
    airplaneData.width = req.body.width;
    airplaneData.height = req.body.height;
    airplaneData.speed = req.body.speed;
    airplaneData.distance = req.body.distance;
    airplaneData.altitude = req.body.altitude;
    airplaneData.weight = req.body.weight;
    airplaneData.model = req.body.model;
    airplaneData.power = req.body.power;
    airplaneData.fuel = req.body.fuel;
    console.log( airplane2 );
    res.redirect('/airplane' );
  });

  app.post("/airplane_add", (req, res) => {
    const id = Number(req.body.id);
    const name = req.body.name;
    const seat = req.body.seat;
    const length = req.body.length;
    const width = req.body.width;
    const height = req.body.height;
    const speed = req.body.speed;
    const distance = req.body.distance;
    const altitude = req.body.altitude;
    const weight = req.body.weight;
    const model = req.body.model;
    const power = req.body.power;
    const fuel = req.body.fuel;
    airplane2.push({
       id: id, 
       name: name,
       seat: seat,
       length: length,
       width: width,
       height: height,
       speed: speed,
       distance: distance,
       altitude: altitude,
       weight: weight,
       model: model,
       power: power,
       fuel: file
      });
      console.log( airplane2 )
    res.redirect("/airplane")

});
  
  app.listen(8080, () => console.log("Example app listening on port 8080!"));
  

    