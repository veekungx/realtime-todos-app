export const generateMockTodo = (attrs) => {
  const todo = {
    id: Math.round(Math.random() * 100000).toString(),
    title: `Title ${Math.round(Math.random() * 100000).toString()}`,
    state: 'TODO_ACTIVE',
  };
  return {
    ...todo,
    ...attrs,
  };
};

export const generateMockNodeTodo = attrs => ({ node: generateMockTodo(attrs) });
