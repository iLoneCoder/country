import { useEffect, useState } from "react"
import type { CountryListType } from "../utlis/customTypes"
import { BASE_URL } from "../utlis/constants"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import styles from "../styles/countryList.module.css"

function CountryList() {
  const [countries, setCountries] = useState<CountryListType>()

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(`${BASE_URL}/countries`)
      const data = await response.json()
      console.log(data)
      setCountries(data)
    }

    fetchCountries()
  }, [])

  return (
    <>
      <Header title="Welcome, this is the country list page" />

      <ul className={styles.list}>
        {countries?.data.map((country) => (
          <li key={country.countryCode}>
            <Link to={country.countryCode} className={styles.link}>
              <span>{country.name}</span>
              <span>{country.countryCode}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CountryList
