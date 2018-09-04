const get_dependencies = require('../src/get_dependencies');

test('should call res.send() with an object containing dependency tree', () => {
  const send = jest.fn();
  const res = {
    send,
  };
  get_dependencies({}, res);
  expect(send.mock.calls).toHaveLength(1);
  expect(send.mock.calls[0][0]).toEqual({ express: 'Dependencies tree' });
});
