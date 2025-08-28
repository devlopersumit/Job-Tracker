import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import Analytics from "./pages/Analytics";
import Header  from "./components/Header";

 function App() {
  return (
    <div className="min-h-full bg-gray-50 text-gray-900">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
