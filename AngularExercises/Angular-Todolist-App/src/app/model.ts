export class Model {
    user;
    items;

    constructor() {
        this.user = 'Kubilay';
        this.items = [
                new TodoItem("Go to gym",false),
                new TodoItem("Call Mom",false),
                new TodoItem("Plan my trip",false),
                new TodoItem("Meeting with client",false),
        ];
    }
}

export class TodoItem {
    description: string;
    action: boolean;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}