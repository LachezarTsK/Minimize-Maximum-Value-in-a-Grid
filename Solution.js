
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var minScore = function (matrix) {
    this.rows = matrix.length;
    this.columns = matrix[0].length;
    const pointsSortedInAscendingValue = createPointsSortedInAscendingValue(matrix);
    return createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue);
};

/**
 * @param {number} value
 * @param {number} row
 * @param {number} column
 */
function Point(value, row, column) {
    this.value = value;
    this.row = row;
    this.column = column;
}

/**
 * @param {Point[]} pointsSortedInAscendingValue
 * @return {number[][]}
 */
function createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue) {
    const matrixWithMinimizedMaxValue = Array.from(new Array(this.rows), () => new Array(this.columns));
    const currentValueRows = new Array(this.rows).fill(0);
    const currentValueColumns = new Array(this.columns).fill(0);

    for (let current of pointsSortedInAscendingValue) {
        const nextValue = 1 + Math.max(currentValueRows[current.row], currentValueColumns[current.column]);
        currentValueRows[current.row] = nextValue;
        currentValueColumns[current.column] = nextValue;
        matrixWithMinimizedMaxValue[current.row][current.column] = nextValue;
    }
    return matrixWithMinimizedMaxValue;
}

/**
 * @param {number[][]} matrix
 * @return {Point[]} 
 */
function createPointsSortedInAscendingValue(matrix) {
    const pointsSortedInAscendingValue = new Array(this.rows * this.columns);
    let index = 0;
    for (let row = 0; row < this.rows; ++row) {
        for (let column = 0; column < this.columns; ++column) {
            pointsSortedInAscendingValue[index] = new Point(matrix[row][column], row, column);
            ++index;
        }
    }
    pointsSortedInAscendingValue.sort((x, y) => x.value - y.value);
    return pointsSortedInAscendingValue;
}
