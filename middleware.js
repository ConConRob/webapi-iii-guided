function  addTeam(req, res, next){
  req.team = "EU1"
  next()
}

function  logger(req, res, next){
  console.log('===========PROTOCOL=============')
  console.log(req.protocol)
  console.log('===========METHOD=============')
  console.log(req.method)
  console.log('===========URL=============')
  console.log(req.originalUrl)
  console.log('===========PARAMS=============')
  console.table(req.params)
  console.log('===========BODY=============')
  console.table(req.body)
  next()
}

function auth(req,res,next){
  token = req.headers.authorization;
  if(token === "eu1"){
    next()
  }
  else {
    res.status(401).json({message:"YOU DON'T KNOW MY PASSWORD :P"})
  }
}

module.exports = {addTeam, logger, auth}