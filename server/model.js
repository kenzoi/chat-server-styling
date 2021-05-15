// const db = require('../data.json');
const {
  Sequelize,
  DataTypes
} = require('sequelize');

// create instance of sequelize defining the connection parameters
const sequelize = new Sequelize('postgres://gilreich1:postgres@localhost:5432/mydb');

// make the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// define model
const MessagesModel = sequelize.define('Message', {
  content: {
    type: DataTypes.STRING
  },
  authorId: {
    type: DataTypes.BOOLEAN
  }
});

MessagesModel.sync();

async function getMessages() {
  try {
    const messages = await MessagesModel.findAll();
    return messages;
  } catch (err) {
    console.log(err);
  }
}

function saveMessage(msg) {
  try {
    MessagesModel.create(msg);

  } catch (err) {
    console.log(err)
  }
}


module.exports = {
  getMessages,
  saveMessage
};
