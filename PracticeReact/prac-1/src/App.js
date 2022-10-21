import './App.css';

import image from './images/logo.png';

import AppItem from './components/AppItem';
import AppWrapper from './components/AppWrapper';
import Image from './components/Image';

function App() {
  return (
    <div className="App">
      <div className="nothing">Nothing</div>
      <AppWrapper title="Кобилан Вадим" />
      <AppItem name="Club" description="This is our club" Image={<Image imgUrl={image} />} />
    </div>
  );
}

export default App;
