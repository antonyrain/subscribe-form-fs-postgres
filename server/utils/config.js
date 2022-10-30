require('dotenv').config()

const PORT = process.env.PORT || 3000
const URL = process.env.POSTRGES_URL

module.exports = {
    PORT, 
    URL
}