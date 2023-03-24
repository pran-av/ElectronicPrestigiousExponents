import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HTMLNotes from './projects/HTMLNotes';
import HandsOnHTML from './projects/HandsOnHTML';
import ProjectsHome from './projects/ProjectsHome';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router> 
      <Header />
      <Routes>
        <Route path='/' element={<div>Home Page</div>} />
        <Route path='projects' element={<ProjectsHome />} />
        <Route path='blogs' element={<HandsOnHTML />} />
        <Route path='stories' element={<HandsOnHTML />} />
        <Route path = 'projects/HTMLNotes' element={<HTMLNotes />} />
        <Route path='*' element={<div>Error: Not a valid page.</div>} />
      </Routes>
      <Footer />
    </Router>
    /*
      BrowserRouter: connects with browser
      Routes: parent element for routes
      Route: Single route with a path defined
    */
  );
}
