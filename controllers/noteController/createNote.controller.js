const services = require("../../services/note")

module.exports = {
    async createNote(req, res) {
        try {
            const { note } = req.body
            const createdNote = await services.create.createNote(note)
            return res.status(200).json({status: true, message: "note creared", data: createdNote})
        } catch(err) {
            console.log(err)
            return res.status(500).json({status: false, message: err})
        }
    }
}