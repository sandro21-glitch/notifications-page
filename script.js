

content = document.querySelectorAll('.content')
markAll = document.querySelector('.mark-all')
notifText = document.querySelector('.notif-text')

let notifNum = 3

content.forEach((div) => {
    div.addEventListener('click', (e) => {
        const target = e.currentTarget
        
        if(target.classList.contains('bg-VeryLightGrayishBlue')) {
            target.classList.remove('bg-VeryLightGrayishBlue')
            target.querySelector('.circle').classList.add('hidden')
            notifNum--
            displayNotifValue()
        }
    })
})

function displayNotifValue() {
    notifText.innerHTML = `
                <h1 class="text-lg text-VeryDarkBlue font-semibold notif-text">
                    Notifications
                    <span class="px-3 ml-1 rounded-md bg-BlueEx text-white">${notifNum}</span>
                </h1>
                `
}

markAll.addEventListener('click', () => {
    content.forEach((div) => {
        div.classList.remove('bg-VeryLightGrayishBlue')
        if(div.querySelector('.circle')) {
            div.querySelector('.circle').classList.add('hidden')
        }
        notifNum = 0
        displayNotifValue()
    })
})