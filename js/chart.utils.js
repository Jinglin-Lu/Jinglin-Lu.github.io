const Samples = {};
Samples.utils = {
    srand: function(seed) {
        this._seed = seed;
    },
    rand: function(min, max) {
        var seed = this._seed;
        min = min === undefined ? 0 : min;
        max = max === undefined ? 1 : max;
        this._seed = (seed * 9301 + 49297) % 233280;
        return min + (this._seed / 233280) * (max - min);
    },
    numbers: function(config) {
        var cfg = config || {};
        var min = cfg.min || 0;
        var max = cfg.max || 1;
        var from = cfg.from || [];
        var count = cfg.count || 8;
        var decimals = cfg.decimals || 8;
        var continuity = cfg.continuity || 1;
        var dfactor = Math.pow(10, decimals) || 0;
        var data = [];
        var i, value;

        for (i = 0; i < count; ++i) {
            value = (from[i] || 0) + this.rand(min, max);
            if (this.rand() <= continuity) {
                data.push(Math.round(dfactor * value) / dfactor);
            } else {
                data.push(null);
            }
        }

        return data;
    },
    labels: function(config) {
        var cfg = config || {};
        var min = cfg.min || 0;
        var max = cfg.max || 100;
        var count = cfg.count || 5;
        var step = (max - min) / count;
        var decimals = cfg.decimals || 8;
        var dfactor = Math.pow(10, decimals) || 0;
        var prefix = cfg.prefix || '';
        var values = [];
        var i;

        for (i = min; i < max; i += step) {
            values.push(prefix + Math.round(dfactor * i) / dfactor);
        }

        return values;
    },
    color: function(index) {
        var colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
        return colors[index % colors.length];
    },
    colors: function(length, isBorder) {
        var baseColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
        var colors = [];
        for (var i = 0; i < length; i++) {
            colors.push(this.transparentize(baseColors[i % baseColors.length], isBorder ? 1 : 0.5));
        }
        return colors;
    },
    transparentize: function(color, opacity) {
        var alpha = opacity === undefined ? 0.5 : 1 - opacity;
        return color + alpha;
    },
    months: function(config) {
        var cfg = config || {};
        var count = cfg.count || 12;
        var section = cfg.section;
        var values = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var data = [];
        var i;

        for (i = 0; i < count; ++i) {
            data.push(values[i % 12].substring(0, section || values[i % 12].length));
        }

        return data;
    }
    Samples.utils.transparentizeHex = function (hex, opacity) {
        // Convert hex to RGB first
        let r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
        // Then implement transparency
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };    
};
