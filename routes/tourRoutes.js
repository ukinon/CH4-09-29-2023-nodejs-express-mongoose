const express = require("express")

const router = express.Router()

const toursController = require(`../controllers/toursController`)

router.param("id", toursController.checkData)

router
  .route("/")
  .get(toursController.getAllTours)
  .post(toursController.createTour)

router
  .route("/:id")
  .get(toursController.getTourById)
  .patch(toursController.editTour)
  .delete(toursController.removeTour)

module.exports = router
