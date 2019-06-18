const Router = require('express-promise-router');

const router = new Router();

router.post('/', async (req, res) => {
  // fs.appendFile('test.txt', 'Sometimes the same is different', (err) => {
  //   if (err) {
  //     console.log(err);
  //   }

  res.status(200).json({ haha: 'haha' });
});

module.exports = router;
