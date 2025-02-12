import styles from "../../styles/utils/infoRow.module.css"

function InfoRow({ key, value }: { key: string; value: string }) {
  return (
    <div key={key} className={styles.infoRow}>
      <span className={styles.value}>{value}</span>
    </div>
  )
}

export default InfoRow
