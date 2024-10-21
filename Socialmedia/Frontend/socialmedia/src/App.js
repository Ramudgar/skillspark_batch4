import HomeComponent from "./Components/Home/HomeComponent";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PostComponent from "./Components/Post/PostComponent";
import ProfileComponent from "./Components/Profile/ProfileComponent";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/post" element={<PostComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
