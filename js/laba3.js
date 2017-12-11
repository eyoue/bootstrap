//Создать кнопку
function createButton(className, valueButton, functionButton) {
    var nameButton = document.createElement('input')
    nameButton.setAttribute('type', 'button')
    nameButton.setAttribute('class', className)
    nameButton.setAttribute('onclick', functionButton)
    nameButton.setAttribute('value', valueButton)
    return nameButton
}
 //Создать DOM-элемент
function createDOM(event, createObject, createPlace, buttonCreate) {
    if (createPlace !== "divCreate") {
        createPlace = document.getElementsByTagName(createPlace)
    } else {
        createPlace = document.getElementsByClassName(createPlace)
    }
    createObject = document.createElement(createObject)
    buttonCreate = document.getElementsByClassName(buttonCreate)
    createObject.innerHTML = "Тест"

    for (var i = 0; i < buttonCreate.length; i++) {
        if (buttonCreate[i] == event.target) {
            createPlace[i].appendChild(createObject)
            //Место для добавления кнопки.. 
            //Кнопка УДАЛИТЬ
            /**/
            if (createObject.localName == "ol") {
                createObject.appendChild(createButton("deleteOl", "Удалить", "deleteObject(event, 'ol')"))
            }
            /**/
            if (createObject.localName == "li") {
                createObject.appendChild(createButton("deleteLi", "Удалить", "deleteObject(event, 'li')"))
            }
            /**/
            if (createObject.localName == "tr") {
                createObject.appendChild(createButton("deleteTh", "Удалить", "deleteObject(event, 'tr')"))
            }
            /*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
            //Кнопка ЗАПИСЬ или СПИСОК
            /**/
            if (createObject.localName == "ol") {
                createObject.appendChild(createButton("liRewrite", "Изменить", "rewriteObect(event,'ol')"))
            }
            /**/
            if (createObject.localName == "li") {
                createObject.appendChild(createButton("olRewrite", "Изменить", "rewriteObect(event,'li')"))
            }
            /**/
            if (createObject.localName == "tr") {
                createObject.appendChild(createButton("thRewrite", "Изменить", "rewriteObect(event,'tr')"))
            }
            /*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/
            //Кнопка ЗАПИСЬ или СПИСОК
            /**/
            if (createObject.localName == "ol") {
                createObject.appendChild(createButton("liButtonCreate", "Запись", "createDOM(event,'li', 'ol', 'liButtonCreate')"))
            }
            /**/
            if (createObject.localName == "li") {
                createObject.appendChild(createButton("olButtonCreate", "Список", "createDOM(event,'ol', 'li', 'olButtonCreate')"))
            }
            /**/
            /*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/



        }
    }
}
//Удалить
function deleteObject(event, tmp) {
    tmp = document.getElementsByTagName(tmp)
    for (var i = 0; i < tmp.length; i++) {
        if (tmp[i].children[0] == event.target) {
            tmp[i].remove()

        }
    }
}


//Изменить
function rewriteObect(event, tmp) {
    tmp = document.getElementsByTagName(tmp)
    for (var i = 0; i < tmp.length; i++) {
        if (tmp[i].children[1] == event.target) {
            var s = prompt()
            if ((s == null) || (s == "")) {
                tmp[i].childNodes["0"].data = getRandom()
            } else {
                tmp[i].childNodes["0"].data = s
            }

        }
    }
}



//Рандомное число
function getRandom() {
    var rand = 1 + Math.random() * (100 + 1 - 1);
    rand = Math.floor(rand);
    return rand;
}

//Сортировка чисел
function sortArray(change) {
    var tr = document.getElementsByTagName('tr')
    var createPlace = document.getElementsByClassName('divCreate')
    var numbers = []
    for (var i = 0; i < tr.length; i++) {
        numbers[i] = tr[i].childNodes["0"].data
    }

    if (change == "up") {
        numbers.sort(function(a, b) {
            return a - b
        })
    }
    if (change == "down") {
        numbers.sort(function(a, b) {
            return b - a
        })
    }

    for (var i = 0; i < tr.length; i++) {
        tr[i].childNodes["0"].data = numbers[i]
    }

}






function sizeImg(parametr, sign) {
    var img = document.getElementsByTagName('img')
    var txt = document.getElementsByClassName('txt')
    var step = txt[0].value;
    if (sign=="+"){
        if (parametr=="width") {
    img[0].style.width = parseInt(img[0].width) + parseInt(step)+'px'
}

if (parametr=="height") {
    img[0].style.height = parseInt(img[0].height) + parseInt(step)+'px'
}
    }
if (sign=="-"){
        if (parametr=="width") {
    img[0].style.width = parseInt(img[0].width) - parseInt(step)+'px'
}

if (parametr=="height") {
    img[0].style.height = parseInt(img[0].height) - parseInt(step)+'px'
    }

}


}