import { Component } from '../../core/decorator/ContainerDecorator'
import { Value } from '../../core/decorator/YamlDecorator'
import Log from "../../core/model/log/Log"

const mysqlUtils: any = require('mysql')

@Component
export default class JDBCActuator {
  @Value('db.host')
  private host: string
  @Value('db.database')
  private database: string
  @Value('db.username')
  private username: string
  @Value('db.password')
  private password: string

  private pool: any

  constructor () {
    this.initPool()
  }

  private initPool () {
    this.pool = mysqlUtils.createPool({
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'where_soul'
    })
    this.test()
  }

  private async test () {
    try {
      await this.query('select 1')
      Log.i('MySQL connection succeeded')
    } catch (e) {
      Log.e(e)
    }
  }

  /* eslint no-dupe-class-members: "off" */
  public query (sql: string): Promise<any>;
  public query (sql: string, arr?: Array<any>): Promise<any>;
  public query (sql: string, arr?: Array<any>): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.pool.getConnection((err: any, connection: any) => {
        if (err) {
          reject(err)
          return
        }
        if (arr) {
          connection.query(sql, arr, function (error: any, results: any) {
            connection.release()
            if (error) {
              reject(error)
            }
            resolve(results)
          })
        } else {
          connection.query(sql, function (error: any, results: any) {
            connection.release()
            if (error) {
              reject(error)
            }
            resolve(results)
          })
        }
      })
    })
  }
}
