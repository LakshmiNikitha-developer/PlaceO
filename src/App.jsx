import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Aptitude from "./pages/Aptitude";
import Coding from "./pages/Coding";
import Interviewquestions from "./pages/Interviewquestions";
import Mocktest from "./pages/Mocktest";
import Mockinterview from "./pages/MockInterview";
import InterviewSummary from "./pages/InterviewSummary";

import Trackme from "./pages/Trackme";
import Contact from "./pages/Contact";

import Verbal from "./pages/aptitude/Verbal";
import Quant from "./pages/aptitude/Quant";
import Logical from "./pages/aptitude/Logical";
import Probability from "./pages/aptitude/Probability";
import Reasoning from "./pages/aptitude/Reasoning";

import Google from "./pages/interview/Google";
import Amazon from "./pages/interview/Amazon";
import TCS from "./pages/interview/TCS";
import Deloitte from "./pages/interview/Deloitte";

import StartTest from "./pages/StartTest";
import TakeTest from "./pages/TakeTest";
import TestSummary from "./pages/TestSummary";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/aptitude" element={<Aptitude />} />
      <Route path="/coding" element={<Coding />} />
      <Route path="/interview" element={<Interviewquestions />} />
      <Route path="/mocktest" element={<Mocktest />} />
      <Route path="/mockinterview" element={<Mockinterview />} />
      <Route path="/trackme" element={<Trackme />} />
      <Route path="/contact" element={<Contact />} />

      {/* Aptitude topics */}
      <Route path="/aptitude/verbal" element={<Verbal />} />
      <Route path="/aptitude/quant" element={<Quant />} />
      <Route path="/aptitude/logical" element={<Logical />} />
      <Route path="/aptitude/probability" element={<Probability />} />
      <Route path="/aptitude/reasoning" element={<Reasoning />} />

      {/* Interview questions by company */}
      <Route path="/interview/google" element={<Google />} />
      <Route path="/interview/amazon" element={<Amazon />} /> 
      <Route path="/interview/tcs" element={<TCS />} />
      <Route path="/interview/deloitte" element={<Deloitte />} />

      <Route path="/start-test" element={<StartTest />} />
      <Route path="/take-test" element={<TakeTest />} />
      <Route path="/test-summary" element={<TestSummary />} />
      <Route path="/interview-summary" element={<InterviewSummary />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />


    </Routes>
  );
}
