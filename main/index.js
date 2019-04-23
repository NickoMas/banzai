; (function ($, window, document) {
    "use strict";

    var Selector = {
        navLink: '.nav-item-link',
        contentItem: '.content-block',
        activeBlock: 'active-block',
        mobileMenu: '#mainWrapper',
        mobileMenuButton: '#head-nav-mobile-toggle',
        mainWrapper: '.main-wrapper'
    };

    var Utils = {
        mainPaddingTop: parseFloat(getComputedStyle($('main').get(0))['paddingTop'])
    };

    var banzai = {
        /**
         * Returns true if no scroll should be allowed in scrolled direction
         * @param {object} element 
         * @param {boolean} isDown 
         * @returns {boolean}
         */
        detectScrollStop: function (element, isDown) {
            // var totalHeight = document.documentElement.scrollHeight;
            // var clientHeight = document.documentElement.clientHeight;
            // var scrollTop = (document.body && document.body.scrollTop)
            //     ? document.body.scrollTop : document.documentElement.scrollTop;
            var totalHeight = element.scrollHeight;
            var clientHeight = element.clientHeight;
            var scrollTop = element.scrollTop;

            return isDown
                ? totalHeight === clientHeight + scrollTop
                : scrollTop === 0;
        },

        /**
         * Returns true if scrolling down, if up - false
         * @param {object} event 
         * @param {object} data
         * @returns {boolean}
         */
        trackScrollDirection: function (event, data) {
            if (!event) return;
            return /touch/.test(event.type)
                ? data.touchStart > data.touchEnd
                : event.originalEvent.wheelDelta < 0;
        },

        /**
         * If no scroll stop is detected, perform smooth scroll in choosen direction
         * @param {boolean} isDown
         * @returns {void}
         */
        scrollContent: function (isDown) {
            var modifier = isDown ? 1 : -1;
            // if (typeof isDown === 'undefined' || banzai.detectScrollStop(document, isDown)) return;
            if (typeof isDown === 'undefined') return;
            var heightToScroll = $(Selector.contentItem).height();
            $('html, body').animate({ scrollTop: window.scrollY + modifier * heightToScroll }, 200);
        },

        updateActiveLink: function (linkHash) {
            var activeLink = $(Selector.navLink)
                .removeAttr('data-status')
                .filter(function () {
                    return $(this)[0].hash === linkHash
                })
                .attr('data-status', 'active');
            return activeLink[0].hash;
        },

        /**
         * If direction is down, if next element exists -> take new index, else go to start
         * else (direction is up), if next element exists -> take new index, else go to end
         * @param {boolean} isDown
         * @returns {number} new active link index
         */
        updateActiveLinkIndex: function (isDown) {
            var indCrement = isDown ? 1 : -1;
            var navLinks = $(Selector.navLink);
            var indexToCome = navLinks.index($('[data-status]')) + indCrement;
            var linkToCome = navLinks[indexToCome];
            return isDown
                ? linkToCome ? indexToCome : 0
                : linkToCome ? indexToCome : navLinks.length - 1;
        },

        navigateUser: function (event, linkToGo, currentActiveLink) {
            // $('html, body').animate({
            //     scrollTop: $(linkToGo).offset().top - Utils.mainPaddingTop
            // }, 500);
            // if(linkToGo === linkToLeave) return;
            $(Selector.contentItem).hide();
            $(currentActiveLink)
                // .removeClass(Selector.activeBlock)
                .fadeOut();
            $(linkToGo)
                // .addClass(Selector.activeBlock)
                .fadeIn();

            // $(Selector.mobileMenuButton).prop('checked', false);
        },

        debounce: function (func, wait, immediate) {
            var timeout;
            return function () {
                var context = this, args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        },

        throttleLead: function (fn, threshhold, scope) {
            var last;
            return function() {
                var context = scope || this,
                    now = +(new Date()),
                    args = arguments;
         
                if (last && now > last + threshhold) {
                    last = now;
                    fn.apply(context, args);
                } else if (!last) {
                    last = now;
                    fn.apply(context, args);
                }
            };
        },

        shiftContentItems: function (isDown, items, activeLinkIndex, navLinks) {
            var activeHash = navLinks.eq(activeLinkIndex).get(0).hash;
            var activeBlock = items.filter(function () {
                return '#' + this.id === activeHash;
            });
            if (isDown) {
                if (!activeBlock.is(':last-child')) return;
                items.parent().append(items.first());
            } else {
                if (activeBlock.is(':first-child')) return;
                items.parent().prepend(items.last());
            }
        },

        pageInit: function (document) {

            var navEvent,
                currentActiveLink = '#main',
                touchData = {
                    touchStart: null,
                    touchEnd: null
                };

            $(Selector.contentItem).not('.active-block').hide();

            var gatherDataAndScroll = function (currentTarget) {
                var directionIsDown = banzai.trackScrollDirection(navEvent, touchData);
                var newActiveLinkIndex = banzai.updateActiveLinkIndex(directionIsDown);
                var isNotScrollableContent = banzai.detectScrollStop(currentTarget, directionIsDown);

                $(Selector.mobileMenuButton).prop('checked', false);

                //scroll long content without navigating to the next panel + don't do anything if single touch is done
                if (!isNotScrollableContent || touchData.touchStart === touchData.touchEnd) return;

                // banzai.shiftContentItems(directionIsDown, $(Selector.contentItem), newActiveLinkIndex, $(Selector.navLink));
                var linkToGo = banzai.updateActiveLink($(Selector.navLink)[newActiveLinkIndex].hash);
                $(document).trigger('banzai:navigate', [linkToGo, currentActiveLink]);
                currentActiveLink = linkToGo;
            };

            var throttledNavigation = banzai.throttleLead(gatherDataAndScroll, 800);

            $(document).on('wheel mousewheel', Selector.contentItem, function (event) {
                navEvent = event;
                throttledNavigation(event.currentTarget);
            });

            $(document).off('touchstart.banzai');
            $(document).on('touchstart.banzai', Selector.contentItem, function (event) {
                navEvent = event;
                touchData.touchStart = event.originalEvent.touches[0].clientY;
            });
            $(document).off('touchend.banzai');
            $(document).on('touchend.banzai', Selector.contentItem, function (event) {
                touchData.touchEnd = event.originalEvent.changedTouches[0].clientY;
                throttledNavigation(event.currentTarget);
            });

            $(document).on('click', Selector.navLink, function (event) {
                event.preventDefault();
                var linkToGo = banzai.updateActiveLink(this.hash);
                $(document).trigger('banzai:navigate', [linkToGo, currentActiveLink]);
                currentActiveLink = linkToGo;
            });

            $(document).on('banzai:navigate', banzai.navigateUser);
        }
    }

    banzai.pageInit(document);

})($, window, document);