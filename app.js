
let navbarContainer = document.createElement("div")
navbarContainer.className = "navbar-container"
document.body.appendChild(navbarContainer)

let logo = document.createElement("div")
logo.className = "logo"
navbarContainer.appendChild(logo)

let title = document.createElement("h1")
title.className = "title"
title.innerHTML = "HighOnCoding"
logo.appendChild(title)

let navbar = document.createElement("div")
navbar.className = "navbar"
navbarContainer.appendChild(navbar)

// home tab starts here ===========================
let ulList = document.createElement("ul")
ulList.className = "nav nav-pills mb-3 nav-list"
ulList.id = "pills-tab"
let att = document.createAttribute("role")
att.value = "tablist"
ulList.setAttributeNode(att)
navbar.appendChild(ulList)

let navItem = document.createElement("li")
navItem.className = "nav-item"
ulList.appendChild(navItem)

let a = document.createElement("a")
a.className = "nav-link active"
a.id = "pills-home-tab"
let att1 = document.createAttribute("data-toggle")
att1.value = "pill"
a.setAttributeNode(att1)

let att2 = document.createAttribute("href")
att2.value = "#pills-home"
a.setAttributeNode(att2)

let att3 = document.createAttribute("role")
att3.value = "tab"
a.setAttributeNode(att3)

let att4 = document.createAttribute("aria-controls")
att4.value = "pills-home"
a.setAttributeNode(att4)

let att5 = document.createAttribute("aria-selected")
att5.value = "true"
a.setAttributeNode(att5)

a.innerHTML = "Home"
navItem.appendChild(a)
// home tab ends here ==================================

// Categories tab starts here ==================

let navItem2 = document.createElement("li")
navItem2.className = "nav-item"
ulList.appendChild(navItem2)

let a2 = document.createElement("a")
a2.className = "nav-link"
a2.id = "pills-profile-tab"
let att6 = document.createAttribute("data-toggle")
att6.value = "Categories"
a2.setAttributeNode(att6)

let att7 = document.createAttribute("href")
att7.value = "categories.html"
a2.setAttributeNode(att7)

let att8 = document.createAttribute("role")
att8.value = "tab"
a2.setAttributeNode(att8)

let att9 = document.createAttribute("aria-controls")
att9.value = "pills-profile"
a2.setAttributeNode(att9)

let att10 = document.createAttribute("aria-selected")
att10.value = "false"
a2.setAttributeNode(att10)

a2.innerHTML = "Categories"
navItem2.appendChild(a2)
// Categories end here ============================

//
let tabContent = document.createElement("div")
tabContent.className = "tab-content"
tabContent.id = "pills-tabContent"

let tabPane = document.createElement("div")
tabPane.className="tab-pane fade show active"
tabPane.id="pills.home"
let divRole = document.createAttribute("role")
divRole.value="tabpanel"
tabPane.setAttributeNode(divRole)
let ariaLabelLedBy = document.createAttribute("aria-labelledby")
ariaLabelLedBy.value="pills-home-tab"
tabPane.setAttributeNode(ariaLabelLedBy)
tabPane.innerHTML="..."
tabContent.appendChild(tabPane)

let tabPane2 = document.createElement("div")
tabPane2.className="tab-pane fade"
tabPane2.id="pills.profile"
let divRole2 = document.createAttribute("role")
divRole2.value="tabpanel"
tabPane2.setAttributeNode(divRole2)
let ariaLabelLedBy2 = document.createAttribute("aria-labelledby")
ariaLabelLedBy2.value="pills-profile-tab"
tabPane2.setAttributeNode(ariaLabelLedBy2)
tabPane2.innerHTML="..."
tabContent.appendChild(tabPane2)

let tabPane3 = document.createElement("div")
tabPane3.className="tab-pane fade"
tabPane3.id="pills.contact"
let divRole3 = document.createAttribute("role")
divRole3.value="tabpanel"
tabPane3.setAttributeNode(divRole3)
let ariaLabelLedBy3 = document.createAttribute("aria-labelledby")
ariaLabelLedBy3.value="pills-contact-tab"
tabPane3.setAttributeNode(ariaLabelLedBy3)
tabPane3.innerHTML="..."
tabContent.appendChild(tabPane3)

//  BODY Part starts here   =================================

let container =document.createElement("div")
container.className="container parent-div"
document.body.appendChild(container)
//---------------------------------
let column = document.createElement("div")
column.className="column"
container.appendChild(column)
//-----------------------------------
let childCol = document.createElement("div")
childCol.className="col-sm"
column.appendChild(childCol)
//--------------------------------------
let reviewTitle = document.createElement("h2")
reviewTitle.className="review-title"
reviewTitle.innerHTML="Curse of the Current Reviews"
childCol.appendChild(reviewTitle)
//------------------------------------
let paragraph = document.createElement("p")
paragraph.className="paragraph"
paragraph.innerHTML="When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors; price, screenshot, and reviews."
childCol.appendChild(paragraph)
//--------------------------------------
let container2 = document.createElement("div")
container2.className="container"
document.body.appendChild(container2)
//------------------------------------
let column2 = document.createElement("div")
column2.className="column"
container2.appendChild(column2)
//-----------------------------------
let childCol2 = document.createElement("div")
childCol2.className="col-sm"
column2.appendChild(childCol2)
//-------------------------------------
let watchKit = document.createElement("h3")
watchKit.className="watchkit"
watchKit.innerHTML="Hello WatchKit"
watchKit.style.color="blue"
childCol2.appendChild(watchKit)
//--------------------------------------
let paragraph2 = document.createElement("p")
paragraph2.className="paragraph"
paragraph2.innerHTML="Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 betaSDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
childCol2.appendChild(paragraph2)
//--------------------------------------
let likes = document.createElement("div")
likes.className="col-sm likes"
likes.innerHTML="12 Comments &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 124 Likes"
column2.appendChild(likes)
//----------------------------------------
let container3 = document.createElement("div")
container3.className="container"
document.body.appendChild(container3)
//------------------------------------
let column3 = document.createElement("div")
column3.className="column"
container3.appendChild(column3)
//-----------------------------------
let childCol3 = document.createElement("div")
childCol3.className="col-sm"
column3.appendChild(childCol3)
//-------------------------------------
let swift = document.createElement("h3")
swift.className="swift"
swift.innerHTML="Introduction to Swift"
swift.style.color="blue"
childCol3.appendChild(swift)
//--------------------------------------
let paragraph3 = document.createElement("p")
paragraph3.className="paragraph"
paragraph3.innerHTML="Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development, but it clearly reflects the intentions and the future direction. This article will revolve around the basics in the Swift language and how you can get started."
childCol3.appendChild(paragraph3)
//--------------------------------------
let likes2 = document.createElement("div")
likes2.className="col-sm likes"
likes2.innerHTML="15 Comments &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 45 Likes"
column3.appendChild(likes2)
