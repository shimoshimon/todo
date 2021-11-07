const new_task = document.getElementById("new_task");
const rest_task = document.getElementById("rest_task");
let ids = 1;

function add_task() {
    const li = document.createElement("li");
    li.id = `${ids}`;
    li.innerHTML = `${new_task.value}<button onClick='delete_task(${ids})'>完了</button>`;
    if (new_task.value.length === 0) {
        alert("空欄です！");
    } else {
        rest_task.appendChild(li);
        ids += 1;
    }
    new_task.value = "";
};

function delete_task(ids) {
    const childnode = document.getElementById(`${ids}`)
    childnode.remove();
};