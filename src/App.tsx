import { Link } from 'react-router-dom';
import MainHero from './Components/Hero/hero';
import PageStyles from './Pages/page.module.css';

function App() {
  return (
    <div className={PageStyles.mainColumn}>
      <MainHero/>
      <Link to="/rsvp">RSVP</Link>
    </div>
  );
}

export default App;
