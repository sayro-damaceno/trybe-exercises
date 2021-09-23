const getUserName = require('./exercise2');

describe('getUserName - promise', () => {
  describe('when the user id exists', () => {
    it('returns the user name', () => (
      getUserName(1).then((data) => expect(data).toEqual('Mark'))
    ));
  });

  describe('when the user id does not exists', () => {
    it('returns an error', () => {
      expect.assertions(1);
      return getUserName(3).catch((error) =>
        expect(error.message).toMatch('User with 3 not found.'));
    });
  });
});
