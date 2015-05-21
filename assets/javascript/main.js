(function() {
  var updates,update,left,right,mobile;

  updates = document.querySelectorAll('#timeline .timeline-update');
  left = document.querySelector('#timeline-left');
  right = document.querySelector('#timeline-right');

  $('img').unveil(400, function() {
    $(this).load(function() {

      var element = this;
      while(element.parentNode) {
        element = element.parentNode;
        if (element.className == 'timeline-update') {
          break;
        }
      }

      element.style.opacity = 1;
      if (right.clientHeight < left.clientHeight) {
        element = right.appendChild(element);
      } else {
        element = left.appendChild(element);
      }

    });
  });

  mobile = (/iphone|ipad|ipod|android|blackberry|mini|windowsce|palm/i.test(navigator.userAgent.toLowerCase()));
  if (mobile) {
    var projects = $('#projects')
    if (projects.length) projects.style.minHeight = '500px';

    var heroFigure = $('#hero figure')
    if (heroFigure.length) heroFigure.style.height = '600px';

    var updateContent = $('#update .update-content')
    if (updateContent.length) updateContent.style.minHeight = '600px';

  } else if ($('#home').length) {

    // $('#header').attr('class', 'fixed');

    // var figures = document.getElementsByTagName('figure');

    // for (var i = 0; i < figures.length; i++) {
    //   figures[i].style.backgroundAttachment = 'fixed';
    // }

  }
})();
