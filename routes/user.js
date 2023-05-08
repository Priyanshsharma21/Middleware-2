import express from 'express'
import { isFreeAppUser } from '../middleware/index.js'
import { createUsers, getAllUsers } from '../controllers/user.js'


const router = express.Router()


router.get('/users', getAllUsers)
router.post('/user',isFreeAppUser, createUsers)

export default router