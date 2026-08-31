const { json } = require("sequelize");
const  mailTransport = require("../http/providers/sender.js");
module.exports = {
	sendMail: (template, subject, to, data)=>{
		let response =  mailTransport(
            template,
            {   
                to: to,
                subject : subject
            },
            data

        );  
        
        return  response;
	}
}