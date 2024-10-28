class Todo {  
    constructor(title) {  
        if (!title.trim()) {  
            throw new Error("Note cannot be empty");  
        }  
        this.title = title;  
        this.completed = false;  
        this.createdDate = new Date();  
        this.updatedDate = new Date();  
    }  

    markCompleted() {  
        this.completed = true;  
        this.updatedDate = new Date();  
    }  

    editTitle(newTitle) {  
        if (!newTitle.trim()) {  
            throw new Error("Note cannot be empty");  
        }  
        this.title = newTitle;  
        this.updatedDate = new Date();  
    }  

    getInfo() {  
        return {  
            title: this.title,  
            completed: this.completed,  
            createdDate: this.createdDate,  
            updatedDate: this.updatedDate,  
        };  
    }  
}  

class TodoList {  
    constructor() {  
        this.notes = [];  
    }  

    addNote(title) {  
        const note = new Todo(title);  
        this.notes.push(note);  
    }  

    removeNote(index) {  
        if (index < 0 || index >= this.notes.length) {  
            throw new Error("Note not found");  
        }  
        this.notes.splice(index, 1);  
    }  

    editNote(index, newTitle) {  
        if (index < 0 || index >= this.notes.length) {  
            throw new Error("Note not found");  
        }  
        this.notes[index].editTitle(newTitle);  
    }  

    getAllNotes() {  
        return this.notes.map(note => note.getInfo());  
    }  

    markNoteCompleted(index) {  
        if (index < 0 || index >= this.notes.length) {  
            throw new Error("Note not found");  
        }  
        this.notes[index].markCompleted();  
    }  

    getStats() {  
        const totalNotes = this.notes.length;  
        const remainingNotes = this.notes.filter(note => !note.completed).length;  
        return { totalNotes, remainingNotes };  
    }  

    findNoteByTitle(title) {  
        return this.notes.filter(note => note.title.includes(title))  
                         .map(note => note.getInfo());  
    }  

    sortByStatus() {  
        return this.notes.sort((a, b) => a.completed - b.completed);  
    }  

    sortByDate() {  
        return this.notes.sort((a, b) => a.createdDate - b.createdDate);  
    }  
}  

// Example usage:  
const todoList = new TodoList();  
todoList.addNote("First task");  
todoList.addNote("Second task");  
todoList.addNote("Third task");  
todoList.markNoteCompleted(0);  

console.log(todoList.getAllNotes());  
console.log(todoList.getStats());  
console.log(todoList.findNoteByTitle("First"));  
todoList.editNote(1, "Updated second task");  
console.log(todoList.getAllNotes());  
todosList.sortByStatus();  
console.log(todoList.getAllNotes());  
todosList.sortByDate();  
console.log(todoList.getAllNotes());