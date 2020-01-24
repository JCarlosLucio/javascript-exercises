const ftoc = function(f) {
  let calcC = Math.round((f - 32)*(5/9)*10)/10;
  return calcC;
}

const ctof = function(c) {
  let calcF = Math.round(((c * 9/5) + 32)*10)/10;
  return calcF;
}

module.exports = {
  ftoc,
  ctof
}
