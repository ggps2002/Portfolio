import { motion } from "framer-motion";
import { Testimonial } from "../lib/types";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm group"
    >
      {/* Testimonial text */}
      <div className="p-6 flex-1">
        <div className="flex items-start mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-primary flex-shrink-0">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg">{testimonial.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role} at {testimonial.company}</p>
          </div>
        </div>
        
        <div className="relative">
          <Quote className="w-8 h-8 text-slate-200 dark:text-slate-700 absolute -left-1 -top-1 transform -scale-x-100" />
          <p className="text-slate-600 dark:text-slate-300 pl-6 relative">
            "{testimonial.testimonial}"
          </p>
        </div>
      </div>
      
      {/* Screenshot */}
      {testimonial.screenshotUrl && (
        <div className="mt-4 border-t border-slate-100 dark:border-slate-700">
          <div className="relative overflow-hidden">
            <div className="bg-gradient-to-b from-transparent to-slate-900/70 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white text-sm font-medium px-4 py-2 bg-primary/80 rounded-full">View Feedback</span>
            </div>
            <img 
              src={testimonial.screenshotUrl} 
              alt="Feedback screenshot" 
              className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TestimonialCard;