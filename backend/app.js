const express = require('express');
const Quote = require('inspirational-quotes');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // สามารถแก้ไข '*' เป็นโดเมนที่ยอมรับได้
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "Hotel"
})


app.get('/', (req, res) => {
   

    res.send(Quote.getQuote());
});

app.get('/test',(req,res)=>{
    db.query("SELECT * FROM `User_info` WHERE 1",
    (err,result) =>{
        if(err){
            //console.log(err);
            res.send(result)
        }else{
            res.send(result);
            
        }
    }
    )
})

app.post('/register', (req, res) => {
    const First_name = req.body.First_name;
    const Last_name = req.body.Last_name;
    const Phone = req.body.Phone;
    const Email=req.body.Email
    const password = req.body.password;

    console.log(Phone)
    db.query("SELECT `UID` FROM `User_info` WHERE Phone=(?)",[Phone],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
        
            // console.log(result[0].UID)
            // res.send(result)
            try{
            if(result[0].UID){
              res.send("Already Have Phone"+result[0].UID)
            }
            }   
            catch(err) {
                      db.query(
                    "INSERT INTO `User_info`(`Firstname`, `Lastname`, `Phone`,`Password`,`Email`) VALUES(?,?,?,?,?)",
                    [First_name,Last_name,Phone,password,Email],
                    (err,result) =>{
                        if(err){
                            console.log(err);
                            res.send("Error")
                        }else{
                            res.send("Values inserted");
                            //console.log("value add");
                        }
                    }
                );
            }
              }
          
        })
    

   
});

app.post('/login',(req,res)=>{
    const Phone=req.body.Phone;
    const Password=req.body.Password
    db.query("SELECT * FROM `User_info` WHERE Phone=(?) AND Password=(?)",[Phone,Password],
    (err,result)=>{
        if(err){
            console.log("Login system is Errer")
        }
        else {
            console.log(result[0].Phone)
            res.send("Login complete"+result)
        }
    })
})

app.get('/respaon_register',(req,res) => {
    res.send(lll);
});

app.listen(2000, () => {
    console.log("Start Backend!!!");
});
