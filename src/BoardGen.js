export function makeRandomBoard(rows,cols){
    let grid = []
    for (var i = 0; i < rows; i++){
        var row = [];
        for (var j = 0; j < cols; j++){
            let value;
            value = Math.random() < 0.3;
            row.push({
                status: value,
                newBorn: value
            });
        }
        grid.push(row);
      }
      return grid;
}

export function cleanBoard(rows,cols){
    let grid = []
    for (var i = 0; i < rows; i++){
        var row = [];
        for (var j = 0; j < cols; j++){
          let value = false;
          row.push({
            status: value,
            newBorn: value
          });
        }
        grid.push(row);
      }
      return grid;
}

export const nextGrid = function(grid = []){
    let rows = grid.length
    let cols = grid[0].length


    let calculateNeighbours = (x,y) => {

        //if a cell goes over the edge, it will come out from opposite edge
        let topRow = (x-1 < 0) ? (rows - 1) : (x-1);
        let bottomRow = (x+1 === rows) ? (0) : (x+1);
        let leftColumn = (y-1 < 0) ? (cols - 1) : (y-1);
        let rightColumn = (y+1 === cols) ? (0) : (y+1);

        let total = 0;
        total+= grid[topRow][leftColumn].status;
        total+= grid[topRow][y].status;
        total+= grid[topRow][rightColumn].status;
        total+= grid[x][leftColumn].status;
        total+= grid[x][rightColumn].status;
        total+= grid[bottomRow][leftColumn].status;
        total+= grid[bottomRow][y].status;
        total+= grid[bottomRow][rightColumn].status;

        return total;
    }

    let newGrid = []

    for(let x=0;x<rows;x++){
        let row = []
        for(let y=0;y<cols;y++){
            let alive = grid[x][y].status
            let neighbours = calculateNeighbours(x,y)

            if(alive){
                if(neighbours<2 || neighbours>3){
                    row.push({status: 0})
                }else{
                    row.push({status: 1})
                }
            }

            if(!alive){
                if(neighbours === 3){
                    row.push({status: 1, newBorn: true})
                }else{
                    row.push({status: 0})
                }
            }
        }
        newGrid.push(row)
    }

    return newGrid
}
