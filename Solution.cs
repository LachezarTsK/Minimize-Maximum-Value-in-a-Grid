
using System;

public class Solution
{
    private record Point(int value, int row, int column) { }

    private int rows;
    private int columns;
    public int[][] MinScore(int[][] matrix)
    {
        this.rows = matrix.Length;
        this.columns = matrix[0].Length;
        Point[] pointsSortedInAscendingValue = CreatePointsSortedInAscendingValue(matrix);
        return CreateMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue);
    }

    private int[][] CreateMatrixWithMinimizedMaxValue(Point[] pointsSortedInAscendingValue)
    {
        int[][] matrixWithMinimizedMaxValue = new int[rows][];
        for (int row = 0; row < rows; ++row)
        {
            matrixWithMinimizedMaxValue[row] = new int[columns];
        }
        int[] currentValueRows = new int[rows];
        int[] currentValueColumns = new int[columns];

        foreach (Point current in pointsSortedInAscendingValue)
        {
            int nextValue = 1 + Math.Max(currentValueRows[current.row], currentValueColumns[current.column]);
            currentValueRows[current.row] = nextValue;
            currentValueColumns[current.column] = nextValue;
            matrixWithMinimizedMaxValue[current.row][current.column] = nextValue;
        }
        return matrixWithMinimizedMaxValue;
    }

    private Point[] CreatePointsSortedInAscendingValue(int[][] matrix)
    {
        Point[] pointsSortedInAscendingValue = new Point[rows * columns];
        int index = 0;
        for (int row = 0; row < rows; ++row)
        {
            for (int column = 0; column < columns; ++column)
            {
                pointsSortedInAscendingValue[index] = new Point(matrix[row][column], row, column);
                ++index;
            }
        }
        Array.Sort(pointsSortedInAscendingValue, (x, y) => x.value - y.value);
        return pointsSortedInAscendingValue;
    }
}
