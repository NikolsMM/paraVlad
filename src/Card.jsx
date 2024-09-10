import profilePic from './assets/react.svg'
import PropTypes from 'prop-types'

function Card(props){

    return(
        <div className="card">
            <img alt="Uwu" src={profilePic} className="card-image"></img>
            <h2>Nikols</h2>
            <p>Estoy aprendiendo a programar para ser rice</p>
            <p>Numero: {props.name}</p>
            <p>Edad: {props.age}</p>
            <p>Trabajande: {props.isTrabajande ? "Yes" : "No :/"} </p>
        </div>
    );

}


Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.string,
    isTrabajande: PropTypes.bool,
}

Card.defaultProps = {
    name : "uWu",
    age : "not petit!!",
    isTrabajande : true,
}
export default Card