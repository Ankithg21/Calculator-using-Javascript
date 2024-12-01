let string="";
let buttons=document.querySelectorAll('.button');
// console.log(buttons);

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // console.log(e.target);
        if(e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == 'RESET'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == 'DEL'){
            let size=string.length
            let duplicate="";
            for(let i=0;i<size-1;i=i+1){
                duplicate=duplicate+string[i];
            }
            string = duplicate;
            document.querySelector('input').value=string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value=string;
        }
        
    });
}); 