const express = require("express");
const PORT = 5000;
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
const productsRoutes = require("./routes/products");
const categoriesRoutes = require("./routes/categories");
app.use(express.json());
app.use(productsRoutes);
app.use(categoriesRoutes);

app.use(cors({
  origin:"*",
  methods:["GET","POST"]
}));

app.get("/", (req, res) => {
  res.status(200).send("hos geldin kanks");
});

const username = "berktugsosyal"
const password = "1234"
const database = "shopdb"

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.uimsvjf.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    console.log("connection successfull")
})
.catch((err)=>{
    console.log(err)
})

app.listen(PORT, () => {
  console.log(`server listening ${PORT}`);
});
