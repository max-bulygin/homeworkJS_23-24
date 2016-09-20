define('model', function () {
    function Model() {
        this.tasks = [];
    }

    Model.prototype = {
        addTask: function (item) {
            this.tasks.push(item);
            console.log(this.tasks);
        },
        deleteTask: function (item) {
            var index = this.tasks.indexOf(item);

            if (index == -1) return;
            this.tasks.splice(index, 1);
            console.log(this.tasks);
        },
        editTask: function (itemOld, itemNew) {
            var index = this.tasks.indexOf(itemOld);

            if (index == -1) return;
            this.tasks.splice(index, 1, itemNew);
            console.log(this.tasks);
        }
    };

    return Model;
});
