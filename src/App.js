import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <section className="App-section">
        <MainSection />
      </section>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
