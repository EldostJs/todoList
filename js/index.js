let text = document.querySelector('.text')

let sendBtn = document.querySelector('.send')

let ul = document.querySelector('.ul')

let deletAllBtn = document.querySelector('.deleteAll')


sendBtn.addEventListener('click', function sendMessage(event) {

    if (text.value.trim() !== '') {
        
        ul.innerHTML += `<li class='divLi' style='font-size: x-large;'><button class="delete"><i class="fas fa-trash"></i></button>${text.value}</li>`;
        text.value = ''
        
        deleteButton()
        deleteAllButton()
        
    }else {
        event.preventDefault()
        sendBtn.style.display = 'none'

        setTimeout(() => {
            sendBtn.style.display = 'inline-block';
        }, 1000);    }
    }

)

function deleteButton() {
    let deletBtn = document.querySelectorAll('.delete')
    deletBtn.forEach(btn => {
        btn.addEventListener('click', function () {
            btn.parentNode.remove()
            deletAllBtn()
        })
    })
}
deleteButton()

function deleteAllButton() {
    if (ul.children.length > 0) {
        deletAllBtn.style.display = 'inline-block'
    }else {
        deletAllBtn.style.display = 'none'
    }

    deletAllBtn.addEventListener('click', function () {
        ul.innerHTML = ' '
        deletAllBtn.style.display = 'none'
    })
}
deleteAllButton()