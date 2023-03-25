const express = require("express");
const upload = require("../middleware/upload");
const carController = require("../controller/carController");
const router = express.Router();

router.post("/add", upload.single("image"), carController.userAddCar);
router.patch("/update/:carId", upload.single("image"), carController.updateUserCar);
router.delete("/delete/:carId", carController.deleteUserCar);

module.exports = router;
