function verif()
{
    a=document.getElementById("fullName").value;
    if(a.length<3){
        alert("verifier le longeur de nom et prenom");
        return false;
    }
    if((a.indexOf(" ")==0)||(a.indexOf(" ")==-1)||(a.indexOf(" ")==(a.length-1))){
        alert("verifier espace");
        return false;
    }
    if(alpha(a)==false)
    {
        alert("le nom et le prenom doit être alphabétique");
        return false;
    }
    b=document.getElementById("email").value;
    if(b.length<8)
    {
        alert("verifier longeur email");
        return false;
    }
    if((b.indexOf("@")==-1)||(b.indexOf(".")==-1))
    {
        alert("verifier lemail");
        return false;
    }
}