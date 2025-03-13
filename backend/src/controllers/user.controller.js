import { User, userValidation } from "../models/user.model.js"
import { asynchandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"



const registerUser = asynchandler(async (req, res) => {
    // Validate request body

    const { error, value } = userValidation.validate(req.body);

    if (error) {
        throw new ApiError(400, error.details[0].message);
    }

    // Check if user already exists
    const existedUser = await User.findOne({ mobile_number: value?.mobile_number });
    if (existedUser) {
        throw new ApiError(409, "User with mobile number already exists");
    }


    const createdUser = await User.create(value)

    return res.status(201).json(
        new ApiResponse(200, createdUser, `User registered successfully this is Your User Name ${value?.mobile_number}`)
    );
});



export {
    registerUser,

}