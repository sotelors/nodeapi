//console.log("word");
import express from 'express';
const app = express();

/*
app.listen(3000, () => {
    console.log('Server on port', 3000)
})
*/

import indexRoutes from './routes/index'

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(indexRoutes);

app.listen(3000);
console.log('server on port', 3000);