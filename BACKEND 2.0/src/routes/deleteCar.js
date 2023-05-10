import { db } from "../database";


export const deleteCarRoute = {
    method : "DELETE",
    path : "/api/cars/{id}",
    handler : async (req ,h)=> {
        const {id} = req.params;
        await db.query(
            "DELETE FROM cars WHERE id=?",
            [id],
        );
        return {message : "Success!"};
    }
}