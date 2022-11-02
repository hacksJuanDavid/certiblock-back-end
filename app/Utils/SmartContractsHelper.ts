
import Env from '@ioc:Adonis/Core/Env'
import { CertiblockFactory, CertiblockFactory__factory } from "App/SmartContracts";
import { ethers } from 'ethers';

// console.log(ethers.version)
// Global provider for the app mumbai polygon network
const provider = new ethers.providers.JsonRpcProvider(Env.get('RPC_URL'))
// Private key for the wallet
const privateKey = Env.get('PRIVATE_KEY')
// Wallet for the app
const wallet = new ethers.Wallet(privateKey, provider)
// Contract factory for CertiblockFactory
const certiblockFactoryContract:CertiblockFactory = CertiblockFactory__factory.connect(Env.get('CERTIBLOCK_CONTRACT_ADDRESS'), wallet)

// Validate if the address have gas to pay the transaction, with ethers library
export const validateGas = async (gas: number) => {
    // get the balance of the wallet
    const balance = await wallet.getBalance()

    // return if the balance is greater than the gas
    return balance.gt(gas)
}

// Get the gas price from the network
export const getGasPrice = async () => {
    return await provider.getGasPrice()
}

// Check if the address wallet is admin on the certiblockFactory contract
export const isAdmin = async (address: string) => {
    // Check if the address is admin
    const isAdmin = await certiblockFactoryContract.isAdmin(address)
    // Return the result
    return isAdmin
}

// Get balance of te wallet to readable format
export const getBalance = async () => {
    // Get the balance of the wallet
    const balance = await wallet.getBalance()
    // Return the balance in readable format
    return ethers.utils.formatEther(balance)
}

// Get amount of NFT Certiblock created
export const getNFTCertiBlockCount = async () => {
    // Get the amount of NFT Certiblock created
    const count = await certiblockFactoryContract.getNFTCount()
    // Return the amount
    return count
}