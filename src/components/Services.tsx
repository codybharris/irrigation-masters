import { motion } from 'framer-motion';
import { HiOutlineDesktopComputer, HiOutlineWrench, HiOutlineLightningBolt, HiOutlineClipboardCheck } from 'react-icons/hi';

const services = [
  {
    icon: HiOutlineDesktopComputer,
    title: "Irrigation Design & Installation",
    description: "Design and install your dream lawn and garden sprinkler system using top brands like Hunter, Rain Bird, Toro, or Orbit!",
    color: "bg-blue-500"
  },
  {
    icon: HiOutlineWrench,
    title: "Irrigation Repair",
    description: "From sprinkler head clean outs to remapping entire zones, Irrigation Masters can repair your sprinkler system!",
    color: "bg-green-500"
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Emergency Service",
    description: "On call 24/7 to help with any emergency repairs you may need. We're here when you need us most.",
    color: "bg-red-500"
  },
  {
    icon: HiOutlineClipboardCheck,
    title: "Maintenance & Consultation",
    description: "Initial consultations and ongoing lawn care support with transparent communication every step of the way.",
    color: "bg-purple-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive irrigation solutions tailored to your needs. Serving residential and commercial properties across the CSRA.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
          >
            View All Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
