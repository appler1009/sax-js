require(__dirname).test({
  xml: "<html><head><script>if (1 < 0) { console.log('elo there'); }</script></head></html>",
  expect: [
    [
      'opentagstart',
      {
        'name': 'html',
        'attributes': {}
      }
    ],
    [
      'opentag',
      {
        'name': 'html',
        'attributes': {},
        'isSelfClosing': false
      }
    ],
    [
      'opentagstart',
      {
        'name': 'head',
        'attributes': {}
      }
    ],
    [
      'opentag',
      {
        'name': 'head',
        'attributes': {},
        'isSelfClosing': false
      }
    ],
    [
      'opentagstart',
      {
        'name': 'script',
        'attributes': {}
      }
    ],
    [
      'opentag',
      {
        'name': 'script',
        'attributes': {},
        'isSelfClosing': false
      }
    ],
    [
      'script',
      "if (1 < 0) { console.log('elo there'); }"
    ],
    [
      'closetag',
      'script'
    ],
    [
      'closetag',
      'head'
    ],
    [
      'closetag',
      'html'
    ]
  ]
})
