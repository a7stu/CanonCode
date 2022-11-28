import './App.css';
import Data from "./wpapi.json";
import CardComp from './CardComp';

const App = () => {
  return (
    <div className="App">

    <div class="p-strip row">

    <div class="row u-align--left u-equal-height">

    {Data.map((item) => {
      return <div class="p-card--highlighted col-small-4 col-medium-3 col-4 magenta-border">
              <CardComp src={item} />
             </div>
    })}

    </div>

    </div>

    </div>
  );
}

export default App;
