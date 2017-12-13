function getFirstSelector(selector){

  return document.querySelector(selector)
}

function nestedTarget(){

  return document.querySelector('.target')
}

function deepestChild(){

  return document.getElementById('grand-node').querySelectorAll('div')[3];

}

function increaseRankBy(n){


  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ranks.length; i++) {
    debugger
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n).toString()
  }

  return ranks


}
