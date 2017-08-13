var Grid = {
  count: function (A, B) {
    var paths = [];
    for (var i = 0; i < A; i++) {
      paths[i] = [];
      paths[i][0] = 1;
    }
    for (var j = 0; j < B; j++) {
      paths[0][j] = 1;
    }
    return paths;
  },
  print: function (arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        str = str + arr[i][j] + ' ';
      }
      str = str + '\n';
    }
    return str;
  }
}

Grid.count(5, 10);