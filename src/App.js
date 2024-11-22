import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import PracticeQuestions from "../src/practiceQuestions/practiceQuestions";
import AssessmentQuestions from "../src/practiceQuestions/assessmentQuestions";
import LearningJavascript from "../src/practiceQuestions/learningJavascript";
import CertificationQuestions from "../src/practiceQuestions/certificationQuestions";
import CodingQuestions from "../src/practiceQuestions/codingQuestions";
import LeetCodeQuestions from "../src/practiceQuestions/leetCodeQuestions";
import PolyFillQuestions from "../src/practiceQuestions/polyfillQuestions";
import './App.css';

const routes = [
  { path: "/coding-questions", label: "Coding Questions", component: CodingQuestions },
  { path: "/practice-questions", label: "Practice Questions", component: PracticeQuestions },
  { path: "/assessment-questions", label: "Assessment Questions", component: AssessmentQuestions },
  { path: "/learning-javascript", label: "Learning JavaScript", component: LearningJavascript },
  { path: "/certification-questions", label: "Certification Questions", component: CertificationQuestions },
  { path: "/leetcode-questions", label: "LeetCode Questions", component: LeetCodeQuestions },
  { path: "/polyfill-questions", label: "Polyfill Questions", component: PolyFillQuestions },
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
        <h1 className="main-heading">Learning JavaScript</h1>

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
