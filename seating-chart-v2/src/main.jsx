import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppContext from "./components/Context.jsx";
// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AppContext>
      <App />
    </AppContext>
  </QueryClientProvider>
);
