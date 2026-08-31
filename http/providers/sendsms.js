const  axios = require('axios');
const config = require("../../config/app");

async function send(to, content){
	try{
		const response = await axios({
			method:'get',
			url:config.sms_api+"?token="+config.sms_token+"&from="+config.sms_from+"&to="+to+"&content="+content,
			
			timeout: 10000
		});
		return response.data;
	}catch(error){
		 if (error.response) {
      // La requête a été faite et le serveur a répondu avec un code d'erreur
      	console.error('Erreur API:', error.response.status, error.response.data);
	    } else if (error.request) {
	      // La requête a été faite mais aucune réponse n'a été reçue
	      console.error('Pas de réponse du serveur');
	    } else {
	      // Une erreur s'est produite lors de la configuration de la requête
	      console.error('Erreur de configuration:', error.message);
	    }
	    throw error;
		}
}

module.exports = send;