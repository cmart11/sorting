

describe('Bubble Sort', function () {
    const unsortedArr = [4, 3, 1, 2];
    it('handles an empty array', function () {
        expect(bubbleSort([])).toEqual([]);
    });

    // beforeAll(function () {
    //     spyOn(bubbleSort, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
    // });
    // it('gets correct amount of swap iterations', function () {
    //     bubbleSort.getToCenter();
    //     expect(swap.calls.count()).toEqual(5);
    // });

    it('sorts an array of integers in ascending order', function () {
        expect(bubbleSort(unsortedArr)).toEqual([1, 2, 3, 4])
    })
});



