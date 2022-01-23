const app = require("./index");
const connect = require("./config/db")
const port = process.env.PORT || 2345;

app.listen( port , async () => {
    try {
        await connect();
        console.log("running on port 2345");
        
        
    } catch (e) {
        console.log(e.message);
        
    }
} )