import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1 id='headerTitle'><em>Pranav Mandhare</em></h1>
        <nav>
          <Link to = "/">HOME</Link>
          <Link to = "blogs">BLOGS</Link>
          <Link to = "projects">PROJECTS</Link>
          <Link to = "stories">STORIES</Link>
        </nav>
        <hr />
    </header>  
  );
}

export default Header;

/*
  Link: For Internal Navigation
  a href: for external nav
  BrowserRouter not required, Link can be mapped independently
*/