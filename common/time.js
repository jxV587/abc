function formatBit(m) {
    return m < 10 ? '0' + m : m;
}

export default class Time {
    constructor() {

    }

    format(t) {
        var date = new Date(t * 1000); //传入的参数必须是毫秒
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var mm = date.getMinutes();
        var s = date.getSeconds();

        var base = y + '-' + formatBit(m) + '-' + formatBit(d);

        if (h === 0 && mm === 0 && s === 0) {
            return base;
        }

        return base + ' ' + formatBit(h) + ':' + formatBit(mm) + ':' + formatBit(s);
    }
}