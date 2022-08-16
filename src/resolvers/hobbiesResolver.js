import Hobbies from "../models/Hobbies.js";
import Student from "../models/Student.js";

const hobbiesResolver = {
  Query: {
    async getHobbies(root, { id }) {
      return await Hobbies.findByPk(id);
    },
  },

  Mutation: {
    async createHobbies(root, { student_id, title }) {
      return await Hobbies.create({ student_id, title });
    },
  },

  Hobbies: {
    async student(Hobbies) {
      return await Student.findOne({
        where: { id: Hobbies.dataValues.student_id },
      });
    },
  },
};

export default hobbiesResolver;
