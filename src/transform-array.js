module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        let result = [];
          for (let i = 0; i < arr.length; i++) {
              if (arr[i]==='--discard-next') {
                  i = i+1;
              } else if (arr[i]==='--discard-prev') {
                  result.pop();
              } else if (arr[i]==='--double-next') {
                  if (i != arr.length-1) {
                  result.push(arr[i+1]);}
                
              } else if (arr[i]==='--double-prev') {
                 if (i!=0) {
                  result.push(arr[i-1]);}
              } else {
                result.push(arr[i]);
              }
            
          } return result;              
    } else {
          throw Error;
    }
};
