var selectedColor; //선택한 컬러값 저장할 변수

window.onload = function(){
  init();
}

function init(){
  
  var colorChip = ["#F15F5F", "#5CD1E5", "#D1B2FF", "#3DB7CC"]; //색상코드를 원하는 만큼 넣어주세요
  var tag = "";
  for(i=0; i<colorChip.length; i++){  //colorBox 의 id명을 색상명으로 지정해주기.
      tag += "<div id="+colorChip[i]+" class='colorBox' onclick='colorSet(this)'></div>";
  }
  document.getElementById("colorList").innerHTML = tag;

  var colorBoxList = document.getElementsByClassName("colorBox");
  for(i=0; i<colorBoxList.length; i++){
    colorBoxList[i].style.background = colorBoxList[i].id;  //id인 색상명을 colorBox의 배경색으로 지정해주기
  }
}

// onclick event
function colorSet(colorPick){
  document.querySelector("body").style.background = colorPick.id;  //배경색을 선택한 색상박스의 id 값으로 지정해주기

  if(selectedColor != null){  
    document.getElementById(selectedColor).className = document.getElementById(selectedColor).className.replace(" selected", "");
  }
  document.getElementById(colorPick.id).className += " selected";
  selectedColor = colorPick.id;
}