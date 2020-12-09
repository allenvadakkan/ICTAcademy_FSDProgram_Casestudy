


var x=document.getElementById("msg");


function validate()
{
    var eme=document.getElementById("ema").value;
    var pwd=document.getElementById("pwd");
    var x=document.getElementById("msg");
    if(eme==""&&pwd.value=="")
    {
        x.innerText="Fields are empty !!!";
        return false;
    }
    else if(pwd.value=="")
    {
        x.innerText="Please Enter your Password !!!";
        return false;
    }
    else if(eme=="")
    {
        x.innerText="Please Enter your Email !!!";
        return false;
    }
    else if((eme=="admin")&&(pwd.value=="12345"))
    {
        x.innerText="";
        return true;    
    }

    else
    {

        x.innerText="Invalid email Or Password!!!";
        return false;
    }
}







