// const path = require('path');
let storage = require('./backend');

const router = app => {
    app.post('/add/list', async (req, res) => {
        if (req.body) {
            let data = await storage.addList(req.body.title);
            res.status(200).send(data);
        }
    });

    app.get('/all', async (req, res) => {
        let data = await storage.getAll();
        res.status(200).send(data);
    });

    app.put('/update/:id', async (request, response) => {
        response.status(200).send({ message: 'Ответ бека: put запрос' });
    });

    app.delete('/delete/:id', async (request, response) => {
        response.status(200).send({ message: 'Ответ бека: del запрос' });
    });
}

module.exports = router;
