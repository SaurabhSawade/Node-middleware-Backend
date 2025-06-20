const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// //  CORS setup for Vite dev server at :5173
app.use(cors(
  {
    origin: 'https://node-middelware-frontend-byz2.vercel.app', // Adjust this to your Vite dev server URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Allow credentials if needed
  }
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Your POST route
app.post('/api/submit', (req, res) => {
  console.log('Data received:', req.body);
  res.json({
    message: 'Data received!',
    data: req.body
  });
});

// app.get('/',(req,res) =>{
//   console.log("hii")
// })

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);

});
