// '18 Jan 2020, 18:20'
console.log(23635376)
document.addEventListener('DOMContentLoaded',()=>{
    var allDateDisplays = document.getElementsByClassName('date-display');
    
    for (var i of allDateDisplays){
        // accessing the date from the html
        var dateFull = i.innerHTML

        const date = new Date(dateFull);
        // formatting the date in the format we want
        const formattedDate = date.toLocaleString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
        // set the correct format of date inside todo list
        i.innerHTML = formattedDate
    }
})