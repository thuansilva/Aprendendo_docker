import { DataTypes } from 'sequelize';

import sequelize from '../database'


const Pet = sequelize.define('pet', {
    nome_pet: DataTypes.TEXT,
    raca_pet: DataTypes.TEXT,
    gender_pet: DataTypes.TEXT,
    photo_pet: DataTypes.STRING,
    description_pet: DataTypes.TEXT
})

export default Pet;


