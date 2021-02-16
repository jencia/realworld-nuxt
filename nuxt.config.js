const pkg = require('./package.json')

export default {
    plugins: [
        '~/plugins/request',
        '~/plugins/filters'
    ],
    router: {
        base: `/${pkg.name}/`
    },
    server: {
        host: '0.0.0.0',
        port: 5000
    }
}