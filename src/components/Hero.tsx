import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-bbq-dark h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-bbq-dark via-bbq-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block">
            <span className="bg-bbq-red text-white text-sm font-bold tracking-widest uppercase px-4 py-1 rounded-full">
              Cibolo, Texas
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight">
            SMOKED TO <br className="hidden md:block" />
            <span className="text-bbq-red">PERFECTION</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Family-run food truck serving up quality smoked meats and succulent sides. Look for the bright red trailer!
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#menu" 
              className="bg-bbq-red hover:bg-red-700 text-white px-8 py-4 rounded-md text-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              View Our Menu <ArrowRight size={20} />
            </a>
            <a 
              href="#location" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-bbq-dark text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
            >
              Find The Truck
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
