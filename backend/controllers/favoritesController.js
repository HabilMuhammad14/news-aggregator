import pool from '../config/db.js'
const getFavorites = async (req, res) => {
    try{
        let result = await pool.query('SELECT * FROM favorites ORDER BY created_at DESC')
        res.status(200).json({
            success: true,
            message: 'Data Berhasil Didapatkan',
            data: result.rows
        })
    }catch(err){
        console.error('Terjadi Error')
        res.status(400).json({
            success: false,
            message: 'Terjadi Kesalahan pada Server'
        })
        
    }
}
const addFavorite = async (req, res) => {
    const {article_url, title, description, image_url, source_name, published_at} = req.body;
    try{
        const result = await pool.query(`INSERT INTO favorites (article_url, title, description, image_url, source_name, published_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [article_url, title, description, image_url, source_name, published_at])
        if(result.rows[0].length === 0){
            res.status(400).json({
                success: false,
                message: 'Data Gagal Didapatkan'
            })
        }
        res.status(200).json({
            success: true,
            message: 'Data Berhasil Didapatkan',
            data: result.rows[0]
        })
    }catch(err){
        console.error('Terjadi Error')
        res.status(400).json({
            success: false,
            message: 'Terjadi Kesalahan pada Server'
        })
    }
}
const removeFavorite = async (req, res) => {
    const {id} = req.params;
    try{
        const result = await pool.query(`DELETE FROM favorites WHERE id = $1`, [id])
        res.status(200).json({
            success: true,
            message: 'Data Berhasil Dihapus',
        })
    }catch(err){
        console.error('Terjadi Error')
        res.status(400).json({
            success: false,
            message: 'Terjadi Kesalahan pada Server'
        })
    }
}

export default {getFavorites, addFavorite, removeFavorite}