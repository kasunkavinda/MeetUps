import classes from './CustomCard.module.css';

function CustomCard(props){
    return <div className = {classes.customCard}>{props.children}</div>
}

export default CustomCard;