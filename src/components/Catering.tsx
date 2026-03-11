import { motion } from 'motion/react';
import { CalendarCheck, PartyPopper, Truck } from 'lucide-react';

export default function Catering() {
  return (
    <section id="catering" className="py-24 bg-bbq-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-bbq-red font-bold tracking-widest uppercase text-sm mb-2">Events & Parties</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Catering Services</h3>
          <p className="text-lg text-gray-300">
            From corporate events to block parties, we bring the bright red trailer and the best BBQ in Cibolo directly to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
          >
            <div className="bg-bbq-red/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-bbq-red">
              <PartyPopper size={32} />
            </div>
            <h4 className="text-2xl font-display font-bold mb-4">Any Occasion</h4>
            <p className="text-gray-400">
              Corporate events, diaper parties, block parties, or family gatherings. We've catered them all with rave reviews.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
          >
            <div className="bg-bbq-red/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-bbq-red">
              <Truck size={32} />
            </div>
            <h4 className="text-2xl font-display font-bold mb-4">We Come To You</h4>
            <p className="text-gray-400">
              Our food truck is fully equipped to serve your guests hot, fresh BBQ right on site. Prompt and accommodating service.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
          >
            <div className="bg-bbq-red/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-bbq-red">
              <CalendarCheck size={32} />
            </div>
            <h4 className="text-2xl font-display font-bold mb-4">Holiday Specials</h4>
            <p className="text-gray-400">
              Trust Daddy J's for your Thanksgiving Turkey or 4th of July feast. Pre-order early for the holidays!
            </p>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.facebook.com/daddyjque/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-bbq-dark bg-white hover:bg-gray-100 transition-colors"
          >
            Contact Us on Facebook to Book
          </a>
        </div>
      </div>
    </section>
  );
}
