import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

let date = new Date()

const Transaction = db.define('transactions', {

    id_trans: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content_code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Votre champ est vide, veuillez remplir ce champ svp" },
            notNull: { msg: "Ceci est un champ obligatoire !" }
        }
    },
    reception: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Votre champ est vide, veuillez remplir ce champ svp" },
            notNull: { msg: "Ceci est un champ obligatoire !" }
        }
    },
    annulation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Votre champ est vide, veuillez remplir ce champ svp" },
            notNull: { msg: "Ceci est un champ obligatoire !" }
        }
    },
    suppression: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Votre champ est vide, veuillez remplir ce champ svp" },
            notNull: { msg: "Ceci est un champ obligatoire !" }
        }
    },
    montant: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Votre champ est vide, veuillez remplir ce champ svp" },
            notNull: { msg: "Ceci est un champ obligatoire !" }
        }
    },
    exp_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Votre champ est vide, veuillez remplir ce champ svp" },
            notNull: { msg: "Ceci est un champ obligatoire !" }
        }
    },
    statut: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Votre champ est vide, veuillez remplir ce champ svp" },
            notNull: { msg: "Ceci est un champ obligatoire !" }
        }
    },
    dateCreate:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Votre champ est vide, veuillez remplir ce champ svp" },
            notNull: { msg: "Ceci est un champ obligatoire !" }
        }
    }
}, {
    freezeTableName: true,
    timetamps: true,
    createdAt: false,
    updatedAt: false
});

export default Transaction;

(async () => {
    await db.sync();
})();