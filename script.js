
// Google Analytics Setup
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-9VM0WNST1H');

// GA4 Event Tracking
document.addEventListener('click', function(e) {
  var link = e.target.closest('a');
  if (link) {
    gtag('event', 'link_click', {
      link_text: link.textContent.trim().substring(0, 100),
      link_url: link.getAttribute('href') || ''
    });
  }
  var button = e.target.closest('button, .pb-btn');
  if (button && !link) {
    gtag('event', 'button_click', {
      button_text: button.textContent.trim().substring(0, 100)
    });
  }
});
document.querySelectorAll('form').forEach(function(form) {
  form.addEventListener('submit', function() {
    gtag('event', 'form_submit', {
      form_id: form.id || '',
      form_action: form.getAttribute('action') || ''
    });
  });
});
(function() {
  var milestones = [25, 50, 75, 100];
  var reached = {};
  window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    var percent = Math.round((scrollTop / docHeight) * 100);
    milestones.forEach(function(m) {
      if (percent >= m && !reached[m]) {
        reached[m] = true;
        gtag('event', 'scroll_depth', { depth: m + '%' });
      }
    });
  });
})();
