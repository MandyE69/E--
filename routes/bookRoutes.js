const {fetchBooks, addBooks, editBooks, deleteBooks} = require("../controllers/bookControllers")

const router = require("express").Router();

router.route("/books").get(fetchBooks).post(addBooks);
router.route("/books/:id").patch(editBooks).delete(deleteBooks);

module.exports = router;