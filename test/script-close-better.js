require(__dirname).test({
  xml: "<html><head><script>'<div>foo</div></'</script></head></html>",
  expect: [
    ['opentagstart', {'name': 'html', 'attributes': {}}],
    ['opentag', {'name': 'html', 'attributes': {}, isSelfClosing: false}],
    ['opentagstart', {'name': 'head', 'attributes': {}}],
    ['opentag', {'name': 'head', 'attributes': {}, isSelfClosing: false}],
    ['opentagstart', {'name': 'script', 'attributes': {}}],
    ['opentag', {'name': 'script', 'attributes': {}, isSelfClosing: false}],
    ['script', "'<div>foo</div></'"],
    ['closetag', 'script'],
    ['closetag', 'head'],
    ['closetag', 'html']
  ]
})
