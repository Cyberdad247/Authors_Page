import { EnergyThread } from './EnergyThread';
import { HeroIgnition } from '../sections/HeroIgnition';
import { QuoteCarousel } from '../sections/QuoteCarousel';
import { GravityAnchor } from '../sections/GravityAnchor';
import { AlchemyShop } from '../sections/AlchemyShop';
import { BookShelf } from '../sections/BookShelf';
import { HighCouncil } from '../sections/HighCouncil';
import { SingularityCTA } from '../sections/SingularityCTA';
import { Manifesto } from '../sections/Manifesto';
import { Footer } from '../sections/Footer';

export default function GlobalLayout() {
    return (
        /* position: relative is mandatory so the absolute EnergyThread maps correctly */
        <main className="relative w-full min-h-screen bg-black text-white">

            {/* 1. Mount the Thread (It will sit on top, invisible until scrolled) */}
            <EnergyThread />

            {/* 2. Stack your sections */}
            <div className="flex flex-col w-full relative z-10">
                <HeroIgnition />
                <QuoteCarousel />
                <GravityAnchor />
                <AlchemyShop />
                <BookShelf />
                <HighCouncil />
                <SingularityCTA />
                <Manifesto />
                <Footer />
            </div>

        </main>
    );
}
