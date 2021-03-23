/**
* PHP Email Form Validation - v2.0
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
jQuery(document).ready(function($) {
  "use strict";

  $('form.php-email-form').submit(function(e) {
    e.preventDefault();
    
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function() { // run all inputs
     
      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (! i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validate').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validate').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) return false;

    var this_form = $(this);
    var action = $(this).attr('action');

    if( ! action ) {
      this_form.find('.loading').slideUp();
      this_form.find('.error-message').slideDown().html('The form action property is not set!');
      return false;
    }
    
    this_form.find('.sent-message').slideUp();
    this_form.find('.error-message').slideUp();
    this_form.find('.loading').slideDown();

    if ( $(this).data('recaptcha-site-key') ) {
      var recaptcha_site_key = $(this).data('recaptcha-site-key');
      grecaptcha.ready(function() {
        grecaptcha.execute(recaptcha_site_key, {action: 'php_email_form_submit'}).then(function(token) {
          php_email_form_submit(this_form,action,this_form.serialize() + '&recaptcha-response=' + token);
        });
      });
    } else {
      php_email_form_submit(this_form,action,this_form.serialize());
    }
    
    return true;
  });

  function php_email_form_submit(this_form, action, data) {
    var name = this_form.find('#name').val();
    var email = this_form.find('#email').val();
    var phone = this_form.find('#phone').val();
    var subject = this_form.find('#subject').val();
    var message = this_form.find('#message').val();
    var type = this_form.find('#type').val();
    var inquiry = 'Consulta Web - ' + type.charAt(0).toUpperCase() + type.slice(1);
    subject = subject === undefined ? inquiry : subject.charAt(0).toUpperCase() + subject.slice(1);
   
    var parameters = { full_name: name, email: email, subject: subject, message: message, phone: phone, inquiry_type: inquiry};

    $.ajax({
      type: "POST",
      url: "https://salentisdev.mythologylabs.com.uy/api/salentis/send_email_to_salentis",
      data: parameters,
    }).done( function(msg){
      console.log(msg);
      if (type == 'general'){
        $('<a href="generic-mail-thanks.html"></a>')[0].click();
      }
      else if (type == 'litore'){
        $('<a href="litore-mail-thanks.html"></a>')[0].click();
      }
      else if (type == 'novum'){
        $('<a href="novum-mail-thanks.html"></a>')[0].click();
      }
      else if (type == 'verdi'){
        $('<a href="verdi-mail-thanks.html"></a>')[0].click();
      }
    }).fail( function(data){
      console.log(data);
      var error_msg = "Form submission failed!<br>";
      if(data.statusText || data.status) {
        error_msg += 'Status:';
        if(data.statusText) {
          error_msg += ' ' + data.statusText;
        }
        if(data.status) {
          error_msg += ' ' + data.status;
        }
        error_msg += '<br>';
      }
      if(data.responseText) {
        error_msg += data.responseText;
      }
      this_form.find('.loading').slideUp();
      this_form.find('.error-message').slideDown().html(error_msg);
    });
  }
});