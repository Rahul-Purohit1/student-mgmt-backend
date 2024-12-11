import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Mark from './Mark.js';

const Student = sequelize.define('Student', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
    parent_id: { type: DataTypes.INTEGER, allowNull: true },
});

Student.hasMany(Mark, { foreignKey: 'student_id' });

export default Student;