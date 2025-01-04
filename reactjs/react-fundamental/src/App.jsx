import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <>
      <div className="App">
        <Article name="Naruto" titles={["Hinata Hyuga", "Tsunade", "Jiraiya"]} />
        <hr />
        <Article name="Sasuke" titles={["Sakura Haruno", "Orochimaru", "Kakashi"]} />
      </div>
    </>
  );
}

export default App;
