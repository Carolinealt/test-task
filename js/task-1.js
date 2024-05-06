function nodeChildCount (elem, count = 0) {
    console.log(count);
}

const div = document.createElement('div')
const p = document.createElement('p')
const span = document.createElement('span')
p.appendChild(span)
div.appendChild(p)

nodeChildCount(div) // 2
nodeChildCount(div, 1) // 1
nodeChildCount(div, 2) // 2
    