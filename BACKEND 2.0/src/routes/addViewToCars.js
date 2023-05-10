import { db } from "../database";

export const addViewToCarsRoute = {
    method : "POST",
    path : "api/cars/{id}/add-view",
    handler : async (req,h) => {
        const id = req.params.id;
        await db.query(
            "UPDATE cars SET views=views+1 WHERE id=?",
            [id],
        );
        const {results} = await db.query(
            " SELECT * FROM cars  WHERE id=?",
            [id],
        );
        const updateCars  =results[0];
        return updateCars;
    }
}