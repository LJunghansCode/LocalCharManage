playerController = require('../Controllers/playerController');
playerController = require('../Controllers/userController');
module.exports = (app) => {
    app.post('/api/newUser', (req, res) => {
        userController.newUser(req, res);
    });

    
};