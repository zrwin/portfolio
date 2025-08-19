// src/App.jsx
import "./App.css";
import React, { useState, useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Progress } from "@/components/ui/progress"
// Lazy load the sections
const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

// Shimmer Loader using shadcn Skeleton
function Shimmer() {
  const [progress, setProgress] = useState(13)
  useEffect(() => {
    const timer = setTimeout(() => setProgress((prev)=> (prev>= 100 ? 100: prev+80)), 100)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="flex justify-center items-center h-120">
      {/* <Progress value={33} /> */}
      <Progress  className="h-4 bg-white shadow-white border-1 border-gray-500   rounded-full w-[60%] max-w-90" value={progress} />
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Shimmer />}>
        <Home />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
