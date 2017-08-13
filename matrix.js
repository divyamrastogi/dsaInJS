var matrix = {
  //param A : integer
  //return a array of array of integers
  prettyPrint: function (A) {
    if (A == 1) {
      return [1];
    }
    var i = 0,
      j = 0,
      num = A,
      arr = [],
      stop = false;
    var MOVE_RIGHT = 0,
      MOVE_DOWN = 1,
      MOVE_LEFT = 2,
      MOVE_UP = 3;
    var RIGHT_LIMIT = (2 * (A - 1)),
      DOWN_LIMIT = (2 * (A - 1)),
      LEFT_LIMIT = 0,
      UP_LIMIT = 1,
      direction = MOVE_RIGHT;
    for (var k = 0; k < (2 * A - 1); k++) {
      arr[k] = [];
    }
    do {
      switch (direction) {
        case MOVE_RIGHT:
          arr[i][j] = num;
          if (j == RIGHT_LIMIT) {
            i++;
            RIGHT_LIMIT--;
            direction++;
            if (i === A - 1 && j === A - 1) {
              stop = true;
            }
            break;
          }
          j++;
          break;
        case MOVE_DOWN:
          arr[i][j] = num;
          if (i == DOWN_LIMIT) {
            j--;
            DOWN_LIMIT--;
            direction++;
            break;
          }
          i++;
          break;
        case MOVE_LEFT:
          arr[i][j] = num;
          if (j == LEFT_LIMIT) {
            i--;
            LEFT_LIMIT++;
            direction++;
            break;
          }
          j--;
          break;
        case MOVE_UP:
          arr[i][j] = num;
          if (i == UP_LIMIT) {
            j++;
            UP_LIMIT++;
            direction++;
            num--;
            break;
          }
          i--;
          break;
        default:
          break;
      }
      direction = direction % 4;
    } while (!stop);
    console.log(this.print(arr));
  },
  print: function(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        str = str + arr[i][j] + ' ';
      }
      str = str + '\n';
    }
    return str;
  }
};

matrix.prettyPrint(4);