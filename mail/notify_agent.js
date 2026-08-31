const { json } = require("sequelize");
const  mailTransport = require("../http/providers/sender.js");
module.exports = {
	userSearchRealestate: async (to, data)=>{
		let response = await mailTransport(
            "user_search_realestate.ejs",
            {   
                to: to,
                subject : "Recherche de bien immobilier"
            },
            data

        );  
        
        return  response;
	},
}