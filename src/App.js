import { HeroImage } from './Components/HeroImage'
import { TextArea } from './Components/TextArea'
import { Results } from './Components/Results'
import SubmittedValueProvider from './Context/SubmittedValueContext'

function App() {
  return (
    <div className="App">
      <HeroImage />
      <div className="app-content-container">
        <SubmittedValueProvider>
          <TextArea />
          <Results />
        </SubmittedValueProvider>
      </div>
    </div>
  );
}

export default App;
