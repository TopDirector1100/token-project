import { useWeb3React } from '@web3-react/core';
import Authenticated from "./Authenticated";
import Unauthenticated from "./Unauthenticated";

function Account() {
  const { library } = useWeb3React()

  if (library) 
    return <Authenticated />

  return <Unauthenticated />
  
}

export default Account;
