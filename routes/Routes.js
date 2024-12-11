// import express from 'express';
// import {
//     createStudentWithMark,
//     getStudents,
//     getStudentById,
//     updateStudent,
//     deleteStudent,
// } from '../controllers/studentController.js';

// const router = express.Router();

// router.post('/', createStudentWithMark);
// router.get('/', getStudents);
// router.get('/:id', getStudentById);
// router.put('/:id', updateStudent);
// router.delete('/:id', deleteStudent);

// export default router;



import express from 'express';
import {
  createStudentWithMark,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from '../controllers/studentController.js';

const router = express.Router();

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Create a new student with marks
 *     description: Add a new student and their marks to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Rahul Purohit
 *               email:
 *                 type: string
 *                 example: rahul@gmail.com
 *               age:
 *                 type: number
 *                 example: 24
 *               mark:
 *                 type: number
 *                 example: 85
 *               parent_id:
 *                 type: number
 *                 example: 10
 *     responses:
 *       201:
 *         description: Student created successfully
 */
router.post('/', createStudentWithMark);

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     description: Retrieve a list of all students.
 *     responses:
 *       200:
 *         description: A list of students
 */
router.get('/', getStudents);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     description: Retrieve a student by their unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the student
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student details retrieved successfully
 *       404:
 *         description: Student not found
 */
router.get('/:id', getStudentById);

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Update a student's information
 *     description: Update a student's details by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the student to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Rahul Purohit
 *               email:
 *                 type: string
 *                 example: rahul@gmail.com
 *               age:
 *                 type: number
 *                 example: 24
 *               parent_id:
 *                 type: number
 *                 example: 10
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       404:
 *         description: Student not found
 */
router.put('/:id', updateStudent);


/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Delete a student by ID
 *     description: Remove a student from the database by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the student to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 */
router.delete('/:id', deleteStudent);

export default router;
