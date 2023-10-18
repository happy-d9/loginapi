var login=require('../model/registermodel');

const storage = require('node-persist');

exports.login=async (req,res)=>
{
    try {
        var data=await login.find({"email":req.body.email});
        
        await storage.init( /* options ... */ );
        var id=await storage.getItem('id');

        if(id==undefined)
        {
        if(data.length==1)
        {
            if(data[0].password==req.body.password)
            {
                await storage.init( /* options ... */ );
                await storage.setItem('id',data[0].id);

                res.status(200).json(
                {
                    status:"Login successfully"
                })
            }
            else
            {
                res.status(200).json(
                {
                    status:"check email and password"
                })
            }
        }
        else
        {
            res.status(200).json(
                {
                    status:"check email and password"
                })
        }
       }
       else
       {
            res.status(200).json(
                {
                    status:"already login"  
                }
            )
       }
    } catch (error) {
       
    }
}
exports.logout=async(req,res)=>
{
    await storage.init( /* options ... */ );
    var id=await storage.clear();
   
    res.status(200).json(
        {
            status:"Logout"
        })
}