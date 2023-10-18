var express = require('express');
const register  = require('../controller/registercontoller');
const  login = require('../controller/logincontroller');
var router = express.Router();

/* GET home page. */
router.post('/',register.register);
router.get('/login',login.login);
router.get('/logout',login.logout);

module.exports = router;