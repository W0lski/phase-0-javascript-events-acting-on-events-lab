// Your code here
// Function to move the dodger to the left
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  // Function to move the dodger to the right
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left);
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
