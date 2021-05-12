/**
 * 通过下标变化改变数组值的顺序，（从头部移动到尾部），避免频繁操作数组
 * 
 */
module.exports.moveHeadToEnd = function(arr) {
    return arr.map((item, index) => {
        return arr[(index + 1) % arr.length]
    })
}