import './CardComp.css';

function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', {
      month: 'long',
    });
}

const CardComp = (props) => {

    return (

    <div className="CardComp">

        <p class="p-text--x-small-capitalised">
            { props.src._embedded['wp:term'][1][0].name }
        </p>

        <hr class="u-no-paddding"></hr>

        <div className="card-content">

        <div class="u-crop--16-9">
        <a href={props.src.link}>
            <img src={props.src.featured_media} alt="Unable to display image" />
        </a>
        </div>

        <h2 class="p-heading--4">
        <b>
            <a href={props.src.link}> { props.src.title.rendered } </a>
        </b>
        </h2>

        <p class="p-heading--6"> By <a href={props.src._embedded.author[0].link}> {props.src._embedded.author[0].name} </a> on {props.src.date.substring(8, 10)} {toMonthName(props.src.date.substring(5, 7))} {props.src.date.substring(0, 4)}</p>

        </div>

        <hr class="u-no-paddding-top"></hr>

        <p>
            { props.src._embedded['wp:term'][0][0].name }
        </p>

    </div>

    );
}

export default CardComp;