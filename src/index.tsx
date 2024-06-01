import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'react-loading-skeleton/dist/skeleton.css'
import reportWebVitals from "./reportWebVitals";
import { ApplicationContextProvider } from "./store/application";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApplicationContextProvider>
    <App />
  </ApplicationContextProvider>
);
reportWebVitals();
