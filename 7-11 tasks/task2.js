var a =prompt  ("Enter first Num")
var b =prompt ("Enter Second Num")

var x =Number(a);

var y=Number(b);

function LargeNumber(a,b){
    if(a>b){
        document.write(a);

    }
    else if(b>a){
        document.write(b);

    }

    else{
        document.write("Equal")
    }
}


LargeNumber(x,y)