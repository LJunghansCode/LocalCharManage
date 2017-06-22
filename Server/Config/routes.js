playerController = require('../Controllers/playerController');
userController = require('../Controllers/userController');
campaignController = require('../Controllers/campaignController');
module.exports = (app) => {
    //Routes for Users
    app.post('/new_user', (req, res) => {
        userController.newUser(req, res);
    });
    app.post('/login_user', (req, res) => {
        userController.loginUser(req, res);
    });
    app.get('/get_user', (req, res) => {
        userController.getUser(req, res);
    });
    app.get('/getMyPlayers', (req, res) => {
        userController.getMyPlayers(req, res);
    });
    app.get('/logout', (req, res) => {
        userController.logoutUser(req, res);
    });
    //Routes for Player Objects
    app.post('/new_player', (req, res) => {
        playerController.newPlayer(req, res);
    });
    app.post('/getPlayer', (req, res) => {
        playerController.getPlayer(req, res);
    });
    app.post('/updateAndSave', (req, res) => {
        playerController.updateAndSave(req, res);
    });
    //Routes for Campaign Objects
    app.post('/new_campaign', (req, res) => {
        campaignController.newCampaign(req, res);
    });
    app.post('/get_campaign', (req, res) => {
        campaignController.getCampaign(req, res);
    });
    app.post('/get_campaignById', (req, res) => {
        campaignController.getCampaignById(req, res);
    });
    app.post('/add_player', (req, res) => {
        campaignController.addPlayer(req, res);
    });
    
    


    
};