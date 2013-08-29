//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)

// The first question's tests are written.
// See quiz.js for more details

describe('a quiz', function() {

  it('is about JavaScript and testing with Jasmine', function() {
    expect(QUIZ_TOPICS).toContain('jasmine');
    expect(QUIZ_TOPICS).toContain('javascript');
  });

});

describe('the bigDiff function', function() {

  it('it returns the difference', function(){
    expect(bigDiff([3, 6, 9, 12])).toBe(3);

  });

  it('it returns what i want it to', function(){
    expect(bigDiff([9, 20, 11, 12])).toBe(8);
  });

});


describe('the averageMedian function', function() {

  it('it returns the averageMedian for a even array length', function() {
    expect(averageMedian([2, 6, 9, 11])).toBe(7.5);
  });

  it('it returns the averageMedian for an odd array length', function() {
    expect(averageMedian([9, 8, 2, 4, 7])).toBe(4.333333333333333);
  });
});