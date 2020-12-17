const {Pagination}  = require('./pagination');

describe('Pagination', () => {
  describe('new Pagination', () => {
    test('should set items to default value if none provided', () => {
      const pagination = new Pagination();
      expect(pagination.items).toEqual([]);
    });
    
    test('should set pageSize to default value if none provided', () => {
      const pagination = new Pagination();
      expect(pagination.pageSize).toBe(10);
    });
    
    test('should set items to value if provided', () => {
      const input = ['1','2','3'];
      const pagination = new Pagination(input);
      expect(pagination.items).toEqual(expect.arrayContaining(input));
    });
    
    test('should set pageSize to value if provided', () => {
      const pagination = new Pagination([], 5);
      expect(pagination.pageSize).toBe(5);
    });
    
    test('should start on the first page', () => {
      const pagination = new Pagination();
      expect(pagination.currentPage).toBe(1);
    });
  });

  describe('#prevPage', () => {
    test('should move to the previous page if one exists', () => {
      const pagination = new Pagination(['a', 'b', 'c', 'd', 'e'], 2);
      pagination.currentPage = 2;
      pagination.prevPage();
      expect(pagination.currentPage).toBe(1);
    });
    
    test('should return message if on first page', () => {
      const pagination = new Pagination(['a', 'b', 'c', 'd', 'e'], 2);
      pagination.prevPage();
      expect(pagination.prevPage()).toBe('You are on the first page');
    });
  });

  describe('#nextPage', () => {
    test('should move to the next page if one exists', () => {
      const pagination = new Pagination(['a', 'b', 'c', 'd', 'e'], 2);
      pagination.nextPage();
      expect(pagination.currentPage).toBe(2);
    });
    
    test('should return message if on last page', () => {
      const pagination = new Pagination();
      expect(pagination.nextPage()).toBe('You are on the last page');
    }); 
  });

  describe('#firstPage', () => {
    test('should move to page one if firstPage called', () => {
      const pagination = new Pagination(['a', 'b', 'c', 'd', 'e'], 2);
      pagination.currentPage = 2;
      pagination.firstPage();
      expect(pagination.currentPage).toBe(1);
    });
  });

  describe('#lastPage', () => {
    test('should move to final page if lastPage called', () => {
      const pagination = new Pagination(['a', 'b', 'c', 'd'], 2);
      pagination.lastPage();
      expect(pagination.currentPage).toBe(2);
    }); 
  });

  describe('#goToPage', () => {
    test('should go to page if page exists', () => {
      const pagination = new Pagination(['a', 'b', 'c', 'd', 'e'], 2);
      pagination.goToPage(2);
      expect(pagination.currentPage).toBe(2);
    });
    
    test('should return message if page for goToPage does not exists', () => {
      const pagination = new Pagination(['a', 'b', 'c', 'd', 'e'], 2);
      expect(pagination.goToPage(10)).toBe('Page not found');
    });
  });

  describe('#getVisibleItems', () => {
    test('should return the visible items for the first page', () => {
      const pagination = new Pagination(['a', 'b', 'c', 'd', 'e'], 2);
      const expected = ['a', 'b'];
      expect(pagination.getVisibleItems()[1]).toEqual(expected[1]);
    });
    
    test('should return the visible items for a page', () => {
      const pagination = new Pagination(['a', 'b', 'c', 'd', 'e'], 2);
      pagination.currentPage = 2;
      const expected = ['c', 'd'];
      expect(pagination.getVisibleItems()[0]).toEqual(expected[0]);
    });
  });
  describe('method chaining', () => {
    test('should be able to chain sucessful method calls', () => {
      const pagination = new Pagination(['a', 'b', 'c', 'd', 'e'], 2);
      pagination.lastPage().prevPage().prevPage().nextPage();
      expect(pagination.currentPage).toBe(2);  
    });
  });
});