//主要用于Login登录 register 注册
const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const Staff = require('../../models/Staff')
const passport = require("passport");

// $route  GET api/staff/test
// @desc   返回的请求的json数据
// @access public
router.get("/text", (req, res) => {
  res.json({ msg: "staff" });
});


// $route  POST api/staff/add
// @desc   添加数据内容
// @access public

router.post('/add',passport.authenticate('jwt', { session: false }),(req,res) => {
	const staffInformation = {};
	if(req.body.name) staffInformation.name = req.body.name;
	if(req.body.sex) staffInformation.sex = req.body.sex;
	if(req.body.state) staffInformation.state = req.body.state;
	if(req.body.hobby) staffInformation.hobby = req.body.hobby;
	if(req.body.marriage) staffInformation.marriage = req.body.marriage;
	if(req.body.birthday) staffInformation.birthday = req.body.birthday;
	if(req.body.address) staffInformation.address = req.body.address;
	
	new Staff(staffInformation).save().then(staff => {
    console.log(staff);
    res.json(staff);
  });
})

// $route  GET api/staff
// @desc   获取所有的数据
// @access public

router.get("/", passport.authenticate("jwt", { session: false }),(req,res) => {
	Staff.find().then(staff => {
		if(!staff) {
			return res.status(400).json("没有任何数据存在")
		}
		return res.json(staff)
	}).catch(err => {
		return res.status(404).json(err)
	})
});

// $route  GET api/staff/:id
// @desc   获取单个数据源数据内容
// @access public

router.get("/:id", passport.authenticate("jwt", { session: false }),(req,res) => {
	Staff.findOne({ _id: req.params.id }).then(staff =>{
		if(!staff) {
			return res.status(400).json("数据不存在")
		}
		res.json(staff)
	}).catch(err => {
		return res.status(404).json(err)
	})
});


// $route  POST api/staff/edit/:id
// @desc   编辑个人信息
// @access public

router.post("/edit/:id", passport.authenticate("jwt", { session: false }),(req,res) => {

	const staffInformation = {};
	if (req.body.name) staffInformation.name = req.body.name;
	if (req.body.sex) staffInformation.sex = req.body.sex;
	if (req.body.state) staffInformation.state = req.body.state;
	if (req.body.hobby) staffInformation.hobby = req.body.hobby;
	if (req.body.marriage) staffInformation.marriage = req.body.marriage;
	if (req.body.birthday) staffInformation.birthday = req.body.birthday;
	if (req.body.address) staffInformation.address = req.body.address;
	
	//更新数据内容
	Staff.findByIdAndUpdate({ _id: req.params.id }, { $set: staffInformation }, { new: true })
    .then(staff => {
      if (!staff) {
        return res.status(400).json("数据不存在");
      }
     res.json(staff);
    })
    .catch(err => {
      return res.status(404).json(err);
    });
});


// $route  POST api/staff/delete/:id
// @desc   删除单个信息
// @access public

router.delete("/delete/:id", passport.authenticate("jwt", { session: false }),(req,res) => {

	Staff.findByIdAndRemove({_id:req.params.id}).then(staff =>{
		staff.save().then(staff => {
			res.json(staff)
		})
	}).catch(err => {
		return res.status(404).json(err)
	})

});



module.exports = router;