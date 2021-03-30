const router = require("express").Router();
const controller = require("../../../controllers/noteController");

router.post("/createNote", controller.create.note);
router.delete("/deleteNote/:id", controller.delete.note);

module.exports = router;