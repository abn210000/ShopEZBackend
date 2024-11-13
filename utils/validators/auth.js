const { body } = require('express-validator');

const authValidators = {
    register: [
        body('email')
            .isEmail()
            .withMessage('Please provide a valid email')
            .normalizeEmail(),
      
        //Ethan can you check password hashing
        body('password')
            .isLength({ min: 8 })
            .withMessage('Password must be at least 8 characters long')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
            .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
        
        body('customerName')
            .trim()
            .notEmpty()
            .withMessage('Customer name is required')
            .isLength({ min: 2, max: 50 })
            .withMessage('Customer name must be between 2 and 50 characters'),
        
        body('phoneNo')
            .matches(/^\d{10}$/)
            .withMessage('Phone number must be exactly 10 digits'),
            
        // Address validation
        body('street').trim().notEmpty().withMessage('Street address is required'),
        body('city').trim().notEmpty().withMessage('City is required'),
        body('state').isLength({ min: 2, max: 2 }).withMessage('State must be 2 characters'),
        body('zipcode').matches(/^\d{5}$/).withMessage('Zipcode must be 5 digits'),
        body('country').trim().notEmpty().withMessage('Country is required')
    ],

    login: [
        body('email')
            .isEmail()
            .withMessage('Please provide a valid email')
            .normalizeEmail(),
      
        //Ethan can you check password hashing
        body('password')
            .notEmpty()
            .withMessage('Password is required')
    ],
//Ethan can you check password hashing
    changePassword: [
        body('currentPassword')
            .notEmpty()
            .withMessage('Current password is required'),
            
        body('newPassword')
            .isLength({ min: 8 })
            .withMessage('New password must be at least 8 characters long')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
            .withMessage('New password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
    ]
};

module.exports = authValidators;
