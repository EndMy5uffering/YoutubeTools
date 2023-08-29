const ADDED_BUTTONS = []

function yt_tools_add_buttons() {
    alert("aaa")
    const yt_rich_items = document.querySelectorAll("ytd-rich-item-renderer")
    if(!yt_rich_items) {
        alert("No items")
        return
    }
    yt_rich_items.forEach(e => {
        const item_button = e.querySelector("#content #details #menu button")
        const item_meta = e.querySelector("#content #details #meta")
        const button = document.createElement("button")
        button.innerHTML = "Click me!"
        button.addEventListener("click", () => {
            console.log(item_button)
            item_button?.click?.()
        })
        item_meta.appendChild(button)
        ADDED_BUTTONS.push(button)
    })
}

function remove_butons(){
    ADDED_BUTTONS.forEach(e => document.removeChild(e))
    while(ADDED_BUTTONS.length)
        ADDED_BUTTONS.pop()
}

document.querySelector('#yt_action_btn').addEventListener('click', yt_tools_add_buttons)