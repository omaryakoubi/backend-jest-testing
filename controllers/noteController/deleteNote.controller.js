const services = require("../../services/note")

module.exports = {
    async note(req, res) {
        try {
            const { id } = req.params
            const existingNote = await services.get.noteById(id)

            if (existingNote) {
                await services.delete.note(id)
                return res.status(200).json({status: true, message:"note deleted", data: existingNote})
            } else {
                return res.status(200).json({status: false, message:"note not exist"})
            }
        } catch(err) {
            console.log(err)
            return res.status(500).json({status: false, message: err})
        }
    }
}