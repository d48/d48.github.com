document.onready = function() {
  (function(){

    /**
     * Creates all images with ability to click to view larger image in
     * separate window.
     * 
     * @return void Creates event listeners
     */
    function setImageLinks() {
      var parent = document.getElementById('post')
        , images = parent.getElementsByTagName('img')
        ;

      for(var i = 0, len = images.length; i < len; i++){

        // bind i variable to a function not inside the same scope
        (function(index) {
          var src = images[i].getAttribute('src');

          images[i].addEventListener('click', function setImageClickEvent() {
              window.open(src);
          }, false);

        }(i));
      }
    }


    /**
     * Kick it off essay
     * 
     * @return void Start the life cycle
     */
    function init() {
      setImageLinks();
    }

    /**
     * Kick this piece off yo
     */
    init();
  }());
}
