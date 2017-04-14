;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gaunzhu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M544.063 735.944c0.023 17.672-14.459 32.154-32.131 32.131-17.649 0-31.995-14.346-32.018-32.018l0.091-191.79-193.148 0.091c-17.74-0.091-32.176-14.527-32.267-32.267 0.158-17.944 14.64-32.425 32.357-32.357l193.148-0.091-0.136-191.564c-0.023-17.672 14.459-32.154 32.131-32.131 17.627-0.023 31.973 14.323 31.995 31.995l-0.091 191.79 194.551-0.045c17.74 0.091 32.154 14.504 32.244 32.244-0.158 17.944-14.414 32.199-32.357 32.357l-194.528 0.068 0.158 191.586zM874.039 149.961c-199.958-199.958-524.051-200.026-724.077 0s-199.958 524.119 0 724.077c199.958 199.958 524.051 200.026 724.077 0 200.026-200.026 199.958-524.119 0-724.077v0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye-copy-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M921.764 518.884l-412.854-386.018-412.854 384.884c-8.077 7.53-8.527 20.193-0.979 28.261 7.54 8.063 20.218 8.518 28.289 0.971l385.514-359.379 385.531 360.473c3.868 3.614 8.778 5.4 13.678 5.4 5.335 0 10.673-2.119 14.61-6.336 7.555-8.063 7.139-20.714-0.936-28.256v0zM921.764 518.884z"  ></path>' +
    '' +
    '<path d="M795.781 526.813c-11.050 0-20.015 8.959-20.015 19.995v306.597h-160.123v-213.284h-213.495v213.284h-160.118v-306.597c0-11.036-8.955-19.995-20.014-19.995-11.065 0-20.018 8.959-20.018 19.995v346.586h240.183v-213.283h133.434v213.283h240.177v-346.586c0.001-11.036-8.965-19.995-20.011-19.995v0zM795.781 526.813z"  ></path>' +
    '' +
    '<path d="M655.677 240.214h120.089v106.64c0 11.053 8.965 20 20.015 20 11.047 0 20.012-8.947 20.012-20v-146.629h-160.117c-11.053 0-20.018 8.942-20.018 19.995-0.001 11.049 8.965 19.995 20.018 19.995v0zM655.677 240.214z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontwodea-copy-copy" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M512 0c-282.774 0-512 229.226-512 512s229.226 512 512 512c282.774 0 512-229.226 512-512 0.143-282.774-229.083-512-512-512v0 0zM202.881 853.047c48.107-124.277 167.803-213.047 309.119-213.047s261.011 88.626 309.262 212.903c-81.897 74.309-190.139 119.839-309.262 119.839-119.123 0.143-227.365-45.53-309.119-119.696v0 0zM358.371 435.257c0-84.903 68.725-153.629 153.629-153.629s153.629 68.725 153.629 153.629c0 84.903-68.725 153.629-153.629 153.629s-153.629-68.868-153.629-153.629v0 0zM859.919 813.673c-45.244-98.793-130.148-175.248-235.239-207.606 55.409-36.51 92.206-99.365 92.206-170.81 0-113.11-91.776-204.886-204.886-204.886-113.11 0-204.886 91.776-204.886 204.886 0 71.445 36.653 134.3 92.206 170.953-105.092 32.358-189.996 108.814-235.239 207.606-70.3-80.895-112.966-186.13-112.966-301.673 0-254.567 206.318-460.886 460.886-460.886 254.569 0 460.886 206.318 460.886 460.886 0 115.401-42.81 220.635-112.966 301.53v0 0zM859.919 813.673z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)