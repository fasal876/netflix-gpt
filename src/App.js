import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./utilities/appStore";
const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
