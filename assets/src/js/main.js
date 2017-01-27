function hasSomeParentTheClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

(function(){
  var globalSites = document.querySelector("[data-target='#modal-global-sites']");
  var toggle = document.querySelector(".navbar-toggle");
  var headercollapse = document.querySelector(".header-collapse");
  var dropdowntoggle = document.querySelector(".dropdown>.dropdown-toggle");
  if(toggle){
    toggle.onclick = function(){
      var i = document.querySelector(".header-collapse>div.nav").offsetHeight;
      var a = document.querySelector(".header-collapse>ul.nav").offsetHeight;
      var heightnav = i + a + 15; 
      headercollapse.style.height = headercollapse.style.height === heightnav + 'px' ? '' : heightnav + 'px';
      toggleClass(this, 'active');
      toggleClass(headercollapse.parentNode, 'in');

    };
  }
  if(dropdowntoggle){
    dropdowntoggle.onclick = function(e){
      toggleClass(dropdowntoggle.parentNode, 'open');
      var i = document.querySelector(".header-collapse>div.nav").offsetHeight;
      var a = document.querySelector(".header-collapse>ul.nav").offsetHeight;
      var heightnav = i + a + 15;
      headercollapse.style.height = headercollapse.style.height === heightnav + 'px' ? '' : heightnav + 'px';
      e.preventDefault();
      return false;
    }
  }

  
  // open modal
  var elem  = document.querySelectorAll('[data-toggle="modal"]'),
      backdrop = function(){

        // show backdrop
        var elParent = document.getElementsByTagName('body')[0],
            elChild  = document.createElement('div');

        elChild.setAttribute('class','modal-backdrop fade');
        elParent.appendChild(elChild);
        window.setTimeout(function(){
          addClass(elChild,'in');
        },20);

        // show modal
        var getTarget  = this.getAttribute('data-target').replace('#',''),
            elemTarget = document.querySelector('#' + getTarget);

        elemTarget.style.display = 'block';
        window.setTimeout(function(){
          addClass(elemTarget,'in');
        },200);

        return false;
      };

  for(var i = 0; i < elem.length; i++){
    elem[i].onclick = backdrop;
  }

  // close modal
  var close = document.querySelectorAll('[data-dismiss="modal"]'),
      action = function(){

        // close modal
        var thisModal = closest(this, 4);
        removeClass(thisModal,'in');

        window.setTimeout(function(){
          thisModal.style.display = 'none';
        },150);

        // close backdrop
        var parent = document.querySelectorAll('body')[0],
            child  = document.querySelectorAll('.modal-backdrop')[0];

        removeClass(child,'in');
        window.setTimeout(function(){
          parent.removeChild(child);
        },200);

        return false;
      };

  for(var a = 0; a < close.length; a++){
    close[a].onclick = action;
  }
})();