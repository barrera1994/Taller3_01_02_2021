let n = parseInt(prompt("Ingresar el numero "));
let d = 1;
let suma = 0;

do{
    if (n%d==0){
        suma += d;
    }
    d++;

}while(d<n)

if(suma == n){
    alert(`El número ${n} es perfecto`);
}else{
    alert(`El número ${n} no es perfecto`);
}
