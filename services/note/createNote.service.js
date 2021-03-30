const Note = require("../../models/Note")

module.exports = {
    async createNote(note) {
        try {
            return await Note.create({note})
        } catch(err) {
            console.log(err)
        }
    }
}