function someFunc(a) {
  if (a) {
    return 1;
  }

  return 0
}

function otherFunc(a) {
  if (a === 10) {
    return 100;
  }

  return 1000;
}

function newOtherFunc(a) {
  if (a === 10) {
    return 100;
  }

  return 1000;
}

module.exports = { someFunc, otherFunc, newOtherFunc };
