//Productos
const productos = {
    Aqua: 200,
    Emocion: 180,
    Alegria: 160,
    Frescura: 150
};


//Prompt para ingresar las ventas de Ana en cada producto
const ventasJuana = () => {
    let ventas = {
        Juana: {
            Aqua: prompt("Ingresa cuantos productos Aqua vendio Juana este mes"),
            Emocion: prompt("Ingresa cuantos productos Emocion vendio Juana este mes"),
            Alegria: prompt("Ingresa cuantos productos Alegria vendio Juana este mes"),
            Frescura: prompt("Ingresa cuantos productos Frescura vendio Juana este mes")
        }
    }
    return ventas.Juana;
}

//Prompt para ingresar las ventas de Pedro en cada producto
const ventasPedro = () => {
    let ventas = {
        Pedro: {
            Aqua: prompt("Ingresa cuantos productos Aqua vendio Pedro este mes"),
            Emocion: prompt("Ingresa cuantos productos Emocion vendio Pedro este mes"),
            Alegria: prompt("Ingresa cuantos productos Alegria vendio Pedro este mes"),
            Frescura: prompt("Ingresa cuantos productos Frescura vendio Pedro este mes")
        }
    }
    return ventas.Pedro;
}

function calculoDineroRecolectado(ventasUsuario) {
    console.log(ventasUsuario);
    const resultado = { Aqua: 0, Emocion: 0, Alegria: 0, Frescura: 0, total: 0 };
    for (let producto in productos) {
        resultado[producto] += productos[producto] * ventasUsuario[producto];
        console.log(producto);
        resultado.total += resultado[producto]
        console.log(resultado.total);
    }
    return resultado;
}

function empleadoConMasVentas(ventasTotalesUsuario1, ventasTotalesUsuario2) {
    let mejorVendedor = "";
    if (ventasTotalesUsuario1 > ventasTotalesUsuario2) {
        mejorVendedor = "El vendedor que vendio mas este mes es: Pedro";

    } else if (ventasTotalesUsuario1 < ventasTotalesUsuario2) {
        mejorVendedor = "El vendedor que vendio mas este mes es: Juana";
    }
    else {
        mejorVendedor = "Ambos vendedores vendieron lo mismo";
    }
    return mejorVendedor;
}

let ventasPedro_ = ventasPedro();

let ventasTotalesUsuario1 = calculoDineroRecolectado(ventasPedro_);
console.log(ventasTotalesUsuario1);

let ventasJuana_ = ventasJuana();
let ventasTotalesUsuario2 = calculoDineroRecolectado(ventasJuana_);
console.log(ventasTotalesUsuario2);

let mejorVendedor = empleadoConMasVentas(ventasTotalesUsuario1.total, ventasTotalesUsuario2.total);
console.log(mejorVendedor);


