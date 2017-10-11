// Project 2 - FSJS Techdegree
// Jennifer Nordell
// Project theme: Pagination

let studentItems = document.querySelectorAll(".student-item");

showPage(1, studentItems);

function showPage(pageNumber, studentList) {
    for(var i = 0; i < studentList.length; i++) {
        studentList[i].style.display = "none";
    }
    // first hide all students on the page
    // Then loop through all students in our student list argument
       // if student should be on this page number
       	// show the student
 }

 function appendPageLinks(studentList) {
    // determine how many pages for this student list
    let numOfPages = 1;
    if(studentList.length % 10 == 0) {
        numOfPages = studentList.length / 10;
    } else {
        numOfPages = Math.floor(studentList.length / 10) + 1;
    }
    // create a page link section
    // “for” every page
        // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”
}
