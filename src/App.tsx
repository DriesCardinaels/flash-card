import { useState } from 'react';
import './App.css';
import JsonFileUploader from './JsonFileUploader';
import Card from './Card';

interface JsonData {
  question: string;
  answer: string[];
}

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
      setIsFlipped(!isFlipped);
  };

  const [jsonData, setJsonData] = useState<[JsonData] | null>(null);

  const handleJsonData = (data: [JsonData] | null) => {
    setJsonData(data);
  };

  const [randomIndex, setRandomIndex] = useState<number>(0);

  const handleRandomIndex = () => {
    if (!jsonData) {
      return;
    }

    const index = Math.floor(Math.random() * jsonData.length);
    setRandomIndex(index);

    if(previousNumbers.length === jsonData.length){
      setPreviousNumbers([]);
    }

    if(previousNumbers.includes(index)){
      handleRandomIndex();
    }

    else{
      setPreviousNumbers([...previousNumbers, index]);
    }
  }

  // call handleRandomIndex on spacebar
  document.body.onkeyup = function(e){
    if(e.keyCode === 32 && isFlipped){
      handleRandomIndex();
      setIsFlipped(false);
    }

    else if(e.keyCode === 32 && !isFlipped){
      handleRandomIndex();
    }
  }

  const [previousNumbers, setPreviousNumbers] = useState<number[]>([]);
  
  return (
    <div className="app">
        <header>
          <div className="file-upload">
          <JsonFileUploader onJsonDataChange={handleJsonData} />
          </div>
        </header>
        <main>
            {!jsonData && <div className="no-data">Upload eerst een bestand</div>}
            {jsonData && <Card onClick={handleCardFlip} isFlipped={isFlipped} question={jsonData[randomIndex].question} answer={jsonData[randomIndex].answer} />}
        </main>
        <footer>
          <div className="instructions">
            <span className='bold'>Klik</span> op de kaart om de kaart om te draaien.<br/>Druk op de <span className="bold">spatiebalk</span> om de volgende vraag te tonen.
          </div>
        </footer>
    </div>
  );
}

export default App;
