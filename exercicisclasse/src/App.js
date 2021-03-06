import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import llista from "./pages/llista";
import store from "./pages/ComptadorRedux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {llista.map((item) => (
              <Route key={item.path} path={item.path} element={item.Element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
