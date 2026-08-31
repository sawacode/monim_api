const { json } = require("sequelize");
const  mailTransport = require("../http/providers/sender.js");
module.exports = {
	payment_request_confirmation: (to, data)=>{
		let response =  mailTransport(
            "payment_request_confirmation.ejs",
            {   
                to: to,
                subject : "Paiement de pack"
            },
            data

        );  
        
        return  response;
	},
    validationPaymentRequest: async (to, data)=>{
        let response = await mailTransport(
            "validation_notification_payment.ejs",
            {   
                to: to,
                subject : "Validation du paiement de pack"
            },
            data

        );  
        
        return  response;
    }
}