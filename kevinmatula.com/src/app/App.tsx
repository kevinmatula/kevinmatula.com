import './App.css'
import Navbar from "../components/Navbar.tsx"
import Home from './home/page.tsx'
import Terminal from "../components/Terminal.tsx"

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Terminal/>
    </>
  );
}

export default App
