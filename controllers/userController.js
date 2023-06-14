import User from '../models/User.js'


//create new User

export const CreateUser = async (req,res)=>{
    const newUser = new User(req.body)
    try{
        const savedUser = await newUser.save()

        res.status(200).json({success:true,message:'Successfully Created', data:savedUser})
    }catch(err){
        res.status(500).json({success:false,message:'Failed to create, Try again'})

    }
}

 //update User
 export const updateUser = async (req,res)=>{

    const id = req.params.id;

    try {

        const updatedUser = await User.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})

        res.status(200).json({success:true,message:'Successfully Updated', data:updatedUser})

        
    } catch (error) {
        res.status(500).json({success:false,message:'Failed to update, Try again'})

    }
 }

//delete User
 export const deleteUser = async (req,res)=>{

    const id = req.params.id

    try {

        await User.findByIdAndDelete(id);

        res.status(200).json({success:true,message:'Successfully deleted'})

        
    } catch (error) {
        res.status(500).json({success:false,message:'Failed to delete'})

    }
 }





 //getSingle User
 export const getSingleUser = async (req,res)=>{
    const id = req.params.id

    try {

        const user = await User.findById(id);

        res.status(200).json({success:true,message:'Successfully get',data:user})

        
    } catch (error) {
        res.status(404).json({success:false,message:'not found'})

    }
 }


//get ALL User
export const getAllUser = async (req,res)=>{

    //for pagination
    const page = parseInt(req.query.page)

    console.log(page);
    try {

        const users = await User.find({})

        res.status(200).json({success:true, message:'Successfull',data:users})

        
    } catch (error) {
        res.status(404).json({success:false,message:'not found'})

    }
 }