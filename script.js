window.addEventListener("scroll", function()
{
    if(window.scrollY > 10)
        this.document.getElementById("change").className = "sticky";
    else
        this.document.getElementById("change").className = "navbar";    
})



var i=0;

function menutoggle()
{
    i++;
    if(i%2!=0)
    {
        this.document.getElementById("menu-items").className = "show";
        this.document.getElementById("menu-icon").className = "fa fa-times";
    }
    else
    {
        this.document.getElementById("menu-items").className = "normal";
        this.document.getElementById("menu-icon").className = "fa fa-bars";
    }
       
}

