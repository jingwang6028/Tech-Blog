const router = require("express").Router();
const { User } = require("../../models");

// create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = User.create({
      name: req.body.name,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// user login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (!user) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    // check password
    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res.json({ user, message: "Your are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({ message: "No user account found!" });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
