import { Fragment, useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import AccountDetails from './AccountDetails';
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";
import { getEllipsisTxt } from "../../helpers/formatters";
import { useWeb3React } from '@web3-react/core';
import { ethers } from "ethers";

const Authenticated = () => {
  const { library, account } = useWeb3React()
  const [balance, setBalance] = useState();
  // const { walletAddress, chainId } = useMoralisDapp();
  const [chainId, setChainId] = useState(0);
  const [accountDetailsDialogOpen, setAccountDetailsDialogOpen] = useState(false);

  const getBalance = async () => {
    const bal = await library.getBalance(account);
    setBalance(ethers.utils.formatUnits(bal, 18).toString());
  }

  useEffect(() => {
    if (library) {
      getBalance()
    }

    if(!library.provider) {
      return
    }

    setChainId(library.provider.chainId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [library, account])

  const handleAccountDetailsDialogToggle = () => {
    setAccountDetailsDialogOpen(!accountDetailsDialogOpen);
  };

  return (
    <Fragment>
      <Chip
        label={getEllipsisTxt(account, 6)} 
        onClick={handleAccountDetailsDialogToggle} 
        sx={{fontWeight: 500}}
      />
      <AccountDetails 
        accountDetailsDialogOpen={accountDetailsDialogOpen}
        handleAccountDetailsDialogToggle={handleAccountDetailsDialogToggle}
        data={{balance, account, chainId}}
      />
    </Fragment>
  );
}
 
export default Authenticated;
