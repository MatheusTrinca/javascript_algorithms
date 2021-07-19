function someRecursive(array, callback){
  if(array.length === 0) return false;
  if(callback(array[0])) return true;
  return someRecursive(array.shift(), callback)
}

