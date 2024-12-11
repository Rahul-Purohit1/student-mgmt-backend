import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Student from './Student.js';

const Mark = sequelize.define('Mark', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    student_id : {type : DataTypes.INTEGER, allowNull:false},
    mark: { type: DataTypes.INTEGER, allowNull: false },
});

// Mark.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });
(async () => {
    const { default: Student } = await import('./Student.js');
    Mark.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });
})();

export default Mark;