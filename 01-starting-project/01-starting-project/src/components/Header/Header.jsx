import "./Header.css";

export default function Header({ image }) {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
