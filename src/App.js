import NavBar from './components/NavBar';
import Masthead from './components/Masthead';
import Services from './pages/Services';
import Portofolio from './pages/Portofolio';
import About from './pages/About';
import Team from './pages/Team';
import Clients from './components/Clients';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import PortfolioModals from './portfolio modals/PortfolioModals';

function App() {
  return (
    <>
    <NavBar />
    <Masthead />
    <Services />
    <Portofolio />
    <About />
    <Team />
    <Clients />
    <Contact />
    <Footer />
    <PortfolioModals />
    </>
  );
}

export default App;
