describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

        // deep cloan with JSON
        // obj = JSON.parse(JSON.stringify(expected));

        // or shallow copy of the object with assign()
        // obj = Object.assign({}, expected)

        // shallow copy with spread operator. Most of the time I use spread in React
        obj = {...expected, skills:[...expected.skills]}

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
