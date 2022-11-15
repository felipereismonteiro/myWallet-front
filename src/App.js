import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./mainComponents/reset";
import SignUp from "./signUpPage/signUpPage";
import SignIn from "./singnInPage/signIn";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
