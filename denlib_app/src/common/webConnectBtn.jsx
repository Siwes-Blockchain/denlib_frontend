import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';
import React, { useContext } from 'react';

export default function ConnectButton() {
    const { address, isConnecting} = useAccount();

  
    // Retrieve the connected account from the context
    const connectedAccount = address || ''; // Ensure it's a string
  
    // Define the number of characters to show at the beginning and end
    const startCharacters = 4;
    const endCharacters = 3;
  
    // Extract the starting and ending parts of the address
    const startPart = connectedAccount.slice(0, startCharacters);
    const endPart = connectedAccount.slice(-endCharacters);
  
    // Create the masked address with dots in the middle
    const maskedAddress = address? `${startPart}...${endPart}`: '';

 
  // 1. Use modal hook
  const { open, account, chainId } = useWeb3Modal()
   
   return (
    <div>


    
        <div >
          <button className='py-2 px-3 border-2 rounded-xl m-4 text-[16px] hover:scale-105' onClick={() => open()}>
            {
                address?
                <span className='flex items-center'>Connected <div className='w-[6px] h-[6px] rounded-full bg-green-400 ml-3 mr-1'></div> <div className='text-[15px]'>{maskedAddress}</div></span>
                
                :
                <span>Connect Wallet </span>
            }
            
            </button>

          <div>
             {
                isConnecting? <div>Connecting…</div> : ""
            }
          </div>
        
         
          
          {/* <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button> */}
        </div>
    </div>
  )
}