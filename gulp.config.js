module.exports = () => {
    const client = './';
    const clientApp = client + 'js/'
    const config = {
  
        //js files
        js: [
            './js/*.js',
        ],

        //less
        less: './styles/less/*.less',
        client: client,
        //css
        css: client + 'styles/css/*.min.css',

        index: client + 'nba.html',
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ingorePath: '../..'
        },

        defaultPort: 3000,
        nodeServer: './server.js',
        temp: './.tmp'

    };

    config.getWiredepDefaultOptions = () => {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        }
        return options;
    };

    return config;
}