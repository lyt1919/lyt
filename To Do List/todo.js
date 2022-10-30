Window.onload = function () {
    let newTaskInput = document.querySelector('.new-task input');
    newTaskInput.onkeydown = function (event) {
        if (event.keyCode == 13) {
            let newTaskText = newTaskInput.value;
            console.log(newTaskText);

        }
    };
}