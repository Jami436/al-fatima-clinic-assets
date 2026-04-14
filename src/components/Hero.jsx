import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={`${styles.title} font-headline`}>
            Al Fatima Clinic <span className={styles.titleHighlight}>(Islamabad)</span>
          </h1>
          <p className={styles.subtitle}>
            A sanctuary of precision healthcare where clinical excellence meets compassionate care in the heart of the capital.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryButton}>
              <span className="material-symbols-outlined">calendar_add_on</span>
              Book Consultation
            </button>
            <button className={styles.secondaryButton}>
              <span className="material-symbols-outlined">emergency</span>
              Emergency Protocol
            </button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img 
            className={styles.image} 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXdD23EzNpJpcnFuPn2xb_qTyj9xttbpxMiCGkUy3tRDWwDn8ItY2BzvmYZQgPp39Z9jME0N8KnWpp8d_UZbwYSkhAf8DvdgnfSJenw3u2BtKewESKSZQQUuFU0n7DKn4gBWdLTiF7K_DAcotTY758D_lB7jS88oRNlpx5SftcO5_glGsR6I5LjFySUXDjmhQscOQ-X0uv3adCd1fqCrQMxd7Xbhi4LB6EvXR4SLHg7OBcahi4fVwpDyLoSyj2DyeswRGnH8ynPcCk" 
            alt="Interior of a modern high-end medical clinic" 
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>
    </section>
  );
}
