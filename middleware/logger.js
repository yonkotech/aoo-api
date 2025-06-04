const logger = (req, res, next)=>{
    console.log('[${new Date().toISOSting()}] ${req.method} ${req.url}');
}

module.exports=logger;