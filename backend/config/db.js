import {Pool} from 'pg';

const pool =  new Pool({
    user: "postgres",
    host: 'localhost',
    database: 'news_aggregator',
    password: 'postgres',
    port: 5432,
})

export default pool;