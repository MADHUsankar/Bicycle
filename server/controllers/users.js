const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = {
   register: (req, res, next) => {
        let u = new User(req.body);
        console.log("insertbef",u)
        u.save()
        .then((user) => { 
            console.log("insert",user)
            req.session.name = user.first_name;
            req.session.user_id = user._id;
            res.json(true); })
        .catch((err) => { res.status(409).json(err) });
    },
    logout: (req, res) => {
		req.session.destroy()
        res.redirect("/")}
,
 checkadmin: (req, res, next) => {
     if (req.session.admin="admin"){
           console.log("admin get");
        res.json(true)
     }
 },


	 login: function(req, res, next){
        console.log("in login function ************************")
        if(!req.session.fails){
            req.session.fails = 0;
        }
        let nowtime = Date.now()
        if(req.session.fails == 5){
            console.log("in fails equal 5")
            req.session.timer = Date.now()
            req.session.fails++
            console.log(req.session.timer)
            console.log(req.session.timer > (req.session.timer - (60*60*1000)))
            res.status(500).json(req.session.fails)
        } else if (nowtime < (req.session.timer+(60*1000))){
            console.log("in else if nowtime less than")
            req.session.fails++;
            res.status(500).json(req.session.fails)
        } else {
            console.log("in else")
            User.findOne({emailid: req.body.emailid})
            .then( user => {
                if(!user){
                    req.session.fails++;
                    console.log("PLease reg")
                    res.status(500).json(req.session.fails)
                } else {
                    if(user.password != req.body.password){
                        console.log("bad password")
                        res.status(500).json(req.session.fails)
                    } else {
                        console.log("login success controller");
                        console.log(user._id);
                        req.session.name = user.first_name;
                        req.session.user_id = user._id;
                        req.session.user_id = user._id;
                        if (user.emailid= "admin@admin.com")
                            {
                                req.session.admin = "admin"
                                console.log("admin set",  req.session.admin);
                            
                            }
                        res.json(true);
                        console.log("session login",req.session.user_id);
                    }
                }
            })
        
     
		}}
    
	// }
}