const seat = document.querySelector('.seat');
const count =document.querySelector('.count');
const totalPrice= document.querySelector('.total');
const container =document.querySelector('.container')
const movieSelected = document.getElementById('movie');

let ticketPrice= +movieSelected.value;


//ticket billing
function billing(){
  const selectedSeats = document.querySelectorAll('.row .seat.seat-selected');


  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  totalPrice.innerText=selectedSeatsCount * ticketPrice;
}

//change movie
movieSelected.addEventListener('change', e => {
  ticketPrice = +e.target.value;
 
  billing();
});


//event listener
container.addEventListener('click',e=>{
    container.addEventListener('click', e => {
        if (
          e.target.classList.contains('seat') &&
          !e.target.classList.contains('seat-occupied')
        ) {
          e.target.classList.toggle('seat-selected');
      
        }
        billing();
      });
      
});

