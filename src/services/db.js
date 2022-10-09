import {Sequelize} from "sequelize";

const sequalize = new Sequelize('postgres', 'postgres', 'postgres', {
    port: 5431,
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

export default sequalize;
