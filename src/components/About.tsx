import { motion } from 'motion/react';
import { Flame, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-bbq-smoke">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-bbq-red font-bold tracking-widest uppercase text-sm mb-2">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-bbq-dark leading-tight">
                Meet Pitmaster <br /> M.J. Sanders
              </h3>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Established in 2017, Daddy J's BBQ is a family-run food truck born out of a passion for authentic Texas barbecue. Owner and Pitmaster M.J. Sanders specializes in quality smoked meats and succulent sides that keep the Cibolo community coming back for more.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're craving our fall-off-the-bone ribs, tender brisket, or our famous tangy baked beans, there's something on the menu sure to please. When you see that bright red trailer, you know you're in for a treat!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-300">
              <div className="flex flex-col items-start">
                <div className="bg-bbq-red/10 p-3 rounded-lg mb-3 text-bbq-red">
                  <Flame size={24} />
                </div>
                <h4 className="font-bold text-bbq-dark">Slow Smoked</h4>
                <p className="text-sm text-gray-600">Cooked low and slow for maximum flavor.</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="bg-bbq-red/10 p-3 rounded-lg mb-3 text-bbq-red">
                  <Users size={24} />
                </div>
                <h4 className="font-bold text-bbq-dark">Family Run</h4>
                <p className="text-sm text-gray-600">Local family business serving our community.</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="bg-bbq-red/10 p-3 rounded-lg mb-3 text-bbq-red">
                  <Clock size={24} />
                </div>
                <h4 className="font-bold text-bbq-dark">Since 2017</h4>
                <p className="text-sm text-gray-600">Perfecting our craft for over half a decade.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="BBQ Brisket being sliced" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="font-display text-2xl font-bold text-bbq-dark mb-2">"That brisket was something else!"</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">— Marcel W.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
