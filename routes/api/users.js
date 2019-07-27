//主要用于Login登录 register 注册
const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");   //加密
const bcrypt = require("bcryptjs");   //加密
const User = require("../../models/User");
const keys = require("../../config/keys");
const gravatar = require('gravatar');  //头像
const jwt = require("jsonwebtoken");  //token
const passport = require("passport");

// $route  GET api/users/test
// @desc   返回的请求的json数据
// @access public
router.get('/test',(req,res) => {
    res.json({msg:"logon users test"})
})

// $route  POST /api/users/register
// @desc   返回的请求的json数据
// @access public
router.post('/register', (req, res) => {
    // 查询数据库中是否拥有邮箱
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json( '邮箱已被注册!');
        } else {
            const avatar = gravatar.url(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar,
                password: req.body.password,
                identity: req.body.identity
            });

            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;

                    newUser.password = hash;

                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// $route  POST /api/users/login
// @desc   返回的请求的json数据 token jwt
// @access public

router.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    //查询数据库
    User.findOne({email:req.body.email}).then(user => {
        //判断用户是否存在
        if(!user){
            return res.status(404).json("用户不存在")
        }
        //密码匹配
        bcrypt.compare(password, user.password).then(isMath =>{
            if(isMath) {
                const rule = {
                    id: user.id, 
                    name: user.name, 
                    avatar: user.avatar,
                    identity: user.identity
                }; 
                jwt.sign(rule, keys.secretOrKey,{expiresIn:3600},(err,token) =>{
                    if(err) throw err;
                    res.json({
                        success:true,
                        token: "Bearer "+token   //最后返回token值
                    })
               })
            } else {
                return res.status(400).json("密码不存在")
            }
        })
    })
})

// $route  GET /api/users/current
// @desc   返回用户信息
// @access private

router.get('/current',passport.authenticate('jwt', { session: false }),
    (req, res) => {
        res.json({
            id: req.user.id,
            name: req.user.name,
            email: req.user.email,
            identity: req.user.identity
        });
    }
);

module.exports = router;