import { db } from "../database";

export const updateCarRoute = {
  method: "POST",
  path: "/api/cars/{id}",
  handler: async (req, h) => {
    const { id } = req.params;
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
      carimg = "",
    } = req.payload;
    const userId = "12345";
    await db.query(
      `UPDATE cars
        SET phoneNumber = ?,
            location = ?,
            mileage = ?,
            price = ?,
            model = ?,
            color = ?,
            type = ?,
            brand = ?,
            fuel = ?,
            state = ?,
            year = ?,
            maxspeed = ?,
            carimg = ?
        WHERE id = ?`,
      [phoneNumber, location, mileage, price, model, color, type, brand, fuel, state, year, maxspeed, carimg, id]
    );
    
    const { results } = await db.query("SELECT * FROM cars WHERE id=?", [id]);
    return results[0];
  },
};
