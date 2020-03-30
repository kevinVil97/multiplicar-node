const fs = require('fs');
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('no es un numero');
            return;
        }
        let contenido = '';
        for (let index = 1; index < limite; index++) {
            contenido += base + '*' + index + '=' + index * base + '\n';
        }

        fs.writeFile('message.txt', contenido, (err) => {
            if (err) reject(err)
            else
                resolve('Archivo creado!');
        });
    });
}
let listado = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base, limite)) {
            reject('la base y el limite deben ser numeros');
            return
        }
        let contenido = '';
        for (let index = 1; index < limite + 1; index++) {
            console.log(base + '*' + index + '=' + index * base);

        }
    })
}
module.exports = {
    crearArchivo,
    listado
}