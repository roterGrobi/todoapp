var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeDoneItems);

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearList)

function addItem(){
    var input = document.getElementById('input');
    var newItem = input.value;    
    var textnode = document.createTextNode(newItem);

    if (newItem === ''){
        var p = document.createElement('p');
        var textnode = document.createTextNode('enter your todo');
        p.appendChild(textnode);      
        input.insertAdjacentElement('afterend', p);
        setTimeout(() => { 
            p.className = 'visual';
        },5);
        setTimeout(() => { 
            p.remove();
        },2000);

    } else {
        // create li
        li = document.createElement('li');

        // create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        // create label
        var label = document.createElement('label')

        //add Element on Webpage
        // ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout(() => { 
            li.className = 'mycheck';
        },5);

        input.value = '';        
    }

}

function removeDoneItems(){    
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }
    }
}

function clearList(){
    li = ul.children;
    for (let index = li.length-1; index >= 0; index--) {
        ul.removeChild(li[index]);
    }
}