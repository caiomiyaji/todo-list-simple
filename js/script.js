/*Selections*/
const addButton = document.querySelector('#addButton')
const items = document.querySelector('.results')
const editTab = document.querySelector('.edit')


/*Events*/
addButton.addEventListener('click', (e) => {
    e.preventDefault()

    const itemInput = document.querySelector('#item')
    const itemValue = itemInput.value

    if(itemValue !== ''){
        const allItems = document.querySelectorAll('.result') 

        const itemResults = document.querySelector('.results')

        const newItem = document.createElement('div')
        newItem.setAttribute('class', 'result')
        if(allItems.length > 0){
            const lastItemId = allItems[allItems.length-1].id
            const currentItemId = lastItemId.replace(/[^0-9]/g, '')
            newItem.setAttribute('id', `item${Number(currentItemId)+1}`)
        }else{
            newItem.setAttribute('id', 'item0')
        }

        const newItemTitle = document.createElement('h4')
        newItemTitle.innerText = itemValue

        const buttonsDiv = document.createElement('div')

        const buttonCheck = document.createElement('button')
        buttonCheck.setAttribute('id', 'finish-button')
        const checkIcon = document.createElement('i')
        checkIcon.setAttribute('class', 'fa-solid fa-check')

        const buttonPen = document.createElement('button')
        buttonPen.setAttribute('id', 'edit-button')
        const penIcon = document.createElement('i')
        penIcon.setAttribute('class', 'fa-solid fa-pen')

        const buttonDelete = document.createElement('button')
        buttonDelete.setAttribute('id', 'delete-button')
        const deleteIcon = document.createElement('i')
        deleteIcon.setAttribute('class', 'fa-solid fa-trash')

        itemResults.appendChild(newItem)
        newItem.appendChild(newItemTitle)
        newItem.appendChild(buttonsDiv)
        buttonsDiv.appendChild(buttonCheck)
        buttonCheck.appendChild(checkIcon)
        buttonsDiv.appendChild(buttonPen)
        buttonPen.appendChild(penIcon)
        buttonsDiv.appendChild(buttonDelete)
        buttonDelete.appendChild(deleteIcon)

        itemInput.value = ''
        itemInput.focus()
    }else{
        const alert = document.querySelector('#error-msg')
        if(alert.classList.contains('hidden')){
            alert.classList.remove('hidden')
            setTimeout(() => {
                alert.classList.add('hidden')
            }, 3000)
        }
    }
})

items.addEventListener('click', (e) => {
    e.preventDefault()

    if(e.target.id === 'finish-button'){
        const currentItem = e.target.closest('.result')
        const currentIcon = e.target.querySelector('i')

        currentItem.classList.toggle('done')
        currentIcon.classList.toggle('fa-solid')
        currentIcon.classList.toggle('fa-check')
        currentIcon.classList.toggle('fa-solid')
        currentIcon.classList.toggle('fa-xmark')
    }
})

items.addEventListener('click', (e) => {
    e.preventDefault()

    if(e.target.id === 'edit-button'){

        toggleEdit()
        const editInput = document.querySelector('#item-name')
        const h4Value = e.target.closest('.result').querySelector('h4')
        const cancelButton = document.querySelector('#cancel-button')

        editInput.value = h4Value.innerText
        editInput.focus()
        cancelButton.setAttribute('class', `${e.target.closest('.result').id}`)
    }
})

editTab.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(e.target.matches('#cancel-button')){
        const editInput = document.querySelector('#item-name')
        editInput.value = ''
        toggleEdit()
       
    }
})

editTab.addEventListener('click', (e) => {
    e.preventDefault()

    if(e.target.matches('#save-button')){
        const input = document.querySelector('#item-name')
        const itemId = document.querySelector('#cancel-button').className
        const itemToChange = document.querySelector(`#${itemId}`)
        const itemTitle = itemToChange.querySelector('h4')
        
        itemTitle.innerText = `${input.value}`

        toggleEdit()
    }
})

items.addEventListener('click', (e) => {
    e.preventDefault()

    if(e.target.matches('#delete-button')){
        const currentItem = e.target.closest('.result')

        currentItem.remove()
    }
})

/*Functions*/

function toggleEdit(){
    const insertLabel = document.querySelector('.inputs')
    const editLabel = document.querySelector('.edit')
    const resultLabel = document.querySelector('.results')

    insertLabel.classList.toggle('hidden')
    editLabel.classList.toggle('hidden')
    resultLabel.classList.toggle('hidden')
}

