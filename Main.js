function getDollar(){

    var dollar = document.getElementById('input').value;

    var result = document.getElementById("result");

   

    if( dollar==0 ){

        document.getElementById("result").innerHTML="Not Found Money";
        return false;
    }
    else if( dollar<0 ){

        document.getElementById("result").innerHTML="Please Enter Number > 0";
        return false;
    }
    else if(isNaN(dollar)){

        document.getElementById("result").innerHTML="Please Enter Number";
        return false;
    }
    else{
        result=dollar*50;
        document.getElementById("result").innerHTML="The value is   " + dollar + " dollars equal to "+ result +"    Egyptian Pounds.";   
        return false;
    }

};