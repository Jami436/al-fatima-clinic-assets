import styles from './TrustBanner.module.css';

export default function TrustBanner() {
  const items = [
    { icon: "verified", text: "PMC CERTIFIED" },
    { icon: "shield", text: "SECURE RECORDS" },
    { icon: "precision_manufacturing", text: "ADVANCED TECHNOLOGY" },
    { icon: "health_and_safety", text: "PATIENT FIRST PROTOCOL" }
  ];

  return (
    <section className={styles.banner}>
      {items.map((item, index) => (
        <div key={index} className={styles.trustItem}>
          <span className={`material-symbols-outlined ${styles.trustIcon}`}>{item.icon}</span>
          <span className={`${styles.trustText} font-headline`}>{item.text}</span>
        </div>
      ))}
    </section>
  );
}
