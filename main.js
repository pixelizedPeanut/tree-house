// DOM basic selection navigation
// colors
// click and load events

// in order to keep everything tidy all file imports should stay in the
// head tag of the html document
// but javascript doesn't work if it starts executing before the page has loaded
// there for we use the window object, listen for it while loading
// and when it has finished loading we execute our script
// all of the script leaves in the function underneath
window.addEventListener('load', function(){

  // this is our target
  var firstNode = document.getElementById('part1');

  // take at look at it in the console
  console.log('this is part1', firstNode);

  // let's use firstNode to navigate even deeper and select all li elements
  // in it
  var arrayOfLis = firstNode.getElementsByTagName('li');

  // let's logg a lot more info with it
  console.info('here are lis', typeof arrayOfLis);

  // check out in the array how an individual li looks like
  // you can see there all the properties attached to it.
  // you can access any of them and change them.
  // also you never need to worry about remembering any of this as you can
  // access it and read it anytime

  // now who wants to be a tree?
  for( var i = 0; i < arrayOfLis.length; i++){
    arrayOfLis[i].addEventListener('click', function(){
      if(this.classList.contains('tree')){
        this.classList.remove('tree');
      }else{
        this.classList.add('tree');
      }

      // advance homework would be best placed here
    });
  }
  // homework: make a class 'dotted' in css that will add a red dotted border 
  // of 3px add the dotted border when the tree is not visible

  // advanced homework: using a for loop add the dotted border to the last
  // element you clicked instead
  // guidance: in the marked place build a for that will remove the class
  // dotted from every element. after the loop add class dotted to curent
  // element
});
