import './App.css';
import Button from "./components/Button";
import GlobalStyles from "./components/GlobalStyles";
function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <Button primary />
      </GlobalStyles>
    </div>
  );
}

export default App;
