import {Sequelize} from 'sequelize';

const db = new Sequelize('onyobt_bd', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;