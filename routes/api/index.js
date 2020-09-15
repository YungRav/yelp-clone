const router = require("express").Router();
const storeRoutes = require("./stores");

// Book routes
router.use("/stores", storeRoutes);

module.exports = router;
