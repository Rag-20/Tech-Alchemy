import {useState} from 'react';
import Web3 from 'web3';

function Login() {
    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    async function connectToMetaMask() {
        try {
            await window.ethereum.request({method: 'eth_requestAccounts'});
            const web3 = new Web3(window.ethereum);

            // Check if user is connected
            const accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                setIsConnected(true);
                console.log('Connected to MetaMask:', accounts[0]);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function handleLoginClick() {
        if (!isMetaMaskInstalled) {
            window.location.href = 'https://metamask.io/download.html';
        } else {
            connectToMetaMask();
        }
    }

    // Check if MetaMask is installed
    window.addEventListener('load', () => {
        if (typeof window.ethereum !== 'undefined') {
            setIsMetaMaskInstalled(true);
        }
    });

    return (
        <center> {
            !isMetaMaskInstalled && (
                <>
                    <p>Please install MetaMask to continue.</p>
                    <button onClick={handleLoginClick}>Download MetaMask</button>
                </>
            )
        }
            {
            isMetaMaskInstalled && !isConnected && (
                <button onClick={handleLoginClick}>Connect with MetaMask</button>
            )
        } </center>
    );
}

export default Login;
