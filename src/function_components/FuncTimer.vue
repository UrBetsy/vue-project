<script>
import day from 'dayjs';
import duration from 'dayjs/plugin/duration';
day.extend(duration);
export default {
    name: 'FuncTimer',
    props: {
        /** 开始时间 格式为YYYY-MM-DD HH:mm:ss**/
        startTime: {
            type: String,
            default: '',
        },
        /** 结束时间 格式为YYYY-MM-DD HH:mm:ss**/
        endTime: {
            type: String,
            default: '',
        },
        /** 是否倒计时**/
        reverse: {
            type: Boolean,
            default: false,
        },
        /** 定时器时间间隔，单位ms */
        interval: {
            type: Number,
            default: 1000,
        },
        /** 返回的倒计时字符串格式化方式 */
        format: {
            type: String,
            default: 'HH:mm:ss',
        },
        /** 是否禁止计时，禁止的话只传页面加载时的初始状态 */
        disableInterval: {
            type: Boolean,
            default: false,
        },
    },
    mounted () {
        console.log(111);
        if (this.reverse) {
            this.reverseTimer();
        } else {
            this.timer();
        }
    },
    beforeDestroy () {
        this.timeManager && clearInterval(this.timeManager);
    },
    methods: {
        validDate (timeString) {
            return day(timeString).isValid();
        },
        reverseTimer () {
            if (!this.validDate(this.endTime)) {
                return;
            }
            const endTime = day(this.endTime);
            const startTime = this.validDate(this.startTime)
                ? day(this.startTime)
                : day();
            this.setInterval(startTime, endTime);
        },
        timer () {
            if (!this.validDate(this.startTime)) {
                return;
            }
            const startTime = day(this.startTime);
            const endTime = this.validDate(this.endTime)
                ? day(this.endTime)
                : day('2038-01-19', 'YYYY-MM-DD');
            this.setInterval(startTime, endTime);
        },
        check (start, end) {
            const current = day();
            if (current.isBefore(start)) {
                return false;
            }
            this.started = true;
            if (current.isAfter(end)) {
                this.ended = true;
                return false;
            }
            this.enabled = true;
            return true;
        },
        setInterval (start, end) {
            if (!this.check(start, end)) {
                return;
            }
            this.changeState(start, end);
            if (this.disableInterval) {
                return;
            }
            this.timeManager = setInterval(() => {
                if (!this.check(start, end)) {
                    return;
                }
                this.changeState(start, end);
            }, this.interval);
        },
        changeState (start, end) {
            const currentTime = day();
            if (this.reverse) {
                this.count = end.diff(currentTime);
            } else {
                this.count = currentTime.diff(start);
            }
            this.duration = day.duration(this.count).$d;
        },
        formatCount () {
            const {
                years,
                months,
                days,
                hours,
                minutes,
                seconds,
            } = this.duration;
            const matchRules = {
                'Y+': years,
                'M+': months,
                'D+': days,
                'H+': hours,
                'm+': minutes,
                's+': seconds,
            };
            let reg;
            let format = this.format;
            for (const k in matchRules) {
                reg = new RegExp('(' + k + ')').exec(format);
                if (reg) {
                    format = format.replace(
                        reg[1],
                        reg[1].length === 1
                            ? matchRules[k]
                            : String(matchRules[k]).padStart(reg[1].length, '0')
                    );
                }
            }
            return format;
        },
    },
    data () {
        return {
            started: false,
            ended: false,
            currentTimeObject: null,
            timeManager: null,
            count: 0,
            duration: {
                years: 0,
                months: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
        };
    },
    render () {
        return this.$scopedSlots.default({
            /** 是否开始**/
            started: this.started,
            /** 是否结束**/
            ended: this.ended,
            /** 毫秒数**/
            count: this.count,
            /** 返回计时对象 */
            duration: this.duration,
            /** 返回格式化之后的字符串**/
            formated: this.formatCount(),
        });
    },
};
</script>
