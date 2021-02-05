// 2.Realice un programa que calcule el máximo de N números leídos desde teclado.
let numero = [];
parar:
do{
    let n = parseInt(prompt("Ingrese un numero"));
    numero.push(n);
    let opc = parseInt(prompt("Deseas ingresar otro numero.\n 1. Si. \n 2. No"));
    switch (opc) {
        case 1:
            continue parar;
        case 2:
            console.log(`Cantidada de numeros ingresados ${numero.length}`);
            console.log(numero);
            break parar;
        default:
            alert("Opción invalida.");
            break;
    }
}while(true)
