const notes = require("../../models/notes")

module.exports = {
    async note(id) {
        try {
            return await notes.destroy({id})
        } catch(err) {
            console.log(err)
        }
    }
}