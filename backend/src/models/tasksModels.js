const connection = require('./connection');

const getAll = async () =>{
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks[0];
};

const createTask =  async (task) => {
  const {title} = task;
  
  const date = new Date(Date.now()).toUTCString();

  const [createdTask] = await connection.execute('INSERT INTO tasks(title, status, create_at) VALUES (?, ?, ?)', [title, 'Pendente', date]);
  
  return { insertId: createdTask.insertId };
};

module.exports = {
  getAll,
  createTask
};
