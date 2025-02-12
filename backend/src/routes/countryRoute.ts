import express from "express"
import {
  getAvailableCountries,
  getCountryDetails,
} from "../controllers/countryController"

const router = express.Router()

router.get("/", getAvailableCountries)
router.get("/:country/:fullName", getCountryDetails)
export default router
