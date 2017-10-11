// Project 2 - FSJS Techdegree
// Jennifer Nordell
// Project theme: Pagination

let studentItems = document.querySelectorAll(".student-item");
let offset = 10;



appendPageLinks(studentItems);
showPage(1, studentItems);

function showPage(pageNumber, studentList) {
    let pageLinks = document.querySelectorAll(".pagination ul li a");
    for(var i = 0; i < pageLinks.length; i++) {
        pageLinks[i].classList.remove("active");
    }

    pageLinks[pageNumber - 1].classList.add("active");

    for(var i = 0; i < studentList.length; i++) {
        studentList[i].style.display = "none";
    }
    // first hide all students on the page
    // Then loop through all students in our student list argument
       // if student should be on this page number
           // show the student
    if(pageNumber == Math.ceil(studentList.length / offset)) {
        for(var i = (pageNumber * offset) - offset; i < studentList.length; i++) {
            studentList[i].style.display = "block";
        }
    } else {
        for(var i = (pageNumber*offset) - offset; i < (pageNumber * offset); i++) {
        studentList[i].style.display = "block";
        }   
    }         

 }

 function appendPageLinks(studentList) {
    // determine how many pages for this student list
    let numOfPages;
    let pageNode = document.querySelector(".page");
    let pageDiv = document.createElement("div");
    let pageList = document.createElement("ul");
    let pageNumber = document.createElement("li");
    

    numOfPages = Math.ceil(studentList.length / 10);

    // create a page link section
    pageNode.appendChild(pageDiv);
    pageDiv.appendChild(pageList);
    pageDiv.className = "pagination";
    // “for” every page
    for(let i = 1; i <= numOfPages; i++) {
        // add a page link to the page link section
        let pageLink = document.createElement("a");
        let pageNumberText = document.createTextNode(i);
        pageLink.setAttribute("href", "#");
        pageLink.addEventListener("click", function() {
             showPage(i, studentList);
        });
        pageList.appendChild(pageNumber);
        pageNumber.appendChild(pageLink);
        pageLink.appendChild(pageNumberText);  
    }

    
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”
}
