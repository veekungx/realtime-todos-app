export default (attrs) => {
  const todo = {
    id: Math.round(Math.random() * 100000),
    title: 'Title ' + Math.round(Math.random() * 100000),
    state: 'TODO_ACTIVE',
  }
  return {
    ...todo,
    ...attrs,
  }
};

