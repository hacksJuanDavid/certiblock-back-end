// Create directory on IPFS with nft.storage
import { NFTStorage, File } from 'nft.storage'
import Env from '@ioc:Adonis/Core/Env'

// initialize nft.storage client
const client = new NFTStorage({ token: Env.get('NFT_STORAGE_API_KEY') })

// Images constants
const image1Close = 'https://bafybeie2o5bxdhaxy7hcu3mvftkay3p7hdnzhwbqyybbytvjfstil4ob7u.ipfs.nftstorage.link'
const image1Open = 'https://bafybeih5guj6lstzxdlqopayhn2pwtxsyorlyr735xyvdkwnqfiavv3vse.ipfs.nftstorage.link'
const image2Close = 'https://bafybeifrycnq6tnu7sdgemvj3kdcmha6iz5te32jc6rz7bwdmbcmsjr5ne.ipfs.nftstorage.link'
const image2Open = 'https://bafybeia7pu6p24pqvm2lbmk5k2w3mem3l4v62eriohn5ta3st367ejfxhq.ipfs.nftstorage.link'

// Metadata interface
export interface Metadata {
  id: string
  type: number
  lote: string
  name: string
  years: number
  sugar: string
  mililiters: number
  reference: string
  date: string
}

export async function uploadIPFS(info: Metadata[]) {
  // convert all metadata to close image on multiple files
  const filesClose = info.map((metadata) => {
    const file = new File(
      [
        JSON.stringify({
          image: metadata.type === 1 ? image1Close : image2Close,
          metadata,
        }),
      ],
      `close/${metadata.id}.json`,
      {
        type: 'application/json',
      }
    )
    return file
  })

  // Create directory on IPFS
  const cidclose = await client.storeDirectory([filesClose])

  // convert all metadata to open image on multiple files
  const filesOpen = info.map((metadata) => {
    const file = new File(
      [
        JSON.stringify({
          image: metadata.type === 1 ? image1Open : image2Open,
          metadata,
        }),
      ],
      `open/${metadata.id}.json`,
      {
        type: 'application/json',
      }
    )
    return file
  })

  // Create directory on IPFS
  const cidopen = await client.storeDirectory([filesOpen])

  // Return cid of directory
  return { cidclose, cidopen }
}

// Create directory on IPFS with nft.storage
export async function createDirectoryIPFS(info: Metadata[]) {
  // convert all metadata to close image on multiple files
  const filesClose = info.map((metadata) => {
    const file = new File(
      [
        JSON.stringify({
          image: metadata.type === 1 ? image1Close : image2Close,
          name: metadata.name,
          description: `Lote: ${metadata.lote} - Años: ${metadata.years} - Azúcar: ${metadata.sugar} - Mililitros: ${metadata.mililiters} - Referencia: ${metadata.reference}`,
          lote: metadata.lote,
          years: metadata.years,
          sugar: metadata.sugar,
          mililiters: metadata.mililiters,
          reference: metadata.reference,
          date: metadata.date,
        }),
      ],
      `close_test/${metadata.id}.json`,
      {
        type: 'application/json',
      }
    )
    return file
  })

  // Create directory on IPFS
  const cidclose = await client.storeDirectory(filesClose)

  // convert all metadata to open image on multiple files
  const filesOpen = info.map((metadata) => {
    const file = new File(
      [
        JSON.stringify({
          image: metadata.type === 1 ? image1Open : image2Open,
          name: metadata.name,
          description: `Lote: ${metadata.lote} - Años: ${metadata.years} - Azúcar: ${metadata.sugar} - Mililitros: ${metadata.mililiters} - Referencia: ${metadata.reference}`,
          lote: metadata.lote,
          years: metadata.years,
          sugar: metadata.sugar,
          mililiters: metadata.mililiters,
          reference: metadata.reference,
          date: metadata.date,
        }),
      ],
      `open_test/${metadata.id}.json`,
      {
        type: 'application/json',
      }
    )
    return file
  })

  // Create directory on IPFS
  const cidopen = await client.storeDirectory(filesOpen, {
    
  })

  // Return cid of directory
  return { cidclose, cidopen }
}
