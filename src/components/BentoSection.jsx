import styles from './BentoSection.module.css';

export default function BentoSection() {
  const services = [
    {
      icon: "medical_services",
      title: "General Physicians",
      desc: "Expert diagnosis and preventative health management from top-tier medical practitioners."
    },
    {
      icon: "emergency",
      title: "Emergency Care",
      desc: "Rapid response unit equipped for urgent medical interventions and critical stabilization."
    },
    {
      icon: "biotech",
      title: "Lab Tests",
      desc: "State-of-the-art diagnostic laboratory providing rapid and accurate clinical results."
    },
    {
      icon: "radiology",
      title: "X-Rays",
      desc: "Advanced imaging technology for precise skeletal and internal diagnostic insights."
    }
  ];

  return (
    <div className={styles.bentoGrid}>
      {/* Location Section */}
      <div className={styles.locationCard}>
        <div className={styles.locationHeader}>
          <div>
            <span className={`material-symbols-outlined ${styles.locationIcon}`}>location_on</span>
            <h2 className={`${styles.locationTitle} font-headline`}>Our Location</h2>
            <p className={styles.locationText}>G-6 Markaz, Melody Market, Islamabad</p>
          </div>
          <div className={styles.locationMapThumb}>
            <img 
              className={styles.mapThumbImg} 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU20gelrKl2u0tPiJiqxAXkQjwS9LXT_L6qzUkD__UlkBRC8-tU5nWHMIMEArjV6n8Vm2eY1AYBEtiHRZE0aTY3D_A_sRK6SgfvHl2-IlbemHNkBNHVFynxWeqkFARzm68aXoMx5_IhYG2-M2vVBF2h2Dvr-rtO22JTTOKnq2hcsDiK-GDIuKQ9pqpAiNsbyN4S3dA6xFudegUXqXug6FYgxIpDCoOd2IAeLOZp0IPmEj8UlN0bX8BBfazasI6E9tUg3LpgR81TwLv" 
              alt="Stylized map showing Islamabad city center" 
            />
          </div>
        </div>
        <div className={styles.locationMapFull}>
          <div className={styles.mapFullWrapper}>
            <div className={`${styles.mapPlaceholder} font-headline`}>ISLAMABAD CAPITAL TERRITORY</div>
            <img 
              className={styles.mapFullImg} 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDslcLuhknI84SfEv-bcSNEpoqVm07nrJVd3bPgruyj1YAdWkolw6PRXzJykaPDt8HCdi2V-5SPj1xYKq0HeLAjgWHzISHuFoqHM6h-uiBJxDdefagr-dWzn_5oC_tAFVUSi_plmgVmQk6JymGt0ncJ0ce2OzfDQjSx3xZuPzWnhMBJcOT8E-jwlmaiPga5Ie2mVfuBXbqLgAKYcm1d8eJfYYCq95xADWnpH6QOZBHi0mA3RxMonoXmXBm0dOLKOo2DppTNzfYsAPD5" 
              alt="Aerial view of Islamabad cityscape" 
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className={styles.contactCard}>
        <span className={`material-symbols-outlined ${styles.contactIcon}`}>call</span>
        <h2 className={`${styles.contactTitle} font-headline`}>Immediate Contact</h2>
        <div className={styles.phoneList}>
          <p className={`${styles.phoneNumber} font-headline`}>051-8151800</p>
          <div className={styles.divider}></div>
          <p className={`${styles.phoneNumber} font-headline`}>051-2824124</p>
        </div>
        <p className={styles.availability}>AVAILABLE 24/7 FOR CONSULTATION</p>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.servicesHeader}>
          <div className={styles.servicesTitleBox}>
            <h2 className={`${styles.servicesTitle} font-headline`}>Clinical Services</h2>
            <p className={styles.servicesDesc}>Specialized medical services delivered with technical precision.</p>
          </div>
          <div className={styles.servicesWatermark}>
            <span className={`${styles.watermarkText} font-headline`}>PRECISION</span>
          </div>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <span className={`material-symbols-outlined ${styles.serviceIcon}`}>{service.icon}</span>
              <h3 className={`${styles.serviceTitle} font-headline`}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
