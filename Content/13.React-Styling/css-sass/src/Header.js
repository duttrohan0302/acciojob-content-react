function Header() {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    }
  return (
    <div>
        <h1 style={{color: "red", backgroundColor: "blue"}}>Hello Style</h1>
        <h2 style={myStyle}>Hello Style in another way</h2>
        <p>Add a little style</p>
    </div>
  );
}



export default Header;
