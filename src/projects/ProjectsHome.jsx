import {Routes, Route, Switch} from 'react-router-dom';

import CardItem from "../components/CardItem";
import HTMLNotes from './HTMLNotes';
//import HandsOnHTML from './HandsOnHTML';

export default function ProjectsHome() {
  return (
    
      <>
        <h2>Welcome to Projects Home!</h2>
        <CardItem
        path='./HTMLNotes'
        text='#1 HTML Series: HTML Notes'
        description='This is the description of the card'
        />
        <Switch>
          <Route path = './HTMLNotes' element={<div>HTML Notes</div>} />
        </Switch>
      </>   
  );
}