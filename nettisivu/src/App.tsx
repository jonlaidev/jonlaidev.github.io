import Header from './components/Header.tsx';
import LeftColumn from './components/LeftColumn.tsx';
import ContentContainer from './components/ContentContainer.tsx';
import Footer from './components/Footer.tsx';
import './output.css';

const App = () => {
  return (
    <div className="px-2" id= "cv-content">
      <Header />
      <div className="flex">
        <LeftColumn />
        <div className="flex">
          <ContentContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;