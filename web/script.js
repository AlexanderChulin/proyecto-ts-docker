const API = "http://localhost:3000/tasks";

const list = document.getElementById("list");
const form = document.getElementById("form");

async function getTasks() {
    const res = await fetch(API);
    const data = await res.json();

    list.innerHTML = "";

    data.forEach(task => {
        const li = document.createElement("li");

if (task.complete) {
    li.classList.add("complete");
}

        li.innerHTML = `
            ${task.task} - ${task.complete ? "✔️" : "❌"}
            <button onclick="toggle(${task.id}, ${task.complete})">Toggle</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;

        list.appendChild(li);
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const task = document.getElementById("task").value;

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            task,
            complete: false
        })
    });

    form.reset();
    getTasks();
});

async function toggle(id, complete) {
    await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            complete: !complete
        })
    });

    getTasks();
}

async function deleteTask(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    getTasks();
}

getTasks();