const Sequelize = require('sequelize');
const db = require('../db');
const { STRING } = Sequelize.DataTypes;
const Project = db.define('project', {
  projectname: {
    type: STRING,
    unique: true,
    imgURL: {
      type: STRING,
      defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIg60j4m6mAJW12mkD9B8O8j3bw7z6QdyOOA&usqp=CAU',
    },
  },
});
module.exports = Project;
