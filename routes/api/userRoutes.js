const router = require('express').Router();
const User = require('../../models/User');

//`/api/user` 

 // find all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.find({
    });
    res.status(200).json(userData);
    console.log('get success')
  } catch (err) {
    res.status(500).json(err);
  }
});

 // find one user by their _id
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findOne({_id: req.params.id
    });

    if (!userData) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a user by their id
router.put('/:id', async (req, res) => {
  try {
    const results = await User.findOneAndUpdate({_id: req.params.id},
    {$set: req.body},
    {new: true}
    );
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a user by their id
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.findOneAndDelete({
      where: {
        _id: req.params.id,
      },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
