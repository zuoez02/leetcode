/**
 * Manacher's ALGORITHM: O(n)时间求字符串的最长回文子串  不指定
 * https://www.felix021.com/blog/read.php?2040
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const a = ['#'];
    for (let i = 0; i < s.length; i++) {
      a.push(s[i], '#');
    }
    a.push('\0');
    const p = Array(a.length).fill(0);
    let mx = 0; id = 0;
    for (let i = 1; a[i] !== '\0'; i++) {
      p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1;
      while (a[i + p[i]] === a[i - p[i]] ) p[i]++;
      if (i + p[i] > mx) {
        mx = i + p[i];
        id = i;
      }
    }
    let index = 1
    for (let j = 1; j < p.length; j++) {
      if (p[j] > p[index]) {
        index = j;
      }
    }
    const result = [];
    let begin = index - p[index] + 1;
    let end = index + p[index] - 1;
    for (let i = begin; i <= end; i++) {
      result.push(a[i]);
    }
    return result.join('').replace(/\#|\,/g, '');
};


console.log(longestPalindrome('babad'));
