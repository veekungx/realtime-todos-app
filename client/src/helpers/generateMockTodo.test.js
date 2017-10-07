import generateMockTodo from './generateMockTodo';

describe('generateMockTodo', () => {

  it('should be function', () => {
    expect(generateMockTodo).toEqual(expect.any(Function));
  });

  it('should create mock todo', () => {
    const todo = generateMockTodo();
    expect(todo).toBeDefined();
  });

  it('should return todo properties', () => {
    const todo = generateMockTodo();
    expect(todo.title).toEqual('Something');
    expect(todo.state).toEqual('TODO_ACTIVE');
  });

  it('should overwrite todo properties when given attributes', () => {
    const attrs = {
      id: 100,
      title: 'Custom Title',
      state: 'TODO_COMPLETD'
    }
    const todo = generateMockTodo(attrs);
    expect(todo.id).toEqual(attrs.id);
    expect(todo.title).toEqual(attrs.title);
    expect(todo.state).toEqual(attrs.state);
  });
});