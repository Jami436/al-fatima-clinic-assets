import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} container`}>
      <div className={styles.brand}>
        <span className={`material-symbols-outlined ${styles.brandIcon}`}>local_hospital</span>
        <span className={`font-headline ${styles.brandName}`}>Al Fatima Clinic</span>
      </div>
      <div className={styles.navLinks}>
        <a className={`font-headline ${styles.navLinkActive}`} href="#">Services</a>
        <a className={`font-headline ${styles.navLink}`} href="#">Location</a>
        <a className={`font-headline ${styles.navLink}`} href="#">Contact</a>
      </div>
      <div className={styles.actions}>
        <button className={`material-symbols-outlined ${styles.iconButton}`}>notifications</button>
        <button className={`material-symbols-outlined ${styles.iconButton}`}>account_circle</button>
      </div>
    </nav>
  );
}
