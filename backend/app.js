import express from 'express';
import cors from 'cors';
import favorites from './routes/favorites.js'
import news from './routes/news.js'
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/news', news)
app.use('/api/favorites', favorites)
app.listen(5000, () => {
    console.log('Server Berjalan Pada Port 5000')
});