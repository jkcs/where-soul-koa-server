const jdbcUtils = require('mysql')
// 创建 mysql 连接池资源

const pool = jdbcUtils.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'where_soul'
})

export const query = function (sql: string, arr: any) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err: any, connection: { query: { (arg0: any, arg1: any, arg2: (error: any, results: any, fields: any) => void): void; (arg0: any, arg1: (error: any, results: any, fields: any) => void): void; }; release: { (): void; (): void; }; }) {
      if (err) {
        reject(err)
      }
      // 三个参数时
      connection.query(sql, arr, function (error, results, fields) {
        connection.release()
        if (error) {
          reject(error)
        }
        resolve(results)
      })
    })
  })
}
