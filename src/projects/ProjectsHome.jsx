import CardItem from "../components/CardItem";
import HTMLNotes from './HTMLNotes';
import HandsOnHTML from './HandsOnHTML';

const ProjectsHome = () => {
  return (
    <section>
      <h2>This is Projects Home!</h2>
      
      <CardItem
      path='./HTMLNotes'
      text='#1 HTML Series: HTML Notes'
      description='This is the description of the card'
      />
      <CardItem
      path='../projects/HandsOnHTML'
      text='#2 HTML Series: File Structures in an HTML Project'
      description='This is the description of the card'
      />
     
    </section>     
  );
}

export default ProjectsHome;