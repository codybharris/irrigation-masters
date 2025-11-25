import { motion } from 'framer-motion';
import { HiPhone, HiDocumentText } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* TODO: Replace with real photo of installed irrigation system / beautiful lawn */}
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1600&auto=format&fit=crop"
          alt="Beautiful irrigated lawn"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-gray-800/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 font-display"
          >
            Professional Irrigation Solutions for the CSRA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-4 text-green-50"
          >
            Design, install, and repair your dream lawn and garden sprinkler system.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg mb-8 text-green-100"
          >
            Available 24/7 for emergency repairs. Unwavering commitment to customer satisfaction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              <HiDocumentText className="w-5 h-5" />
              Fill Out Our Form
            </motion.a>

            <motion.a
              href="tel:+18036401480"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-950 transition-colors border-2 border-white/20"
            >
              <HiPhone className="w-5 h-5" />
              (803) 640-1480
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave - generated from getwaves.io */}
      <div className="absolute bottom-0 left-0 right-0 z-10" style={{ marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ display: 'block' }}
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
