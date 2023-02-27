import { Link } from 'react-router-dom';
import './CardItem.css';

const CardItem = (props) => {
  return(
    <>
      <ul className = 'cards_item'>
        <Link to={props.path}>
          <div className = 'cards_item_info'>
            <h3 className = 'cards_item_text'>{props.text}</h3>
          </div>
        </Link>
        <h5 className = 'cards_item_description'>{props.description}</h5>
      </ul>
    </>
  );
}

export default CardItem;