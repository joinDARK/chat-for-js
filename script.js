const messagePost = document.getElementById("messagePost")
const chatBox = document.getElementById("chatbox")
const messageText = document.getElementById("inputMessage")
const messageName = document.getElementById("chatName")

messagePost.onclick = () => {
    if (messageText.value != "") {
        message = document.createElement('p')
        message.textContent = messageName.value + ": " + messageText.value
        chatBox.append(message)
        messageText.value = ""
    }
}