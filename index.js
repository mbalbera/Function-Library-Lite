// Insert code here!!

function myEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        callback(element)
    }
}

function myMap(arr, callback){
    let answer = []
    for (let i = 0; i < arr.length; i++){
        const element = arr[i]
        answer.push(callback(element))
    }
    return answer
}

function myFilter(arr, callback) {
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if (callback(element)){
            answer.push(element)
        }
        
    }
    return answer 
}

function myFind(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if (callback(element)) {
            return (element)
        }

    }
}

function myReduce(arr, callback, aggregator = 0) {
    for (let i = 0; i < arr.length; i++) {
        aggregator =  callback(arr[i], aggregator)
    }
    return aggregator
}