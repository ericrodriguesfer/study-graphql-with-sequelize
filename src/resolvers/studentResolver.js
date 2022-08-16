import Hobbies from "../models/Hobbies.js";
import Student from "../models/Student.js";

const studentResolver = {
  Query: {
    async getStudent(root, { id }) {
      return await Student.findByPk(id);
    },

    async getAllStudents(root, args) {
      return await Student.findAll();
    },
  },

  Mutation: {
    async createStudent(root, { first_name, email }) {
      return await Student.create({
        first_name,
        email,
      });
    },
  },

  Student: {
    async hobbies(student) {
      return await Hobbies.findAll({
        where: { student_id: student.dataValues.id },
      });
    },
  },
};

export default studentResolver;
