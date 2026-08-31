const { json } = require("sequelize");
const  mailTransport = require("../http/providers/sender.js");

module.exports = {
    sendcode: (to, data)=>{
        
        let response =  mailTransport(
            "reset_password.ejs",
            {   
                to: to,
                subject : "teste d'envoie de code"
            },
            data

        );  
        return  response;
        
    }
}