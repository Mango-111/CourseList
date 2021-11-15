import './App.css';
import CourseList from './Components/CourseList';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Enquiry from './Components/Enquiry';
import EnquiredData from './Components/EnquiredData';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      < Route path="/" element={<CourseList/>}/>
      <Route path="/Enquiry" element={<Enquiry/>}/>
      <Route path="/EnquiredData" element={<EnquiredData/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
