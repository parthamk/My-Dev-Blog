import './App.css';
import BlogList from './Blog/BlogList';
import BlogDetails from './Blog/BlogDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BlogList />}/>
        <Route path='/blogDetails/:id' element={<BlogDetails />}/>
        <Route path='/bloglist' element={<BlogList />}/>
      </Routes>
    </Router>
  );
}

export default App;
