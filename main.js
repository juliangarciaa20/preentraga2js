//CARRITO DE COMPRA DE ENTRADAS "YSYSMO"

const carrito = [];

const mostrarListaDeEntradas = () => {
    const listaDeEntradas = entradas.map(entrada => {
        return entrada.nombre+' $'+entrada.precio
    });
    alert('Entradas YSYSMO:'+'\n\n'+listaDeEntradas.join('\n'));
    comprarEntradas(listaDeEntradas);
};

const comprarEntradas = (listaDeEntradas) => {
    let seguirCompra;
    let entradaNombre = '';
    let entradaCantidad = 0;

    do {
        entradaNombre = prompt('Que entrada queres comprar MI AMORRRR'+'\n\n'+listaDeEntradas.join('\n'));
        entradaCantidad = parseInt(prompt('¿Y cuantas queres BEBEEE?'));

        const entrada = entradas.find(entrada => entrada.nombre.toLowerCase() === entradaNombre.toLowerCase());

        if (entrada) {
            agregarAlCarrito(entrada, entrada.id, entradaCantidad);
        } else {
            alert('No nos quedan más entradas :(');
        }

        seguirCompra = confirm('¿queres más entradas?')
    } while (seguirCompra);

    confirmarCompra();
};

const agregarAlCarrito = (entrada, entradaId, entradaCantidad) => {
    const entradaRepetida = carrito.find(entrada => entrada.id === entradaId);
    if (entradaRepetida) {
        entradaRepetida.cantidad += entradaCantidad
    } else {
        entrada.cantidad += entradaCantidad;
        carrito.push(entrada)
    }
    console.log(carrito)
};

const eliminarEntradaCarrito = (entradaNombre) => {
    carrito.forEach((entrada, index) => {
        if (entrada.nombre.toLowerCase() === entradaNombre) {
            if (entrada.cantidad > 1) {
                entrada.cantidad--
            } else {
                carrito.splice(index, 1)
            }
        }
    })
    confirmarCompra()
};

const confirmarCompra = () => {
    const listaEntrada = carrito.map(entrada => {
        return '- '+entrada.nombre+' | Cantidad: '+entrada.cantidad
    });

    const confirmar = confirm('Mira lo que está por ser tuyo: '
        +'\n\n'+listaEntrada.join('\n')
        +'\n\nSi ya estas ready click en "Aceptar" sino "Cancelar" para eliminar entradas del carrito (Aunque me voy a poner triste)'
    );

    if (confirmar) {
        finalizarCompra(listaEntrada);
    } else {
        const entradaAEliminar = prompt('Ingrese el nombre del entrada a eliminar:');
        eliminarEntradaCarrito(entradaAEliminar);
    }
};

const finalizarCompra = (listaEntrada) => {
    const cantidadTotal = carrito.reduce((acc, elemento) => acc + elemento.cantidad, 0);
    const precioTotal = carrito.reduce((acc, elemento) => acc + (elemento.precio * elemento.cantidad), 0);

    alert('Ya tenes tus entradas MI AMORRRR:'
        +'\n\n'+listaEntrada.join('\n')
        +'\n\nTus entradas: '+cantidadTotal
        +'\n\nA pagar: '+precioTotal
        +'\n\nGracias por tu compra BEBEEE!'
    );
};

const comprar = () => {
    const entradasYsysmo = confirm('¿Queres comprar entradas para el YSYSMO?');
    if (entradasYsysmo) {
        mostrarListaDeEntradas()
    }
};

comprar()