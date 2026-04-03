/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Location from './components/Location';
import Amenities from './components/Amenities';
import MasterPlan from './components/MasterPlan';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Location />
        <Amenities />
        <MasterPlan />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
