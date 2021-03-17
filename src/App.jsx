import Footer from 'modules/Footer';
import GlobalLoading from 'modules/GlobalLoading';
import Header from 'modules/Header';
import Routes from './routes';

const App = () => (
  <>
    <GlobalLoading />
    <Header />
    <Routes />
    <Footer />
  </>
);

export default App;
