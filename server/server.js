import express from 'express';
import 'dotenv/config';

export const app = express();
app.use(express.json());

if (!process.env['VITE']) {
    const frontendFiles = process.cwd() + '/dist'
    app.use(express.static(frontendFiles))
    app.get('/*', (_, res) => {
        res.send(frontendFiles + '/index.html')
    })
    app.listen(8080)
}