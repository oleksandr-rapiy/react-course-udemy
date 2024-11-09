import logo from '../../assets/react-core-concepts.png'
import './Header.css'

function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const reactDesc = ["Fundamental", "Crucial", "Essential", "Important"];

  const randomIndex = getRandom(reactDesc.length - 1);
  const randomDesc = reactDesc[randomIndex];
  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDesc} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
