// Project 2 - FSJS Techdegree
// Jennifer Nordell
// Project theme: Pagination

// variable to hold a list of all the students on the page
let studentItems = document.querySelectorAll(".student-item");
// variable to hold how many students to show per page at max
let offset = 10;

// start by initializing the page to the first page
appendPageLinks(studentItems);
showPage(1, studentItems);

// show a page of students by sending in the page number and the list of students
function showPage(pageNumber, studentList) {
    // retrieve a list of the links that were appended to the page
    let pageLinks = document.querySelectorAll(".pagination ul li a");

    // start by hiding all students
    for(var i = 0; i < studentList.length; i++) {
        studentList[i].style.display = "none";
    }

    // remove the active class from all links
    for(var i = 0; i < pageLinks.length; i++) {
        pageLinks[i].classList.remove("active");
    }

    // set the active class on the link for the current page being displayed
    pageLinks[pageNumber - 1].classList.add("active");

    // if it's the last page show the students that are remaining.  For example if our offset is 10
    // and there are 16 students this will show the last 6 students without trying to go
    // out of bounds of the array
    if(pageNumber == Math.ceil(studentList.length / offset)) {
        for(var i = (pageNumber * offset) - offset; i < studentList.length; i++) {
            studentList[i].style.display = "block";
        }
    } else {  // otherwise display students in the appropriate section of the students list
        for(var i = (pageNumber*offset) - offset; i < (pageNumber * offset); i++) {
        studentList[i].style.display = "block";
        }   
    }         
 }

 function appendPageLinks(studentList) {
    let numOfPages;
    
    // Get the node we need to append our elements to
    let pageNode = document.querySelector(".page");
    // Create nodes to be appended
    let pageDiv = document.createElement("div");
    let pageList = document.createElement("ul");
    let pageListItem = document.createElement("li");
    
    // Math to determine how many pages we need
    numOfPages = Math.ceil(studentList.length / offset);

    // create a page link section
    pageNode.appendChild(pageDiv);
    pageDiv.appendChild(pageList);
    pageDiv.className = "pagination";

    // “for” every page
    for(let i = 1; i <= numOfPages; i++) {
        // add a page link to the page link section
        let pageLink = document.createElement("a");  // create a link
        let pageNumberText = document.createTextNode(i);  // create the link text
        pageLink.setAttribute("href", "#");  // add href attribute to the link
        pageLink.addEventListener("click", function() {  // tell the link what to do when clicked
             showPage(i, studentList);
        });
        pageList.appendChild(pageListItem);  // append list item to the unordered list
        pageListItem.appendChild(pageLink);  // append the link to the list item
        pageLink.appendChild(pageNumberText);  //append the text to the link
    }
}

function searchList() {
    // Obtain the value of the search input
    // remove the previous page link section    
    // Loop over the student list, and for each student…
// ...obtain the student’s name…
// ...and the student’s email…
// ...if the search value is found inside either email or name…
    		// ...add this student to list of “matched” student
    // If there’s no “matched” students…
           // ...display a “no student’s found” message
    // If over ten students were found…
           // ...call appendPageLinks with the matched students
   // Call showPage to show first ten students of matched list
}

