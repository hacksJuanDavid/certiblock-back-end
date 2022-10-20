import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class QrData extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  //External id
  @column()
  public idQR: number

  //External url
  @column()
  public urlQR: string

  //Api url
  @column()
  public apiUrl: string

  //State qr
  @column()
  public stateQR: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
