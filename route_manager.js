const base_url = require("./config/app").base_url;
const user_route = require("./routes/user_route");
const realstate_route = require("./routes/realestate_route");
const subscription_route = require("./routes/subscription_route");
const company_route = require("./routes/company_route");
const localization_route = require("./routes/localization_route");
const app_config_route = require("./routes/app_config");
const pub_route = require("./routes/pub_route");
const promotional_route = require('./routes/promotional_route');
const routeManager = (app) => {

    app.use(base_url, pub_route);
    app.use(base_url, user_route);
    app.use(base_url, realstate_route);
    app.use(base_url, company_route);
    app.use(base_url, subscription_route);
    app.use(base_url, localization_route);
    app.use(base_url, app_config_route);
    app.use(base_url, promotional_route);
}

module.exports = routeManager;