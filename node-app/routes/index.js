const AppionmentService = require("../services/Appionment.Service");

const routes = {
     authRoutes: require("./auth.route"),
     postRoutes: require("./post.route"),
     userRoutes: require("./user.route"),
   LoginRegisterRoutes: require("./LoginRegister.route"),
   adminappionmentRoutes: require("./Adminappionment.route"),
   appionmentRoutes:require("./Appionment.route"),
   profileRoutes:require("./Profiles.route")

};

module.exports =routes;