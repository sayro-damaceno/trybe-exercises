import './App.css';
import './Header'
import './Content';
import './Footer';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className='content'>  
      <Header />
      <Content />
      <Footer />
    </div>  
  );
}

export default App;
