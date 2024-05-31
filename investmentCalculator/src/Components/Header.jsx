import logo from "../asset/imgss.png";
export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Random image" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
