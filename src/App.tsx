import GlobalLayout from './components/layout/GlobalLayout';
import { TopNav } from './components/layout/TopNav';
import { SidePagination } from './components/layout/SidePagination';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0505] text-white overflow-x-hidden">
      <SidePagination />
      <TopNav />
      <GlobalLayout />
    </div>
  );
}

export default App;
