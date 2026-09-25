import { motion } from 'framer-motion';

const Loader = () => {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="loader-screen" aria-live="polite" aria-busy="true">
      <div className="loader-orbit">
        <motion.div
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          transition={{
            duration: 1.4,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: 'linear',
          }}
          className="loader-ring loader-ring-primary"
        />

        <div className="loader-ring loader-ring-secondary" />

        <div className="loader-core">
          <span className="loader-brand">JD</span>
          <span className="loader-tag">PORTFOLIO</span>
          <span className="loader-role">FULL STACK DEVELOPER</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;