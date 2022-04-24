import MainHero from './Components/Hero/hero';
import Tabs from './Components/Tabs/tabs';
import MainImage from './Components/MainImage/mainimage';
import PageStyles from './Pages/page.module.css';
import cx from 'classnames';

import fountainImg from './images/fountain.jpg'
import backgroundImg from './images/background.png';

function App() {
  return (
    <div className={PageStyles.backgroundImage} style={{
      backgroundImage: `url(${backgroundImg}), none`
    }}>
      <div className={cx(PageStyles.mainColumn)}>
        <MainHero/>
        <Tabs tablist={{
          Home: "/",
          RSVP: "/rsvp",
          Gallery: "/gallery",
          "Things to do": "/things-to-do"
        }}/>
        <MainImage src={fountainImg}/>
      </div>
    </div>
  );
}

export default App;
