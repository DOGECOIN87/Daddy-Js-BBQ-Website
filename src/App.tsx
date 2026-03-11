/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Catering from './components/Catering';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bbq-smoke font-sans selection:bg-bbq-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Catering />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
