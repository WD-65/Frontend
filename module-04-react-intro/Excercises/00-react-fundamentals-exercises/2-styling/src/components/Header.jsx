import Navigation from "./Navigation.jsx";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h1 style={{ color: "blue" }}>My Website!</h1>
      <Navigation />
    </header>
  );
};

export default Header;
