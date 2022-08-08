

const findLongestWord = arr =>{
    biggestWord = 'a'
    for(i in arr) {
        if(arr[i].length > biggestWord.length){
            biggestWord = arr[i]
        }
    }return biggestWord}
    
console.log(findLongestWord(["hi", "hello"]))

// the time complexity for this is o(n) where n is the length of the array