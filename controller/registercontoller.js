var login =require('../model/registermodel');

exports.register=async (req,res)=>
{
    try {
        var data=await login.create(req.body);
        res.status(200).json(
        {
            status:"Login successfully"
        })

    } catch (error) {
        res.status(404).json(
            {
                error
            })
    }
}