import Header from "./components/Header";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Trending from "./pages/Trending";
import Movies from './pages/Movies'
import Series from './pages/Series'
import Search from './pages/Search'
import SingleInfo from "./pages/SingleInfo";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Trending/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/series" element={<Series/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/movies/:id" element={<SingleInfo type={'movie'}/>} ></Route>
        <Route path="/series/:id" element={<SingleInfo type={'tv'}/>} ></Route>
      </Routes>
      <Navbar></Navbar>
    </>
  );
}

export default App;
