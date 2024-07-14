import { motion } from 'framer-motion';
import styles from '../styles/HeroSection.module.css';
import Image from 'next/image';
import { openInNewTab } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <motion.div 
        className={styles.logoContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/goodnews-logo.png"
          alt="GoodNews Logo"
          width={150}
          height={150}
          layout="responsive"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        GoodNews
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Cooperative Thrift & Credit Society
      </motion.h2>
      {/* Add animated illustrations here */}
      <motion.button
        className={styles.ctaButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => openInNewTab('https://forms.gle/q6zHW31AGZ51S4x8A')}
      >
        Join Now
      </motion.button>
    </section>
  );
};

export default HeroSection;