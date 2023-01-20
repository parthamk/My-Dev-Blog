import './App.css';
import BlogList from './Blog/BlogList';
import BlogDetails from './Blog/BlogDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ResponsiveAppBar from './NavBar';

function App() {
  return (
    <>
    <Router>
      {/* <ResponsiveAppBar/> */}
      <Routes>
        <Route path='/' element={<BlogList />}/>
        <Route path='/blogDetails/:id' element={<BlogDetails />}/>
        <Route path='/bloglist' element={<BlogList />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
