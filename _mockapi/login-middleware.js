module.exports = (req, res, next) => {
    if (req.method == 'POST' && req.path == '/auth/sign_in') {
      if (req.body.email === 'test@email.com' && req.body.password === 'abc') {
        res.status(200).json({
            token : 'tokenxxx'
        })
      } else {
        res.status(400).json({message: 'wrong password'})
      }
    } else {
      next()
    }
  }