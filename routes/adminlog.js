var adminlog=function (app,con) {

    /*
        Request is made for admin login
     */

    app.post("/admin/login",function (req,res) {

        /*
            checking if admin is already loggedin
         */
        if (req.session.adminusername == 'admin' && req.cookies.user_sid) {
            res.status(200).send({"status":"already logged in"});
        }

        else
        {
            /*
                Verifying if the details entered by admin is valid
             */
            var q = "select * from  AdminDetails where UserName ='" + req.body.username + "' and Password = '"+req.body.password+"'"
            con.query(q,function (err,resp) {

                if(err)
                    throw err;
                if(!JSON.parse(JSON.stringify(resp)).length)
                    res.status(200).send({"status":"login unsuccessful"});
                else{
                    /*
                        Cookies are set if the details entered are valid
                     */
                    req.session.adminusername=req.body.username;
                    req.session.username=null;
                    res.status(200).send({"status":"login successful"});
                }
            });
        }
    });

    app.post("/admin/logout",function (req,res) {

        res.clearCookie('user_sid');
        res.status(200).send({"output":"logut successful"});
    });

    app.post("/admin/changepassword",function(req,res){

        var curPassword=req.body.currentpassword;
        var newPassword=req.body.newpassword;
        var confirmnewPassword=req.body.confirmpassword;
        var q="select password from Admin where UserName='admin'";

        con.query(q,function (err,response) {

            var temp=JSON.parse(response);
            console.log(temp);
        });
    });

};

module.exports={
    adminlog:adminlog
};