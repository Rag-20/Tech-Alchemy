import React, {useState, useEffect} from 'react';
import {ethers} from 'ethers';
import '../css/Dashboard.css'
const Dashboard = () => {
    const [account, setAccount] = useState('');
    const [balance, setBalance] = useState(0);
    const [networkName, setNetworkName] = useState('');
    const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
    const [provider, setProvider] = useState(null);
    const connectToMetamask = async () => {
        try {
            await window.ethereum.request({method: 'eth_requestAccounts'});
            const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(metamaskProvider);
            setIsMetamaskInstalled(!!window.ethereum);
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                provider.getNetwork().then(network => {
                    setNetworkName("Sepolia");
                });

                window.ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
                    setAccount(accounts[0]);

                    provider.getBalance(accounts[0]).then(balance => {
                        setBalance(ethers.utils.formatEther(balance));
                    });
                }).catch(err => console.log(err));
            }
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        setIsMetamaskInstalled(!!window.ethereum);
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            provider.getNetwork().then(network => {
                setNetworkName("Sepolia");
            });

            window.ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
                setAccount(accounts[0]);

                provider.getBalance(accounts[0]).then(balance => {
                    setBalance(ethers.utils.formatEther(balance));
                });
            }).catch(err => console.log(err));
        }
    }, []);

    return (
        <center>
            <div className='top'>
                <p className='text'>Account: {account}</p>
                <p className='text'>Balance: {balance}
                    ETH</p>
                <p className='text'>Network: {networkName}</p>
                <p id='button-container'>
                    {
                    provider ? (
                        <button onClick={
                                () => {
                                    setProvider(null)
                                    setAccount('0x')
                                    setBalance(0)
                                    setNetworkName('')
                                }
                            }
                            className='button1'>Logout</button>
                    ) : (isMetamaskInstalled ? (
                        <button onClick={connectToMetamask}
                            className='button1'>Login with Metamask</button>
                    ) : (
                        <center>
                            <p style={
                                {color: "white"}
                            }>
                                Install{' '}
                                <a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer">
                                    Metamask
                                </a>
                                {' '}
                                to use this feature
                            </p>
                        </center>
                    ))
                } </p>
            </div>
        </center>
    );
};

export default Dashboard;
