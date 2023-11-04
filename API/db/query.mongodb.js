use('db_servientrega');

db.usuario.insertMany([
    {
        dni: 123456789,
        nombre: "Jhon Doe",
        edad: 18,
        genero: "masculino",
        tipoDocumento: "CC",
        telefPersonal: 3181234567,
        email: "jd@gmail.com",
        ubicacion: {
            pais: "colombia",
            departamento: "santander",
            municipio: "giron",
            codigoPostal: "codigoPostal",
            direccion: "Direccion"
        }
    },
    {
        dni: 987654321,
        nombre: "Jhoana Eod",
        edad: 12,
        genero: "femenino",
        tipoDocumento: "TI",
        telefPersonal: 3181234567,
        email: "je@gmail.com",
        ubicacion: {
            pais: "España",
            departamento: "madrid",
            municipio: "madrid",
            codigoPostal: "codigoPostal",
            direccion: "Direccion"
        }
    },
    {
        dni: 123789654,
        nombre: "Belligoal",
        edad: 20,
        genero: "masculino",
        tipoDocumento: "CC",
        telefPersonal: 3181234567,
        email: "bg@gmail.com",
        ubicacion: {
            pais: "Colombia",
            departamento: "Santander",
            municipio: "floridablanca",
            codigoPostal: "codigoPostal",
            direccion: "Direccion"
        }
    }
])

db.envio.insertMany([
    {
        id: 1,
        descripcion: "descripcion",
        fecha_salida: new Date("2023-07-01"),
        estado: "En entrega",
        paquete: {
            idPaquete: 1,
            peso: 50.5,
            productos: [
                {
                    idProducto: 1,
                    nombre: "Mesa escritorio"
                }
            ]
        }
    }
])