playerController = require('../Controllers/playerController');
userController = require('../Controllers/userController');
module.exports = (app) => {
    app.post('/new_user', (req, res) => {
        userController.newUser(req, res);
    });
    app.post('/login_user', (req, res) => {
        userController.loginUser(req, res);
    });
    app.post('/new_player', (req, res) => {
        playerController.newPlayer(req, res);
    });
    app.get('/get_user', (req, res) => {
        userController.getUser(req, res);
    });
    app.get('/logout', (req, res) => {
        userController.logoutUser(req, res);
    });
    app.get('/getMyPlayers', (req, res)=> {
        userController.getMyPlayers(req, res);
    });
    
};