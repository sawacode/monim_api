const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const config = require("../../config/app");

async function mailTransport(mailTemplate, otherOption, data) {
  try {
    //Lire le contenu du fichier ejs
    const templatePath = path.join(
      __dirname,
      "../../resources/mail/" + mailTemplate
    );
    const template = fs.readFileSync(templatePath, "utf8");

    // Rendre le template avec les données dynamique
    const html = ejs.render(template, data);

    //Configurer le transporteur
    let transporter = nodemailer.createTransport({
	  host: config.host_mail,
	  port: config.port_mail,
	  secure: config.secure_mail, // true for 465, false for other ports
      service: config.service_mail,
      auth: {
        user: config.user_mail,
        pass: config.password_mail,
      },
    });

    //Fusionner les options par défaut et  otherOptions
    let option = {...otherOption, ...{
      from: config.from_mail,
      html: html,
    }};


    //Envoie de mail
    await transporter.sendMail(option, (error, res) => {
      if (error) {
    		return {
    			error: error
    		};
      } else {
        //console.log("Email envoyé: wwwwwwwwwwwwwwwwww" + res.messageId);
		return {
			message: res.messageId
		};
      }
    });
  } catch (error) {
	//console.log("Erreur mail xxxxxxxxxxxxx", error);
	return json({
		error: error
	});
	
  }
}

module.exports = mailTransport;
