import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'primeicons/primeicons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from 'react-query';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from "primereact/passthrough/tailwind";
import { FavoriteProvider } from './contexts/FavoriteContext';
import ReactGA from "react-ga4";

const GOOGLE_TRACKING_ID = "AW-10893380975";
// const GOOGLE_TRACKING_ID = "UA-29589788-27";
ReactGA.initialize(GOOGLE_TRACKING_ID);
ReactGA.send({ 
  hitType: "pageview", 
  page: window.location.pathname 
});

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoriteProvider>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <App />
      </PrimeReactProvider>
    </QueryClientProvider>
  </FavoriteProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
