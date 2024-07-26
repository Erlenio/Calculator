const signals = ['-','*','/','+'];
        let buttons = document.querySelectorAll(".btn.num");
        let textArea = document.querySelector("#panel");
        buttons.forEach( button =>{
            
            button.addEventListener('click', () => {
                if(textArea.value == ""){
                    textArea.value = button.value;
                }else{
                    textArea.value += button.value;
                }
                
            });
        });
        document.querySelector('.btn.delete').addEventListener('click',() =>{
            textArea.value = textArea.value.substr(0, textArea.value.length - 1);
        });
        
        document.querySelector('.btn.point').addEventListener('click',() =>{
            if(textArea.value != "" && !textArea.value.includes(".") && isNaN(textArea.value.length -1)){
                    textArea.value += ".";
            }else if(!textArea.value.includes(".")  ){
                textArea.value += "0.";
            }
        });
        document.querySelector('.btn.clear').addEventListener('click',() =>{
            textArea.value = "";
        });
        document.querySelector('.btn.pi').addEventListener('click',() =>{
            textArea.value += Math.PI.toFixed(2);
        });
        document.querySelector('.btn.e').addEventListener('click',() =>{
            textArea.value += Math.E.toFixed(2);
        });
        document.querySelector('.btn.pow').addEventListener('click',() =>{
            if(textArea.value != ""){
                textArea.value += "^";
            }
        });
        document.querySelector('.btn.factor').addEventListener('click',() =>{
            let num = textArea.value;
            for(let i = num; i > 0; i--){
                num *= i;  
            }
            textArea.value = num;
        });
        document.querySelector('.btn.sq').addEventListener('click',() =>{
            let num = textArea.value;
            num = Math.sqrt(num);
            if(Number.isInteger(num)){
                    textArea.value = num;
            }else{
                textArea.value = num.toFixed(2);
            }
        });
        document.querySelectorAll('.btn.signal').forEach(button =>{
            button.addEventListener('click',() =>{
                if(textArea.value != "" ){
                    textArea.value += button.value;
                }
            });
        });
        document.querySelector('.btn.equal').addEventListener('click',() =>{
            let value = textArea.value;
            try{
                if(value.includes("^")){
                    var arr = textArea.value.split("^");
                    var temp = arr[0];
                    for(var i = 1; i < arr.length; i++){
                        temp = Math.pow(temp,arr[i]);
                    }
                    textArea.value = temp;
                }else{
                    if(!isSignal(value[value.length -1])){
                        let solution = eval(value);
                        if(Number.isInteger(solution)){
                            textArea.value = solution;
                        }else{
                            textArea.value = solution.toFixed(2);
                        }
                    }
                }
                
            }catch(exception){
                alert('bad input');
            }
        });
        function isSignal(char){
            return signals.includes(char);
        }