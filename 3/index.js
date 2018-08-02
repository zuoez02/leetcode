const lengthOfLongestSbstring = function(s) {
    let result = 0;
    let index = 0;
    let queue = [];
    while(index < s.length) {
      for (let i = 0; i < queue.length; i++) {
        if (s[index] === queue[i]) {
          result = queue.length > result ? queue.length : result;
          while (i >= 0) {
            queue.shift();
            i--;
          }
          break;
        }
      }
      queue.push(s[index]);
      index++;
    }
    result = queue.length > result ? queue.length : result;
    return result;
};

console.log(lengthOfLongestSbstring('pwwkew'));
