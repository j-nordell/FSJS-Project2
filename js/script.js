// Project 2 - FSJS Techdegree
// Jennifer Nordell
// Project theme: Pagination

// variable to hold a list of all the students on the page
let studentItems = document.getElementsByClassName("student-item");
// variable to hold how many students to show per page at max
let offset = 10;

// start by initializing the page to the first page
appendPageLinks(studentItems);
showPage(1, studentItems);
addSearch();

function hideAllStudents() {
    // start by hiding all students
    for(var i = 0; i < studentItems.length; i++) {
        studentItems[i].style.display = "none";
    }
}


// show a page of students by sending in the page number and the list of students
function showPage(pageNumber, studentList) {
    if(studentList.length > 0) {
        // retrieve a list of the links that were appended to the page
        let pageLinks = document.querySelectorAll(".pagination ul li a");

        // remove the active class from all links
        for(var i = 0; i < pageLinks.length; i++) {
            pageLinks[i].classList.remove("active");
        }

        hideAllStudents();

        // set the active class on the link for the current page being displayed
        if(pageLinks.length > 0) {
            pageLinks[pageNumber - 1].classList.add("active");
        }

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
    } else {
        hideAllStudents();
        let pageNode = document.getElementsByClassName("page");
        let warningDiv = document.createElement("div");
        let warningHeadline = document.createElement("h4");
        let warningText = document.createTextNode("No students found...");

        warningDiv.classList.add("warning");
        warningHeadline.appendChild(warningText);
        warningDiv.appendChild(warningHeadline);
        pageNode[0].appendChild(warningDiv);
    }         
 }

 function appendPageLinks(studentList) {
    let numOfPages;
    
    // Get the node we need to append our elements to
    let pageNode = document.getElementsByClassName("page");

    // if the div holding the links already exists get rid of it
    let linkDiv = document.getElementsByClassName("pagination");
    if(linkDiv.length > 0) {
        pageNode[0].removeChild(linkDiv[0]);
    }
    
    let warningDiv = document.getElementsByClassName("warning");
    if(warningDiv.length > 0) {
        pageNode[0].removeChild(warningDiv[0]);
    }

    // Create nodes to be appended
    linkDiv = document.createElement("div");
    let pageList = document.createElement("ul");
    let pageListItem = document.createElement("li");
    
    // Math to determine how many pages we need
    numOfPages = Math.ceil(studentList.length / offset);

    if(numOfPages > 1) {
        // create a page link section
        pageNode[0].appendChild(linkDiv);
        linkDiv.appendChild(pageList);
        linkDiv.className = "pagination";

        // For every page
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
}

// Function to add search bar to the page
function addSearch() {
    let pageHeader = document.getElementsByClassName("page-header");
    let studentSearchDiv = document.createElement("div");
    let inputBox = document.createElement("input");
    let searchButton = document.createElement("button");
    let buttonText = document.createTextNode("Search");

    studentSearchDiv.classList.add("student-search");
    inputBox.setAttribute("placeholder", "Search for students..");
    
    pageHeader[0].appendChild(studentSearchDiv);
    studentSearchDiv.appendChild(inputBox);
    studentSearchDiv.appendChild(searchButton);
    searchButton.appendChild(buttonText);

    searchButton.addEventListener("click", function() {
        searchList();
    });
}

function searchList() {
    // Array to hold any matching students
    let searchResults = [];

    // Obtain the value of the search input
    let searchInput = document.getElementsByTagName("input");
    let searchString = searchInput[0].value.toLowerCase();

    let studentNames = document.querySelectorAll('.student-details h3');
    let studentEmails = document.getElementsByClassName("email");

    if(searchString == "") {
        showPage(1, studentItems);
    }

    for(var i = 0; i < studentItems.length; i++) {
        let studentName = studentNames[i].innerHTML.toLowerCase();
        let studentEmail = studentEmails[i].innerHTML.toLowerCase();
        if(studentName.includes(searchString) || studentEmail.includes(searchString)) {
            searchResults.push(studentItems[i])
        }
    }

    appendPageLinks(searchResults);
    showPage(1, searchResults);
}

