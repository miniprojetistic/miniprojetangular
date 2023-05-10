//import { fakeCars } from "./fake-data";
import { db } from "../database";



export const getAllCarsRoute = {
    method : "GET",
    path : "/api/cars",
    handler : async (req, h) => {
        const {results} = await db.query(
            "SELECT * FROM cars"
            );
        return results;
    }
}