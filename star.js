const allStar = document.querySelectorAll('.rating .star')
/*console.log(allStar);*/

allStar.forEach((star, i)=> {
	 Star.onclick = function () {
    let current_star_level = i+1;
    console.log(current_star_level);

    allStar.forEach((star, j)=> {
      if(current_star_level >= j+1 ){
        star.innerHTML = '&#9734';
      }else{
        star.innerHTML='&#9734';
      }
     

    })
   }
   })