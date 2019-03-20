function  addTeam(req, res, next){
  req.team = "EU1"
  next()
}

module.exports = {addTeam}