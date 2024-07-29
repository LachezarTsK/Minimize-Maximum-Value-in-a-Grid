
function minScore(matrix: number[][]): number[][] {
    this.rows = matrix.length;
    this.columns = matrix[0].length;
    const pointsSortedInAscendingValue = createPointsSortedInAscendingValue(matrix);
    return createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue);
};

class Point {
    value: number;
    row: number;
    column: number;

    constructor(value: number, row: number, column: number) {
        this.value = value;
        this.row = row;
        this.column = column;
    }
}

function createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue: Point[]): number[][] {
    const matrixWithMinimizedMaxValue: number[][] = Array.from(new Array(this.rows), () => new Array(this.columns));
    const currentValueRows: number[] = new Array(this.rows).fill(0);
    const currentValueColumns: number[] = new Array(this.columns).fill(0);

    for (let current of pointsSortedInAscendingValue) {
        const nextValue = 1 + Math.max(currentValueRows[current.row], currentValueColumns[current.column]);
        currentValueRows[current.row] = nextValue;
        currentValueColumns[current.column] = nextValue;
        matrixWithMinimizedMaxValue[current.row][current.column] = nextValue;
    }
    return matrixWithMinimizedMaxValue;
}

function createPointsSortedInAscendingValue(matrix: number[][]): Point[] {
    const pointsSortedInAscendingValue: Point[] = new Array(this.rows * this.columns);
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
