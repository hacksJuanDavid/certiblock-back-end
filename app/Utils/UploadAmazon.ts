// Create a directory on S3
import { Metadata } from './UploadIPFS'
import Drive from '@ioc:Adonis/Core/Drive'

const image1Close =
  'https://bafybeie2o5bxdhaxy7hcu3mvftkay3p7hdnzhwbqyybbytvjfstil4ob7u.ipfs.nftstorage.link'
const image1Open =
  'https://bafybeih5guj6lstzxdlqopayhn2pwtxsyorlyr735xyvdkwnqfiavv3vse.ipfs.nftstorage.link'
const image2Close =
  'https://bafybeifrycnq6tnu7sdgemvj3kdcmha6iz5te32jc6rz7bwdmbcmsjr5ne.ipfs.nftstorage.link'
const image2Open =
  'https://bafybeia7pu6p24pqvm2lbmk5k2w3mem3l4v62eriohn5ta3st367ejfxhq.ipfs.nftstorage.link'

export async function uploadS3(info: Metadata[]) {
  // Create json files with metadata and close image
  const files = info.map((metadata) => {
    return {
      image: metadata.type === 1 ? image1Close : image2Close,
      name: metadata.name,
      description: `Lote: ${metadata.lote} - Años: ${metadata.years} - Azúcar: ${metadata.sugar} - Mililitros: ${metadata.mililiters} - Referencia: ${metadata.reference}`,
      lote: metadata.lote,
      years: metadata.years,
      sugar: metadata.sugar,
      mililiters: metadata.mililiters,
      reference: metadata.reference,
      date: metadata.date,
      id: metadata.id,
    }
  })

  // Upload all files to S3 1 by 1
  for (const file of files) {
    await Drive.put(`close/${file.id}.json`, JSON.stringify(file))
  }

  // Create json files with metadata and open image
  const filesOpen = info.map((metadata) => {
    return {
      image: metadata.type === 1 ? image1Open : image2Open,
      name: metadata.name,
      description: `Lote: ${metadata.lote} - Años: ${metadata.years} - Azúcar: ${metadata.sugar} - Mililitros: ${metadata.mililiters} - Referencia: ${metadata.reference}`,
      lote: metadata.lote,
      years: metadata.years,
      sugar: metadata.sugar,
      mililiters: metadata.mililiters,
      reference: metadata.reference,
      date: metadata.date,
      id: metadata.id,
    }
  })

  // Upload all files to S3 1 by 1
  for (const file of filesOpen) {
    await Drive.put(`open/${file.id}.json`, JSON.stringify(file))
  }

  // get url of close_test directory
  const urlClose = await Drive.getUrl('close')

  // get url of open_test directory
  const urlOpen = await Drive.getUrl('open')

  // return urls
  return { urlClose, urlOpen }
}
