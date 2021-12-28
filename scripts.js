var artsArray = [
  {    'name': '1',    'img': 'art1.jpg',  },
  {    'name': '2',    'img': 'art2.jpg',  },
  {    'name': '3',    'img': 'art3.jpg',  },
  {    'name': '4',    'img': 'art4.jpg',  },
  {    'name': '5',    'img': 'art5.jpg',  },
  {    'name': '6',    'img': 'art6.jpg',  },
  {    'name': '7',    'img': 'art7.jpg',  },
  {    'name': '8',    'img': 'art8.jpg',  },
  {    'name': '9',    'img': 'art9.jpg',  },
  {    'name': '10',    'img': 'art10.jpg',  },
  {    'name': '11',    'img': 'art11.jpg',  },
  {    'name': '12',    'img': 'art12.jpg',  },
];
var display = document.getElementById('arts');
var grid = document.createElement('section');
grid.setAttribute('class','grid');
display.appendChild(grid);
for (i = 0;i<artsArray.length; i++){
  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = artsArray[i].name;
  card.style.backgroundImage = `url(${artsArray[i].img})`;

  grid.appendChild(card);
 
}

var count = 0;
var delay = 1200;

var resetSelect = function(){
  var selected = document.querySelectorAll('.selected');
  for(i = 0; i< selected.length; i++) {
    selected[i].classList.remove('selected');
  }
};

grid.addEventListener('click',function(event){
  var clicked = event.target;
  if (clicked.nodeName === 'SECTION'){
    return;
    }
  count = document.querySelectorAll('.selected').length;
  if (count == 0){
      count++;setTimeout(delay);
      clicked.classList.add('selected');
    }
  else if ( count >=1) {
    count--; setTimeout(delay);
        resetSelect();
    clicked.classList.add('selected');
  }
}
);
