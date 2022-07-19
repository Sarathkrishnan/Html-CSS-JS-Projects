function typingEffect(element, speed, text) {

    element.innerHTML = "";
    var i = 0;
    var timer = setInterval(function () {
        if (i < text.length) {
            element.append(text.charAt(i))
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed)

}


var text = "I love coding"
const h1 = document.querySelector('h1');
typingEffect(h1, 150, text);