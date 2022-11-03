import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/configure/configureStore"
import App from "./App";
import GlobalStyles from "./global/GlobalStyle";
import {RecoilRoot} from 'recoil'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RecoilRoot>
        <App />
        <GlobalStyles />
      </RecoilRoot>
    </Provider>
  </QueryClientProvider>
);