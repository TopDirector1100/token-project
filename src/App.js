import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ERC20Balance from "components/ERC20Balance";
import Home from "containers/home";
import About from "containers/about";
import Gallery from "containers/gallery";
import Transactions from "containers/transactions";
import NFTs from "containers/nfts";
import "antd/dist/antd.css";
import Ramper from "./components/Ramper";
import Footer from './components/layout/Footer';
import MainNavigation from "components/layout/Header/MainNavigation";
import Swap from "containers/swap";
import Presale from "containers/pre-sale";
import Mint from "containers/mint";
import Stake from "containers/stake";

import { useWeb3React } from '@web3-react/core';

const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();
  const { library, account } = useWeb3React()

  const connectorId = window.localStorage.getItem("connectorIdv2");

  // console.log("connector id", window);

  useEffect(() => {
    if(!library)
      return;
      window.localStorage.setItem("connected", true)
      console.log("wallet", window)
  }, [library, account]);

  return (
    <BrowserRouter>
      <MainNavigation />
      <main style={{marginTop: 90, marginBottom: 90}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/swap" component={Swap} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/erc20balance" component={ERC20Balance} />
          <Route exact path="/onramp" component={Ramper} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/nfts" component={NFTs} />
          <Route exact path="/pre-sale" component={Presale} />
          <Route exact path="/mint" component={Mint} />
          <Route exact path="/stake" component={Stake} />
          <Route exact path="/nonauthenticated">
            <>Please login using the "Authenticate" button</>
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
