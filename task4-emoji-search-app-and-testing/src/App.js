import  Container  from "./components/Container";
import { EmojiProvider } from "./context/EmojiContext";

function App() {
  return (
    <div className="App" >
      <EmojiProvider>
        <Container/>
      </EmojiProvider>
    </div>
  );
}

export default App;
