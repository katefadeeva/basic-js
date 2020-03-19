module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || "+";
  let addition = options.addition !== undefined ? options.addition : "";
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || "|";
  
  if (typeof(str) != 'string') {
      str = String(str);
  }

  let r = "";
  for (let i = 1; i < additionRepeatTimes; i++) {
    r = r + addition + additionSeparator;
  }
  r += addition;

  let newstr = "";
  for (let k = 1; k < repeatTimes; k++) {
    newstr = newstr + str + r + separator;
  }
  newstr += str + r;

  return newstr;
};
  