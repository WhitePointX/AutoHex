const fields = {
  1: { neighborFieldsIds: [2, 8, 9] },
  2: { neighborFieldsIds: [1, 9, 10, 3] },
  3: { neighborFieldsIds: [2, 10, 11, 4] },
  4: { neighborFieldsIds: [3, 11, 12, 5] },
  5: { neighborFieldsIds: [4, 12, 13, 6] },
  6: { neighborFieldsIds: [5, 13, 14, 7] },
  7: { neighborFieldsIds: [6, 14] },
  8: { neighborFieldsIds: [1, 9, 15] },
  9: { neighborFieldsIds: [1, 2, 8, 10, 15, 16] },
  10: { neighborFieldsIds: [2, 3, 9, 11, 16, 17] },
  11: { neighborFieldsIds: [3, 4, 10, 12, 17, 18] },
  12: { neighborFieldsIds: [4, 5, 11, 13, 18, 19] },
  13: { neighborFieldsIds: [5, 6, 12, 14, 19, 20] },
  14: { neighborFieldsIds: [6, 7, 13, 20, 21] },
  15: { neighborFieldsIds: [8, 9, 16] },
  16: { neighborFieldsIds: [15, 9, 10, 17] },
  17: { neighborFieldsIds: [16, 10, 11, 18] },
  18: { neighborFieldsIds: [17, 11, 12, 19] },
  19: { neighborFieldsIds: [18, 12, 13, 20] },
  20: { neighborFieldsIds: [19, 13, 14, 21] },
  21: { neighborFieldsIds: [20, 14] },
};

export default fields;
