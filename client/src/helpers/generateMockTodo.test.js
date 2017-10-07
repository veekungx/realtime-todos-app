import { generateMockTodo, generateMockNodeTodo } from './generateMockTodo';

describe('generateMockTodo', () => {
  it('should be function', () => {
    expect(generateMockTodo).toEqual(expect.any(Function));
  });

  it('should create mock todo', () => {
    const todo = generateMockTodo();
    expect(todo).toBeDefined();
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

describe('generateMockNodeTodo', () => {
  it('should be function', () => {
    expect(generateMockNodeTodo).toEqual(expect.any(Function));
  });

  it('should create mock todo', () => {
    const nodeTodo = generateMockNodeTodo();
    expect(nodeTodo).toBeDefined();
  });

  it('should overwrite todo properties when given attributes', () => {
    const attrs = {
      id: 100,
      title: 'Custom Title',
      state: 'TODO_COMPLETD'
    }
    const todo = generateMockNodeTodo(attrs);
    expect(todo.node.id).toEqual(attrs.id);
    expect(todo.node.title).toEqual(attrs.title);
    expect(todo.node.state).toEqual(attrs.state);
  });
});