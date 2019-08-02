import "@babel/polyfill"
// starting the server
import app from './app'
// starting the database
import './db'

async function main() {
    try {
        await app.listen(app.get('port'))
        console.log(`server on port ${app.get('port')}`)
    } catch (error) {
        console.error(error)
    }
}

main()