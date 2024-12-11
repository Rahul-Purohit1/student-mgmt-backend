import Student from '../models/Student.js';
import Mark from '../models/Mark.js';

export const createStudentService = async (data) => {
    return await Student.create(data);
};
export const AddStudentMarks = async (id,mark) => {
    return await Mark.create({
        student_id: id, 
        mark: mark
    });
}
export const getAllStudentsService = async () => {
    return await Student.findAll();
};

export const getStudentByIdService = async (id) => {
    return await Student.findOne({ where: {id}, include: Mark,});
      
};

export const updateStudentService = async (id, data) => {
    return await Student.update(data, { where: { id } });
};

export const deleteStudentService = async (id) => {
    return await Student.destroy({ where: { id } });
};