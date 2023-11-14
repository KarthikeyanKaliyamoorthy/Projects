import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Homepage } from './layouts/HomePage/HomePage';
import { SearchBookPage } from './layouts/SearchBookPage/SearchBookPage';

export const App = () => {
  return (
    <div>
      <Navbar/>
      {/*<Homepage/>*/}
      <SearchBookPage/>
      <Footer/>
    </div>
    
  );
}
