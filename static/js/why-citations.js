(function () {
  'use strict';

  var CITATIONS = {
    Thompson: {
      url: 'https://snippets.bang-labs.eu/public/adam/377',
      tip: '“Attention to time in labour depends... on the need for the synchronisation of labour.” - Time, Work-Discipline, and Industrial Capitalism (1967)'
    },
    Kleitman: {
      url: 'https://snippets.bang-labs.eu/public/adam/378',
      tip: 'Proposed the ~90-minute Basic Rest-Activity Cycle - Sleep and Wakefulness (1963)'
    },
    Lavie: {
      url: 'https://snippets.bang-labs.eu/public/adam/379',
      tip: 'Extended the 90-minute ultradian rhythm into waking alertness (1992)'
    },
    Ericsson: {
      url: 'https://snippets.bang-labs.eu/public/adam/380',
      tip: '“Expert performers... engage in practice without rest for only around an hour.” (2006)'
    },
    Zakay: {
      url: 'https://snippets.bang-labs.eu/public/adam/381',
      tip: 'Attentional-gate model: timing competes for the same attention as your task (1995)'
    },
    Amabile: {
      url: 'https://snippets.bang-labs.eu/public/adam/382',
      tip: '“When creativity is under the gun, it usually ends up getting killed.” (2002)'
    },
    Paivio: {
      url: 'https://snippets.bang-labs.eu/public/adam/383',
      tip: '“...specialized for dealing simultaneously with language and... nonverbal objects.” (1986)'
    }
  };
  var NAME_PATTERN = '\\b(' + Object.keys(CITATIONS).join('|') + ')\\b';

  function linkifyCitations() {
    var container = document.querySelector('.about');
    if (!container) return;

    var testRe = new RegExp(NAME_PATTERN);
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !testRe.test(node.nodeValue)) return NodeFilter.FILTER_SKIP;
        if (node.parentElement && node.parentElement.closest('a')) return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    var nodes = [];
    var n;
    while ((n = walker.nextNode())) nodes.push(n);

    nodes.forEach(function (node) {
      var text = node.nodeValue;
      var re = new RegExp(NAME_PATTERN, 'g');
      var frag = document.createDocumentFragment();
      var lastIndex = 0;
      var m;
      while ((m = re.exec(text))) {
        var info = CITATIONS[m[0]];
        frag.appendChild(document.createTextNode(text.slice(lastIndex, m.index)));
        var a = document.createElement('a');
        a.className = 'cite';
        a.href = info.url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.setAttribute('data-tip', info.tip);
        a.textContent = m[0];
        frag.appendChild(a);
        lastIndex = m.index + m[0].length;
      }
      frag.appendChild(document.createTextNode(text.slice(lastIndex)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  linkifyCitations();
})();
