import { register, login } from "../controller/users.controller.js"

export function userRoutes(app) {
    app.post("/api/register", register);
   // app.post("/api/login", login);
}