let arr1 = ['A', 'B', 'D', 'E', 'G', 'H', 'I', 'R', 'Q', 'O', 'N', 'K', 'S', 'T', 'U', 'V', 'Y']
let arr2 = [32, 26, 37, 28, 27, 34, 31, 30, 41, 37, 25, 37, 33, 24, 27, 35, 34, 30, 36, 41, 24, 31, 26, 41, 33, 37, 40, 38, 41, 34, 30, 41, 40, 30, 24, 41, 39, 31, 31, 29, 28]

// console.log(arr1.length, arr2.length,a)
let sentence = ""
let other = [...arr2]

let arr = other.sort().reverse()

let new_arr = Array.from(new Set(arr))

let obj = {
    41: ' '
}

for (i = 0; i < arr1.length; i++) {
    obj[new_arr[i + 1]] = arr1[i]
}

for (i = 0; i < arr2.length; i++) {
    sentence += obj[arr2[i]]
}

console.log(sentence)


//////// coba yang ke 2
let arr1 = ['A', 'B', 'D', 'E', 'G', 'H', 'I', 'R', 'Q', 'O', 'N', 'K', 'S', 'T', 'U', 'V', 'Y']
let arr2 = [32, 26, 37, 28, 27, 34, 31, 30, 41, 37, 25, 37, 33, 24, 27, 35, 34, 30, 36, 41, 24, 31, 26, 41, 33, 37, 40, 38, 41, 34, 30, 41, 40, 30, 24, 41, 39, 31, 31, 29, 28]


arr1.reverse()

let indexes = arr2.map(n => arr1[n - 24])

let resultArr = indexes.map(letter => {
    return letter ? letter : ' '
})

let sentence = resultArr.join('')

console.log(sentence)