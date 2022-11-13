
import Env from '@ioc:Adonis/Core/Env'
import { CertiblockFactory, CertiblockFactory__factory, FLACertiblock, FLACertiblock__factory } from "App/SmartContracts";
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
// Contract FLA Certiblock 
const flaCertiblockContract:FLACertiblock = FLACertiblock__factory.connect(Env.get('FLA_CERTIBLOCK_CONTRACT_ADDRESS'), wallet)

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

// GEt public key from the wallet
export const getPublicKey = () => {
    return wallet.address
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

// Get balance NFT FLA Certiblock
export const getBalanceFLACertiBlock = async () => {
    // Get the balance of the wallet
    const balance = await flaCertiblockContract.balanceOf(wallet.address)
    // Return the balance in readable format
    return ethers.utils.formatEther(balance)
}

// Get total supply of NFT FLA Certiblock
export const getTotalSupplyFLACertiBlock = async () => {
    // Get the total supply of NFT FLA Certiblock
    const totalSupply = await flaCertiblockContract.totalSupply()
    // Return the total supply in readable format
    return totalSupply
}

// Mint FLA Certiblock
export const mintFLACertiBlock = async (amount: number) => {
    // Get the gas price
    const gasPrice = await getGasPrice()
    // Calculate the gas
    const gas = gasPrice.mul(ethers.BigNumber.from(100000))
    // Check if the wallet have gas to pay the transaction
    const isValidGas = await validateGas(gas.toNumber())
    // If the wallet have gas to pay the transaction
    if (isValidGas) {
        // Get the transaction
        const transaction = await flaCertiblockContract.mint(wallet.address, amount)
        // Wait for the transaction to be mined
        await transaction.wait()
        // Return the transaction hash
        return transaction.hash
    } else {
        // Return false if the wallet don't have gas to pay the transaction
        return false
    }
}

// Set active base URI for the FLA Certiblock
export const setActiveBaseURI = async (baseURI: string) => {
    // Get the gas price
    const gasPrice = await getGasPrice()
    // Calculate the gas
    const gas = gasPrice.mul(ethers.BigNumber.from(100000))
    // Check if the wallet have gas to pay the transaction
    const isValidGas = await validateGas(gas.toNumber())
    // If the wallet have gas to pay the transaction
    if (isValidGas) {
        // Get the transaction
        const transaction = await flaCertiblockContract.setActiveBaseURI(baseURI)
        // Wait for the transaction to be mined
        await transaction.wait()
        // Return the transaction hash
        return transaction.hash
    } else {
        // Return false if the wallet don't have gas to pay the transaction
        return false
    }
}

// Set inactive base URI for the FLA Certiblock
export const setInactiveBaseURI = async (baseURI: string) => {
    // Get the gas price
    const gasPrice = await getGasPrice()
    // Calculate the gas
    const gas = gasPrice.mul(ethers.BigNumber.from(100000))
    // Check if the wallet have gas to pay the transaction
    const isValidGas = await validateGas(gas.toNumber())
    // If the wallet have gas to pay the transaction
    if (isValidGas) {
        // Get the transaction
        const transaction = await flaCertiblockContract.setInactiveBaseURI(baseURI)
        // Wait for the transaction to be mined
        await transaction.wait()
        // Return the transaction hash
        return transaction.hash
    } else {
        // Return false if the wallet don't have gas to pay the transaction
        return false
    }
}

// Set the state to false of the FLA Certiblock by id
export const setInactiveFLACertiBlock = async (id: number) => {
    // Get the gas price
    const gasPrice = await getGasPrice()
    // Calculate the gas
    const gas = gasPrice.mul(ethers.BigNumber.from(100000))
    // Check if the wallet have gas to pay the transaction
    const isValidGas = await validateGas(gas.toNumber())
    // If the wallet have gas to pay the transaction
    if (isValidGas) {
        // Get the transaction
        const transaction = await flaCertiblockContract.setStateInactive(id)
        // Wait for the transaction to be mined
        await transaction.wait()
        // Return the transaction hash
        return transaction.hash
    } else {
        // Return false if the wallet don't have gas to pay the transaction
        return false
    }
}

// Get token URI of the FLA Certiblock by id
export const getTokenURI = async (id: number) => {
    // Get the token URI
    const tokenURI = await flaCertiblockContract.tokenURI(id)
    // Return the token URI
    return tokenURI
}
