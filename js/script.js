(function ($) {
    'use strict';
     $(function () {
         $("#inputEmail").validateText(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
     });   
}(jQuery));