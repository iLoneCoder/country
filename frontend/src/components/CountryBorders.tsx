import type { CountryDetailsType } from "../utlis/customTypes"
import InfoRow from "./utils/InfoRow"
import styles from "../styles/countryDetail.module.css"

function CountryBorders({
  countryDetails,
}: {
  countryDetails: CountryDetailsType
}) {
  return (
    <div className={styles.countryCard}>
      <div className={styles.cardHeader}>
        <h2>Border with {countryDetails.data.borders.length} countries</h2>
      </div>
      <div className={styles.cardBody}>
        {countryDetails.data.borders.map((border) => (
          <InfoRow key={border.countryCode} value={border.commonName} />
        ))}
      </div>
    </div>
  )
}

export default CountryBorders
