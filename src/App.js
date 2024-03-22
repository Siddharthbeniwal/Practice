import React from "react";
// import PracticeQuestions from "../src/practiceQuestions/practiceQuestions";
// import AssessmentQuestions from "../src/practiceQuestions/assessmentQuestions";
// import LearningJavascript from "../src/practiceQuestions/learningJavascript";
// import CertificationQuestions from "../src/practiceQuestions/certificationQuestions";
// import InterviewQuestions from "../src/practiceQuestions/InterviewQuestions";
import LeetCodeQuestions from "../src/practiceQuestions/leetCodeQuestions"

function App() {

  return (
    <div>
      <h1 style={{color: 'Blue', fontFamily: 'Arial'}}>Mission Switch</h1>
      {/* <InterviewQuestions/> */}
      {/* <PracticeQuestions/>
      <AssessmentQuestions/>
      <LearningJavascript/>
      <CertificationQuestions/> */}
      <LeetCodeQuestions/>
    </div>
  );
}

export default App;
