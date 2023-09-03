const ADDED_BUTTONS = []

function yt_tools_add_buttons() {
    const yt_rich_items = document.querySelectorAll("ytd-rich-item-renderer")
    if(!yt_rich_items) {
        alert("No items")
        return
    }
    yt_rich_items.forEach(e => {
        const item_button = e.querySelector("#content #details #menu button")
        const item_meta = e.querySelector("#content #details #meta")
        if(item_meta){
            const button = document.createElement("button")
            button.innerHTML = "Click me!"
            button.addEventListener("click", () => {
                console.log(item_button)
                item_button?.click?.()
            })
            item_meta.appendChild(button)
            ADDED_BUTTONS.push(button)
        } 
    })
}

function remove_buttons(){
    ADDED_BUTTONS.forEach(e => e.remove())
    while(ADDED_BUTTONS.length)
        ADDED_BUTTONS.pop()
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.action) {
            case "add_menue":
                yt_tools_add_buttons()
                break;
            case "remove_menue":
                remove_buttons()
                break;
            default:
                alert("Unknown action: " + request.action)
                break;
        }
    }
);

window.addEventListener("load", () => {
    yt_tools_add_buttons()
    const yt_browse_area = document.querySelector("ytd-browse");
    const config = { childList: true, subtree: true };
    const callback = (mutationList, observer) => {
        console.log("Mutation")
    }

    const observer = new MutationObserver(callback);
    observer.observe(yt_browse_area, config);
}, false);