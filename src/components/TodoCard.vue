<script>
import NewTodo from './NewTodo.vue'
import TodoList from './TodoList.vue'

export default {
    name: 'todo-card',
    data() {
        return {
            tasks: []
        }
    },
    components: {
        NewTodo,
        TodoList
    },
    computed: {
        date: function() {
            const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
            const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
            const classDate=new Date();
            const number = classDate.getDate();
            const day = days[number-1];
            const month = months[classDate.getMonth()];
            const date = day + " " + number + " " + month;
            return date
        }
    },
    methods: {
        addTask(task) {
            this.tasks.push({title: task, state: 0});
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        numberTask: function(tasks) {
            if(tasks === 0 || tasks === 1) {
                return "tâche"
            } else {
                return "tâches"
            }
        }
    }
}
</script>

<template>
    <div id="todo-card">
        <div>
            <p>{{ date }}</p>
            <h1>VueJS Tutorial ToDo List</h1>
            <p>{{tasks.length}} {{numberTask(tasks.length)}}</p>
        </div>
        <NewTodo @newTask="addTask"></NewTodo>
        <TodoList v-bind:tasks="tasks" @remover="removeTask"></TodoList>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    color : rgb(0, 231, 181);
    font-weight: bold;
}

#todo-card div:first-of-type{
    padding: 1rem 2rem;
    margin-bottom: 2vh;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.26);
} 

#todo-card{
    padding-bottom: 15px;
    width: 50vw;
    min-height: 20vh;
    background-color:rgb(245, 245, 245);
    border-radius: 10px;
} 
</style>