/*
Required modules include Express and fs..


Build steps include `npm i express`


*/
// This is yo mama api
// by Akindele
const path = require('path');

var express= require('express');
var fs= require('node:fs');
var app= express();
app.use(express.static('public'))

app.get('/', (req, res) => {

  res.send("Hi, welcome to Joke Server");
})
var bb= fs.readFileSync('./jokes.json')
bb = bb.toString()
bb=JSON.parse(bb)
//console.log(bb);
const arr= ["bald","like","nasty","old","short","stupid","ugly","fat","hairy","odor","poor","skinny","tall"];

//app.listen(8080,running);

function Randomize(j){
let le= j.length;
return j[(Math.floor(Math.random() * le))]
}

function running(){
console.log(' Joke Server running..')
}
app.get('/tags',(req,res)=>{
res.json({
title: "Joke Fetcher",
tags: arr

})
});

app.get('/tag/:name',(req,res)=>{
let name= req.params.name;
if(arr.includes(name)){
res.send(Randomize(bb[`${name}`]));
}
else{
res.send('Not ready for that bro...No joke here');
}
})


app.get('/random',(req,res)=>{
let tag= Randomize(arr);
let joke=Randomize(bb[`${tag}`])
res.send(joke);

})


app.get('*',(req,res)=>{

res.send("Oops!! Wrong url specified!! Try /tags or /tag/bald");

});


//app.listen(process.env.PORT || 3000,running);



module.exports= app
