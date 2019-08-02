import { connect } from 'mongoose'

connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('database is connected'))
    .catch(err => console.error(err))