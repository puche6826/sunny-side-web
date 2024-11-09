function toggleSidebar() {
    let sidebar = document.getElementById('mySidebar');  

    if (sidebar.style.display === 'flex') {
        sidebar.style.display = 'none'; // Hide the sidebar
    } else {
        sidebar.style.display = 'flex'; // Show the sidebar
    } 
    }

// function hidemySidebar() {
//     document.getElementById('mySidebar').style.display = 'none'; // Hide the sidebar
// }
