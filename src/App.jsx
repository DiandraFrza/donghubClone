import { Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import Header from "./components/Header";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <>
      <div className="bg-[#0E0E0E] min-h-screen text-white pt-4">
        <Header />
        <main className="p-4 md:p-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />{" "}
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
