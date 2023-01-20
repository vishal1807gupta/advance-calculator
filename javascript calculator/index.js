let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for(let item of buttons){
    item.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;
        if(buttonText=='X'){
            buttonText = '*';
            screenValue+=buttonText;
            screen.value+=buttonText;
        }
        else if(buttonText=='C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText=='='){
            screenValue = eval(screenValue).toString();
            screen.value = screenValue;
        }
        else if(buttonText=='Back'){

            if(screen.value.endsWith('sin')){
                screenValue = screenValue.replace('Math.sin(0.01746','sin');
            }
            else if(screen.value.endsWith('cos')){
                screenValue = screenValue.replace('Math.cos(0.01746','cos');
            }
            else if(screen.value.endsWith('tan')){
                screenValue = screenValue.replace('Math.tan(0.01746','tan');
            }
           screen.value = screen.value.slice(0,screen.value.length-1);
           screenValue = screenValue.slice(0,screenValue.length-1);
          
          
        }
        else if(buttonText=='sin'){
            screenValue+='Math.sin(0.01746*';
            screen.value = screen.value+'sin(';
        }
        else if(buttonText=='cos'){
            screenValue+='Math.cos(0.01746*';
            screen.value = screen.value+'cos(';
        }
        else if(buttonText=='tan'){
            screenValue+='Math.tan(0.01746*';
            screen.value = screen.value+'tan(';
        }
        else{
            screenValue+=buttonText;
            screen.value+=buttonText;
        }
    })
}