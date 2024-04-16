const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.get('/api',(req,res)=>{
    const data = [
        {
            id:1,
            name:'DDLJ',
            'image':'https://m.media-amazon.com/images/M/MV5BMDQ2ZmE2NTMtZDE3NC00YzFjLWJhNmEtMDEzMTI5ZjU2ZGM0XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_FMjpg_UX1000_.jpg'
           , download:'https://1filmyworld.nl/download-dilwale-dulhania-le-jayenge-1995/'
        },
        {
            id:2,
            name:'The Meg',
            image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTujYPyE3QTlXWYko4E_s2GPwjDazPzM8Cur7ZaQZcKBd21L3n7oNhOjgERupqE1B05PEPpFtI8I-7ziSPaC6QwWPKrTNDhKJlYQ98Nhw',
            download:'https://1filmyworld.nl/download-the-meg-2018-480p-720p/'
        },
        {
            id:3,
            name:'Insidious Chapter 3',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExuGcn-edMWin_07tEpNCqxkwIgQ4_h5OOuwJsglOKQ&s',
            download:'https://1filmyworld.nl/download-insidious-chapter-3-2015-hindi-english-bluray-480p-720p-1080p/'
        },
        {
            id:4,
            name:'The Dark Knight',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fOu_a9FfHMAtcRSb0occx_1hYoJgLNTnoTl4Nb7ogQ&s',
            download:'https://1filmyworld.nl/download-the-dark-knight-2008-480p-720p/'
        },
        {
            id:5,
            name:"RA.ONE",
            image:'https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/x/v/u/small-spos7405-poster-ra-one-shahrukh-sl-7406-wall-poster-13x19-original-imaghnjpyyxfv3pj.jpeg?q=20&crop=false'
            ,download:'https://1filmyworld.nl/download-ra-one-2011-hindi-full-movie-bluray-480p-400mb/'
        }
    ]
    res.json(data)
})
// app.post()
// app.put()
app.listen(3004,()=>{
    console.log('listening on port 3004')
})
module.exports = app