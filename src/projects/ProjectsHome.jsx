import {useHistory} from 'react-router-dom';

import CardItem from "../components/CardItem";
//import HTMLNotes from './HTMLNotes';
//import HandsOnHTML from './HandsOnHTML';

export default function ProjectsHome() {
  const history = useHistory();

  function handleClick() {
    history.push("/HTMLNotes");
  }
  return (
      <>
        <h2>Welcome to Projects Home!</h2>
        <CardItem
        path='./HTMLNotes'
        text='#1 HTML Series: HTML Notes'
        description='This is the description of the card'
        />
        <button onClick={handleClick}>Read</button>
    
      </>   
  );
}