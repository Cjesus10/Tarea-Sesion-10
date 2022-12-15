const rPromedio = document.getElementById("rPromedio");
const rCondicion = document.getElementById("rCondicion");
const rObsequio = document.getElementById("rObsequio")

let prom = 0;
let cond = "";
let obs = "";

class alumno {
    constructor(codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
    promedio = () => {  
        prom = (this.nota1*0.15 + this.nota2*0.20 + this.nota3*0.25 + this.nota4*0.4);
        rPromedio.innerText = `El promedio es: ${prom}`;
    }
    condicion = () => {
        if(prom >= 12){
            cond = "Aprobado"
        }
        else{
            cond = "Desaprobado"
        }
        rCondicion.innerText = `La condición es: ${cond}`;
    }
    obsequio = () => {
        if(prom > 17){
            obs = "Mochila"
        }
        else{
            obs= "Sin Obsequio"
        }
        rObsequio.innerText = `Obsequio: ${obs}`;
    }
}

let alumno1 = new alumno ("123654","Cristian","19","18","20","18")

alumno1.codigo = prompt("Introduce el Código");
alumno1.nombre = prompt("Introduce el Nombre");
alumno1.nota1 = prompt("Introduce la Nota 1");
alumno1.nota2 = prompt("Introduce la Nota 2");
alumno1.nota3 = prompt("Introduce la Nota 3");
alumno1.nota4 = prompt("Introduce la Nota 4");

alumno1.promedio();
alumno1.condicion();
alumno1.obsequio();
