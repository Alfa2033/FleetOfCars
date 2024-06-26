const { express } = require('../dependencies/Dependencies')
const authorization = require('../middleware/Authorization')
const CarController = require('../controllers/CarController')
const UserController = require('../controllers/UserController')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('hola')
})

router.post('/register', async (req, res) => {
  const register = await UserController.Register({
    username: req.body.username,
    password: req.body.password
  })
  res.status(register.StatusCode).json(register)
})

router.post('/login', async (req, res) => {
  const login = await UserController.Login({
    username: req.body.username,
    password: req.body.password
  })

  if (login.IsOk) {
    res.cookie('access-token', login.Content, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 5 * 60000
    })
  }
  res.status(login.StatusCode).json(login)
})

router.post('/register-car', authorization, async (req, res) => {
  const register = await CarController.Register({
    licensePlate: req.body.licensePlate,
    year: req.body.year,
    model: req.body.model,
    state: req.body.state,
    userId: req.body.userId,
    trademark: req.body.trademark
  })

  res.status(register.StatusCode).json(register)
})

router.post('/update-car', authorization, async (req, res) => {
  const update = await CarController.Modify({
    year: req.body.year,
    carId: req.body.carId,
    model: req.body.model,
    state: req.body.state,
    userId: req.body.userId,
    trademark: req.body.trademark,
    licensePlate: req.body.licensePlate
  })

  res.status(update.StatusCode).json(update)
})

router.post('/delete-car', authorization, async (req, res) => {
  const deleteCar = await CarController.Delete(req.body.userId, req.body.carId)
  res.status(deleteCar.StatusCode).json(deleteCar)
})

router.get('/show-cars', authorization, async (req, res) => {
  const show = await CarController.Show(req.body.userId)
  res.status(show.StatusCode).json(show)
})

module.exports = router
