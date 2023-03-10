import Home from './pages/home';
import { ThemeProvider } from "@mui/styles";
import theme from "./theme";
import SignIn from "./pages/signIn"
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import "./mock"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="*" element={(<NotFound />)}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
