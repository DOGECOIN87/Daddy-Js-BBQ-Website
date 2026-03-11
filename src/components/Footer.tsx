import { MapPin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="location" className="bg-bbq-dark text-white pt-20 pb-10 border-t-4 border-bbq-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-3xl tracking-wider text-bbq-red">
              DADDY J'S BBQ
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Family-run food truck serving quality smoked meats and succulent sides to the Cibolo area since 2017. Look for the bright red trailer!
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/daddyjque/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bbq-red transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg uppercase tracking-wider mb-4">Location</h4>
            <div className="flex items-start space-x-3 text-gray-400">
              <MapPin size={20} className="text-bbq-red flex-shrink-0 mt-1" />
              <div>
                <p>Serving Cibolo Area</p>
                <p>Cibolo, TX 78108</p>
                <p className="text-sm mt-2 italic">Follow our Facebook page to see where we'll be parked next!</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg uppercase tracking-wider mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span>Monday</span>
                <span className="text-bbq-red font-medium">Closed</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span>Tue - Thu</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span>Friday</span>
                <div className="text-right">
                  <span>10:00 AM - 4:00 PM</span><br/>
                  <span>5:30 PM - 11:00 PM</span>
                </div>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>Sunday</span>
                <span className="text-bbq-red font-medium">Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg uppercase tracking-wider mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-4">
              Interested in catering for your next event? Get in touch with us!
            </p>
            <a 
              href="https://www.facebook.com/daddyjque/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-bbq-red text-sm font-medium rounded-md text-white hover:bg-bbq-red transition-colors w-full"
            >
              Message on Facebook
            </a>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Daddy J's BBQ. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Cibolo, Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
