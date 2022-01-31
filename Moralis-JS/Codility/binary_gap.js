function solution(N) {
  let bin_arr = N.toString(2).split('');
  return bin_arr;

  for (i = 0; i < bin_arr.length; i += 1) {
    let bin_gap = 0;
    do {
      bin_gap += 1;
    }
    while (bin_arr[i] === 0);
    let finalResult = number;
    (finalResulet > bin_gap) ? (return finalResulet) : (return bin_gap);
  }
}

let number = 15;
solution(number);
