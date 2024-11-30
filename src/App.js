import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import PracticeQuestions from "../src/practiceQuestions/practiceQuestions";
import OutputBasedQuestions from "../src/practiceQuestions/outputBasedQuestions";
import LearningJavascript from "../src/practiceQuestions/learningJavascript";
import CertificationQuestions from "../src/practiceQuestions/certificationQuestions";
import CodingQuestions from "../src/practiceQuestions/codingQuestions";
import JavascriptQuestions from "./practiceQuestions/javascriptQuestions";
import LeetCodeQuestions from "../src/practiceQuestions/leetCodeQuestions";
import PolyFillQuestions from "../src/practiceQuestions/polyfillQuestions";
import ReactQuestions from "./practiceQuestions/reactQuestions/reactQuestions";
import './App.css';

const routes = [
  { path: "/", label: "Coding Questions", component: CodingQuestions },
  { path: "/javascript-questions", label: "JavaScript Questions", component: JavascriptQuestions },
  { path: "/practice-questions", label: "Practice Questions", component: PracticeQuestions },
  { path: "/assessment-questions", label: "Output Based Questions", component: OutputBasedQuestions },
  { path: "/learning-javascript", label: "Learning JavaScript", component: LearningJavascript },
  { path: "/certification-questions", label: "Certification Questions", component: CertificationQuestions },
  { path: "/leetcode-questions", label: "LeetCode Questions", component: LeetCodeQuestions },
  { path: "/polyfill-questions", label: "Polyfill Questions", component: PolyFillQuestions },
  { path: "/react-questions", label: "React Questions", component: ReactQuestions },
];

function NavigationButtons() {
  const location = useLocation();
  return (
    <div className="button-container">
      {routes.map(({ path, label }) => (
        <Link key={path} to={path}>
          <button className={`nav-button ${location.pathname === path ? 'selected' : ''}`}>
            {label}
          </button>
        </Link>
      ))}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="main-page">
        <h1 className="main-heading">Learning Frontend</h1>

        <NavigationButtons />

        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
