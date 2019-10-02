const slots = {
  1: { adjacentSlotsIds: [null, 2, 8, null, null, null] },
  2: { adjacentSlotsIds: [null, 3, 9, 8, 1, null] },
  3: { adjacentSlotsIds: [null, 4, 10, 9, 2, null] },
  4: { adjacentSlotsIds: [null, 5, 11, 10, 3, null] },
  5: { adjacentSlotsIds: [null, 6, 12, 11, 4, null] },
  6: { adjacentSlotsIds: [null, 7, 13, 12, 5, null] },
  7: { adjacentSlotsIds: [null, null, 14, 13, 6, null] },
  8: { adjacentSlotsIds: [2, 9, 16, 15, null, 1] },
  9: { adjacentSlotsIds: [3, 10, 17, 16, 8, 2] },
  10: { adjacentSlotsIds: [4, 11, 18, 17, 9, 3] },
  11: { adjacentSlotsIds: [5, 12, 19, 18, 10, 4] },
  12: { adjacentSlotsIds: [6, 13, 20, 19, 11, 5] },
  13: { adjacentSlotsIds: [7, 14, 21, 20, 12, 6] },
  14: { adjacentSlotsIds: [null, null, null, 21, 13, 7] },
  15: { adjacentSlotsIds: [8, 16, 101, null, null, null] },
  16: { adjacentSlotsIds: [9, 17, 102, 101, 15, 8] },
  17: { adjacentSlotsIds: [10, 18, 103, 102, 16, 9] },
  18: { adjacentSlotsIds: [11, 19, 104, 103, 17, 10] },
  19: { adjacentSlotsIds: [12, 20, 105, 104, 18, 11] },
  20: { adjacentSlotsIds: [13, 21, 106, 105, 19, 12] },
  21: { adjacentSlotsIds: [14, null, 107, 106, 20, 13] },
  101: { adjacentSlotsIds: [16, 102, 109, 108, null, 15] },
  102: { adjacentSlotsIds: [17, 103, 110, 109, 101, 16] },
  103: { adjacentSlotsIds: [18, 104, 111, 110, 102, 17] },
  104: { adjacentSlotsIds: [19, 105, 112, 111, 103, 18] },
  105: { adjacentSlotsIds: [20, 105, 113, 112, 104, 19] },
  106: { adjacentSlotsIds: [21, 106, 114, 113, 105, 20] },
  107: { adjacentSlotsIds: [null, null, null, 114, 106, 21] },
  108: { adjacentSlotsIds: [101, 109, 115, null, null, null] },
  109: { adjacentSlotsIds: [102, 110, 116, 115, 108, 101] },
  110: { adjacentSlotsIds: [103, 111, 117, 116, 109, 102] },
  111: { adjacentSlotsIds: [104, 112, 118, 117, 110, 103] },
  112: { adjacentSlotsIds: [105, 113, 119, 118, 111, 104] },
  113: { adjacentSlotsIds: [106, 114, 120, 119, 112, 105] },
  114: { adjacentSlotsIds: [107, null, 121, 120, 113, 106] },
  115: { adjacentSlotsIds: [109, 116, null, null, null, 108] },
  116: { adjacentSlotsIds: [110, 117, null, null, 115, 109] },
  117: { adjacentSlotsIds: [111, 118, null, null, 116, 110] },
  118: { adjacentSlotsIds: [112, 119, null, null, 117, 111] },
  119: { adjacentSlotsIds: [113, 120, null, null, 118, 112] },
  120: { adjacentSlotsIds: [114, 121, null, null, 119, 113] },
  121: { adjacentSlotsIds: [null, null, null, null, 120, 114] },
};

export default slots;
