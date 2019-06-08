const Router = require('express-promise-router');

const router = new Router();

router.post('/', async (req, res) => {
  res.status(200).json({ haha: 'works' });
});

module.exports = router;
