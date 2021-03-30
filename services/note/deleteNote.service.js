const Note = require("../../models/Note")

module.exports = {
    async note(id) {
        try {
            return await Note.destroy({where : {id}})
        } catch(err) {
            console.log(err)
        }
    }
}