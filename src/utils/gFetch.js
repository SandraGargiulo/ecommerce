
let products = [
    {
        id: '1',
        type: 'motor',
        brand: 'Motores Czerweny',
        name: 'Motor Monofasico 1 Hp 56 Mc4Lrc',
        description:
            '✅ Carcaza: J56\r\n✅ Protección: IP 21\n✅ Fases: monofásico.\n✅ Voltaje: 220V.\n ✅ Frecuencia: 50 Hz.\n✅ Potencia: 1 HP - 0.75 Kw.\n' +
            '✅ Polos: 4.\n ✅ RPM: 1500.\n ✅ Dimensiones embalaje(largo/profundidad x ancho x alto): 23x34x23 cm.\n✅ Peso: 14 kg.\n',
        price: 44000,
        thumbnail:
            'https://arcencohogar.vtexassets.com/arquivos/ids/273122-800-800?v=637651574194930000&width=800&height=800&aspect=true',
        stock: 2,
        
    },
    {
        id: '2',
        type: 'motor',
        brand: 'Motores Czerweny',
        name: 'Motor Monofasico Hormigonera 0.6 Hp 56Mc4Rh',
        description: '✅ Tensión: 220V ✅ Protección: IP21 ✅ Corriente 6, 5 A ✅ Frecuencia: 50 Hz' +
            '✅ Potencia: 1 HP(750 kw) ✅ 1440 v/min ✅ 4 Polos ✅ Aislación CL.B ✅ 50Hz - IP21 - Clase B - S3 ✅ Peso 9, 5 kg',
        price: 29125,
        thumbnail:
            'https://arcencohogar.vtexassets.com/arquivos/ids/273123-800-800?v=637651574199470000&width=800&height=800&aspect=true',
        stock: 5,
        
    },
    {
        id: '3',
        type: 'motor',
        brand: 'Motores Czerweny',
        name: 'Bomba Sumergible Agua Limpia Plas 500W',
        price: 18965,
        description: '✅Certificadora: QETKRA S.R.L ✅ N° de Certificado: 00Q-AR-01093-M-2 ✅ Marca: Czerweny ✅ Tipo: Sumergibles ✅ Modelo: 42001003/3',
        thumbnail:
            'https://arcencohogar.vtexassets.com/arquivos/ids/274035-800-800?v=637651579611370000&width=800&height=800&aspect=true',
        stock: 3,
        
    },
    {
        id: '4',
        type: 'motor',
        brand: 'Motores Czerweny',
        name: 'Bomba Sumergible Agua Limpia Plas 650W',
        description: '',
        price: 20775,
        thumbnail:
            'https://arcencohogar.vtexassets.com/arquivos/ids/274035-800-800?v=637651579611370000&width=800&height=800&aspect=true',
        stock: 6,
        
    },
    {
        id: '5',
        type: 'grupo',
        brand: 'Motores Czerweny',
        name: '',
        description: '',
        price: 20775,
        thumbnail:
            '',
        stock: 6,
        
    },
]


export const gFetch = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(id ? products.find(prod => prod.id === id):products)
        }, 1000)
    })
}

