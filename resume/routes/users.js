var express = require("express");
var router = express.Router();
var fs = require("fs");
var users = `${__dirname}/users.json`;

/* GET users listing. */
router.get("/", function (req, res, next) {
  
  res.send('hello');
});

function writeData(req,res){
  try{
    fs.writeFileSync(users,JSON.stringify(req.body));
  }catch(err){
    res.status(500).send("internal server error")
  }
}

router.post("/", (req, res) => {
  console.log(req.body)
  if(fs.existsSync(users)){
    writeData(req,res);
    res.send("Data is saved..")
  }else{
    console.log("file not found")
    res.status(500).send('internal sever error')
  }
});
 module.exports=router;