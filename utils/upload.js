const multer = require('multer');
const fs = require('fs');
const directory = 'medias/';


module.exports = {
    media: (foldername) => {
        
        let folder = foldername? directory+foldername : directory;

        try {
            // Vérifier si le dossier existe déjà
            if (!fs.existsSync(folder)) {
                // Créer le dossier
                fs.mkdirSync(folder);
            }
            // Configurer Multer pour gérer le téléchargement de fichiers
            const storage = multer.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, folder); // Le dossier où les fichiers téléchargés seront stockés
                },
                filename: (req, file, cb) => {
                    
                    cb(null, Date.now() + '-' + file.originalname); // Nom du fichier lorsqu'il est stocké
                },
            });
            const upload = multer({ storage: storage });
            return upload;
        } catch (err) {
            
            return {
                "status": 500,
                "error": "File upload problem"
            };
        }
    }
}