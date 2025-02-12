import styles from "../../styles/utils/button.module.css"

function Button({
  children,
  type = "secondary",
  onClick,
}: {
  children: string
  type: "primary" | "secondary"
  onClick?: () => void
}) {
  return (
    <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
