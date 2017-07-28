const mongoose = require("mongoose")
const Bike = mongoose.model('Bicycle');
const User = mongoose.model('User');

module.exports = {

     addbike: (req, res, next) => {
        let b = new Bike(req.body);
        b.user_id = req.session.user_id;
        b.save()
        .then(() => { res.json(true); })
        .catch((err) => { res.status(501).json(err); });
    },

    deleteBike: (req, res, next) => {  
        let b = new Bike(req.body);
        Bike.remove(b)
        .then(() => { res.json(true); })
        .catch((err) => { res.status(504).json(err); })
    },

    updateBike: (req, res, next) => {
        let b = new Bike(req.body);
        Bike.findByIdAndUpdate(b._id, b)
        .then(() => { res.json(true); })
        .catch((err) => { res.status(503).json(err); })
    },


    allUserBikes: (req, res, next) => {
        console.log("please va",req.session.user_id)
        Bike.find({user_id: req.session.user_id})
        .then((allBikes) => { res.json(allBikes); })
        .catch((err) => { res.status(502).json(err); });
    },
        getAllBikes: (req, res, next) => {
        Bike.find({}) 
        .then((allBikes) => { res.json(allBikes); })
        .catch((err) => { res.status(502).json(err); });
    },
    getOne: (request, response)=>{
        foo =request.params.title
        console.log('foo',foo)
    Bike.findOne({'title' : foo})
    .then((product) => { response.json(product); })
    .catch((err) => { response.status(502).json(err);  
    })
  },


    
}