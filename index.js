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
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
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

app.listen(process.env.PORT || 3000);
function running(){
console.log(' Joke Server running on 8080...')
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

module.exports= app
