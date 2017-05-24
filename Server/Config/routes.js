playerController = require('../Controllers/playerController');
userController = require('../Controllers/userController');
module.exports = (app) => {
    app.post('/new_user', (req, res) => {
        userController.newUser(req, res);
    });
    app.post('/login_user', (req, res) => {
        userController.loginUser(req, res);
    });

    
};