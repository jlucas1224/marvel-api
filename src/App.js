import './App.css';
import { ContentHeader } from './components/contentHeader.js';
import { ContentBody } from './components/contentBody.js';

function App() {
  return (
    <div className="App">
      {ContentHeader()}
      {ContentBody()}
    </div>
  );
}

export default App;
