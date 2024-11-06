const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse incoming JSON requests

// MongoDB connection (replace <password> with the actual password)
const uri = "mongodb+srv://murarigist:<password>@cluster0.ek0ekyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const encodedPassword = encodeURIComponent("Murari@123");
const newUri = uri.replace("<password>", encodedPassword);

// MongoDB client setup
const client = new MongoClient(newUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    db = client.db('Busticket'); // Use 'Busticket' database
    console.log("Connected to MongoDB and using Busticket database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Connect to MongoDB once when the server starts
app.listen(8003, async () => {
  await connectToMongoDB();
  console.log("Server is running on port 8003");
});

// Default route for health check
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

// Login API
app.get("/login",(req,res)=>{
      
    
        
  const ConnectServer=async()=>{

    const res = await client.connect()



    if(res){
        console.log("connected")
    }
    else{
        console.log("error")
    }
}

ConnectServer()

async function run() {

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    const database = client.db("Busticket");
    
    console.log(req.query)

     
      const phn = await database.collection("users").findOne({ phone:req.query.phone,password:req.query.password});
  
   
      console.log(phn)
      
      console.log(phn)

      if (phn) {
        res.send({status:"success",data:phn})
       }
      else {
        
       res.send({status:"error"})
       }   
    
        
}

run().catch(console.dir);

        
    })
    app.post("/signup",(req,res)=>{
    
  
      
      const ConnectServer=async()=>{
    
        const res = await client.connect()
        if(res){
            console.log("connected")
        }
        else{
            console.log("error")
        }
    }
    
    ConnectServer()
    
    async function run() {
    
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        //console.log(req.query)
        const database=client.db("Busticket");
      const collections=database.collection("users");
      console.log(req.query.gmail)
      const phn1 = await database.collection("users").findOne({ phone:req.query.phone,password:req.query.password});
      if(phn1){
        res.send({status:"error",data:phn1
          ,alerting:"already Used this Number"})
        }
        else{
      const phn=await collections.insertOne(req.query);
            console.log(phn)
          if (phn) {
  res.send({status:"success",data:phn,alerting:null})
            
          } else {
            res.send({status:"error"})
            
              // Do something if the phone number does not exist
          }
        }
  
    }

    run()
    
            
        })


        app.get("/buses", (req, res) => {
          const ConnectServer = async () => {
            const res = await client.connect();
        
            if (res) {
              console.log("connected");
            } else {
              console.log("error");
            }
          };
        
          ConnectServer();
        
          async function run() {
            // Connect the client to the server (optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        
            const database = client.db("Busticket");
        
            let buses = []; 
        
            const { start, end, date } = req.query; 
        
            
            if (!start || !end) {
              res.send({ status: "error", message: "Source and Destination required" });
            }
        
            
            let query = {
              source: start,
              destination: end,
            };
        
            
            if (date && date !== "null" && date !== "") {
              query.date = date; 
            }
        
          
            buses = await database.collection("buses").find(query).toArray();
        
            if (buses.length > 0) {
              console.log(buses);
              res.send({ status: "success", data: buses });
            } else {
              res.send({ status: "error", message: "No buses found for the given criteria." });
            }
          }
        
          run().catch(console.dir);
        });
        






app.post('/busseats', async (req, res) => {
  const { busId, seats } = req.body;


  if (!busId) {
    return res.status(400).json({ error: 'Bus ID is required' });
  }
  if (!seats || seats.length === 0) {
    return res.status(400).json({ error: 'No seats selected' });
  }

  try {
   
    const alreadyBooked = await db.collection('seats').find({
      busId: busId,
      seatNumber: { $in: seats }
    }).toArray();
    const alreadyBookedSeats = alreadyBooked.map(seat => seat.seatNumber);

    if (alreadyBookedSeats.length > 0) {
      return res.status(400).json({
        error: 'Some seats are already booked',
        alreadyBookedSeats
      });
    }

 
    const bookedSeats = seats.map(seat => ({ busId: busId, seatNumber: seat }));
    await db.collection('seats').insertMany(bookedSeats);

    res.json({ message: 'Seats booked successfully', bookedSeats: seats });
  } catch (error) {
    console.error("Seat booking error:", error);
    res.status(500).json({ error: 'An error occurred while booking seats' });
  }
});


app.get('/bookedseats', async (req, res) => {
  const { busId } = req.query;


  if (!busId) {
    return res.status(400).json({ error: 'Bus ID is required' });
  }

  try {
    const bookedSeats = await db.collection('seats').find({ busId: busId }).project({ seatNumber: 1, _id: 0 }).toArray();
    res.json({ bookedSeats: bookedSeats.map(seat => seat.seatNumber) });
  } catch (error) {
    console.error("Error retrieving booked seats:", error);
    res.status(500).json({ error: 'An error occurred while retrieving booked seats' });
  }
});





