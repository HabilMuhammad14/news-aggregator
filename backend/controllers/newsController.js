const getTopHeadLines = async (req, res) =>{
    const {category} = req.query;
    try{
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2dda80d37855488d8657490473647542`)
        let data = await response.json()
        res.status(200).json({
            success: true,
            message: 'Data Berhasil Diperoleh',
            data: data
        })
    }catch(err){
        console.log(`Terjadi Error: ${err}`)
        res.status(500).json({
            success: false,
            message: 'Data Gagal Diperoleh'
        })
    }
}
const searchNews = async (req, res) => {
    const {keyword} = req.query;
    try{
        let response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=2dda80d37855488d8657490473647542`)
        let data = await response.json()
        res.status(200).json({
            success: true,
            message: 'Data Berhasil Diperoleh',
            data: data
        })
    }catch(err){
        console.log(`Terjadi Error: ${err}`)
        res.status(500).json({
            success: false,
            message: 'Data Gagal Diperoleh'
        })
        
    }
}

export default {getTopHeadLines, searchNews}