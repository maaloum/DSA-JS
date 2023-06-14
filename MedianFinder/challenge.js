var MedianFinder = function() {
    this.nums = [];
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // thi.nums.push(num);
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let median =0;
    let length= this.nums.length
    let sum= this.nums.reduce((current, prev) => total = current + prev, 0);
    this.nums.forEach((num) =>{
        if(Nums.length % 2 == 0){
                 median = sum/length;
        }
        return nums[length-1/2];
    });
    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */