const express=require('express');
const app= express();
const cors = require('cors');
const fs = require('fs');
const users = `${__dirname/users.json}`;

var corsOptions = {
    origion:'*',
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());

app.get('/',function(req,res){
    fs.readFile(users,'utf-8',function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }

    })
    res.send('Message Send')
})

app.post('/users',(req,res)=>{
    fs.readFile(users,'utf-8',(err,data)=>{
        let currentTemp = JSON.parse(data);
        if(err){
            console.log(err)
        }

        currentTemp.push(req.body);

        fs.writeFile(users,JSON.stringify(currentTemp),(err)=>{
            if(err){
                console.log(err);
            }
            res.send('Its Done')
        })
    })
})
app.listen(3001);