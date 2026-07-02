import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import Navbar from '../Components/Organism/Navbar';
import Sidebar from '../Components/Organism/Sidebar';
import MainContain from 't ad../Components/Organism/MainContain';
import { componentsData } from '../Components/Atoms/componentsData';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Components');

  // Extract unique categories and add "All Components" option at the beginning
  const categories = [
    'All Components',
    ...Array.from(new Set(componentsData.map((item) => item.title.trim()))),
  ];

  // Filter items based on selected category and search query
  const filteredItems = componentsData.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All Components' ||
      item.title.trim().toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <Navbar />
      <div className="flex min-h-[calc(100vh-64px)] bg-[#FAFAFA]">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <MainContain items={filteredItems} />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
