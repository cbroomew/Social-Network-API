const router = require('express').Router();
const {
  getAllUsers,
  getOneUser,
  addUser,
  editUser,
  removeUser,
  addFriend,
  removeFriend,
} = require('../controllers/userCtrl');

router.route('/').get(getAllUsers).post(addUser);
router.route('/:id').get(getOneUser).put(editUser).delete(removeUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
