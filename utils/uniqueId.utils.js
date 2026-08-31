module.exports = {

    generateId: () => {
        const date = new Date();
        return date.getTime();
    },
    generateUniqueCodeCaracter: (element, length) => {
        const caracteresPossibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let key = '';

        for (let i = 0; i < length; i++) {
            const caractereAleatoire = caracteresPossibles.charAt(Math.floor(Math.random() * caracteresPossibles.length));
            key += caractereAleatoire;
        }
        id = (element.replace("/\s/g","")).slice(0,5)+key;
        return id;
    },

     generateUniqueIdentifier: (element, length) => {
        const caracteresPossibles = '0123456789';
        let key = '';
        let new_length = 0;
        const element_length = element.toString().length;

        if (element_length < length) {
            new_length = length - element_length;
        }else if(element_length >= length){
            return element;
        }
     
        for (let i = 0; i < new_length; i++) {
            const caractereAleatoire = caracteresPossibles.charAt(Math.floor(Math.random() * caracteresPossibles.length));
            key += caractereAleatoire;
        }
        
        
        id = element+key;
        return id;
    },

    generateUniqueIntCode: (length) => {
        const caracteresPossibles = '0123456789';
        let code = '';

        for (let i = 0; i < length; i++) {
            const caractereAleatoire = caracteresPossibles.charAt(Math.floor(Math.random() * caracteresPossibles.length));
            code += caractereAleatoire;
        }

        return code;
    }

}