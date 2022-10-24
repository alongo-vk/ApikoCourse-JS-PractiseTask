import './App.css';

import AppItem from './components/AppItem';
import AppWrapper from './components/AppWrapper';
import Image from './components/Image';

import turtles from './constants';
import getItemDescription from './utils';

function App() {
  return (
    <div className="App">
      <div className="nothing">Nothing</div>
      <AppWrapper title="React Turtles">
        {turtles.map((turtle, index) => (
          <AppItem
            key={index}
            name={turtle.name}
            description={getItemDescription(turtle.nickName, turtle.weapon)}
            Image={<Image imgUrl={turtle.imgUrl} />}></AppItem>
        ))}
      </AppWrapper>
    </div>
  );
}

export default App;
