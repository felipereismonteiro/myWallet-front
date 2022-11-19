import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contexto } from "./Context/Context";
import { GlobalStyle } from "./mainComponents/reset";
import SignUp from "./signUpPage/signUpPage";
import SignIn from "./singnInPage/signIn";
import Wallet from "./walletPage/wallet";

function App() {
  const [token, setToken] = useState();
  return (
    <Contexto.Provider value={[token, setToken]}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/myWallet" element={<Wallet/>}/>
      </Routes>
    </BrowserRouter>
    </Contexto.Provider>
  );
}

export default App;
