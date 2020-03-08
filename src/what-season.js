module.exports = function getSeason(date) {
  let winter = [0,1,11];
  let spring = [2,3,4];
  let summer = [5,6,7];
  let autumn = [8,9,10];
  if (!date) {
    return 'Unable to determine the time of year!';
  } else {
    date.valueOf();
    let month = date.getMonth(); 
    if (winter.includes(month)) {
      return 'winter';
    } else if (spring.includes(month)) {
      return 'spring';
    } else if (summer.includes(month)) {
      return 'summer';
    } else if (autumn.includes(month)) {
      return 'autumn';
    }
  }
};
