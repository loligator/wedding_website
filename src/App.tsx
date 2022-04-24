import Tabs from './Components/Tabs/tabs';
import MainImage from './Components/MainImage/mainimage';
import PageStyles from './Pages/page.module.css';
import cx from 'classnames';

import fountainImg from './images/fountain.jpg'

function App() {
  return (
    <div className={cx(PageStyles.mainColumn)}>
      
      <Tabs tablist={{
        Home: "/",
        RSVP: "/rsvp",
        Gallery: "/gallery",
        "Things to do": "/things-to-do"
      }}/>
      <MainImage src={fountainImg}/>
    </div>
  );
}

export default App;
