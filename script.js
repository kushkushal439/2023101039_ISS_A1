let check = 0;

document.addEventListener('mousemove', (e) => {

  const posX = e.clientX;
  const posY = e.clientY;
  const cursourout = document.querySelector('.cursor-outline')
  const cursor = document.querySelector('.cursor-dot');
  cursor.style.left = `${posX}px`;
  cursor.style.top = `${posY}px`;
  // cursourout.style.left = `${posX}px`;
  // cursourout.style.top = `${posY}px`;

  cursourout.animate({
      left: `${posX}px`,
      top: `${posY}px`
  }, {duration: 80 ,fill: "forwards"});
});

function scrollright() {
  var div = document.getElementById("skills");
  var len = div.offsetWidth;
  document.querySelector('.skills').scrollBy({
    left: len,
    behavior: "smooth"
  });
}

function scrollright1() {
  var div = document.getElementById("skills");
  var len = div.offsetWidth;
  document.querySelector('.skills').scrollBy({
    left: -len,
    behavior: "smooth"
  });
}

function setachheight() {
  var div1 = document.getElementById('achievement1');
  var div2 = document.getElementById('achievement2');
  var div3 = document.getElementById('achievement3');
  var div4 = document.getElementById('achievement4');
  var div5 = document.getElementById('achievement5');
  var width = window.innerWidth;
  var newh = width/5;
  var newh1 = width/2;
  if(width >= 900) {
    div1.style.height = newh + 'px';
    div2.style.height = newh + 'px';
    div3.style.height = newh + 'px';
    div4.style.height = newh + 'px';
    div5.style.height = newh + 'px';
  }
  else {
    div1.style.height = newh1 + 'px';
    div2.style.height = newh1 + 'px';
    div3.style.height = newh1 + 'px';
    div4.style.height = newh1 + 'px';
    div5.style.height = newh1 + 'px'; 
  }
}

setachheight();

window.addEventListener('resize', setachheight);


function educheightch() {
  var div1 = document.getElementById('leftinfo');
  var div2 = document.getElementById('rightinfo');
  var div3 = document.getElementById('midinfo');
  var div4 = document.getElementById('img1text');
  var div5 = document.getElementById('img2text');
  var div6 = document.getElementById('img3text');


  var width = window.innerWidth;
  var nwidth = width*(0.4);
  var txt1 = 2*(1/600)*width;

  var txt = 1.6*(1/1400)*width;

  div4.style.fontSize = txt + 'em';
  div5.style.fontSize = txt + 'em';
  div6.style.fontSize = txt + 'em';

  if(width <= 900) {
    div4.style.fontSize = txt1*(0.7) + 'em';
    div5.style.fontSize = txt1*(0.7) + 'em';
    div6.style.fontSize = txt1*(0.8) + 'em';
    div1.style.height = width*(1) + 'px';
    div2.style.height = width*(1) + 'px';
    div3.style.height = width*(1) + 'px';
    return;
  }

  // else {
  //   div4.style.fontSize = '3em';
  // }

  div1.style.height = nwidth + 'px';
  div2.style.height = nwidth + 'px';
  div3.style.height = nwidth + 'px';

}

educheightch();

window.addEventListener('resize', educheightch);


function imgset() {
  var div = document.getElementById('himg');
  var req = window.innerWidth;
  if(req <= 900) {
  div.style.height = req*(0.6) + 'px';
  }
  else {
    div.style.height = req*(0.3) + 'px';
  }
}

imgset();

window.addEventListener('resize',imgset);

function skrl() {
  var div = document.getElementById("scroll-left");
  var div1 = document.getElementById("scroll-right");
  var wd = window.innerWidth;
  div.style.height = (wd/1200)*69 + 'px';
  div1.style.height = (wd/1200)*69 + 'px';
  // div.style.opacity = 0;
}

skrl();

window.addEventListener('resize', skrl);

function sktxt() {
  console.log("hi");
  var div1 = document.getElementById("sk1txt");
  var div2 = document.getElementById("sk2txt");
  div2.style.fontSize = 30*(window.innerWidth/1150) + 'px';
  div1.style.fontSize = 30*(window.innerWidth/1150) + 'px';

  var div3 = document.getElementById("sk3txt");
  var div4 = document.getElementById("sk4txt");
  div4.style.fontSize = 30*(window.innerWidth/1150) + 'px';
  div3.style.fontSize = 30*(window.innerWidth/1150) + 'px';

  div1.style.height = "600px";
}

sktxt();

window.addEventListener('resize',sktxt);

function sktop() {
  var div1 = document.getElementById("sk1");
  var div2 = document.getElementById("sk2");
  var div3 = document.getElementById("sk3");
  var div4 = document.getElementById("sk4");

  div1.style.fontSize = (window.innerWidth/1500)*(3.5) + 'em';
  div2.style.fontSize = (window.innerWidth/1500)*(3.5) + 'em';
  div3.style.fontSize = (window.innerWidth/1500)*(3.5) + 'em';
  div4.style.fontSize = (window.innerWidth/1500)*(3.5) + 'em';
}

sktop();

window.addEventListener('resize',sktop);


function divh() {
  var div1 = document.getElementById("skill1");
  var div2 = document.getElementById("skill2");
  var div3 = document.getElementById("skill3");
  var div4 = document.getElementById("skill4");

  div2.style.height = 650*(window.innerWidth/1500) + 'px';
  div3.style.height = 650*(window.innerWidth/1500) + 'px';
  div4.style.height = 650*(window.innerWidth/1500) + 'px';
  div1.style.height = 650*(window.innerWidth/1500) + 'px';
}

divh();

window.addEventListener('resize',divh);


function scroller() {
  var div1 = document.getElementById("scroll-left");
  var div2 = document.getElementById("scroll-right");

  div2.style.marginTop = 300*(window.innerWidth/1500) + 'px';
  div1.style.marginTop = 300*(window.innerWidth/1500) + 'px';

  // div1.style.width = (window.innerWidth/1250) + 'px';
}


scroller();
window.addEventListener('resize',scroller);



document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const themeStylesheet = document.getElementById('style');
  let isDarkMode = false;

  themeToggle.addEventListener('click', function () {
      isDarkMode = !isDarkMode;
      const newTheme = isDarkMode ? 'styledark.css' : 'styles.css';
      // themeStylesheet.setAttribute('href', newTheme);
      themeStylesheet.href = newTheme;
  });
});

let cnt = 0;
let check1 = true;

let holder = false;

function t1scroll() {
  if(!holder) {
    console.log(cnt);
    cnt++;
    if(check1) {
      scrollright();
    }
    else {
      scrollright1();
    }
    if(cnt == 3) {
      cnt = 0;
      check1 = !check1;
    }
  }
}
setInterval(t1scroll,4000);

function hold() {
  holder = true;
}

function removeholder() {
  holder = false;
}
