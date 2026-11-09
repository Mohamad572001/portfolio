import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <Home />
      <Footer />
    </LanguageProvider>
  );
}
