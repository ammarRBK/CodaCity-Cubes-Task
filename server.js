var express= require("express");
var app= express();

var morgan= require("morgan");
app.use(morgan('dev'));
var bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + '/./main'));


app.get('/',function(request,response) {
    response.redirect("index.html")
})

app.get('/home',function (req,res){
    res.redirect("index.html")
})

app.get('/addOne',function(req,res){
    res.redirect("addNewCube.html");
})

var port= process.env.Port || 4000;

app.listen(port, ()=>{
    console.log("server is listining on port", port)
})