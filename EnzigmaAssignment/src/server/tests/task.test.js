const assert = require('assert');
const Task = require('../models/taskModel');

describe('Task model', () => {
  it('should create a task', () => {
    const task = new Task({ title: 'Test Task' });
    assert.strictEqual(task.title, 'Test Task');
    assert.strictEqual(task.isCompleted, false);
  });
});
