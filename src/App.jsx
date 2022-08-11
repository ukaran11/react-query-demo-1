import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import Characters from "./Components/Characters";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Rick And Morty</h1>
        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
