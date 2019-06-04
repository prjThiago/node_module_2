const path = require('path')
const crypto = require('crypto')
const multer = require('multer')

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, result) => {
        if (err) return cb(err)

        cb(null, result.toString('hex') + path.extname(file.originalname))
      })
    }
  })
}
