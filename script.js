console.log('Hi Paul')

// Local Storage
localStorage.setItem('name', 'Paul')
// Add
console.log(localStorage.getItem('name'))
// Remove
//localStorage.removeItem('name')


// Session Storage
sessionStorage.setItem('name', 'Paul T')
// Add
console.log(sessionStorage.getItem('name'))
// Remove
//sessionStorage.removeItem('name')


document.cookie = 'nickName=Chunky; expires=' + new Date(2024, 6, 21, 12, 32, 13) .toUTCString()
document.cookie = 'persist=forever; expires=' + new Date(9999, 12, 31) .toUTCString()
console.log(document.cookie)