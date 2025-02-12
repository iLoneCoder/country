import axios = require("axios")
import {
  BorderType,
  CountryPopulationDataType,
  CountryPopulationType,
  FlagData,
} from "../utils/customTypes"

export async function getBorders(country: string): Promise<BorderType> {
  try {
    const response = await axios.get(
      `${process.env.COUNTRY_URL_BASE}/api/v3/CountryInfo/${country}`
    )
    const borderData = response.data as BorderType

    return borderData
  } catch (error) {
    throw error
  }
}

export async function getCountryPopulation(
  country: string
): Promise<CountryPopulationType[]> {
  try {
    const response = await axios.get(
      `${process.env.DETAILS_URL_BASE}/api/v0.1/countries/population`
    )
    const responseData = response.data as CountryPopulationDataType
    const countryData = responseData.data.find(
      (data) => data.country === country
    )
    const countryPopulation =
      countryData?.populationCounts as CountryPopulationType[]

    return countryPopulation
  } catch (error) {
    throw error
  }
}

export async function getFlag(country: string): Promise<string> {
  try {
    const response = await axios.get(
      `${process.env.DETAILS_URL_BASE}/api/v0.1/countries/flag/images`
    )
    const flagData = response.data as FlagData
    const flag = flagData.data.find((data) => data.name === country)

    return flag?.flag || ""
  } catch (error) {
    throw error
  }
}
