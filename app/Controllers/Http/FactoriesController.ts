import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { getBalance, getNFTCertiBlockCount, getPublicKey } from 'App/Utils/SmartContractsHelper'

export default class FactoriesController {
    // Index get current balance of the wallet and the amount of NFT Certiblock created
    public async index ({ response }: HttpContextContract) {
        // Get the balance of the wallet
        const balance = await getBalance()
        // Get the amount of NFT Certiblock created
        const count = await getNFTCertiBlockCount()
        // Return the response with the address, balance and count
        return response.json({
            address: getPublicKey(),
            balance: balance,
            nftCollectionCount: count.toString()
        })
    }
}
