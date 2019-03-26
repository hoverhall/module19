// var grid = [
//   [0,0], [0,1], [0,2], [0,3],
//   [1,0], [1,1], [1,2], [1,3],
//   [2,0], [2,1], [2,2], [2,3],
//   [3,0], [3,1], [3,2], [3,3]
// ]; 

// var newGrid = [];
// var rowLength = Math.sqrt(grid.length);
// newGrid.length = grid.length

// for (var i = 0; i < grid.length; i++)
// {
//     //convert to x/y
//     var x = i % rowLength;
//     var y = Math.floor(i / rowLength);

//     //find new x/y
//     var newX = rowLength - y - 1;
//     var newY = x;

//     //convert back to index
//     var newPosition = newY * rowLength + newX;
//     newGrid[newPosition] = grid[i];
// }

// for (var i = 0; i < newGrid.length; i++)
// {   
//     console.log(newGrid[i])
// }

// var a1 = Math.floor(a / c);
//         var a2 = Math.floor(b / c);
//         var count = a1 * a2;
//         console.log(count);
//         console.log((a * b) - count * (c * c));


// document.addEventListener("mouseover/click/mouseout/onclick", myFunction)

// ------->
// var grid = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]; 

// var newGrid = [];
// var gridElement = [];

// for (var i = 0; grid.length > i; i++)
// {
//  for (var j = 0; grid[i].length > j; j++)
//  {
//    gridElement[j] = grid[(grid[i].length-1)-j][i];
//  }
//  console.log(gridElement[0], gridElement[1], gridElement[2])
//  newGrid[i] = gridElement;
//  var gridElement = []
// }

// console.log(newGrid);


// <-------
// var grid = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]; 

// var newGrid = [];
// var gridElement = [];

// for (var i = 0; grid.length > i; i++)
// {
//  for (var j = 0; grid[i].length > j; j++)
//  {
//    gridElement[j] = grid[j][(grid[i].length-1)-i];
//  }
//  console.log(gridElement[0], gridElement[1], gridElement[2])
//  newGrid[i] = gridElement;
//  var gridElement = []
// }

// console.log(newGrid);