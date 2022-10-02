    class TodoItem{
        static defaultChecked = false;
        static i = 0;
        static getID = () => ++TodoItem.i;

        constructor (name, checked) {
            this.id = TodoItem.getID();
            this.name = name;
            this.checked = checked;
        }

        get checked () {
            return this._checked;
        }

        set checked (value) {
            this._checked = typeof value === "boolean" ? value : TodoItem.defaultChecked;
        }
    }

    class TodoList{
        static i = 0;
        static getID = () => ++TodoList.i;

        constructor (name) {
            this.id = TodoList.getID();
            this.name = name;
            this.items = [];
        }

        addItem (el) { 
            if (el instanceof TodoItem) return this.items.push(el);
        }

        removeItemById (id) {
            this.items = this.items.filter(el => el.id !== id);
        }

        getItemById  (id) {
            return this.items.find(el => el.id == id); 
        }
    }


    const todoitem1 = new TodoItem('first', true);
    const todoitem2 = new TodoItem('second', 'sd');
    const todoitem3 = new TodoItem('third', false);
    const todoitem4 = new TodoItem('firth', true);

    const todolist = new TodoList('list');
    todolist.addItem(todoitem1);
    todolist.addItem(todoitem2);
    todolist.addItem(todoitem3);
    todolist.addItem(todoitem4);

    class fakeClass{}
    const fakeObject = new fakeClass();

    todolist.addItem(fakeObject); //Провірка addItem чи працює валідація на тип TodoItem


    console.log('\n----------Початковий масив items----------');
    console.log(todolist.items);

    console.log('\n----------Змінене значення checked на false----------');
    todoitem1.checked = false;
    console.log(todolist.items);

    console.log('\n----------Елемент з третім id----------');
    console.log(todolist.getItemById(3));

    console.log('\n----------Видалення елементів----------');
    todolist.removeItemById(1);
    todolist.removeItemById(3);

    console.log(todolist.items);