const {sortByString} = require('./stringSort');

describe('sortByString()', () => {
    test('sorting by flats returns the correct array', ()=>{
        const arr = ['spoof', 'floof', 'loop'];
        const str = 'flats';
        const sorted = ['floof', 'loop', 'spoof']
        const result = sortByString(arr,str);
        expect(result[0]).toEqual(sorted[0]);
        expect(result[2]).toEqual(sorted[2]);
    });

    test('sorting by dcba returns the correct array', ()=>{
        const arr = ['apple', 'banana', 'cherry', 'date'];
        const str = 'dcba';
        const sorted = ['date', 'cherry', 'banana', 'apple'];
        const result = sortByString(arr,str);
        expect(result[0]).toEqual(sorted[0]);
        expect(result[3]).toEqual(sorted[3]);

    });

    test('sorting by sazymtb returns the correct array', ()=>{
        const arr = ['small', 'big', 'medium'];
        const str = 'sazymtb';
        const sorted = ['small', 'medium', 'big'];
        const result = sortByString(arr,str);
        expect(result[0]).toEqual(sorted[0]);
        expect(result[2]).toEqual(sorted[2]);
    });
});