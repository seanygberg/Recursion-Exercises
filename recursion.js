/** product: calculate the product of an array of numbers. */

function product(nums, curIndex = 0) {
  if (curIndex >= nums.length) {
    return 1;
  } else {
    return nums[curIndex] * product(nums, curIndex + 1)
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, curIndex = 0, longestLength = 0) {
  if (curIndex >= words.length) {
    return longestLength;
  } else {
    longestLength = Math.max(longestLength, words[curIndex].length);
    return longest(words, curIndex + 1, longestLength);
  }
}


/** everyOther: return a string with every other letter. */

function everyOther(str, curIndex = 0) {
  if (curIndex >= str.length) {
    return '';
  } else {
    return str[curIndex] + everyOther(str, curIndex + 2);
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) {
    return true;
  } else if (str[start].toLowerCase() !== str[end].toLowerCase()) {
    return false;
  } else {
    return isPalindrome(str, start + 1, end - 1);
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(array, value, curIndex = 0) {
  if (curIndex >= array.length) {
    return -1;
  } else if (array[curIndex] === value) {
    return curIndex;
  } else {
    return findIndex(array, value, curIndex + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, curIndex = 0) {
  if (curIndex >= str.length) {
    return '';
  } else {
    return str[str.length-1-curIndex] + revString(str, curIndex + 1);
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = []
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      strings.push(...gatherStrings(obj[key]));
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const midPoint = Math.floor((start + end) / 2);

  if (arr[midPoint] === val) {
    return midPoint;
  }

  if (arr[midPoint] > val) {
    return binarySearch(arr, val, start, midPoint - 1);
  }
  return binarySearch(arr, val, midPoint + 1, end);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
