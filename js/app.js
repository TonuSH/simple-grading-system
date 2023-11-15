function calculateGrade(){
    let num = document.getElementById('grade').value;

    let result;
    if(num>=80 && num <=100){
        result="A+";
    }
    else if(num>=70 && num<=79.99){
        result="A";
    }
    else if(num>=60 && num<=69.99){
        result="A-";
    }
    else if(num>=50 && num<=59.99){
        result="B";
    }
    else if(num>=40 && num<=49.99){
        result="C";
    }
    else if(num>=33 && num<=39.99){
        result="D";
    }
    else{
        result="F";
    }
    document.getElementById('result').innerText = ` Your result is ${result} `;
}
