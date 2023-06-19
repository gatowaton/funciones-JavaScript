//1

function numeroMayor(num1, num2, num3){
    if(num1 == num2 && num2 == num3){
        console.log("Los números son iguales");
    } else{ 
        console.log(Math.max(num1,num2,num3));
    }
}
numeroMayor(3,8,2);

//2

function esVocal(letra){
    letra = letra.toLowerCase();
    if (letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u"  ){
            // return true
            console.log(true);
        }else{
            // return false
            console.log(false);
        }
}
esVocal("o");

//3

function generarCaracteres(n, letra){
    let res = "";

    for(let i = 0; i < n; i++){
        res += letra;
    }
    // return res
    console.log(res);
}
generarCaracteres(10,"b");

//4

function sumaArreglo(arr){
    let long = arr.length;
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    // return long,sum;
    console.log(`longitud: ${long}, suma: ${sum}`);
}
sumaArreglo([1,2,5])