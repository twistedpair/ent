var assert = require('assert');
var ent = require('ent');

exports.amp = function () {
    var a = 'a & b & c';
    var b = 'a &amp; b &amp; c';
    assert.eql(ent.encode(a), b);
    assert.eql(ent.decode(b), a);
};

exports.html = function () {
    var a = '<html> © π " \'';
    var b = '&lt;html&gt; &copy; &pi; &quot; &apos;';
    assert.eql(ent.encode(a), b);
    assert.eql(ent.decode(b), a);
};

exports.num = function () {
    var a = String.fromCharCode(1337);
    var b = '&#1337;';
    assert.eql(ent.encode(a), b);
    assert.eql(ent.decode(b), a);
};

exports.hex = function () {
    for (var i = 0; i < 256; i++) {
        var a = String.fromCharCode(i.toString(16));
        var b = '&#x' + i.toString(16) + ';';
        assert.eql(ent.encode(a), b);
        assert.eql(ent.decode(b), a);
    }
};
