
#include <span>
#include <ranges>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {

    struct Point {
        int value = 0;
        size_t row = 0;
        size_t column = 0;

        Point() = default;
        ~Point() = default;

        Point(int value, size_t row, size_t column) : value{ value }, row{ row }, column{ column } {}
    };

    size_t rows = 0;
    size_t columns = 0;

public:
    vector<vector<int>> minScore(const vector<vector<int>>& matrix) {
        this->rows = matrix.size();
        this->columns = matrix[0].size();
        vector<Point> pointsSortedInAscendingValue = createPointsSortedInAscendingValue(matrix);
        return createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue);
    }


private:
    vector<vector<int>> createMatrixWithMinimizedMaxValue(const span<Point> pointsSortedInAscendingValue) const {
        vector<vector<int>> matrixWithMinimizedMaxValue(rows, vector<int>(columns));
        vector<int> currentValueRows(rows);
        vector<int> currentValueColumns(columns);

        for (const auto& current : pointsSortedInAscendingValue) {
            int nextValue = 1 + max(currentValueRows[current.row], currentValueColumns[current.column]);
            currentValueRows[current.row] = nextValue;
            currentValueColumns[current.column] = nextValue;
            matrixWithMinimizedMaxValue[current.row][current.column] = nextValue;
        }
        return matrixWithMinimizedMaxValue;
    }

    vector<Point> createPointsSortedInAscendingValue(span<const vector<int>> matrix) const {
        vector<Point> pointsSortedInAscendingValue;
        pointsSortedInAscendingValue.reserve(rows * columns);

        for (size_t row = 0; row < rows; ++row) {
            for (size_t column = 0; column < columns; ++column) {
                pointsSortedInAscendingValue.emplace_back(matrix[row][column], row, column);
            }
        }
        ranges::sort(pointsSortedInAscendingValue, [](const Point& x, const Point& y){return x.value < y.value;});
        return pointsSortedInAscendingValue;
    }
};
