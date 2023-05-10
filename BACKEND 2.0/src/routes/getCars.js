import { db } from "../database";
import  Boom  from "@hapi/boom";

export const getCarsRoute = {
    method: "GET",
    path: "/api/cars/{id}",
    handler : async (req,h) => {
        const id = req.params.id;
        const {results} = await db.query(
            "SELECT * FROM cars WHERE id=?",
            [id],
        );
        const car = results[0];
        if (!car){
            throw Boom.notFound(`Car does not exist with id ${id}`);
        } 
        return car;
    }
}