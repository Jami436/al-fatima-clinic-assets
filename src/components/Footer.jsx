import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <span className={`material-symbols-outlined ${styles.brandIcon}`}>local_hospital</span>
        <span className={`${styles.brandName} font-headline`}>Al Fatima Clinic</span>
      </div>
      <div className={styles.links}>
        <a className={styles.linkItem} href="#">Privacy Policy</a>
        <a className={styles.linkItem} href="#">Terms of Service</a>
        <a className={styles.linkItem} href="#">Emergency Protocol</a>
      </div>
      <p className={styles.copyright}>© 2024 Al Fatima Clinic. Precision Healthcare.</p>
    </footer>
  );
}
