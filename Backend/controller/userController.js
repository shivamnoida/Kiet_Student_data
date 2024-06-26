import User from "../model/User.js";


const create = async (req, res) => {
  try {
    const userData = new User(req.body);

    
    if (!userData) {
      return res.status(400).json({ message: "Invalid user data" });
    }

    
    const savedData = await userData.save();
    res.status(201).json(savedData);
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
};


const getdata = async (req, res) => {
  try {
  
    const users = await User.find();

   
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

   
    res.status(200).json(users);
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedData) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

 
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

 }

 const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export { create, getdata, update , deleteUser ,getUserById };
