describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5],
        flatArr = [];

        // convert to a string, split with come then sort
        // const arrayToString = arr.toString();
        // flatArr = arrayToString.split(',').sort((a, b)=> a - b);

        //ES2019 Array.flat() method
        flatArr = arr.flat(Infinity).sort((a, b)=> a - b);

    expect(arr).toEqual(expected);
  });
});