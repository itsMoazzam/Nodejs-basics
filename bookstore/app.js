const express = require("express");

const app = express();
app.use(express.json());



const Books = [];
app.post("/book", (req, res) => {
  const {BookName , AuthName} = req.body;
  if(!BookName || !AuthName){
    res.send(`All Parts requierd`)
  }

  const newBook = {
    id:Books.length+1,
    BookName,
    AuthName,
    status:'Available'
    
  };
  Books.push(newBook);
  res.status(201).json({ message: 'Book added successfully', book: newBook });
});

app.get("/book", (req, res) => {
  try {
    res.status(200).json(Books);
  } catch (err) {
    res.status(500).send({ message: `Failed to fatch`, err });
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on port :${port}`);
});
