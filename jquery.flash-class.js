(function ($) {
  var defaults = { className: 'flash', delay: 500 };

  var methods = {
    init: function (options) {
      options = $.extend(defaults, options);

      return this.each(function () {
        var $this = $(this).addClass(options.className),
            data = $this.data('flashClass') || $this.data('flashClass', {});

        clearTimeout(data.timer);

        data.timer = setTimeout(function () {
          $this.removeClass(options.className);
        }, options.delay);
      });

    }
  };

  $.fn.flashClass = function () {
    return methods.init.apply(this, arguments);
  };

})(jQuery);
