(() => {
    const path = require('path');
    const express = require('express');
    const bodyParser = require('body-parser')
    const getWorld = require('gol-kata');

    const PORT = process.env.PORT || 8080
    const app = express();

    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.use(bodyParser.json())

    app.post('/api/world', (req, res) => {
        const currentWorld = req.body.world;
        const nextWorld = getWorld(currentWorld);
        res.status(200).json({ world: nextWorld });
    });

    app.get('*', (req, res) => {
        return res.sendFile(path.join(__dirname, '..', 'public/index.html'));
    });

    app.listen(PORT, () => {
        console.log('listening on ' + PORT);
    });
})();