/*
 * Event snippet for Click on email (1) conversion page
 * In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.
 */

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    send_to: 'AW-988782670/0uHzCPbA9ZAZEM7AvtcD',
    event_callback: callback,
  });
  return false;
}
