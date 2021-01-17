// const cors = require('cors')

// const whitelist = [process.env.DOMAIN_REMOTE, process.env.DOMAIN_LOCAL, '*']

// const corsOptions = {
//     origin: (origin, cb) => {
//         const originIsWhitelisted = whitelist.includes(origin)
//         cb(null, originIsWhitelisted)
//     }, credentials: true

// }

// module.exports = app => app.use(cors(corsOptions))

module.exports = app => {
    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.DOMAIN_REMOTE);
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept');
    next();
});
}

