const express = require('express');
const app = express();
app.get('/',(req,res)=> {
    res.send("Serverul functioneaza!");
});

app.listen(5500,'192.168.1.188', () => {
    console.log(`Serverul ruleaza pe portul 5500 `);
});
