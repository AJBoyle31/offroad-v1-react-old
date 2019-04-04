const checklistCategories = ["maintenanceItem", "personalItem", "safetyItem", "firstaidItem", "recoveryItem", "toolsItem", "fluidsItem", "spareItem"];
const patt = /Item/i;

//Store Checklists
function storeChecklist(catName){
  
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    let arr = [];
    $("." + catName).each(function(){
      if ($(this).prop('checked')){
        arr.push("true");
      } 
      else {
        arr.push("false");
      }
    });
  
    let jsonArr = JSON.stringify(arr);
    localStorage.setItem(catName, jsonArr);
  } 
  else {
      // Sorry! No Web Storage support..
      alert("Sorry! No web storage support. Upgrade to a newer browser.");
  }
}


//Completed Counter
function completedCount(catName){
    
    let num = 0;
    
    $("."+ catName).each(function(){
        if ($(this).prop('checked')){
            $(this).parent().addClass("lineThrough");
            num++;
        } else {
            $(this).parent().removeClass("lineThrough");
        }
    });
    
    var catHeader = catName.replace(patt, "");

    $("#" + catHeader + " .itemsComplete").html(num);
    
    if ($("." + catName).length == num){
        if($(window).width() < 905){
            $("#" + catHeader).addClass("greenHeader");
        } else {
            $("#" + catHeader).addClass("greenCategory");
        }
    } else {
        if($(window).width() < 905){
            $("#" + catHeader).removeClass("greenHeader");
        } else {
            $("#" + catHeader).removeClass("greenCategory");
        }
        
    }
   
    storeChecklist(catName);
    
}


//Get the Checklist from LocalStorage
function getChecklist(catName){
  
  let jsonArr = localStorage[catName];
  let arr = JSON.parse(jsonArr);
  
  $("." + catName).each(function(index){
    if (arr[index] == 'true'){
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
    
  });
  
  completedCount(catName);
}

//Check for Checklists in LocalStorage - if nothing there, store the list; if something there, retreive it
function checkForLists(){
    
    checklistCategories.forEach(function(item){
        if (localStorage[item] === undefined){
            storeChecklist(item);
        }
        else {
            getChecklist(item);
        }    
    });
  
}

function clearCheckboxes(catName){
    $("." + catName).each(function(){
        $(this).prop('checked', false);
    });
    
    completedCount(catName);
}


$(document).ready(function(){
    
    checkForLists();
    
    $(".headerContainer").click(function(){
        if ($(window).width() < 905){
            $(this).next().slideToggle();
            $(this).find(".categoryHeader").toggleClass("downArrow");
        } else {}
    });
    
    $('.list li').change(function(){
        let catName = $(this).find("input").attr("class");    
        completedCount(catName);
    });
    
    $(".button").click(function(){
       let catName = $(this).parent().parent().find("input").attr("class");
       clearCheckboxes(catName);
    });
     
})