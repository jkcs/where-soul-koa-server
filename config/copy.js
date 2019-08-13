const fs = require('fs')
const { resolve } = require('path')
function copySomeThing (source, target) {
  fs.copyFile(source, target, err => {
    if (err) {
      console.error('config copy error please see' + err)
      return
    }
    console.info('config copy success')
  })
}

;(function () {
  const source = resolve(__dirname, './application.yaml')
  let dirPath = resolve(__dirname, '../dist/config')
  const target = resolve(dirPath, './application.yaml')

  let isExist = fs.existsSync(dirPath)
  if (isExist) {
    copySomeThing(source, target)
  } else {
    fs.mkdir(dirPath, function (error) {
      if (error) {
        console.log(error)
        return
      }
      copySomeThing(source, target)
    })
  }
})()
