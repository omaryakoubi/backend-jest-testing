const notes = require("../../models/notes")

module.exports = {
    async createNote(note) {
        try {
            return await notes.create({note})
        } catch(err) {
            console.log(err)
        }
    }
}