const Note = require("../../models/Note")

module.exports = {
    async noteById(id) {
        try {
            return await Note.findByPk(id)
        } catch(err) {
            console.log(err)
        }
    }
}