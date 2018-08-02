const findMedianSortedArrays = function (nums1, nums2) {
  let i1 = 0;
  let i2 = 0;
  let targetIndex, less;
  const lens = nums1.length + nums2.length;
  if (lens % 2 === 1) {
    targetIndex = Math.ceil(lens / 2);
    less = 1;
  } else {
    targetIndex = lens / 2;
    less = 0;
  }
  const target = [];
  while (i1 < nums1.length || i2 < nums2.length) {
    if (nums1[i1] !== undefined && nums2[i2] !== undefined) {
      if (nums1[i1] < nums2[i2]) {
        setTarget(nums1[i1++], target);
      } else {
        setTarget(nums2[i2++], target);
      }
    } else {
      if (nums1[i1] === undefined) {
        setTarget(nums2[i2++], target);
      } else {
        setTarget(nums1[i1++], target);
      }
    }
    if (i1 + i2 > targetIndex) {
      break;
    }
  }
  if (less === 0) {
    return (target[0] + target[1]) / 2;
  } else {
    return target[0];
  }
};

function setTarget(num, target) {
  target.push(num);
  if (target.length > 2) {
    target.shift();
  }
}

console.log(findMedianSortedArrays([1, 2, 4], []));
