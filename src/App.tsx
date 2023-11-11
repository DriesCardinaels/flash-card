import { useState } from 'react';
import './App.css';
import JsonFileUploader from './JsonFileUploader';
import Card from './Components/Main/Components/Card';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const dataContext = (require as any).context('./data', true, /\.json$/);

function App() {
  const allCards = dataContext.keys().map((key: any) => {
    return dataContext(key);
  });

  const fileNames = dataContext.keys().map((key: string) => {
    return key.slice(2, -5);
  });
  
  const [cardIndex, setCardIndex] = useState(0);

  function onClick(index: number) {
    setCardIndex(index);
  }

  return (
    <div className="app">
      <Header activeIndex={cardIndex} fileNames={fileNames} onClick={onClick} />
      <Main cards={allCards[cardIndex]} />
      <Footer />
    </div>
  );
}

export default App;
