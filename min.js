
document.addEventListener('DOMContentLoaded', function() {
    
    const btn = document.getElementById('btnCalculate');
    const resultSpan = document.getElementById('result');

    btn.addEventListener('click', function() {
   
        let val1 = document.getElementById('num1').value;
        let val2 = document.getElementById('num2').value;
        let val3 = document.getElementById('num3').value;


        if (val1 === "" || val2 === "" || val3 === "") {
            resultSpan.innerText = "Введіть всі числа!";
            return;
        }


        let a = Number(val1);
        let b = Number(val2);
        let c = Number(val3);
        
        let min;


        if (a <= b && a <= c) {
            min = a;
        } else if (b <= a && b <= c) {
            min = b;
        } else {
            min = c;
        }

  
        resultSpan.innerText = min;
    });
});