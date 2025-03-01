const router = require('express').Router();
const {
  getAllThoughts,
  getOneThought,
  addThought,
  editThought,
  removeThought,
  addResponse,
  removeResponse,
} = require('../controllers/thoughtCtrl');

router.route('/').get(getAllThoughts).post(addThought);
router.route('/:id').get(getOneThought).put(editThought).delete(removeThought);
router.route('/:thoughtId/responses').post(addResponse);
router.route('/:thoughtId/responses/:responseId').delete(removeResponse);

module.exports = router;
