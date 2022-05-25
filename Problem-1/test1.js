const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/numbers', (req, res) => {

  
  const num1  = req.query.num1;
  const num2=req.query.num2;
  Arr=Arrays.sort(num1, num2);
  const numbers =  [{"numbers":[Arr]}];
 
  res.json(numbers);
});

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

app.listen(3001, () => console.log('server started'));
delay(500).then(() => console.log('ran after 500 seconds'));

