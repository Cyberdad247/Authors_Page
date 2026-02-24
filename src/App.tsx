import { SidePagination } from './components/layout/SidePagination';
import { EnergyThread } from './components/layout/EnergyThread';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { RawData } from './sections/RawData';
import { GravityAnchor } from './sections/GravityAnchor';
import { AlchemyShop } from './sections/AlchemyShop';
import { BookShelf } from './sections/BookShelf';
import { HighCouncil } from './sections/HighCouncil';
import { SingularityCTA } from './sections/SingularityCTA';
import { Manifesto } from './sections/Manifesto';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0505] text-white overflow-x-hidden">
      <SidePagination />
      <EnergyThread />
      <Navigation />
      <main className="bg-[#0a0505]">
        <Hero />
        <RawData />
        <GravityAnchor />
        <AlchemyShop />
        <BookShelf />
        <HighCouncil />
        <SingularityCTA />
        <Manifesto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
