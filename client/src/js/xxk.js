
window.onload=function(){

    function tab(){
        var aBtn=document.querySelectorAll('#an img');
        var aDiv=document.querySelectorAll('#index div');
        var index=document.querySelector('#index');
       
        for(var i=0;i<aBtn.length;i++){
            aBtn[i].index=i;
            aBtn[i].onmousemove=function(){
                index.style.display='block';

                for(var i=0;i<aBtn.length;i++){
                    aDiv[i].style.display='none';
               }
                aDiv[this.index].style.display='block';
            }
        }
    }
    tab();
};