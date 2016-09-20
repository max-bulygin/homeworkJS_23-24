define('controller',
['model', 'view'],
function () {
    function Controller(model, view) {
        view.newTaskButton.addEventListener('click', function () {
            var newTask = view.addTask();

            if (newTask == null) return;
            model.addTask(newTask);
            var html = view.createNewTaskHTML(newTask);

            view.taskList.appendChild(html);
        });
        view.taskList.addEventListener('dblclick', function (e) {
            var target = e.target,
                targetClass = target.className;

            if (targetClass == 'task') {
                view.editTask(target);
            }
            e.stopPropagation();
        });
        view.taskList.addEventListener('click', function (e) {
            var target = e.target;

            if (target.type == 'checkbox') {
                view.completeTask(target);
            } else if (target.className == 'icon icon-trash-empty') {//this class name should be simplified
                view.deleteTask(target);
            }
            e.stopPropagation();
        });
    }

    return Controller;
});