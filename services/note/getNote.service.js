const notes = require("../../models/notes")

module.exports = {
    async noteById(id) {
        try {
            return await notes.findByPk(id)
        } catch(err) {
            console.log(err)
        }
    }
}