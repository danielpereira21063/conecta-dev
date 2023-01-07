import "./index.css";
import Home from './pages/home';
import { ThemeProvider } from "@mui/styles";
import theme from "./theme";
import SignIn from "./pages/signIn"
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Login } from "@mui/icons-material";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-in" element={<Login />}></Route>
          <Route path="*" element={(<NotFound />)}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
