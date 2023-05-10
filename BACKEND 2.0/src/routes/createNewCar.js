import {v4 as uuid} from 'uuid';
import { db } from '../database';

export const createNewCarRoute = {
    method : "POST",
    path : "/api/cars",
    handler : async (req, h) =>{
        const id = uuid();
        const {    
            phoneNumber = 0,
            location = "",
            mileage = 0,
            price = 0,
            model = "",
            color = "",
            type = "",
            brand = "",
            fuel = "",
            state = "",
            year = 0,
            maxspeed = 0,
            carimg = ""} = req.payload;
        const userId = "12345";
        await db.query(
            `INSERT INTO cars (id, phoneNumber, location, mileage, price, model, color, type, brand, fuel, state, year, maxspeed, carimg)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
            `,
            [id, phoneNumber, location, mileage, price, model, color, type, brand, fuel, state, year, maxspeed, carimg],
        );

        return { id, phoneNumber, location, mileage, price, model, color, type, brand, fuel, state, year, maxspeed, carimg};
    }
}
