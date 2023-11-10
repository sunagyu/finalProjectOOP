const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path');

var btnCreate = document.getElementById('btnCreate')
var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var btnUpdate = document.getElementById('btnUpdate')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files')

btnCreate.addEventListener('click', function(){

    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value
    fs.writeFile(file, contents, function(err){
        if (err){
            return console.log(err)
        }
        var txtfile = document.getElementById("fileName").value
        alert(txtfile + " text file was created")
        console.log("The file was created")

        // Save the file data in localStorage
        saveFileData(fileName.value, contents);

        // Display the updated list of file names and contents
        displayFileData();

        // Clear the input fields
        fileName.value = '';
        fileContents.value = '';
    })
})

btnRead.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)

    fs.readFile(file, function(err, data){
        if(err){
            return console.log(err)
        }
        fileContents.value = data
        console.log("The file was read!")
    })
})

btnDelete.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)

    fs.unlink(file, function(err){
        if(err){
            return console.log(err)
        }
        fileName.value = ""
        fileContents.value = ""
        console.log("The file was deleted!")

        // Delete the file data from localStorage
        deleteFileData(fileName.value);

        // Display the updated list of file names and contents
        displayFileData();

        // Clear the input fields
        fileName.value = "";
        fileContents.value = "";
    })
})

btnUpdate.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value

    fs.writeFile(file,contents, function(err, data){
        if(err){
            return console.log(err)
        }
        var txtfile = document.getElementById("fileName").value
        alert(txtfile + " text file was updated!")
        console.log("The file was created")
        fileName.value = ""
        fileContents.value = ""

        // Update the file data in localStorage
        saveFileData(fileName.value, contents);

        // Display the updated list of file names and contents
        displayFileData();
    })
})

function saveFileData(name, content) {
    // Retrieve the current file data from localStorage
    const filesData = JSON.parse(localStorage.getItem('filesData')) || {};
  
    // Update or add the file contents
    filesData[name] = content;
  
    // Save the updated file data to localStorage
    localStorage.setItem('filesData', JSON.stringify(filesData));
  
    // Update the displayed list
    displayFileData();
}
  
function deleteFileData(name) {
    // Retrieve the current file data from localStorage
    const filesData = JSON.parse(localStorage.getItem('filesData')) || {};
  
    // Remove the selected file and its contents from localStorage
    delete filesData[name];
  
    // Save the updated file data to localStorage
    localStorage.setItem('filesData', JSON.stringify(filesData));
  
    // Update the displayed list
    displayFileData();
}
  
  
function displayFileData() {
    // Retrieve the file data from localStorage
    const filesData = JSON.parse(localStorage.getItem('filesData')) || {};

    const list = document.getElementById('list');
    list.innerHTML = ''; // Clear the list element

    // Iterate through the file data and add the updated file names and contents
    for (const fileName in filesData) {
        if (filesData.hasOwnProperty(fileName)) {
            const listItem = document.createElement('li');
            listItem.textContent = fileName;

            // Create a paragraph for file contents
            const contentsParagraph = document.createElement('p');
            contentsParagraph.textContent = filesData[fileName];

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                // Call the deleteFileData function with the file name
                deleteFileData(fileName);
            });

            // Append the file name, contents, and delete button to the list
            list.appendChild(listItem);
            list.appendChild(contentsParagraph);
            list.appendChild(deleteButton);
        }
    }
}


  
  // Call the function to display file names and contents when the page loads
window.onload = function () {
    displayFileData();
};

localStorage.clear();
