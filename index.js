function addingEventListener() {
}

function addingEventListener() {
    // Create a reference to the input element
    const input = document.getElementById('input');
  
    // Create a named function for the event handler
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add a click event listener to the input element
    input.addEventListener('click', clickAlert);
  }
  
  // Call the outer function to set up the event listener
  addingEventListener();
