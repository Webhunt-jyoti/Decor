const stars1 = document.querySelectorAll('.star1');
const stars2 = document.querySelectorAll('.star2');
const stars3 = document.querySelectorAll('.star3');
const stars4 = document.querySelectorAll('.star4');
const ratingValue1 = document.getElementById('rating-value1');
const ratingValue2 = document.getElementById('rating-value2');
const ratingValue3 = document.getElementById('rating-value3');
const ratingValue4 = document.getElementById('rating-value4');

let currentRating1 = 0;
let currentRating2 = 0;
let currentRating3 = 0;
let currentRating4 = 0;

stars1.forEach((star1, index) => {
  star1.addEventListener('click', () => {
    
    currentRating1 = index + 1;
    updateRating1();
  
  });

  star1.addEventListener('click', () => {
    currentRating1 = index + 1;
    
    updateStars1();
  });

  star1.addEventListener('click', () => {
    updateStars1();
  });
});

function updateRating1() {
  ratingValue1.value = currentRating1;
  return ratingValue1.value;

}

function updateStars1() {
  stars1.forEach((star1, index) => {
    if (index < currentRating1) {
       
      star1.style.color = '#f00';
    } 
    
    else {
      star1.style.color = '#ccc';
    }
  });
}


// --------------------------------------------------------
stars2.forEach((star2, index) => {
  star2.addEventListener('click', () => {
    
    currentRating2 = index + 1;
    updateRating();
  
  });

  star2.addEventListener('click', () => {
    currentRating2 = index + 1;
    
    updateStars();
  });

  star2.addEventListener('click', () => {
    updateStars();
  });
});

function updateRating() {
  ratingValue2.value = currentRating2;
  return ratingValue2.value;

}

function updateStars() {
  stars2.forEach((star2, index) => {
    if (index < currentRating2) {
       
      star2.style.color = '#f00';
    } 
    
    else {
      star2.style.color = '#ccc';
    }
  });
}
// ---------------------------------------------
stars3.forEach((star3, index) => {
    star3.addEventListener('click', () => {
      
      currentRating3 = index + 1;
      updateRatin3();
    
    });
  
    star3.addEventListener('click', () => {
      currentRating2 = index + 1;
      
      updateStar3();
    });
  
    star3.addEventListener('click', () => {
      updateStars3();
    });
  });
  
  function updateRating3() {
    ratingValue3.value = currentRating3;
    return ratingValue3.value;
  
  }
  
  function updateStars3() {
    stars3.forEach((star3, index) => {
      if (index < currentRating3) {
         
        star3.style.color = '#f00';
      } 
      
      else {
        star3.style.color = '#ccc';
      }
    });
  }
// ---------------------------------------------
stars4.forEach((star4, index) => {
    star4.addEventListener('click', () => {
      
      currentRating4 = index + 1;
      updateRatin4();
    
    });
  
    star4.addEventListener('click', () => {
      currentRating4 = index + 1;
      
      updateStar4();
    });
  
    star4.addEventListener('click', () => {
      updateStars4();
    });
  });
  
  function updateRating4() {
    ratingValue4.value = currentRating4;
    return ratingValue4.value;
  
  }
  
  function updateStars4() {
    stars4.forEach((star4, index) => {
      if (index < currentRating4) {
         
        star4.style.color = '#f00';
      } 
      
      else {
        star4.style.color = '#ccc';
      }
    });
  }