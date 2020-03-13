module.exports = class DepthCalculator {
    let count = 1;

    function calculateDepth(arr) {
  
        for (let i = 0; i < arr.length; i++) {
      
            if (Array.isArray(arr[i])) {
                arr = arr.flat(1);
                return count += this.calculateDepth(arr);
            }
    
    } return count;
  
    }
};