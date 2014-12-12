$(function(){

  var layout = 'list', // Store the current layout as a variable
      $container = $('#Container'), // Cache the MixItUp container
      $changeLayout = $('#ChangeLayout'); // Cache the changeLayout button
  
  // Instantiate MixItUp with some custom options:
  
  $container.mixItUp({
    animation: {
		animateChangeLayout: false, // Animate the positions of targets as the layout changes
		animateResizeTargets: false, // Animate the width/height of targets as the layout changes
		animateResizeContainer: false,
		duration: 400,
		effects: 'fade stagger(34ms) translateY(10%)',
		easing: 'ease'
    },
    layout: {
      containerClass: 'list' // Add the class 'list' to the container on load
    }
  });
  
  // MixItUp does not provide a default "change layout" button, so we need to make our own and bind it with a click handler:
  
  $changeLayout.on('click', function(){
    
    // If the current layout is a list, change to grid:
    
    if(layout == 'list'){
      layout = 'grid';
      
      $changeLayout.text('List'); // Update the button text
      
      $container.mixItUp('changeLayout', {
        containerClass: layout // change the container class to "grid"
      });
      
    // Else if the current layout is a grid, change to list:  
    
    } else {
      layout = 'list';
      
      $changeLayout.text('Grid'); // Update the button text
      
      $container.mixItUp('changeLayout', {
        containerClass: layout // Change the container class to 'list'
      });
    }
  });
  
});