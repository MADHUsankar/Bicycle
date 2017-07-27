const path = require("path")
const users = require("./../controllers/users.js")
const bikes = require("./../controllers/bicycles.js")

module.exports =(app) => {

    app.post("/register",users.register)
     app.post("/login",users.login)


     app.post("/addbike",bikes.addbike)
     app.post("/bikes/updateBike",bikes.updateBike)
     app.post("/bikes/deleteBike",bikes.deleteBike)
     app.get('/getAllUserBikes', bikes.allUserBikes)
      app.get('/checkadmin', users.checkadmin)
          app.get('/getAllBikes', bikes.getAllBikes);
          app.get("/products/:title", bikes.getOne)
     app.get("/logout",users.logout)
    app.get('*', (req,res) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
})

}