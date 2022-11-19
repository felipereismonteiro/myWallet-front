import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contexto } from "./Context/Context";
import { GlobalStyle } from "./mainComponents/reset";
import NewEntry from "./newEntryPage/newEntry";
import NewExit from "./newExitPage/newExit";
import SignUp from "./signUpPage/signUpPage";
import SignIn from "./singnInPage/signIn";
import Wallet from "./walletPage/wallet";

function App() {
  const [token, setToken] = useState();
  const [dataEntry, setDataEntry] = useState([]);
  const [dataExit, setDataExit] = useState([]);

  useEffect(() =>{
    setInterval(async () => {
      try {
        if (token === undefined) {
          return false;
        }
        await axios.put(
          "http://localhost:5000/update",
          { lastStatus: Date.now() },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    }, 5000);
  },[token])

  return (
    <Contexto.Provider value={[token, setToken, dataEntry, setDataEntry, dataExit, setDataExit]}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/myWallet" element={<Wallet/>}/>
        <Route path="/newEntry" element={<NewEntry />}/>
        <Route path="/newExit" element={<NewExit />}/>
      </Routes>
    </BrowserRouter>
    </Contexto.Provider>
  );
}

export default App;
