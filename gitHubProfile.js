var form = document.getElementById("form");
form.addEventListener('submit',function(e)
{
    e.preventDefault();
    document.getElementById("result").style.display="none";
    document.getElementById("Output").style.display="none";
    serch=document.getElementById("username").value;
    fetch("https://api.github.com/users/" + serch)
    .then((result)=>{
        if(result.ok)
        {
            document.getElementById("Output").style.display="block";
            return result.json();
        }
        else
        {
            document.getElementById("result").style.display="inline";
            document.getElementById("result").innerHTML="User Not Found";
        }
    })
    .then((data) => {
        console.log(data);
        document.getElementById("name").innerHTML=data.name;       
        document.getElementById("email").innerHTML=data.email;       
        document.getElementById("bio").innerHTML=data.bio;       
        document.getElementById("com").innerHTML=data.company;       
    })
})