import './App.css';
import Data from "./wpapi.json";

function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', {
    month: 'long',
  });
}

function App() {
  return (
    <div className="App">

    <div class="p-strip row">

    <div class="row u-align--left u-equal-height">

      <div class="p-card--highlighted col-small-4 col-medium-3 col-4 magenta-border">

        <p class="p-text--x-small-capitalised">
          { Data[0]._embedded['wp:term'][3][0].name }
        </p>

        <hr class="u-no-paddding"></hr>

        <div className="card-content">

        <div class="u-crop--16-9">
          <img src={Data[0].featured_media} alt="Unable to display image" />
        </div>

        <h2 class="p-heading--4">
          <a href={Data[0].link}> {Data[0].title.rendered} </a>
        </h2>

        <p class="p-heading--6"> By <a href={Data[0]._embedded.author[0].link}> {Data[0]._embedded.author[0].name} </a> on {Data[0].date.substring(8, 10)} {toMonthName(Data[0].date.substring(5, 7))} {Data[0].date.substring(0, 4)}</p>

        </div>

        <hr class="u-no-paddding-top"></hr>

        <p>
          { Data[0]._embedded['wp:term'][0][0].name }
        </p>

      </div>
      
      <div class="col-small-4 col-medium-3 col-4 p-card--highlighted magenta-border">

        <p class="p-text--x-small-capitalised">
          { Data[1]._embedded['wp:term'][3][0].name }
        </p>

        <hr class="u-no-paddding"></hr>

        <div className="card-content">

        <div class="u-crop--16-9">
          <img src={Data[1].featured_media} alt="Unable to display image" />
        </div>

        <h2 class="p-heading--4">
          <a href={Data[1].link}> {Data[1].title.rendered} </a>
        </h2>

        <p class="p-heading--6"> By <a href={Data[1]._embedded.author[0].link}> {Data[1]._embedded.author[0].name} </a> on {Data[1].date.substring(8, 10)} {toMonthName(Data[1].date.substring(5, 7))} {Data[1].date.substring(0, 4)}</p>

        </div>

        <hr class="u-no-paddding-top"></hr>

        <p>
          { Data[1]._embedded['wp:term'][0][0].name }
        </p>

      </div>
      

      <div class="col-small-4 col-medium-3 col-4 p-card--highlighted magenta-border">

        <p class="p-text--x-small-capitalised">
          { Data[2]._embedded['wp:term'][1][0].name }
        </p>

        <hr class="u-no-paddding"></hr>

        <div className="card-content">

        <div class="u-crop--16-9">
          <img src={Data[2].featured_media} alt="Unable to display image" />
        </div>

        <h2 class="p-heading--4">
          <a href={Data[2].link}> {Data[2].title.rendered} </a>
        </h2>

        <p class="p-heading--6"> By <a href={Data[2]._embedded.author[0].link}> {Data[2]._embedded.author[0].name} </a> on {Data[2].date.substring(8, 10)} {toMonthName(Data[2].date.substring(5, 7))} {Data[2].date.substring(0, 4)}</p>

        </div>

        <hr class="u-no-paddding-top"></hr>

        <p>
          { Data[1]._embedded['wp:term'][0][0].name }
        </p>

      </div>
      
    
 
    </div>

    </div>

    </div>
  );
}

export default App;
