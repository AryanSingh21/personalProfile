import reactDOM from 'react-dom';


function Card(props){
    return(
        <div class="card shadow-lg" >
        <img src={props.img} class="card-img-top" alt="Me"></img>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.text}</p>
          <a href="#" class="btn btn-primary">{props.btn}</a>
        </div>
      </div>  
    );
}

export default Card;