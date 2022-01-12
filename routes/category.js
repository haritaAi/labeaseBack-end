const express = require('express');
const router = express.Router();

const {isAuthenticated,isAdmin,isSignedIn} = require('../controllers/auth')
const {getUserById} = require('../controllers/user')
const {getCategories,createCategory,
        updateCategory,deleteCategory} = require('../controllers/category')


router.param("userId",getUserById);

router.get('/category',getCategories)

router.post('/category/create/:userId',isSignedIn,isAuthenticated,isAdmin,createCategory)

router.put('/category/update/:userId',isSignedIn,isAuthenticated,isAdmin,updateCategory)

router.delete('/category/delete/:userId',isSignedIn,isAuthenticated,isAdmin,deleteCategory)


module.exports = router;