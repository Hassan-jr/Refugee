const express = require ('express');
const cors = require("cors");
const mysql = require("mysql");
const bcrpt = require ("bcryptjs");


const app = express();
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// connect it to the database
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "123456",
    database: "refugeereistration",
  });

  // get refugees
  app.get("/refugees",(req, res) => {
    db.query("SELECT * FROM refugeetable", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }) });


    // get camps
  
    app.get("/camps",(req, res) => {
      db.query("SELECT * FROM camps", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }) });

      //get employees
      
    app.get("/employees",(req, res) => {
      db.query("SELECT * FROM employee", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }) });


      // get ngos

  app.get("/ngo",(req, res) => {
      db.query("SELECT * FROM ngo", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          
        }
      }) });


      //get goverment

      app.get("/government",(req, res) => {
        db.query("SELECT * FROM government", (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
           
            
          }
        }) });

        // post signup

        app.post ("/signup",(async(req,res)=>{
          const name = req.body.full_name
          const email = req.body.email;
          const password = req.body.password;

          // hash password
          const salt = await bcrpt.genSalt(10);
          const hashedpassword = await bcrpt.hash(password, salt);
          // register user
      
          db.query("INSERT INTO signup (name, email, password) VALUES (?,?,?)",
          [name, email,hashedpassword],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send ({islog: true, message : name})
          
            }
          }
          );
         
        }))


        // login
       app.post ("/login",(req,res)=>{

         const email = req.body.email;
        const password = req.body.password;
      
         db.query ("SELECT * FROM signup WHERE email= ?",email ,
         (err, result)=>{
           if (err){
             console.log(err);
           }
           
           

           if (result) {
             result.map( ( async  one=>{
              
              var istrue=  await bcrpt.compare (password, one.password);
              if (istrue && one.email === email )
              {
              // console.log(result);
                res.send ({islog: true, message : one.name})
              }
              else{
                res.send(false)
              }
             }))
           }
           else{
            // console.log("No user found");
            res.send(false)
           }
          }
         )

       })
       
       
       //     forms post request
       ///

       // camps post request

           app.post ("/camps",(req,res)=>{
          const name = req.body.name;
          const location = req.body.location;
          const max_refugees = req.body.max_refugees;
          const max_employee = req.body.max_employee;
        
         // register camp
      
          db.query("INSERT INTO camps (name, location, max_refugees, max_employee) VALUES (?,?,?,?)",
          [name, location, max_refugees,max_employee],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send("Values Inserted");
          
            }
          }
          );
         
        })

        // refugee post
        app.post ("/refugees",(req,res)=>{
          const f_name = req.body.f_name;
          const l_name = req.body.l_name;
          const gender = req.body.gender;
          const age= req.body.age;
          const camp = req.body.camp;
        
         // register refugee
      
          db.query("INSERT INTO refugeetable (f_name, l_name, age, camps_id, gender) VALUES (?,?,?,?,?)",
          [f_name,l_name,age,camp,gender],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send("Values Inserted");
          
            }
          }
          );
         
        })


        // ngo post
        app.post ("/ngo",(req,res)=>{
          const name = req.body.name;
          const service = req.body.service;
         const campid = req.body.camp;
        
         // register ngo
      
          db.query("INSERT INTO ngo (name, service, campid) VALUES (?,?,?)",
          [name,service,campid],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send("Values Inserted");
          
            }
          }
          );
         
        })


        // post employees

        app.post ("/employee",(req,res)=>{
          const f_name = req.body.f_name;
          const l_name = req.body.l_name;
          const gender = req.body.gender;
          const job_title= req.body.job_title;
          const camp = req.body.camp;
          const ngo = req.body.ngo;
        
         // register employee
      
          db.query("INSERT INTO employee (f_name, l_name, job_title, camp_id,ngo_id, gender) VALUES (?,?,?,?,?,?)",
          [f_name,l_name,job_title,camp,ngo,gender],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send("Values Inserted");
          
            }
          }
          );
         
        })



        // post g_bill


        app.post ("/bill",(req,res)=>{
         const revenue = req.body.revenue;
         const expenditure = req.body.expenditure;
         const service = req.body.service;
         const g_body =req.body.g_body;
         const gcamp_id = req.body.camp;
         // register goverment bill
      
          db.query("INSERT INTO government (revenue, expenditure,service, g_body, gcamp_id) VALUES (?,?,?,?,?)",
          [revenue,expenditure,service,g_body,gcamp_id],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send("Values Inserted");
          
            }
          }
          );
         
        })

         //
        // constraints
        //

        // regugees details querry

        app.get ("/refq",(req,res)=>{
       
           db.query("SELECT *  FROM refugeetable  LEFT JOIN camps ON camps.id = refugeetable.camps_id  ",
           
           (err, result) => {
             if (err) {
               console.log(err);
             } else {
               res.send(result);
           
             }
           }
           );
          
         })

         

  
       

        // EMPLOYEE detail querry
        app.get ("/emplooyeeq",(req,res)=>{
       
          db.query("SELECT *  FROM employee  LEFT JOIN camps ON camps.id = employee.camp_id ",
          
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
          
            }
          }
          );
         
        })


        // ngo querry detail
        app.get ("/ngoq",(req,res)=>{
       
          db.query("SELECT *  FROM ngo  LEFT JOIN camps ON camps.id = ngo.campid",
          
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
          
            }
          }
          );
         
        })

     // goverment querry detail

     app.get ("/governq",(req,res)=>{
       
      db.query("SELECT *  FROM government  LEFT JOIN camps ON camps.id = government.gcamp_id;",
      
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
      
        }
      }
      );
     
    })





app.listen  (3001, ()=>{
    console.log("server is running on 3001");
});



