import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Ayesha B.",
    date: "July 4th Event",
    text: "The food was amazing and the service was even better. I contacted them the morning of July 4th. Their response was prompt and they were very accommodating. Not only did they cook more food but they also delivered!!!! Daddy J has a sweet humble soul. BBQ SPOT FOUND!!!",
    rating: 5
  },
  {
    name: "Franchesca T.",
    date: "Local Foodie",
    text: "The ribs were so tender and seasoned to perfection. Daddy J's ribs were juicy with just enough of season and smoky flavor. Baked beans were tangy and sweet; very flavorful. I would definitely visit again!",
    rating: 5
  },
  {
    name: "Nicole D.",
    date: "Thanksgiving",
    text: "We trusted Daddy J's to make our Thanksgiving turkey and I'm so glad we did. It was excellent!!! Super juicy and seasoned beautifully. Incredible deal! We'll definitely be using you in the future.",
    rating: 5
  },
  {
    name: "Ryan S.",
    date: "Catered Event",
    text: "I had Daddy J's BBQ catered at my Diaper Party. We had ribs, chopped and slice brisket. Everything was cooked perfectly. The Ribs are by far the best out. No contest. Almost too cheap for the quality in food they provide.",
    rating: 5
  },
  {
    name: "Nikki P.",
    date: "Corporate Event",
    text: "We hired Daddy J's for a corporate event and it was great! They helped us plan for how much we needed, helped us pick favorites and arrived on time. The food was spectacular, melt-in-your-mouth good.",
    rating: 5
  },
  {
    name: "A S.",
    date: "Regular Customer",
    text: "AMAZINGLY DELICIOUS! We are bbq lovers and this is our favorite in the area and San Antonio area. He is so nice and kind and takes pride on his cooking and it totally shows. My kids always look for the red truck and there's dinner.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-bbq-smoke">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-bbq-red font-bold tracking-widest uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-bbq-dark">What Our Customers Say</h3>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it. Here's what the Cibolo community thinks about Daddy J's BBQ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex text-bbq-red mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow">"{review.text}"</p>
              <div className="mt-auto border-t border-gray-100 pt-4">
                <p className="font-bold text-bbq-dark">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
