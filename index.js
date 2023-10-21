const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6aqk9ji.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const foodCollection = client.db("foodsDB").collection("foods");
    const madhangsikCollection = client.db("foodsDB").collection("madhangsik");
    const dhangsikCollection = client.db("foodsDB").collection("dhangsik");
    const redoneCollection = client.db("foodsDB").collection("redone");
    const pepsicoCollection = client.db("foodsDB").collection("pepsico");
    const mustafaCollection = client.db("foodsDB").collection("mustafa");
    const cocacolaCollection = client.db("foodsDB").collection("cocacola");

    const clientCollection = client.db("foodsDB").collection("client");


    app.get("/client", async (req, res) => {
      const result = await clientCollection.find().toArray();
      res.send(result);
    });
    

    app.get("/client/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await clientCollection.findOne(query);
      res.send(result);
    });

    app.post("/client", async (req, res) => {
        const food = req.body;
        const result = await clientCollection.insertOne(food);
        console.log(result);
        res.send(result);
      });

    app.delete("/client/:id", async (req, res) => {
        const id = req.params.id;
        console.log(id);
        const query = { _id: new ObjectId(id) };
        console.log(query);
        const result = await clientCollection.deleteOne(query);
        res.send(result);
      });
  

    app.put("/foods/:id", async (req, res) => {
      const id = req.params.id;
      const updatedFood = req.body;
     
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const food = {
        $set: {
          name: updatedFood.name,
          quantity: updatedFood.quantity,
          supplier: updatedFood.supplier,
          taste: updatedFood.taste,
          category: updatedFood.category,
          details: updatedFood.details,
          photo: updatedFood.photo,
        },
      };
      const result = await foodCollection.updateOne(
        filter,
        food,
        options
      );
      res.send(result);
    });

    app.post("/foods", async (req, res) => {
      const food = req.body;
      const result = await foodCollection.insertOne(food);
      console.log(result);
      res.send(result);
    });

    app.delete("/foods/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) };
      console.log(query);
      const result = await foodCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/madhangsik", async (req, res) => {
        const result = await madhangsikCollection.find().toArray();
        res.send(result);
      });

      app.get("/madhangsik/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await madhangsikCollection.findOne(query);
        res.send(result);
      });

      app.post("/madhangsik", async (req, res) => {
        const food = req.body;
        const result = await madhangsikCollection.insertOne(food);
        console.log(result);
        res.send(result);
      });

      
      app.put("/madhangsik/:id", async (req, res) => {
        const id = req.params.id;
        const updatedFood = req.body;
       
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const food = {
          $set: {
            name: updatedFood.name,
            quantity: updatedFood.quantity,
            supplier: updatedFood.supplier,
            taste: updatedFood.taste,
            category: updatedFood.category,
            details: updatedFood.details,
            photo: updatedFood.photo,
          },
        };
        const result = await madhangsikCollection.updateOne(
          filter,
          food,
          options
        );
        res.send(result);
      });

    app.get("/dhangsik", async (req, res) => {
        const result = await dhangsikCollection.find().toArray();
        res.send(result);
      });

      app.get("/dhangsik/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await dhangsikCollection.findOne(query);
        res.send(result);
      });

      app.post("/dhangsik", async (req, res) => {
        const food = req.body;
        const result = await dhangsikCollection.insertOne(food);
        console.log(result);
        res.send(result);
      });

      app.put("/dhangsik/:id", async (req, res) => {
        const id = req.params.id;
        const updatedFood = req.body;
       
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const food = {
          $set: {
            name: updatedFood.name,
            quantity: updatedFood.quantity,
            supplier: updatedFood.supplier,
            taste: updatedFood.taste,
            category: updatedFood.category,
            details: updatedFood.details,
            photo: updatedFood.photo,
          },
        };
        const result = await dhangsikCollection.updateOne(
          filter,
          food,
          options
        );
        res.send(result);
      });

    app.get("/redone", async (req, res) => {
        const result = await redoneCollection.find().toArray();
        res.send(result);
      });

      app.get("/redone/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await redoneCollection.findOne(query);
        res.send(result);
      });

      app.post("/redone", async (req, res) => {
        const food = req.body;
        const result = await redoneCollection.insertOne(food);
        console.log(result);
        res.send(result);
      });

      app.put("/redone/:id", async (req, res) => {
        const id = req.params.id;
        const updatedFood = req.body;
       
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const food = {
          $set: {
            name: updatedFood.name,
            quantity: updatedFood.quantity,
            supplier: updatedFood.supplier,
            taste: updatedFood.taste,
            category: updatedFood.category,
            details: updatedFood.details,
            photo: updatedFood.photo,
          },
        };
        const result = await redoneCollection.updateOne(
          filter,
          food,
          options
        );
        res.send(result);
      });

    app.get("/pepsico", async (req, res) => {
        const result = await pepsicoCollection.find().toArray();
        res.send(result);
      });

      app.get("/pepsico/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await pepsicoCollection.findOne(query);
        res.send(result);
      });

      app.post("/pepsico", async (req, res) => {
        const food = req.body;
        const result = await pepsicoCollection.insertOne(food);
        console.log(result);
        res.send(result);
      });

           
      app.put("/pepsico/:id", async (req, res) => {
        const id = req.params.id;
        const updatedFood = req.body;
       
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const food = {
          $set: {
            name: updatedFood.name,
            quantity: updatedFood.quantity,
            supplier: updatedFood.supplier,
            taste: updatedFood.taste,
            category: updatedFood.category,
            details: updatedFood.details,
            photo: updatedFood.photo,
          },
        };
        const result = await pepsicoCollection.updateOne(
          filter,
          food,
          options
        );
        res.send(result);
      });

    app.get("/mustafa", async (req, res) => {
        const result = await mustafaCollection.find().toArray();
        res.send(result);
      });

      app.get("/mustafa/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await mustafaCollection.findOne(query);
        res.send(result);
      });

      app.post("/mustafa", async (req, res) => {
        const food = req.body;
        const result = await mustafaCollection.insertOne(food);
        console.log(result);
        res.send(result);
      });
      
      app.put("/mustafa/:id", async (req, res) => {
        const id = req.params.id;
        const updatedFood = req.body;
       
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const food = {
          $set: {
            name: updatedFood.name,
            quantity: updatedFood.quantity,
            supplier: updatedFood.supplier,
            taste: updatedFood.taste,
            category: updatedFood.category,
            details: updatedFood.details,
            photo: updatedFood.photo,
          },
        };
        const result = await mustafaCollection.updateOne(
          filter,
          food,
          options
        );
        res.send(result);
      });

    app.get("/cocacola", async (req, res) => {
        const result = await cocacolaCollection.find().toArray();
        res.send(result);
      });

      app.get("/cocacola/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await cocacolaCollection.findOne(query);
        res.send(result);
      });

      app.post("/cocacola", async (req, res) => {
        const food = req.body;
        const result = await cocacolaCollection.insertOne(food);
        console.log(result);
        res.send(result);
      });

      app.put("/cocacola/:id", async (req, res) => {
        const id = req.params.id;
        const updatedFood = req.body;
       
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const food = {
          $set: {
            name: updatedFood.name,
            quantity: updatedFood.quantity,
            supplier: updatedFood.supplier,
            taste: updatedFood.taste,
            category: updatedFood.category,
            details: updatedFood.details,
            photo: updatedFood.photo,
          },
        };
        const result = await cocacolaCollection.updateOne(
          filter,
          food,
          options
        );
        res.send(result);
      });





    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Crud is running...");
});



app.listen(port, () => {
  console.log(`Simple Crud is Running on port ${port}`);
});
