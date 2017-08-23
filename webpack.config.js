/// <binding ProjectOpened='Watch - Development' />
switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./tsConfig/webpack.prod');
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./tsConfig/webpack.dev');
        break;
}