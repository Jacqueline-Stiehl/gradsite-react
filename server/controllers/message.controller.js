const { Message, User } = require("../models");
const Model = Message;

//get all Message posts
async function find(criteria = {}) {
  try {
    const payload = await Model.find(criteria).populate("commentId");
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

//get Message post by id
async function findById(id) {
  try {
    const payload = await Model.findById(id);
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

// create new Message post
async function create(body) {
  try {
    const payload = await Model.create(body);
    console.log(payload);
    const userUpdate = await User.findOneAndUpdate(
      { _id: payload.userId },
      {
        $push: { myForums: payload },
      }
    );
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

// update existing Message post by id
async function updateById(id, body) {
  try {
    const payload = await Model.findByIdAndUpdate(id, body, { new: true });
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

// delete Message post by id
async function remove(id) {
  try {
    const payload = await Model.findByIdAndDelete(id);
    const userUpdate = await User.findOneAndUpdate(
      { _id: payload.userId },
      {
        $pull: { myForums: payload._id },
      },
      {
        new: true,
      }
    );
    return userUpdate;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

module.exports = {
  find,
  findById,
  create,
  updateById,
  remove,
};
