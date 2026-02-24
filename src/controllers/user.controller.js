import { asyncHandler } from '../utils/asyncHandler.js';

const registerUser = asyncHandler(async (req, res) => {
    // get details from user
    // validation - notEmpty
    //check if user aleady exists: check via email and username
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


    const {username, email, fullName, password} = req.body;
    console.log("fullName ", fullName)
    res.json({
        fullName: fullName
    })

})


export {registerUser}