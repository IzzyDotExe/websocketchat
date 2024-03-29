
if( typeof Element.prototype.clearChildren === 'undefined' ) {
    Object.defineProperty(Element.prototype, 'clearChildren', {
        configurable: true,
        enumerable: false,
        value: function() {
            while(this.firstChild) this.removeChild(this.lastChild);
        }
    });
}


if (typeof Array.prototype.unique === 'undefined') {
    Object.defineProperty(Array.prototype, 'unique', {
        configurable: true,
        enumerable: false,
        value: function() {
            return this.filter( (value, index, array) => array.indexOf(value) === index);
        }
    })
}