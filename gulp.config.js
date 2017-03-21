module.exports = () => {
    const config = {
        temp: './.tmp',

        //js files
        js: [
            './js/*.js',
        ],

        //less
        less: './styles/less/*.less',

        //css
        css: './styles/css/*.css'
    };

    return config;
}