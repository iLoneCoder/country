import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { BASE_URL } from "../utlis/constants"
import type { CountryDetailsType } from "../utlis/customTypes"
import Loading from "../components/Loading"
import CountryDetailComponent from "../components/CountryDetail"
import CountryBorders from "../components/CountryBorders"
import PopulationChart from "../components/PopulationChart"
import Button from "../components/utils/Button"

function CountryDetail() {
  const { country, fullName } = useParams()
  const [countryDetails, setCountryDetails] = useState<CountryDetailsType>()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchCountryDetails() {
      const response = await fetch(
        `${BASE_URL}/countries/${country}/${fullName}`
      )
      const data = await response.json()
      setCountryDetails(data)
      setLoading(false)
    }

    fetchCountryDetails()
  }, [country])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Button type="secondary" onClick={() => navigate("/")}>
        Back
      </Button>

      {countryDetails && (
        <CountryDetailComponent countryDetails={countryDetails} />
      )}
      {countryDetails && <CountryBorders countryDetails={countryDetails} />}
      {countryDetails && countryDetails.data.population && (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center" }}>Population Growth</h2>
          <PopulationChart data={countryDetails.data.population} />
        </div>
      )}
    </>
  )
}

export default CountryDetail
