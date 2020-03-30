const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multilpiar', opts)
    .command('crear', 'Creaa en consola la tabla de multilpiar', opts)
    .help().argv;
module.exports = {
    argv
}