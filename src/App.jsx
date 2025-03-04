import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import './App.css'
import { Events } from './pages/Events'
import { Notice } from "./pages/Notice";
import { Dashboard } from "./pages/Dashboard";
import { Result } from "./pages/Result";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Quote } from "./pages/Quote";
function App() {
    return (
      <>
         <BrowserRouter>
          <Routes>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/notice" element={<Notice />}></Route>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/result" element={<Result />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/quote" element={<Quote />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }

export default App
