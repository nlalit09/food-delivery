import { create, deleteOne, fetch, fetchOne, updateOne } from "../controller/restaurant.controller.js";
// import verifyToken from "../middlewares/verifyToken.js";

export function routes(app) {
    app.post("/api/restaurant", create);
    app.get("/api/restaurant",  fetch);
    app.get("/api/restaurant/:id",fetchOne);
    app.put("/api/restaurant/:id",updateOne);
    app.delete("/api/restaurant/:id", deleteOne) 
    
}



/**
 * 1. Create Database in MongoDB Atlas(cloud based database)
 * 2. Install mongoose 
 * 3. Connect server with mongodb 
 * 4. MVC
 * 5. Routes ---- path ("/api/restaurants" , controller)
 * 6. Controller ---- handle logic (post , fetch, update)
 * 7. Model ---- (Database Table with schema)
 * 8. Use Mongoose Methods to work on this table (save() , find())
 */