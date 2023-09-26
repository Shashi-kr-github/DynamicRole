const bcrypt = require('bcryptjs');
const UserModel = require('../../models/User.model');
const generate = require('../../utils/generateToken');
const RoleModel = require('../../models/User.Role')

const signup = async (req, res) => {
  try {
    const { username, role } = req.body;
    let { password } = req.body;

    let checkIsRoleExixst = await RoleModel.find({role});
    if(!checkIsRoleExixst){
      checkIsRoleExixst = await RoleModel.create({ role});
    }
      
    

    const isUserAlreadyRegistered = await UserModel.find({
      username,
    });
    if (isUserAlreadyRegistered.length) {
      return res.status(403).send({
        message: 'username already exists',
      });
    }

    
    password = await bcrypt.hash(password, 12);

    
    const user = await UserModel.create({
      username,
      password,
      role : checkIsRoleExixst._id,
    });

    // Generate auth token
    const token = generate(user);
    return res.status(200).send({
      message: 'User is registered successfully',
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).send(error);
  }
};

module.exports = signup;
