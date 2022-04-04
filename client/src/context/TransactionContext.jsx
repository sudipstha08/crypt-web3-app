/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = React.createContext()

// MetaMask injects a global API into websites visited by its users at window.ethereum
// (Also available at window.web3.currentProvider for legacy reasons).
// This API allows websites to request user login, load data from blockchains
// the user has a connection to, and suggest the user sign messages and transactions.
// You can use this API to detect the user of a web3 browser.

const { ethereum } = window

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer,
  )

  console.log('provide', provider)
  console.log('signer', signer)
  console.log('transactionContract', transactionContract)
}

export const TransactionProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState('')
  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert('Please install metamask')

    const accounts = await ethereum.request({ method: 'eth_accounts' })
    console.log('accounts', accounts)
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) alert('Please install metamask')
      const accounts = await ethereum.request({
        method: 'eth_request_Accounts',
      })
      setConnectedAccount(accounts?.[0])
    } catch (error) {
      console.log('Error in wallet connection', error)
      throw new Error('New ethereum object')
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])
  return (
    <TransactionContext.Provider value={{ connectWallet, connectedAccount }}>
      {children}
    </TransactionContext.Provider>
  )
}
