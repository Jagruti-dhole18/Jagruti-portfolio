import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]">
      <div className="relative flex items-center justify-center">

        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-52 h-52 rounded-full border-[3px] border-neutral-800 border-t-purple-500 border-r-pink-500"
        />

        {/* Inner Ring */}
        <div className="absolute w-44 h-44 rounded-full border border-neutral-700" />

        {/* Center Content */}
        <div className="absolute flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-white">
            JD'S
          </h1>

          <p className="text-xs md:text-sm tracking-[4px] text-purple-400 mt-1">
            PORTFOLIO
          </p>

          <p className="text-[11px] text-neutral-500 mt-3">
            Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;