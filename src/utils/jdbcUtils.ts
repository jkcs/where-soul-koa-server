const jdbcUtils: any = require('mysql')
// 创建 mysql 连接池资源

const pool: any = jdbcUtils.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'where_soul'
})

function query (sql: string): Promise<any>;
function query (sql: string, arr?: Array<any>): Promise<any>;
function query (sql: string, arr?: Array<any>): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    pool.getConnection((err: any, connection: any) => {
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

export default query
