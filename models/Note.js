const { DataTypes } = require('sequelize');
const db = require("../config/db.config")

const Note = db.define('Note', {
  note: {
    type: DataTypes.STRING,
    allowNull: false
  },
})

Note.sync({ force: true })

module.exports = Note