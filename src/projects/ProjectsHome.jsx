import {Route} from 'react-router-dom';
//import React, { useState } from 'react';

import CardItem from "../components/CardItem";
import HTMLNotes from './HTMLNotes';
//import HandsOnHTML from './HandsOnHTML';
//const [isHTMLNotesClicked, setIsHTMLNotesClicked] = useState(false);

const ProjectsHome = () => {
  return (
    <section>
      <h2>This is Projects Home!</h2>

      <>
        <CardItem
        path='./HTMLNotes'
        text='#1 HTML Series: HTML Notes'
        description='This is the description of the card'
        //onClick={() => setIsHTMLNotesClicked(true)}
        />
        {/*
        <Route path = '/projects/HTMLNotes' element={<HTMLNotes />} />
         {isHTMLNotesClicked && <HTMLNotes />} */}
        
      </>
    
      <CardItem
      path='/HandsOnHTML'
      text='#2 HTML Series: File Structures in an HTML Project'
      description='This is the description of the card'
      />
     
    </section>     
  );
}

export default ProjectsHome;