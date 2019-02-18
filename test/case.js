// default to keep
require(__dirname).test({
  xml: '<Span Class="test" hello="world"></Span>',
  expect: [
    [ 'opentagstart', {
      name: 'Span',
      attributes: {}
    } ],
    [ 'attribute', { name: 'Class', value: 'test' } ],
    [ 'attribute', { name: 'hello', value: 'world' } ],
    [ 'opentag', {
      name: 'Span',
      attributes: { Class: 'test', hello: 'world' },
      isSelfClosing: false
    } ],
    [ 'closetag', 'Span' ]
  ],
  strict: false,
  opt: {}
})

// nameCase option : lowercase tag/attribute names
require(__dirname).test({
  xml: '<span class="test" hello="world"></span>',
  expect: [
    [ 'opentagstart', {
      name: 'span',
      attributes: {}
    } ],
    [ 'attribute', { name: 'class', value: 'test' } ],
    [ 'attribute', { name: 'hello', value: 'world' } ],
    [ 'opentag', {
      name: 'span',
      attributes: { class: 'test', hello: 'world' },
      isSelfClosing: false
    } ],
    [ 'closetag', 'span' ]
  ],
  strict: false,
  opt: {nameCase: 'lower'}
})

// nameCase option : uppercase tag/attribute names
require(__dirname).test({
  xml: '<span class="test" hello="world"></span>',
  expect: [
    [ 'opentagstart', {
      name: 'SPAN',
      attributes: {}
    } ],
    [ 'attribute', { name: 'CLASS', value: 'test' } ],
    [ 'attribute', { name: 'HELLO', value: 'world' } ],
    [ 'opentag', {
      name: 'SPAN',
      attributes: { CLASS: 'test', HELLO: 'world' },
      isSelfClosing: false
    } ],
    [ 'closetag', 'SPAN' ]
  ],
  strict: false,
  opt: {nameCase: 'upper'}
})

// nameCase option : keep tag/attribute names
require(__dirname).test({
  xml: '<Span ClaSs="test" heLLo="world"></Span>',
  expect: [
    [ 'opentagstart', {
      name: 'Span',
      attributes: {}
    } ],
    [ 'attribute', { name: 'ClaSs', value: 'test' } ],
    [ 'attribute', { name: 'heLLo', value: 'world' } ],
    [ 'opentag', {
      name: 'Span',
      attributes: { ClaSs: 'test', heLLo: 'world' },
      isSelfClosing: false
    } ],
    [ 'closetag', 'Span' ]
  ],
  strict: false,
  opt: {nameCase: 'keep'}
})

// backward compatibility with old lowercasetags opt
require(__dirname).test({
  xml: '<span class="test" hello="world"></span>',
  expect: [
    [ 'opentagstart', {
      name: 'span',
      attributes: {}
    } ],
    [ 'attribute', { name: 'class', value: 'test' } ],
    [ 'attribute', { name: 'hello', value: 'world' } ],
    [ 'opentag', {
      name: 'span',
      attributes: { class: 'test', hello: 'world' },
      isSelfClosing: false
    } ],
    [ 'closetag', 'span' ]
  ],
  strict: false,
  opt: {nameCase: 'lower'}
})
