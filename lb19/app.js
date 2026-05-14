const express = require("express")
const app = express();

app.use(express.static('public'));

app.get("/square", (req, res) => {
    const value = req.query.value
    var response = 0

    if (isNaN(value)) {
        res.sendStatus(400)
        return
    }
    
    response = Math.pow(value, 2)
    res.send(response)
})

app.listen(3000, () => {
   console.log(`server is running at 3000`);
});