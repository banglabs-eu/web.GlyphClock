(function () {
    'use strict';

    var SYMBOLS = ['🥐','🦋','🌷','☂️','🌵','🎈','👓','⚓','🦚','🤖','⭐','☁️','🌲','🪁','🪑','♻'];
    var ENTRANCE_NAMES = ['croissant','butterfly','tulip','umbrella','cactus','balloon','glasses','anchor','peacock','robot','star','cloud','tree','kite','chair','recycle'];
    var SYMBOL_SVGS = ['croissant','butterfly','tulip','umbrella','cactus','balloon','glasses','anchor','peacock','robot','star','cloud','tree','kite','chair','recycle'];
    var SUB_LABELS = ['first phase', 'middle phase', 'final phase'];
    var TOTAL_PHASES = 48;
    var testMode = false;
    var testPhase = 0;
    var lastGlyph = null;
    var firstRender = true;

    // Preload every glyph SVG so swapping <img src> is instant and never
    // races the entrance animation (was causing the icon to pop in mid-transition).
    for (var p = 0; p < SYMBOL_SVGS.length; p++) {
        var preload = new Image();
        preload.src = '/emoji/' + SYMBOL_SVGS[p] + '.svg';
    }

    var faviconLink = document.querySelector('link[rel="icon"]');
    function updateFavicon(block) {
        if (faviconLink) faviconLink.href = '/emoji/' + SYMBOL_SVGS[block] + '.svg';
    }

    function getMinutesSinceUtcMidnight() {
        var now = new Date();
        return now.getUTCHours() * 60 + now.getUTCMinutes();
    }

    function getPhaseFromTime() {
        var minutes = getMinutesSinceUtcMidnight();
        var block = Math.min(Math.floor(minutes / 90), 15);
        var sub = Math.min(Math.floor((minutes % 90) / 30), 2);
        return block * 3 + sub;
    }

    function getDisplayForPhase(phase) {
        var block = Math.floor(phase / 3);
        var sub = phase % 3;
        return { glyph: SYMBOLS[block], count: sub + 1 };
    }

    function shortTimeZone(d) {
        try {
            var parts = new Intl.DateTimeFormat(undefined, { timeZoneName: 'short' }).formatToParts(d);
            for (var i = 0; i < parts.length; i++) {
                if (parts[i].type === 'timeZoneName') return parts[i].value;
            }
        } catch (e) {}
        return '';
    }

    // A window that starts `startMin` minutes after UTC midnight and lasts
    // `spanMin` minutes, rendered as a range in the viewer's own time zone.
    function localRangeText(startMin, spanMin, withTz) {
        var now = new Date();
        var start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, startMin));
        var end = new Date(start.getTime() + spanMin * 60000);
        var opts = { hour: 'numeric', minute: '2-digit' };
        var tz = withTz ? shortTimeZone(start) : '';
        return start.toLocaleTimeString([], opts) + '–' + end.toLocaleTimeString([], opts) +
            (tz ? ' ' + tz : '');
    }

    // Current half-hour sub-period: phase*30 .. phase*30+30 after UTC midnight.
    function intervalRangeText(phase) {
        return localRangeText(phase * 30, 30, true);
    }

    // A whole 90-minute glyph block: block*90 .. block*90+90 after UTC midnight.
    function blockRangeText(block) {
        return localRangeText(block * 90, 90, false);
    }

    function intervalShown() {
        try { return localStorage.getItem('glyphclock-interval') === 'true'; } catch (e) { return false; }
    }

    function toggleInterval() {
        var next = !intervalShown();
        try { localStorage.setItem('glyphclock-interval', next); } catch (e) {}
        renderPhase(testMode ? testPhase : getPhaseFromTime());
    }

    // The decorative 16-glyph strip: show each block's local time range beneath
    // its glyph while the interval readout is toggled on.
    function renderGlyphStrip() {
        var strip = document.querySelector('.about-glyphs');
        if (!strip) return;
        var show = intervalShown();
        for (var i = 0; i < strip.children.length && i < 16; i++) {
            var cell = strip.children[i];
            var label = cell.querySelector('.glyph-range');
            if (!label) {
                label = document.createElement('span');
                label.className = 'glyph-range';
                cell.appendChild(label);
            }
            label.textContent = blockRangeText(i);
            label.hidden = !show;
        }
    }

    function ensureGlyphSpans(el) {
        if (el.querySelectorAll('.glyph-item').length === 0) {
            for (var i = 0; i < 3; i++) {
                var span = document.createElement('span');
                span.className = 'glyph-item';
                var img = document.createElement('img');
                img.alt = '';
                img.draggable = false;
                span.appendChild(img);
                el.appendChild(span);
            }
        }
        if (!el.querySelector('.visually-hidden')) {
            var label = document.createElement('span');
            label.className = 'visually-hidden';
            el.appendChild(label);
        }
    }

    function capitalize(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    function renderPhase(phase) {
        var info = getDisplayForPhase(phase);
        var block = Math.floor(phase / 3);
        updateFavicon(block);
        var readout = document.getElementById('intervalReadout');
        if (readout) {
            readout.textContent = intervalRangeText(phase);
            readout.hidden = !intervalShown();
        }
        renderGlyphStrip();
        var el = document.getElementById('currentTime');
        if (el) {
            ensureGlyphSpans(el);
            var imgs = el.querySelectorAll('.glyph-item img');
            var svgPath = '/emoji/' + SYMBOL_SVGS[block] + '.svg';
            for (var i = 0; i < 3; i++) {
                imgs[i].src = svgPath;
            }
            var label = el.querySelector('.visually-hidden');
            if (label) {
                label.textContent = capitalize(ENTRANCE_NAMES[block]) + ' ' + SYMBOLS[block] +
                    ', ' + SUB_LABELS[info.count - 1] + ' of the current GlyphClock time block.';
            }
            // Remove any previous entrance class
            var classes = el.className.match(/glyph-entrance-\S+/);
            if (classes) el.classList.remove(classes[0]);

            // Play entrance animation only on the first sub-period of a new glyph (skip initial load)
            if (!firstRender && info.glyph !== lastGlyph && info.count === 1) {
                var entranceClass = 'glyph-entrance-' + ENTRANCE_NAMES[block];
                el.className = 'glyph-' + info.count;
                // Force reflow to restart animation
                void el.offsetWidth;
                el.classList.add(entranceClass);
                // Remove entrance class after animation so normal styles take over
                var onEnd = function () {
                    el.classList.remove(entranceClass);
                    el.removeEventListener('animationend', onEnd);
                };
                el.addEventListener('animationend', onEnd);
            } else {
                el.className = 'glyph-' + info.count;
            }
            lastGlyph = info.glyph;
            firstRender = false;
        }
    }

    function updateValues() {
        if (testMode) return;
        renderPhase(getPhaseFromTime());
    }

    function startTime() {
        updateValues();
        var now = new Date();
        var secsIntoBlock = (now.getUTCMinutes() % 30) * 60 + now.getUTCSeconds();
        var msUntilNext = (30 * 60 - secsIntoBlock) * 1000;
        setTimeout(function () {
            updateValues();
            setInterval(updateValues, 30 * 60000);
        }, msUntilNext);
    }

    // Test mode

    function updateTestInfo() {
        var infoEl = document.getElementById('testInfo');
        if (!infoEl) return;
        var info = getDisplayForPhase(testPhase);
        infoEl.textContent = info.glyph + ' ' + (testPhase + 1) + '/' + TOTAL_PHASES;
    }

    function enterTestMode() {
        testMode = true;
        testPhase = getPhaseFromTime();
        renderPhase(testPhase);
        updateTestInfo();
        var controls = document.getElementById('testControls');
        if (controls) controls.style.display = '';
    }

    function exitTestMode() {
        testMode = false;
        var controls = document.getElementById('testControls');
        if (controls) controls.style.display = 'none';
        updateValues();
    }

    function testNavigate(delta) {
        if (!testMode) return;
        testPhase = ((testPhase + delta) % TOTAL_PHASES + TOTAL_PHASES) % TOTAL_PHASES;
        renderPhase(testPhase);
        updateTestInfo();
    }

    // Dark mode

    function darkModeBool() {
        var stored = null;
        try { stored = localStorage.getItem('darkMode'); } catch (e) {}
        if (stored === 'true') return true;
        if (stored === 'false') return false;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function applyDarkMode(isDark) {
        document.documentElement.classList.toggle('dark', isDark);
    }

    // Navigation
    // The nav itself (logo, dark toggle button, language switcher list) is
    // server-rendered by layouts/partials/nav.html; this just wires behavior
    // onto the existing elements.

    var nav = document.getElementById('nav');
    var darkBtn = document.querySelector('.theme-toggle');

    var isDark = darkModeBool();
    applyDarkMode(isDark);
    if (darkBtn) {
        darkBtn.addEventListener('click', function () {
            var nowDark = !document.documentElement.classList.contains('dark');
            applyDarkMode(nowDark);
            try { localStorage.setItem('darkMode', nowDark); } catch (e) {}
        });
    }

    // Language switcher dropdown
    var langBtn = document.getElementById('langSwitcherBtn');
    var langList = document.getElementById('langSwitcherList');
    if (langBtn && langList) {
        langBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            var visible = langList.style.display !== 'none';
            langList.style.display = visible ? 'none' : 'block';
        });
        document.addEventListener('click', function (e) {
            if (!langList.contains(e.target) && e.target !== langBtn) {
                langList.style.display = 'none';
            }
        });
    }

    // Cross-project theme carry-over
    var SIBLING_DOMAINS = ['snippets.eu','cli.snippets.eu','web.snippets.eu','glyphclock.bang-labs.eu'];
    document.addEventListener('click', function (e) {
        var a = e.target.closest('a[href]');
        if (!a) return;
        try {
            var url = new URL(a.href);
            if (url.hostname === location.hostname) return;
            if (SIBLING_DOMAINS.indexOf(url.hostname) === -1) return;
            var theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            url.searchParams.set('theme', theme);
            a.href = url.toString();
        } catch (err) {}
    });

    // Auto-hide nav after 7s of inactivity
    var hideTimer;
    function hideNav() {
        nav.classList.add('nav-hidden');
    }
    function showNav() {
        nav.classList.remove('nav-hidden');
        clearTimeout(hideTimer);
        hideTimer = setTimeout(hideNav, 7000);
    }
    hideTimer = setTimeout(hideNav, 7000);

    // Fade to clock-only after 23s, restore on interaction
    var fadeTimer;
    var hasContentLayer = !!document.querySelector('.content-layer');
    function fadeToClockOnly() {
        document.body.classList.add('clock-only');
        hideNav();
    }
    function handleActivity() {
        if (document.body.classList.contains('clock-only')) {
            document.body.classList.remove('clock-only');
        }
        showNav();
        if (hasContentLayer) {
            clearTimeout(fadeTimer);
            fadeTimer = setTimeout(fadeToClockOnly, 23000);
        }
    }
    if (hasContentLayer) {
        fadeTimer = setTimeout(fadeToClockOnly, 23000);
    }
    document.addEventListener('click', handleActivity);
    document.addEventListener('touchstart', handleActivity);

    // Tap the clock to toggle the current half-hour interval (viewer's time zone).
    var clockEl = document.getElementById('currentTime');
    if (clockEl) {
        clockEl.addEventListener('click', function () {
            // In clock-only mode the first tap only wakes the page (handleActivity);
            // toggle the readout only once the rest of the page is already visible.
            if (document.body.classList.contains('clock-only')) return;
            toggleInterval();
        });
    }

    // Tapping the glyph strip does the same, and reveals each block's range.
    var glyphStrip = document.querySelector('.about-glyphs');
    if (glyphStrip) {
        glyphStrip.addEventListener('click', function (e) {
            if (e.target.closest('#testModeToggle')) return; // robot keeps its own job
            toggleInterval();
        });
    }

    startTime();

    document.addEventListener('DOMContentLoaded', function () {

        var toggle = document.getElementById('testModeToggle');
        if (toggle) {
            toggle.addEventListener('click', function () {
                if (testMode) exitTestMode();
                else enterTestMode();
            });
        }

        var prevBtn = document.getElementById('testPrev');
        var nextBtn = document.getElementById('testNext');
        if (prevBtn) prevBtn.addEventListener('click', function () { testNavigate(-1); });
        if (nextBtn) nextBtn.addEventListener('click', function () { testNavigate(1); });

        document.addEventListener('keydown', function (e) {
            if (!testMode) return;
            if (e.key === 'ArrowLeft') { testNavigate(-1); e.preventDefault(); }
            if (e.key === 'ArrowRight') { testNavigate(1); e.preventDefault(); }
            if (e.key === 'Escape') { exitTestMode(); e.preventDefault(); }
        });

        // Focus task
        var focusAdd = document.getElementById('focusAdd');
        var focusInput = document.getElementById('focusInput');
        var focusDisplay = document.getElementById('focusDisplay');
        var focusText = document.getElementById('focusText');
        var focusClear = document.getElementById('focusClear');
        var focusHint = document.getElementById('focusHint');
        var focusHintTimer;

        function showFocusHint() {
            clearTimeout(focusHintTimer);
            focusHint.classList.remove('focus-hint--faded');
            focusHint.style.display = '';
            focusHintTimer = setTimeout(function () {
                focusHint.classList.add('focus-hint--faded');
            }, 1800);
        }

        function hideFocusHint() {
            clearTimeout(focusHintTimer);
            focusHint.classList.remove('focus-hint--faded');
            focusHint.style.display = 'none';
        }

        function loadFocus() {
            var saved = '';
            try { saved = localStorage.getItem('glyphclock-focus') || ''; } catch (e) {}
            if (saved) {
                focusText.textContent = saved;
                focusAdd.style.display = 'none';
                focusDisplay.style.display = '';
            }
        }

        loadFocus();

        focusAdd.addEventListener('click', function (e) {
            e.stopPropagation();
            focusAdd.style.display = 'none';
            focusInput.style.display = '';
            showFocusHint();
            focusInput.focus();
        });

        focusInput.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        focusText.addEventListener('click', function (e) {
            e.stopPropagation();
            focusInput.value = focusText.textContent;
            focusDisplay.style.display = 'none';
            focusInput.style.display = '';
            focusInput.focus();
        });

        focusInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                var val = focusInput.value.trim();
                hideFocusHint();
                if (val) {
                    focusText.textContent = val;
                    try { localStorage.setItem('glyphclock-focus', val); } catch (err) {}
                    focusInput.style.display = 'none';
                    focusInput.value = '';
                    focusDisplay.style.display = '';
                    fadeToClockOnly();
                } else {
                    focusInput.style.display = 'none';
                    focusAdd.style.display = '';
                }
                e.stopPropagation();
            }
            if (e.key === 'Escape') {
                hideFocusHint();
                focusInput.style.display = 'none';
                focusInput.value = '';
                if (focusText.textContent) {
                    focusDisplay.style.display = '';
                } else {
                    focusAdd.style.display = '';
                }
                e.stopPropagation();
            }
        });

        focusInput.addEventListener('blur', function () {
            if (focusInput.style.display !== 'none') {
                var val = focusInput.value.trim();
                hideFocusHint();
                if (val) {
                    focusText.textContent = val;
                    try { localStorage.setItem('glyphclock-focus', val); } catch (err) {}
                    focusInput.value = '';
                    focusInput.style.display = 'none';
                    focusDisplay.style.display = '';
                } else {
                    focusInput.style.display = 'none';
                    if (focusText.textContent) {
                        focusDisplay.style.display = '';
                    } else {
                        focusAdd.style.display = '';
                    }
                }
            }
        });

        focusClear.addEventListener('click', function (e) {
            e.stopPropagation();
            focusText.textContent = '';
            focusDisplay.style.display = 'none';
            focusAdd.style.display = '';
            try { localStorage.removeItem('glyphclock-focus'); } catch (err) {}
        });
    });
})();
