import type { CountryDetailsType } from "../utlis/customTypes"
import styles from "../styles/countryDetail.module.css"

function CountryDetail({
  countryDetails,
}: {
  countryDetails: CountryDetailsType
}) {
  return (
    <div className={styles.countryCard}>
      <div className={styles.cardHeader}>
        <h2>
          {countryDetails?.data.country}{" "}
          {countryDetails?.data.countryCode &&
            `(${countryDetails?.data.countryCode})`}
        </h2>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.infoRow}>
          <span className={styles.label}>Region:</span>
          <span className={styles.value}>{countryDetails?.data.region}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.label}>Country Code:</span>
          <span className={styles.value}>
            {countryDetails?.data.countryCode}
          </span>
        </div>
        {countryDetails?.data.flag && (
          <div className={styles.infoRow}>
            <span className={styles.label}>Flag:</span>
            <div className={styles.flagContainer}>
              <img src={countryDetails?.data.flag} alt="Flag" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CountryDetail
