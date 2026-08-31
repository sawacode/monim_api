const  sms = require("../http/providers/sendsms");

module.exports = {
	sendeTelConfirmationCode: async (to, content)=>{
		try{
			let response = await sms(to,content);
			return response;
		}catch(error){
			console.log(error);
		}
		
	}
}