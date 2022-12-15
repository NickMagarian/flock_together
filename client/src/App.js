import CalendarPage from "./pages/calendar.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
            path="/" 
            element={<CalendarPage/>} 
          />
         
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
