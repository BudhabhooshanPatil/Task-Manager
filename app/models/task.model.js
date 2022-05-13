class Task {
    
    static select = 'SELECT * FROM tasks';
    static create = 'INSERT INTO tasks SET ?';
    static find = 'SELECT * FROM tasks WHERE task_uuid = ?';
    static update = 'UPDATE tasks SET task_description = ?,task_complete = ? WHERE task_uuid = ?';
    static delete = 'DELETE FROM tasks WHERE task_uuid = ?';

    constructor(uuid, description, timestamp, isComplete) {
        this.task_uuid = uuid;
        this.task_description = description;
        this.task_timestamp = timestamp;
        this.task_complete = isComplete;
    }
}

module.exports = Task