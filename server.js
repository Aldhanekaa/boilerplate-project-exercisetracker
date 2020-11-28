const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors')
 
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MLAB_URI || 'mongodb://localhost/exercise-track', {useNewUrlParser: true,useUnifiedTopology: true} ); 

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

const exerciseSessionSchema = new mongoose.Schema
({
  description : {type:String, required: true},
  duration : {type:Number, required: true},
  date : String
});

const userSchema = new mongoose.Schema({
  username: {type:String, required: true},
  log : [exerciseSessionSchema]
})

let Exercise = mongoose.model("Exercise", exerciseSessionSchema);
let User = mongoose.model("User", userSchema);

app.post("/api/exercise/new-user", async (req, res) => {
  const users = await User.find({"username": req.body.username});
  console.log(users.length)
  if (users.length !== 0) {
    res.send("username already taken")
  }else {
  const newUser = new User({username:req.body.username})
    try {
      const NewUser = await newUser.save();
      let responseObject = {};
      responseObject["username"] = NewUser["username"];
      responseObject["_id"] = NewUser.id
      res.json(responseObject)

    }catch (err) {
      console.log(err)
      res.json({error: "Sorry, error has  occured"});
    }
  }
});

app.get("/api/exercise/users", async (req,res) => 
{
  try {
    const users = await User.find();
    res.json(users)
  }catch {
    res.send("something went wrong..")
  }
});

app.post("/api/exercise/add", (req, res) => {
  const {description,duration,date,userId} = req.body;
  const requiredInput = Object.values(req.body)
  try {
    let newExercise = new Exercise({
      description : description,
      duration : parseInt(duration),
      date: date
    })
    if (isNaN(duration) == true || new Date(date) == "Invalid Date" == true) {
      throw "Invalid Duration or Date"
    }

    if (newExercise.date == '' || newExercise == undefined || newExercise.date.trim() == '') {
        newExercise.date = new Date().toISOString().substring(0,new Date().toISOString().indexOf("T"));
    }else {
      newExercise.date = new Date(date).toISOString().substring(0,new Date().toISOString().indexOf("T"));    
    }
 
    User.findByIdAndUpdate(
      userId, 
      {$push: {log:newExercise}}, 
      {new: true}, 
      (error, updatedUser) => {
        if (error) {
          res.send("Make sure you fill out all of the input, and a valid userId")
        }
        else
        {
          responseObject(res,updatedUser,newExercise)
        }

      }
    )
  }catch(err) {
    res.send(err)
  }
}) 

app.get("/api/exercise/log", async (request, response) => {
  User.findById(request.query.userId, (error, result) => {
    console.log(result)
    if (error || result == null) {
      response.send("user not found")
    }
    else { 
      let responseObject = result
      
      if(request.query.from || request.query.to){
        
        let fromDate = new Date(0)
        let toDate = new Date()
        
        if(request.query.from){
          fromDate = new Date(request.query.from)
        }
        
        if(request.query.to){
          toDate = new Date(request.query.to)
        }
        
        fromDate = fromDate.getTime()
        toDate = toDate.getTime()
        
        responseObject.log = responseObject.log.filter((session) => {
          let sessionDate = new Date(session.date).getTime()
          
          return sessionDate >= fromDate && sessionDate <= toDate
          
        })
        
      }
      
      if(request.query.limit){
        responseObject.log = responseObject.log.slice(0, request.query.limit)
      }
      
      responseObject = responseObject.toJSON()
      responseObject['count'] = result.log.length
      response.json(responseObject)
    }
  })
})

function responseObject(res, object, {date,duration, description}) {
  let responseObject = {};
  responseObject["_id"] = object.id;
  responseObject["username"] = object.username;
  if (new Date(date).toDateString() == "Invalid Date") {
    console.log("oy")
    res.send("invalid Date");
    return;
  }else {
    responseObject["date"] = new Date(date).toDateString(); // toUTCString
  }
  responseObject["description"] = description;
  responseObject["duration"] = duration;
  res.json(responseObject)
}