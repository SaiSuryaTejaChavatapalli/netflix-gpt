import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
