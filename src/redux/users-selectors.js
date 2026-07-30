
export const getAllUsers = (state) => {
    return state.usersPage.users;
}
export const getpageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
export const getisLoading= (state) => {
    return state.usersPage.isloading
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
