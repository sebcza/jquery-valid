(function ($) {
    'use strict';
        $.fn.validateText = function (ex) {
            $(this).change(function () {
                ex = new RegExp(ex);
                if(ex.test($(this).val())){
                    $(this).addClass("success");
                    $(this).removeClass("error");
            } else {
                $(this).addClass("error");
                $(this).removeClass("success");
            }
        });           
            return this;
    };
}(jQuery));