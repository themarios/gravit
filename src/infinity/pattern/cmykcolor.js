(function (_) {
    /**
     * A class representing a CMYK Color
     * @param {CMYK} cmyk
     * @class IFCMYKColor
     * @extends IFColor
     * @constructor
     */
    function IFCMYKColor(cmyk) {
        IFColor.call(this, cmyk ? cmyk : [1, 1, 1, 1]);
    }

    IFPattern.inherit('Y', IFCMYKColor, IFColor);

    IFCMYKColor.equals = function (left, right) {
        if (left instanceof IFCMYKColor && right instanceof  IFCMYKColor) {
            return IFUtil.equals(left._value, right._value);
        }
        return false;
    };

    /** @override */
    IFCMYKColor.prototype.toHumanString = function () {
        return 'cmyk ' + this.serialize();
    };

    /** @override */
    IFCMYKColor.prototype.toScreen = function (noCMS) {
        return IFColor.cmykToRGB(this._value, noCMS);
    };

    /** @override */
    IFCMYKColor.prototype.toString = function () {
        return "[Object IFCMYKColor]";
    };

    _.IFCMYKColor = IFCMYKColor;
})(this);