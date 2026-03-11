import { motion } from 'motion/react';

const menuItems = {
  meats: [
    { name: "Smoked Ribs", description: "Juicy, tender, and seasoned to perfection with just enough smoky flavor. Our heavy hitter.", price: "Market" },
    { name: "Sliced Brisket", description: "Slow-smoked traditional Texas brisket, tender and flavorful.", price: "Market" },
    { name: "Chopped Brisket", description: "Perfect for sandwiches, loaded with finger-licking goodness.", price: "Market" },
    { name: "Smoked Sausage", description: "Hot and fresh kielbasa-style sausage.", price: "Market" },
    { name: "Smoked Turkey", description: "Super juicy and seasoned beautifully (Special order/Holidays).", price: "Market" },
  ],
  sides: [
    { name: "Big Beans", description: "Tangy, sweet, and very flavorful baked beans.", price: "Side" },
    { name: "Coleslaw", description: "Cold, fresh, and creamy slaw.", price: "Side" },
    { name: "Hawaiian Rolls", description: "Soft, sweet rolls to complement your BBQ.", price: "Side" },
  ],
  specials: [
    { name: "3 Meat Special", description: "Your choice of 3 meats to satisfy the ultimate craving.", price: "Popular" },
    { name: "Brisket Sandwich", description: "Loaded with chopped brisket, worth every penny.", price: "Popular" },
  ]
};

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-bbq-red font-bold tracking-widest uppercase text-sm mb-2">From The Pit</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-bbq-dark">Our Menu</h3>
          <p className="mt-4 text-lg text-gray-600">
            Quality smoked meats and succulent sides. Everything is made fresh and served hot from our bright red trailer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Meats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-2xl font-display font-bold text-bbq-dark border-b-2 border-bbq-red pb-2 mb-6 inline-block">Smoked Meats</h4>
            <div className="space-y-8">
              {menuItems.meats.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-baseline mb-1">
                    <h5 className="text-lg font-bold text-bbq-dark group-hover:text-bbq-red transition-colors">{item.name}</h5>
                    <div className="flex-grow border-b border-dotted border-gray-300 mx-4"></div>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-16">
            {/* Sides */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-2xl font-display font-bold text-bbq-dark border-b-2 border-bbq-red pb-2 mb-6 inline-block">Succulent Sides</h4>
              <div className="space-y-6">
                {menuItems.sides.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h5 className="text-lg font-bold text-bbq-dark group-hover:text-bbq-red transition-colors">{item.name}</h5>
                      <div className="flex-grow border-b border-dotted border-gray-300 mx-4"></div>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-bbq-smoke p-8 rounded-2xl border border-gray-200"
            >
              <h4 className="text-2xl font-display font-bold text-bbq-dark mb-6">Pitmaster Specials</h4>
              <div className="space-y-6">
                {menuItems.specials.map((item, index) => (
                  <div key={index}>
                    <h5 className="text-lg font-bold text-bbq-red mb-1">{item.name}</h5>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
