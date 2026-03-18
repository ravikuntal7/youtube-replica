import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path : "./.env"
})


connectDB()
.then(() => {
    const server = app.listen(process.env.PORT || 8000 , () => {
        console.log(`server is running on port ${process.env.PORT}`);
    })

    // Server error listener
server.on("error", (error) => {
console.log("Server Error Code:", error.code);
console.log("Server Error Message:", error.message);
});
})
.catch((err) => {
    console.log("MONGODB connetion failed" , err);
}) 


  

















// import express from "express"
// const app = express()

 
// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/$(DB_NAME )`)
//         app.on("error", (error) => {
//             console.log("ERR" , err)

//             throw err 

            
//         })

//         app.listen(process.env.PORT,() =>{
//             console.log(`process is listening on PORT ${process.env.PORT}`);
//         })
        
//     } catch (error) {
//         console.error("ERROR: " , error);
//         throw err

//     }
// }) ()