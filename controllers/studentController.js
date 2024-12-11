import {
    createStudentService,
    getAllStudentsService,
    getStudentByIdService,
    updateStudentService,
    deleteStudentService,
    AddStudentMarks,
} from '../services/studentService.js';

export const createStudentWithMark = async (req, res) => {
    const { name, email, age, parent_id, mark } = req.body;

    try {
        if (!name || !email || !age || !mark) {
            return res.status(400).json({ error: 'Name, email, age , mark are required.' });
        }
        const student = await createStudentService({ name, email, age, parent_id});
        await AddStudentMarks(student.id , mark);


        res.status(201).json({
            message: 'Student and mark created successfully',
            student,
            mark: mark,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getStudents = async (req, res) => {
    try {
        const students = await getAllStudentsService();
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch students.' });
    }
};

export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await getStudentByIdService(id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found.' });
        }
        res.status(200).json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch student.' });
    }
};

export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age, parent_id } = req.body;
        // if (!name && !email && !age) {
        //     return res.status(400).json({ error: 'At least one field (name, email, age) must be provided for update.' });
        // }

        const updated = await updateStudentService(id, { name, email, age , parent_id});
        if (!updated[0]) {
            return res.status(404).json({ error: 'Student not found.' });
        }
        res.status(200).json({ message: 'Student updated successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update student.' });
    }
};


export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteStudentService(id);
        if (!deleted) {
            return res.status(404).json({ error: 'Student not found.' });
        }
        res.status(200).json({ message: 'Student deleted successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete student.' });
    }
};


