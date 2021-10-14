const cors = require('cors')

const whiteList = [process.env.ORIGIN]

const corsOptions = {
    origin: (origin, cb) => {
        const isOriginWhiteListed = whiteList.includes(origin);
        cb(null, isOriginWhiteListed)
    },
    credentials: true
}
module.exports = (app) => app.use(cors(corsOptions))