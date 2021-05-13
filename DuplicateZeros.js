// https://leetcode-cn.com/problems/duplicate-zeros/
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    var length = arr.length
    var addNum=0
    for(let i=0,j=0;i<length;i++){
        if(arr[i]===0){
            arr.splice(i,0,0)
            length++
            i++
            addNum++
        }
    }
    for(let i=0;i<addNum;i++){
        arr.pop()
    }
    
};
