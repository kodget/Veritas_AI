import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEnvelope,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import Claims from "./pages/Claims";
import Layout from "./components/layouts/Layout";

// Add them globally
library.add(faUser, faEnvelope, faPlus, faXmark);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Claims />} />
          <Route path="/about" element={<Reports />} />
          <Route path="/contact" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
