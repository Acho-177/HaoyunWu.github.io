
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

document.addEventListener('scroll', (e) => {
    const rows = document.querySelectorAll("div.project")
    const html = document.documentElement

    for (let [index, row] of rows.entries()) {

        const Top =  getElementViewTop(row)
        let scrolled = 1.5 - Top / html.clientHeight
        let progress = scrolled
        if (progress >= 1) progress = 1
        if (progress <= 0) progress = 0
        
        row.style.setProperty('--progress', progress)
    }
})


