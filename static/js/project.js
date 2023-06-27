
function getElementViewTop(element){
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
   
    while (current !== null){
    actualTop += current. offsetTop;
    current = current.offsetParent;
    }
    
    if (document.compatMode == "BackCompat"){
        var elementScrollTop=document.body.scrollTop;
    } else {
        var elementScrollTop=document.documentElement.scrollTop;
    }
    
    return actualTop-elementScrollTop;
    }

   
    
document.addEventListener("scroll", (event) => {
    
    const rows = document.querySelectorAll("div.container")
    const html = document.documentElement
    
    for (let [index, row] of rows.entries()) {
        
        const Top =  getElementViewTop(row)
        let scrolled = 1.2 - Top / html.clientHeight
        let progress = scrolled
        if (progress >= 0.5) progress = 1
        if (progress <= 0.5) progress = 0
        
        row.style.setProperty('--progress', progress)
    }
})

document.addEventListener('scroll', (e) => {
    const rows = document.querySelectorAll("div.project")
    const html = document.documentElement
    
    for (let [index, row] of rows.entries()) {

        const Top =  getElementViewTop(row)
        let scrolled = 1.3 - Top / html.clientHeight
        let progress = scrolled
        if (progress >= 0.5) progress = 1
        if (progress <= 0.5) progress = 0
        
        row.style.setProperty('--progress', progress)
    }
})

document.addEventListener('scroll', (e) => {
    const rows = document.querySelectorAll(".experience-txt")
    const html = document.documentElement

    for (let [index, row] of rows.entries()) {

        const Top =  getElementViewTop(row)
        let scrolled = 1.3 - Top / html.clientHeight
        let progress = scrolled
        if (progress >= 0.5) progress = 1
        if (progress <= 0.5) progress = 0
        
        row.style.setProperty('--progress', progress)
    }
})
