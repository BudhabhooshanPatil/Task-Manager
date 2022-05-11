module.exports = class Task {
    
    static select = 'SELECT * FROM Tasks';
    static create = 'INSERT INTO Tasks SET ?';
    static find = 'SELECT * FROM Tasks WHERE task_uuid = ?';
    static update = 'UPDATE Tasks SET task_description = ?,task_complete = ? WHERE task_uuid = ?';
    static delete = 'DELETE FROM Tasks WHERE task_uuid = ?';

    constructor(uuid, description, timestamp, isComplete) {
        this.task_uuid = uuid;
        this.task_description = description;
        this.task_timestamp = timestamp;
        this.task_complete = isComplete;
    } Í
}