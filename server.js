const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const passport = require("passport"); //验证token
//引入users.js
const users = require('./routes/api/users');
//引入profiles.js
const profiles = require("./routes/api/profiles");
//staff.js
const staff = require("./routes/api/staff");


app.get('/', (req, res) => {
	res.send('Hello World');
});

// 引入DB config
const db = require('./config/keys').mongoURI;

//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//链接MongoDB
mongoose
	.connect(
		db,
		{ useNewUrlParser: true }
	)
	.then(() => {
		console.log('MongoDB Connected链接成功');
	})
	.catch(err => console.log(err));

//引入passport初始化
app.use(passport.initialize());
require("./config/passport")(passport);

// 使用routes
app.use('/api/users', users);
app.use("/api/profiles", profiles);
app.use("/api/staff", staff);



const port = process.env.PORT || 5000; //地址

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
