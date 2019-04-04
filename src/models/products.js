export default {
    // 全局 state的 key
    namespace: 'products',
    // 初始值
    state: [],
    // 接收action, 同步更新state
    reducers: {
        'delete'(state,{ payload:id }){
            return state.filter(item => item.id !== id);
        }
    }
}