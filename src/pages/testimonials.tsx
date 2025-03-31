import { motion } from "framer-motion";
import { testimonials } from "../lib/constants";
import TestimonialCard from "../components/TestimonialCard";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="section inset-0 overflow-y-auto p-4 sm:p-8 md:p-12">
      <div className="max-w-5xl mx-auto pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <div className="flex items-center mt-4">
            <div className="flex mr-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Feedback from clients and collaborators I've worked with.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-primary/5 dark:bg-primary/10 p-6 rounded-xl"
        >
          <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
            Want to Work Together?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            I'm always looking for new opportunities to collaborate with
            passionate teams and individuals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "#contact")}
            className="bg-primary hover:bg-primary/90 dark:bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
