menu_list_array = ["Chocolate Pizza","Mini Pizza",
"Birthday Pizza","Fruity Pizza",
"Cheese Pizza","Vegetable Pizza"];

function displayMenu(){
var htmldata;
htmldata="<ol class='menuList'>"
menu_list_array.sort();
for(var i=0; i<menu_list_array.length;i++){
    htmldata= htmldata + "<li>" + menu_list_array[i]
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0; i<menu_list_array.length;i++){
        htmldata= htmldata + "<div class='card'>"
         + menu_list_array[i] + "<img src='images/pizzaImg.png'" + "</div>"
    }
    htmldata= htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}