import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contexto } from "./Context/Context";
import { GlobalStyle } from "./mainComponents/reset";
import NewEntry from "./newEntryPage/newEntry";
import SignUp from "./signUpPage/signUpPage";
import SignIn from "./singnInPage/signIn";
import Wallet from "./walletPage/wallet";

function App() {
  const [token, setToken] = useState();
  const [data, setData] = useState([]);

  return (
    <Contexto.Provider value={[token, setToken, data, setData]}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/myWallet" element={<Wallet/>}/>
        <Route path="/newEntry" element={<NewEntry />}/>
      </Routes>
    </BrowserRouter>
    </Contexto.Provider>
  );
}

export default App;
