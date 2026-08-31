const uniqueId = require('../utils/uniqueId.utils');
const sendSMS = require("../sms/sms_request");

module.exports = {
	identifier : (req, res)=>{
		user_id = 202230001123;
		identifier = uniqueId.generateUniqueIdentifier(user_id, 10);
		
		return res.json({
			identifier: identifier
		});
	},
	telCode: async (req, res)=>{
		const to = req.body.to;
		const content = req.body.content;
		//const response = await sendTelCode.sendeTelConfirmationCode(to, content);
		//console.log("le response xxxxxxxxxxxxxxxxxx ", response);
		
	}
}