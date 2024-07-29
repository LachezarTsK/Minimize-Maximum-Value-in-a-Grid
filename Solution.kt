
import kotlin.math.max

class Solution {

    private data class Point(val value: Int, val row: Int, val column: Int){}

    private var rows: Int = 0
    private var columns: Int = 0

    fun minScore(matrix: Array<IntArray>): Array<IntArray> {
        this.rows = matrix.size
        this.columns = matrix[0].size
        val pointsSortedInAscendingValue: ArrayList<Point> = createPointsSortedInAscendingValue(matrix)
        return createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue)
    }

    private fun createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue: ArrayList<Point>): Array<IntArray> {
        val matrixWithMinimizedMaxValue = Array<IntArray>(rows) { IntArray(columns) }
        val currentValueRows = IntArray(rows)
        val currentValueColumns = IntArray(columns)

        for (current in pointsSortedInAscendingValue) {
            val nextValue = 1 + max(currentValueRows[current.row], currentValueColumns[current.column])
            currentValueRows[current.row] = nextValue
            currentValueColumns[current.column] = nextValue
            matrixWithMinimizedMaxValue[current.row][current.column] = nextValue
        }
        return matrixWithMinimizedMaxValue
    }

    private fun createPointsSortedInAscendingValue(matrix: Array<IntArray>): ArrayList<Point> {
        val pointsSortedInAscendingValue = ArrayList<Point>(rows * columns)
        for (row in 0..<rows) {
            for (column in 0..<columns) {
                pointsSortedInAscendingValue.add(Point(matrix[row][column], row, column))
            }
        }
        pointsSortedInAscendingValue.sortWith() { x, y -> x.value - y.value }
        return pointsSortedInAscendingValue
    }
}
