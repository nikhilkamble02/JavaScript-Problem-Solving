const removeFalsy = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }

  console.log(result) //[ 1, 2 ]
}

removeFalsy([0, 1, 2, null, undefined])
