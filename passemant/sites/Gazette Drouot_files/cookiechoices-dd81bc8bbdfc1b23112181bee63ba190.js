var cookieLevel = 'consentLevel';

function showCookieConsentBar() {
  _showCookieConsent();
}

function _showCookieConsent() {
  if (_shouldDisplayConsent()) {
    _showConsentPopup();
  }
}

function _removeCookieConsent(name) {
  document.cookie = name + '=""; path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT';
}

function _saveCookie(name, value) {
  var expiryDate = new Date();
  expiryDate.setMonth(expiryDate.getMonth() + 6);
  document.cookie = name + '=' + value + '; path=/; expires=' + expiryDate.toGMTString();
}

function _shouldDisplayConsent() {
  return !document.cookie.match(new RegExp(cookieLevel + '=([^;]+)'));
}

function rgpdAcceptAll() {
  _removeCookieConsent(cookieLevel);
  _saveCookie(cookieLevel, "all");
  _hideConsentPopup();
}

function rgpdRefuseAll() {
  _removeCookieConsent(cookieLevel);
  _removeAllGaCookies();
  _saveCookie(cookieLevel, "none");
  _hideConsentPopup();
}

function _removeAllGaCookies() {
  _removeCookieConsent("_ga");
  _removeCookieConsent("_gid");
  var split = document.cookie.split(";");
  for(var i = 0; i < split.length; i++) {
    var cookie = split[i].trim();
    var name = cookie.split("=")[0];
    if(name.indexOf("_gat_gtag_") === 0) {
      _removeCookieConsent(name);
    }
  }
}

function _hideConsentPopup() {
  $("#rgpd-popup").addClass("hidden");
}

function _showConsentPopup() {
  $("#rgpd-popup").removeClass("hidden");
}

function _hideCustomPopup() {
  $("#rgpd-custom-popup").addClass("hidden");
}

function _showCustomPopup() {
  $("#rgpd-custom-popup").removeClass("hidden");
}

function isGaAllowed() {
  return !document.cookie.match(new RegExp(cookieLevel + '=all'));
}

function showCustomConsent() {
  _hideConsentPopup();
  _showCustomPopup();
}

function customValidation() {
  _removeCookieConsent(cookieLevel);
  _removeAllGaCookies();
  if (document.getElementById("rgpd-switch-optional").checked) {
    _saveCookie(cookieLevel, "all");
  } else {
    _saveCookie(cookieLevel, "none");
  }
  _hideCustomPopup();
}
