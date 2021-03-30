const router = require("express").Router();

router.use("/note", require("./note"));

module.exports = router;