import './App.css';
import { Routes, Route } from 'react-router-dom';
import ColorsIndex from './ColorsIndex';
import Color from './Color';
import NewColorForm from './NewColorForm';
App.defaultProps = {
  colors: [],
};
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/colors" element={<ColorsIndex />} />
        <Route path="/colors/:color" element={<Color />} />
        <Route path="/colors/new" element={<NewColorForm />} />
      </Routes>
    </div>
  );
}

export default App;
