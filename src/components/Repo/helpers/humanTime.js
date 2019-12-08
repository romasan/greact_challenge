import { pluralize }  from "./pluralize";
import dateformat from "dateformat";

const secInMin   = 60;
const minInHour  = 60;
const hoursInDay = 24;

const SEC  = 1000;
const MIN  = SEC  * secInMin;
const HOUR = MIN  * minInHour;
const DAY  = HOUR * hoursInDay;

const pad = n => String(n).padStart(2, 0);

export const humanTimeAgo = date => {
    const time = Date.now() - new Date(date).getTime();

    if (time < MIN) {
        return 'только что'
    } else if (time < HOUR) {
        const min = parseInt(time / MIN);
        return `${pad(min)} ${pluralize(min, ['минута', 'минуты', 'минут'])} назад`;
    } else if (time < DAY) {
        var hours = parseInt(time / HOUR)
        return `${pad(hours)} ${pluralize(hours, ['час', 'часа', 'часов'])} назад`;
    } else {
        return dateformat(Date.now() - time, 'dd.mm.yyyy HH:MM');
    }
}
