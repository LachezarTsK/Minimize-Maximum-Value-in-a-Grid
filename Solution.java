
import java.util.Arrays;

public class Solution {

    private record Point(int value, int row, int column){}

    private int rows;
    private int columns;

    public int[][] minScore(int[][] matrix) {
        this.rows = matrix.length;
        this.columns = matrix[0].length;
        Point[] pointsSortedInAscendingValue = createPointsSortedInAscendingValue(matrix);
        return createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue);
    }

    private int[][] createMatrixWithMinimizedMaxValue(Point[] pointsSortedInAscendingValue) {
        int[][] matrixWithMinimizedMaxValue = new int[rows][columns];
        int[] currentValueRows = new int[rows];
        int[] currentValueColumns = new int[columns];

        for (Point current : pointsSortedInAscendingValue) {
            int nextValue = 1 + Math.max(currentValueRows[current.row], currentValueColumns[current.column]);
            currentValueRows[current.row] = nextValue;
            currentValueColumns[current.column] = nextValue;
            matrixWithMinimizedMaxValue[current.row][current.column] = nextValue;
        }
        return matrixWithMinimizedMaxValue;
    }

    private Point[] createPointsSortedInAscendingValue(int[][] matrix) {
        Point[] pointsSortedInAscendingValue = new Point[rows * columns];
        int index = 0;
        for (int row = 0; row < rows; ++row) {
            for (int column = 0; column < columns; ++column) {
                pointsSortedInAscendingValue[index] = new Point(matrix[row][column], row, column);
                ++index;
            }
        }
        Arrays.sort(pointsSortedInAscendingValue, (x, y) -> x.value - y.value);
        return pointsSortedInAscendingValue;
    }
}
