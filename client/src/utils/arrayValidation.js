export const checkArrays = (oldArr, newArr) => {
  if (oldArr.length !== newArr.length) {
    return false;
  }

  for (let i = 0; i < oldArr.length; i += 1) {
    if (
      oldArr[i].species !== newArr[i].species ||
      oldArr[i].name !== newArr[i].name
    ) {
      return false;
    }
  }

  return true;
};
