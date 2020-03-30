const argv = require('./config/yargs').argv;
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listado } = require('./multiplicar/multiplicar');


let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listado(argv.base, argv.limite).then(archivo => console.log('terminado')).catch(e => console.log(2));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log('Archivo creado')).catch(e => console.log(e));
        console.log('crear');
        break;
    default:
        console.log('no hay');
        break;
}
//let base = '5';


//