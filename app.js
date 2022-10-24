const express = require("express")
const app = express()

const https = require("https")
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
// tells app to use ejs as its view engine
app.set("view engine", "ejs")

tasks = []



app.get("/", function (req, res) {

    // to get date format (18/09/2022)
    var today = new Date()

   

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options)

    // Express will look inside folder views, then look for a file called list
    // render a file called list, pass that file a variable called kindOfDay, value is current variable (day)
    res.render("list", { kindOfDay: day, newListItems: tasks })

   

})


app.post("/", function(req, res){
    var task = req.body.newItem;
    tasks.push(task);
    res.redirect("/")
    
   
})



app.listen(3000, function () {
    console.log("server started at 3000");
})