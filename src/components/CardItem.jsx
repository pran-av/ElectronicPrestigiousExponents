import { Link } from 'react-router-dom';

const CardItem = (props) => {
  return(
    <>
      <li className = 'cards_item'>
        <Link to={props.path}>
          <div className = 'cards_item_info'>
            <h5 className = 'cards_item_text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;