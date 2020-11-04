const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Clients = sequelize.define("clients",{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(120),
        validate: {
            len: [10,120]
        }
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING(40),
        validate:{
            notEmpty: true,
            isDecimal: true,
            isLowercase: true,
            isUppercase: true,
            notNull: true,
            len: [5,40]
        }
    },
    access: {
        allowNull: false,
        type: Sequelize.CHAR
    },
    createdAt: {
        allowNull: true,
        type: Sequelize.DATE
    },
    updateAt:{
        allowNull: true,
        type: Sequelize.DATE
    }

});

module.exports = Clients;