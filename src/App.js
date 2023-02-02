import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Courseoutline from "./pages/Courseoutline";
import Notes from "./pages/Notes";
import Reportcard from "./pages/Reportcard";
import "./styles/router.scss";
import Sidebar from './components/Sidebar';
import Assignment from "./pages/assignment/Assignment";
import Assignmentsubmission from "./pages/assignment/Assignmentsubmission";
import Quizzes from "./pages/quizzes/Quizzes";
import Quizsubmission from "./pages/quizzes/Quizzubmission";
import Papers from "./pages/papers/Papers";
import Paperssubmisson from "./pages/papers/Paperssubmisson";

const App = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(false)
    return () => {
      setisLoading(true)
    };
  }, []);

  return (
    <div className='router_container'>
      {
        isLoading ?
          <div className='loading_spinner_div'>
            <div className="spinner-container">
              <div className="loading-spinner">
              </div>
            </div>
          </div>
          :
          <BrowserRouter>
            <div className='router_sidebar'>
              <Sidebar />
            </div>
            <div className='router_routes'>
              <Routes>
                <Route path="/coursesoutline" element={<Courseoutline />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/assignments" element={<Assignment />} />
                <Route path="/assignmentsubmission" element={<Assignmentsubmission />} />
                <Route path="/quizzes" element={<Quizzes />} />
                <Route path="/quizzsubmission" element={<Quizsubmission />} />
                <Route path="/papers/" element={<Papers />} />
                <Route path="/papersubmisson" element={<Paperssubmisson />} />
                {/* <Route path="/:papers/:Submisson/check" element={<Check />} /> */}
                <Route path="/reportcard" element={<Reportcard />} />
              </Routes>
            </div>
          </BrowserRouter>
      }

    </div>

  )
}

export default App;