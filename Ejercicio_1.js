var productos = [];
var ventas = [];

function mostrarMenu(){
    return opcion = prompt("¿Qué desea hacer?\n 1-Agregar producto.\n 2-Modificar stock. \n 3-Registrar venta.\n 4-Promedio de ventas.\n 5-Productos sin existencias.\n 6- Salir.");
}

function agregarProducto(){
    let cod, desc, tipo, pCompra, pVenta, stock;
    alert("Bienvenido al formulario de registro de prodcutos, por favor llene todos los campos.");
    while(true){
        cod = prompt("Ingrese el código del producto.");
        for(let x of productos){
            if(x.Codigo == cod){
                cod = null;
            }
        }
        if(cod != null){
            break;
        }else{
            alert("Ese código ya ha sido registrado.");
        }
    }

    desc = prompt("Ingrese la descripción del producto.");
    tipo = prompt("Especifique el tipo de producto.");
    pCompra = prompt("Ingrese el precio de compra del producto. ($)");
    pVenta = prompt("Ingrese el precio de venta del producto. ($)");
    while(true){
        stock = prompt("Ingrese el stock del producto. (Mayor o igual a 0)");
        if(stock < 0){
            alert("Ingrese una cantidad válida.");
        }else{
            break;
        }
    }

    productos.push(
        {
            Codigo: cod,
            Descripcion: desc,
            Tipo: tipo,
            Precio_Compra: pCompra,
            Precio_Venta: pVenta,
            Stock: stock
        }
    );

    alert("Se ha registrado el producto de código "+cod);

}

function modificarStock(){
    let codigo, producto = null, stock;
    alert("Bienvenido al formulario de stock, por favor llene todos los campos.");
    codigo = prompt("Ingrese el código del producto.");
    for(let x of productos){
        if(codigo == x.Codigo){
            producto = x;
        }
    }

    if(producto != null){

        while(true){
            stock = prompt("Ingrese el nuevo stock del producto. (Mayor o igual a 0)", producto.Stock);
            if(stock < 0){
                alert("Ingrese una cantidad válida.");
            }else{
                break;
            }
        }

        producto.Stock = stock;
        alert("Se han guardado los cambios.");

    }else{
        alert("El producto especificado no existe.")
    }
}

function registrarVenta(){
    let codigo, producto = null, stock;
    alert("Bienvenido al formulario de stock, por favor llene todos los campos.");
    codigo = prompt("Ingrese el código del producto.");
    for(let x of productos){
        if(codigo == x.Codigo){
            producto = x;
        }
    }

    if(producto != null){

        while(true){
            stock = prompt("Ingrese la cantidad de producto a vender. (Mayor o igual a 0)", producto.Stock);
            if(stock < 0){
                alert("Ingrese una cantidad válida.");
            }else if(stock > producto.Stock){
                alert("No cuenta con stock suficiente para realizar la venta.")
            }else{
                break;
            }
        }

        producto.Stock -= stock;
        ventas.push({
            Codigo: codigo,
            Cantidad: stock
        });
        alert("Se ha realizado la venta.");

    }else{
        alert("El producto especificado no existe.")
    }
}

function stockCero(){
    alert("Listado de productos con stock de 0.");
    for(let x of productos){
        let msg = "";
        msg = msg + "Código: " + x.Codigo + "\n";
        msg = msg + "Descripción: " + x.Descripcion + "\n";
        msg = msg + "Tipo: " + x.Tipo + "\n";
        alert(msg);
    }
}

function iniciarPrograma(){
    while(true){
        let val = mostrarMenu();
        if(val != 6){
            switch(val){
                case "1":
                    agregarProducto();
                    break;
                case "2":
                    modificarStock();
                    break;
                case "3":
                    registrarVenta();
                    break;
                case "4":
                    //promVentas();
                    break;
                case "5":
                stockCero();
                    break;
                default:
                    alert("Por favor ingrese un dato válido.")
            }
        }else{
            alert("¡Hasta pronto!");
            break;
        }
    }
}