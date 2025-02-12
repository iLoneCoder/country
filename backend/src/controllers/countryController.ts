import { Request, Response, NextFunction } from "express"
import axios from "axios"
import {
  getBorders,
  getCountryPopulation,
  getFlag,
} from "../commands/countryCommands"

export async function getAvailableCountries(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await axios.get(
      "https://date.nager.at/api/v3/AvailableCountries"
    )
    res.json({
      status: "success",
      data: response.data,
    })
  } catch (error) {
    next(error)
  }
}

export async function getCountryDetails(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { country } = req.params
    const border = await getBorders(country)

    const population = await getCountryPopulation(border.officialName)

    const flag = await getFlag(border.officialName)
    res.json({
      status: "success",
      data: {
        country: border.officialName,
        countryCode: border.countryCode,
        region: border.region,
        flag,
        borders: border.borders,
        population,
      },
    })
  } catch (error) {
    next(error)
  }
}
