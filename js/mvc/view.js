define('view',
['model'],
function () {
    function View(model) {
        var _this = this;

        _this.newTaskButton = document.getElementById('addTaskIcon');
        _this.taskList = document.getElementById("todoList");
    }

    View.prototype = {
        createNewTaskHTML: function (taskString) {
            var listItem = document.createElement("li");

            listItem.classList.add("todos__item");
            listItem.innerHTML =
                '<input type="checkbox">' +
                '<span class="task" data-value="' + taskString + '">' + taskString +
                '</span></li>';
            return listItem;
        },
        addTask: function () {
            return prompt('enter task');
        },
        completeTask: function (item) {
            var deleteButton;
            var listItem = item.parentNode;
            var span = item.nextElementSibling;
            var isCompleteTask = span.classList.contains("task-complete");

            if (isCompleteTask){
                //remove line-through on task
                span.classList.remove("task-complete");
                //remove delete button
                deleteButton = listItem.querySelector(".icon-trash-empty");
                listItem.removeChild(deleteButton);
            } else {
                //add to next element class task-complete
                span.classList.add("task-complete");
                //append to parent element span with class icon-trash-empty
                deleteButton = document.createElement("span");
                deleteButton.className = "icon icon-trash-empty";
                listItem.appendChild(deleteButton);
            }
        },
        deleteTask: function (item) {
            var task = item.previousElementSibling.innerText;

            item.parentNode.remove();
            model.deleteTask(task);
        },
        editTask: function (item) {
            var content = item.innerHTML;

            item.innerHTML = '';
            //create textfield with current task text
            var textField = document.createElement("input");

            textField.type = "text";
            textField.value = content;
            item.appendChild(textField);
            textField.focus();
            textField.onkeyup = function (event) {
                if (event.which === 13){
                    var editedTask = textField.value;
                    item.innerHTML = editedTask;
                    model.editTask(content, editedTask);
                }
            }
        }
    };

    return View;
});