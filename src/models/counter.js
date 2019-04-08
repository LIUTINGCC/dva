export default {
    namespace: 'counter',
    state: 0,
    reducers:{
        'increase'(count){
            console.log(count+1)
            return count+1
        },
        'decrease'(count){
            console.log(count-1)
            return count-1
        }
    }
}