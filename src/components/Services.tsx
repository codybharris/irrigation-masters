import { motion } from 'framer-motion';

const services = [
  {
    title: "Irrigation Design & Installation",
    description: "Design and install your dream lawn and garden sprinkler system using top brands like Hunter, Rain Bird, Toro, or Orbit!",
    color: "bg-blue-500",
    image: "/images/irrigation-design.jpg"
  },
  {
    title: "Irrigation Repair",
    description: "From sprinkler head clean outs to remapping entire zones, Irrigation Masters can repair your sprinkler system!",
    color: "bg-green-500",
    image: "/images/irrigation-repair.jpg"
  },
  {
    title: "Emergency Service",
    description: "On call 24/7 to help with any emergency repairs you may need. We're here when you need us most.",
    color: "bg-red-500",
    image: "/images/emergency-service.jpg"
  },
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flip-card h-80"
            >
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700">
                {/* Front of card */}
                <div className="flip-card-front absolute w-full h-full bg-white rounded-xl shadow-2xl p-8 border-2 border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mt-16">
                    {service.description}
                  </p>
                </div>

                {/* Back of card */}
                <div className="flip-card-back absolute w-full h-full rounded-xl shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
