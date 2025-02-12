import styles from "../styles/header.module.css"

function Header({ title }: { title: string }) {
  return (
    <header>
      <h1 className={styles.title}>{title}</h1>
    </header>
  )
}

export default Header
