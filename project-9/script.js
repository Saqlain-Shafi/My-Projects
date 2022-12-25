window.addEventListener('load', () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#new-task-input");
    
    document.addEventListener('DOMContentLoaded',getTodos);
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const toDo = input.value;

        const list_element = document.querySelector("#tasks");
        const task_element = document.createElement('div');
        task_element.classList.add('task');

        const task_content_element = document.createElement('div');
        task_content_element.classList.add('content');

        task_element.appendChild(task_content_element);

        const task_input_element = document.createElement('input');
        task_input_element.classList.add('text');
        task_input_element.type = 'text';
        task_input_element.value = toDo;
        task_input_element.setAttribute('readonly', 'readonly');

        task_content_element.appendChild(task_input_element);

        savedItems(toDo)

        const task_actions_element = document.createElement('div');
        task_actions_element.classList.add('actions');

        const task_edit_element = document.createElement('button');
        task_edit_element.classList.add('edit');
        task_edit_element.innerText = 'Edit';

        const task_delete_element = document.createElement('button');
        task_delete_element.classList.add('delete');
        task_delete_element.innerText = 'Delete';

        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);

        task_element.appendChild(task_actions_element);

        list_element.appendChild(task_element);

        input.value = '';

        task_edit_element.addEventListener('click', (e) => {
            if (task_edit_element.innerText.toLowerCase() == "edit") {
                task_edit_element.innerText = "Save";
                task_input_element.removeAttribute("readonly");
                task_input_element.focus();
            } else {
                task_edit_element.innerText = "Edit";
                task_input_element.setAttribute("readonly", "readonly");
            }
        });

        task_delete_element.addEventListener('click', (e) => {
            list_element.removeChild(task_element); ement
        });
    });
});

function savedItems(todo) {
    let toDos;
    if (localStorage.getItem('toDos') === null) {
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem('toDos'));
    }

    toDos.push(todo);
    localStorage.setItem("toDos", JSON.stringify(toDos))
}

function getTodos() {
    console.log('hello')
    let toDos;
    if (localStorage.getItem('toDos') === null) {
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem('toDos'));
    }
    toDos.forEach(function (todo) {
        const list_element = document.querySelector("#tasks");
        const task_element = document.createElement('div');
        task_element.classList.add('task');

        const task_content_element = document.createElement('div');
        task_content_element.classList.add('content');

        task_element.appendChild(task_content_element);

        const task_input_element = document.createElement('input');
        task_input_element.classList.add('text');
        task_input_element.type = 'text';
        task_input_element.value = todo;
        task_input_element.setAttribute('readonly', 'readonly');

        task_content_element.appendChild(task_input_element);

        const task_actions_element = document.createElement('div');
        task_actions_element.classList.add('actions');

        const task_edit_element = document.createElement('button');
        task_edit_element.classList.add('edit');
        task_edit_element.innerText = 'Edit';

        const task_delete_element = document.createElement('button');
        task_delete_element.classList.add('delete');
        task_delete_element.innerText = 'Delete';

        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);

        task_element.appendChild(task_actions_element);

        list_element.appendChild(task_element);
        task_edit_element.addEventListener('click', (e) => {
            if (task_edit_element.innerText.toLowerCase() == "edit") {
                task_edit_element.innerText = "Save";
                task_input_element.removeAttribute("readonly");
                task_input_element.focus();
            } else {
                task_edit_element.innerText = "Edit";
                task_input_element.setAttribute("readonly", "readonly");
            }
        });

        task_delete_element.addEventListener('click', (e) => {
            list_element.removeChild(task_element);
            toDos.removeChild(task_element);
        });
    });
}
document.addEventListener('DOMContentLoaded',getTodos);

