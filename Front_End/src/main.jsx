import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import AppRouter from "./AppRouters";
import Auth0ProviderwithNav from "./auth/Auth0ProviderwithNav";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      {/* QueryClientProvider is a component that provides the query client and hoooks to the rest of the application */}
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderwithNav>
          <AppRouter />
          <Toaster visibleToasts={1} position="top-right" richColors />
        </Auth0ProviderwithNav>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
