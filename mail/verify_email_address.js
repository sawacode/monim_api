const { json } = require("sequelize");
const  mailTransport = require("../http/providers/sender.js");

module.exports = {
    sendcode: (to, data)=>{
        
        let response =  mailTransport(
            "verify_adresse_email.ejs",
            {   
                to: to,
                subject : "Réinitialisation du code"
            },
            data

        );  
        
        return  response;
        
    }
}