
  var showingalttip;
$(function () {
$$nav.on(); 
$('.nav-item').click(function () { str=this.innerHTML; 
// затенить и отключить управление
//document.body.innerHTML += '<div style="position: absolute; top:0; left: 0; width:100%; height:100%; background:#000000; z-index:100; opacity:0.5; filter:alpha(opacity=50)"></div>';
}); 
// фокус на мыши фокус ушел
$('.nav-item').on( { 'nav_focus': function (e) {// фокус на кнопке
 var target = e.target;
//target.innerHTML  - вытащили картинку <img boreder="0" src="/picsys/input.png" title="текст" alt="текст">
//вытащим текст под alt
var stroka=target.innerHTML;
// разбить по знаку alt=" равно и выбрать последний и удалить >
var alt = stroka.split('alt="').pop().replace('>', '');
// удалить все справа после "
alt=alt.substr(0,alt.indexOf('"')); 
      var alttip =alt;
      if (!alttip) return;
 // выводим текст из под alt
// получим элемент суфлер
var sufler=document.getElementById("sufler");
var altsuf=alttip;
//  подсказа над картинкой ее вид определяется стилем
      var alttipElem = document.createElement('div');
      alttipElem.className = 'alttip';
      alttipElem.innerHTML = alttip;
      document.body.appendChild(alttipElem);
      var coords = target.getBoundingClientRect();
      var left = coords.left + (target.offsetWidth - alttipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не вылезать за левую границу окна
      var top = coords.top - alttipElem.offsetHeight - 5;
      if (top < 0) { // не вылезать за верхнюю границу окна
        top = coords.top + target.offsetHeight + 5;    }
  alttipElem.style.left = left + 'px'; alttipElem.style.top = top + 'px';   
  showingalttip = alttipElem;
// подсказа внизу, если есть id sufler
  sufler.innerHTML = altsuf;  
           
},

'nav_blur': function (e) {// фокус ушел с кнопки событие off
       if (showingalttip) {
   document.body.removeChild(showingalttip); showingalttip = null;
   sufler.innerHTML = null; 
       }
            }
 });


});

function Go()
{table=document.querySelector('table'); xrow=table.getElementsByTagName("td");
for (j=0;j<xrow.length;j++) {  xrow[j].style.display = (xrow[j].style.display == 'none') ? '' : 'none'  }
return;
}


function nextp()
{

url = document.location.href;
var current_page=url.split('&p=')[1].split('&')[0];
var next_page=current_page;next_page++;
$temp='&p='+current_page;
$temp1='&p='+next_page;
var novstr=url.replace($temp,$temp1);
window.location.replace(novstr);wait();
}


function prevp()
{
url = document.location.href;
var current_page=url.split('&p=')[1].split('&')[0];
var next_page=current_page;next_page--;
if (next_page < 1 ) next_page=1; 
$temp='&p='+current_page;
$temp1='&p='+next_page;
var novstr=url.replace($temp,$temp1);
window.location.replace(novstr);wait();
}


/* ява*/
function getCookie(name) {
var mas =  document.cookie.match(name + "=[^;]*");
if (mas) {var cook = mas[0].split(/=/);  return decodeURIComponent(cook[1])};
return;   
}

