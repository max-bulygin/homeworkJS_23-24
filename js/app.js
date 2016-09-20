requirejs.config({
    //By default load any module IDs from js/mvc
    baseUrl: 'js/mvc',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['model', 'view', 'controller'],
    function   (Model, View, Controller) {
        var model = new Model();
        var view = new View();
        var controller = new Controller(model, view);
    });