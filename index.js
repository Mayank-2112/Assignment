function change(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs__content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabs__button");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
    
  };


let list = document.getElementsByClassName('list');
for (let i=0;i<list.length;i++){
    list[i].onclick =function(){
        let j=0;
        while(j<list.length){
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}