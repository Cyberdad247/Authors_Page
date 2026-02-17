import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { RawData } from './sections/RawData';
import { GravityAnchor } from './sections/GravityAnchor';
import { AlchemyLab } from './sections/AlchemyLab';
import { BookShelf } from './sections/BookShelf';
import { HighCouncil } from './sections/HighCouncil';
import { NewsletterMagnet } from './sections/NewsletterMagnet';
import { Manifesto } from './sections/Manifesto';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0505] text-white overflow-x-hidden">
      <Navigation />
      <main className="bg-[#0a0505]">
        <Hero />
        <RawData />
        <GravityAnchor />
        <AlchemyLab />
        <BookShelf />
        <HighCouncil />
        <NewsletterMagnet />
        <Manifesto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
