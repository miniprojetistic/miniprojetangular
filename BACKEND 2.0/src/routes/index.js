import { getAllCarsRoute } from "./getAllcars";
import { getCarsRoute } from "./getCars";
import { createNewCarRoute } from "./createNewCar";
import { updateCarRoute } from "./updateCar";
import { deleteCarRoute } from "./deleteCar";

export default [
    deleteCarRoute,
    updateCarRoute,
    createNewCarRoute,
    getAllCarsRoute,
    getCarsRoute,
];