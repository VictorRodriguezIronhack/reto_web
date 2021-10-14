import "../App.css";
import Button from "react-router-dom"


function HomePage() {
 
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome</h1> 
       <a href="/phones">List</a>
      </header>
    </div>
  );
}

export default HomePage;
