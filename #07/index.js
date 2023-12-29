export default function contains(store, product) {
    return Object.values(store).some((value) => {
        if (typeof value === 'object') {
            return contains(value, product);
        } else {
            return value === product;
        }
    });
}


const almacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
        }
    }
}


console.log(contains(almacen, 'camiseta'));