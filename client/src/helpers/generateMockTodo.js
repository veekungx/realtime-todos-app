export default (attrs) => {
  const todo = {
    id: Math.round(Math.random() * 100000),
    title: 'Something',
    state: 'TODO_ACTIVE',
  }
  return {
    ...todo,
    ...attrs,
  }
};

