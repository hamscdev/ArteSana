const express = require("express")

const routesUser = require("../controllers/UserController.js")
const router = express.Router()
/**
 * 
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - username
 *              - email
 *              - password
 *          properties:
 *              id:
 *                  type: string
 *                  description: auto-generated uuid
 *              username:
 *                  type: string
 *                  description: put the string name
 *              email:
 *                  type: string
 *                  description: put the string email
 *              password:
 *                  type: string
 *                  description: put the string password aes256
 * 
 * 
 */


/**
 * @swagger
 * 
 * /user:
 *  get:
 *     summary: return the user 
 *     responses:
 *          200:
 *             description: get correct user
 */

router.get("/user", routesUser.getUser)
router.post("/user", routesUser.createUser)
router.put("/user", routesUser.putUser)


export default router