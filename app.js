const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

const user = {
    firstName: 'Ying toto หกดกห sddsd',
    lastName: 'potisuwan ewewee',
    admin: true
}

const posts = [
    {title: 'Title 1', bory: 'Test is body 1'},
    {title: 'Title 2', bory: 'Test is body 2'},
    {title: 'Title 3', bory: 'Test is body 3'},
    {title: 'Title 4', bory: 'Test is body 4'},
]

app.get('/', (req, res) => {
    res.render('pages/index', {
        user: user,
        title: "Home Page"
    })
})

app.get('/articles', (req, res) => {
    res.render('pages/articles', {
        articles: posts,
        title: "Articles"
    })
    
})
    
app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})