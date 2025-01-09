import "./App.css";
import HomePage from "./pages/Index";
import { GlobalContext } from "./context";

function App() {
  const user = {
    username: "Naruto",
  };

  return (
    <>
      <div className="App">
        <GlobalContext.Provider value={user}>
          <HomePage />
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;
