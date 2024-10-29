import HomeComponent from "./Components/Home/HomeComponent";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PostComponent from "./Components/Post/PostComponent";
import ProfileComponent from "./Components/Profile/ProfileComponent";
import SignupComponent from "./Components/Signup/SignupComponent";
import LoginComponent from "./Components/Login/LoginComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryComponent from "./Components/CategoryComponent/CategoryComponent";
import AddPostComponent from "./Components/Post/AddPostComponent";
import ProtectedRoute from "./Components/protectedRoutes/protectedRoutes";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/post" element={<PostComponent />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileComponent />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route
            path="/category"
            element={
              <ProtectedRoute role="admin">
                <CategoryComponent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addpost"
            element={
              <ProtectedRoute>
                <AddPostComponent />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
