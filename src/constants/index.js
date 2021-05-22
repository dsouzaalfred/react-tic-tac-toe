export const initialSate = {
  c1: {value: null, inWinningCombo: false},
  c2: {value: null, inWinningCombo: false},
  c3: {value: null, inWinningCombo: false},
  c4: {value: null, inWinningCombo: false},
  c5: {value: null, inWinningCombo: false},
  c6: {value: null, inWinningCombo: false},
  c7: {value: null, inWinningCombo: false},
  c8: {value: null, inWinningCombo: false},
  c9: {value: null, inWinningCombo: false},
};

export const possibleWinners = [
  ['c1', 'c2', 'c3'],
  ['c4', 'c5', 'c6'],
  ['c7', 'c8', 'c9'],
  ['c1', 'c4', 'c7'],
  ['c2', 'c5', 'c8'],
  ['c3', 'c6', 'c9'],
  ['c1', 'c5', 'c9'],
  ['c3', 'c5', 'c7'],
];
