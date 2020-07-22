import { DataTypes } from 'sequelize';

import sequelize from '../database'

const User = sequelize.define('user', {
    nome: DataTypes.TEXT,
    email: DataTypes.TEXT,
})

export default User;

