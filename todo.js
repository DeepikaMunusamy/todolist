var input = document.getElementById("one")
    var ul = document.getElementById("list-container")

    function todo() {
        var list = document.createElement("li")
        list.innerHTML = input.value + "<button id='del' onclick=' Deleteitem(event)'>Delete</button>"
        ul.append(list)
    }

    function Deleteitem(event) {
        event.target.parentElement.remove()

    }