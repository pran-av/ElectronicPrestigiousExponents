import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <hr />
      <nav>
        <Link to = "/">HOME</Link>
        <Link to = "blogs">BLOGS</Link>
        <Link to = "projects">PROJECTS</Link>
        <Link to = "stories">STORIES</Link>
      </nav>
      <p>Copyright: Pranav Mandhare dot com</p>
    </footer>
  );
}

export default Footer;