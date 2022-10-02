function findUniq(int) {
    var result = 0
    int.every((data) => {
        const check = int.filter((uniq) => uniq == data);
        if (check.length <= 1) {
            result = data
            return false
        } else {
            return true
        }
    })
    return result
}
console.log(findUniq([1, 2, 1, 1, 1, 1])) // 2
