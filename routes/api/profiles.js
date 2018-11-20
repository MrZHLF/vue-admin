//主要用于Login登录 register 注册
const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const Profile = require('../../models/Profile')
const passport = require("passport");

// $route  GET api/profiles/test
// @desc   返回的请求的json数据
// @access public
router.get("/text", (req, res) => {
  res.json({ msg: "profiles" });
});

// $route  POST  api/profiles/add
// @desc   添加数据内容
// @access public

router.post('/add', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const ProfileFields = {};

        if(req.body.type) ProfileFields.type = req.body.type;
        if (req.body.describe) ProfileFields.describe = req.body.describe;
        if (req.body.income) ProfileFields.income = req.body.income;
        if (req.body.expend) ProfileFields.expend = req.body.expend;
        if (req.body.cash) ProfileFields.cash = req.body.cash;
        if (req.body.remark) ProfileFields.remark = req.body.remark;

        new Profile(ProfileFields).save().then(profile => {
            console.log(profile)
            res.json(profile);
        })
    }
);


// $route  GET  api/profiles
// @desc   获取所有内容
// @access public

router.get("/", passport.authenticate("jwt", { session: false }),(req,res) => {
    Profile.find().then(profils => {
        if(!profils) {
            return res.status(404).json("没有任何数据存在")
        }
        res.json(profils);
    }).catch(err => {
        return res.status(404).json(err)
    })
});

// $route  GET  api/profiles/:id
// @desc   获取所有单个数据内容
// @access public

router.get("/:id", passport.authenticate("jwt", { session: false }),(req,res) => {
    Profile.findOne({_id: req.params.id}).then(profils => {
        if(!profils) {
            return res.status(404).json("数据不存在")
        }
        res.json(profils)
    }).catch(err =>{
        return res.status(404).json(err)
    })
});

// $route  POST  api/profiles/edit/:id
// @desc   编辑信息
// @access public

router.post('/edit/:id', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const ProfileFields = {};

        if (req.body.type) ProfileFields.type = req.body.type;
        if (req.body.describe) ProfileFields.describe = req.body.describe;
        if (req.body.income) ProfileFields.income = req.body.income;
        if (req.body.expend) ProfileFields.expend = req.body.expend;
        if (req.body.cash) ProfileFields.cash = req.body.cash;
        if (req.body.remark) ProfileFields.remark = req.body.remark;

        Profile.findByIdAndUpdate(
            {_id:req.params.id},
            { $set: ProfileFields},
            {new:true}
        ).then(profile => {
            if(!profile) {
                return res.status(404).json("此信息不存在")
            }
            res.json(profile)
        }).catch(err => {
            res.status(404).json(err)
        })
    }
);

// $route  GET  api/profiles/delete/:id
// @desc   获取所有单个数据内容
// @access public

router.delete("/delete/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    Profile.findByIdAndRemove({_id:req.params.id}).then(profile =>{
        profile.save().then(profile => res.json(profile));
    }).catch(err => {
        return res.status(404).json(err)
    })
});

module.exports = router;