
package main

import (
    "fmt"
    "sort"
)

type Point struct {
    value  int
    row    int
    column int
}

var rows int = 0
var columns int = 0

func minScore(matrix [][]int) [][]int {
    rows = len(matrix)
    columns = len(matrix[0])
    var pointsSortedInAscendingValue []Point = createPointsSortedInAscendingValue(matrix)
    return createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue)
}

func createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue []Point) [][]int {
    matrixWithMinimizedMaxValue := make([][]int, rows)
    for row := 0; row < rows; row++ {
        matrixWithMinimizedMaxValue[row] = make([]int, columns)
    }
    currentValueRows := make([]int, rows)
    currentValueColumns := make([]int, columns)

    for _, current := range pointsSortedInAscendingValue {
        nextValue := 1 + max(currentValueRows[current.row], currentValueColumns[current.column])
        currentValueRows[current.row] = nextValue
        currentValueColumns[current.column] = nextValue
        matrixWithMinimizedMaxValue[current.row][current.column] = nextValue
    }
    return matrixWithMinimizedMaxValue
}

func createPointsSortedInAscendingValue(matrix [][]int) []Point {
    pointsSortedInAscendingValue := make([]Point, rows*columns)
    index := 0

    for row := 0; row < rows; row++ {
        for column := 0; column < columns; column++ {
            pointsSortedInAscendingValue[index] = Point{value: matrix[row][column], row: row, column: column}
            index++
        }
    }
    sort.Slice(pointsSortedInAscendingValue,
        func(i, j int) bool {
            return pointsSortedInAscendingValue[i].value < pointsSortedInAscendingValue[j].value
        })
    return pointsSortedInAscendingValue
}
