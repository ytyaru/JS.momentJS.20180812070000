define(function(require, exports, module) {
    const moment = require("moment");
    return class Shower {
        Show() {
            moment.locale(window.navigator.language); // "ja"を想定
            const m = moment();
            const fmt = "YYYY-MM-DD(ddd) hh:mm:ss.SSS";
            const msg = "locale: " + moment.locale() + "\n"
                + "今: " + m.format() + "\n"
                + "今: " + m.format(fmt) + "\n"
                + "+3日: " + m.add(3, "days").format(fmt) + "\n"
                + "-3日: " + m.subtract(3, "days").format(fmt) + "\n"
                + "+3時間: " + m.add(3, "hours").format(fmt) + "\n"
                + "-3時間: " + m.subtract(3, "hours").format(fmt) + "\n"
                + "2000年からの経過年(diff): " + m.diff(moment("2000-01-01"), "years") + "\n"
                + "2000年からの経過年(diff): " + m.diff(moment("2000-01-01"), "years", true) + "\n"
                + "2000年は今から(from): " + moment("2000-01-01").from(m) + "\n"
                + "2000年は今から(fromNow): " + moment("2000-01-01").fromNow() + "\n"
                + "2000年からの経過年(diff+): " + this.DiffShow(this.DiffOfMonths(m, "2000-01-01")) + "\n"
                + "2000年からの経過年(diff++): " + this.DiffShow(this.DiffOfDays(m, "2000-01-01")) + "\n"
                + "2000年と同じか: " + m.isSame("2000-01-01", "years") + "\n"
                + "2000年より前か: " + m.isBefore("2000-01-01", "years") + "\n"
                + "2000年より後か: " + m.isAfter("2000-01-01", "years") + "\n"
                + "2000年以下か: " + m.isSameOrBefore("2000-01-01", "years") + "\n"
                + "2000年以上か: " + m.isSameOrAfter("2000-01-01", "years") + "\n"
                + "parse: " + moment("2018-08-12(日) 12:34:56.789", fmt).format(fmt) + "\n";

            const pre = document.createElement("pre");
            pre.innerText = msg;
            document.body.appendChild(pre);

            console.log(m);
            console.log(msg);
            alert(msg);
        }
        // 日時の差分を返す（年月）
        DiffOfMonths(e, t) {
            const d = e.diff(moment(t), "months");
            const year = Math.floor(d / 12);
            const month = d % 12;
            return {year: year, month: month};
        }
        // 日時の差分を返す（年月日）
        DiffOfDays(e, t) {
            const d = e.diff(moment(t), "days");
            const year = Math.floor(d / 365);
            const days = d % 365;
            const month = Math.floor(days / 30);
            const day = days - (month * 30);
            return {year: year, month: month, day: day};
        }
        // 差分オブジェクトの値に単位をつける
        DiffShow(diff) {
            let msg = diff.year + "年" + diff.month + "ヶ月";
            if (Object.keys(diff).some(v=>v=="day")) {
                msg += diff.day + "日";
            }
            return msg;
        }
    }
});
