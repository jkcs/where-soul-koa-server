const mysql = require('mysql')
// 创建 mysql 连接池资源

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test'
})

exports.query = function (sql, arr, callback) {
  if (!sql || !arr) return
  // 建立链接
  pool.getConnection(function (err, connection) {
    if (err) throw err
    if (callback) {
      // 三个参数时
      connection.query(sql, arr, function (error, results, fields) {
        connection.release()
        if (error) throw error
        // 执行回调函数，将数据返回
        callback(results, fields)
      })
    } else {
      // 两个参数时
      let fn = arr
      connection.query(sql, function (error, results, fields) {
        connection.release()
        if (error) throw error
        // 执行回调函数，将数据返回
        fn && fn(results, fields)
      })
    }
  })
}
