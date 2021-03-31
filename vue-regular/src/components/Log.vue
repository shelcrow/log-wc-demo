<template>
    <div id="log-container">
        <div id="log-filter-container">
            <div :class="[{ 'selected-log-filter': log_classes['E'] }, 'log-filter-level']" id="log-filter-ctl-level-error" @click="toggle_log_level('E')">
                <div class="log-filter-selector">E</div>
            </div>
            <div :class="[{ 'selected-log-filter': log_classes['W'] }, 'log-filter-level']" id="log-filter-ctl-level-warning" @click="toggle_log_level('W')">
                <div class="log-filter-selector">W</div>
            </div>
            <div :class="[{ 'selected-log-filter': log_classes['I'] }, 'log-filter-level']" id="log-filter-ctl-level-info" @click="toggle_log_level('I')">
                <div class="log-filter-selector">I</div>
            </div>
            <div :class="[{ 'selected-log-filter': log_classes['D'] }, 'log-filter-level']" id="log-filter-ctl-level-debug" @click="toggle_log_level('D')">
                <div class="log-filter-selector">D</div>
            </div>
            <div :class="[{ 'selected-log-filter': log_classes['>'] }, 'log-filter-level']" id="log-filter-ctl-level-input" @click="toggle_log_level('>')">
                <div class="log-filter-selector">&gt;</div>
            </div>
            <div :class="[{ 'selected-log-filter': log_classes['<'] }, 'log-filter-level']" id="log-filter-ctl-level-output" @click="toggle_log_level('<')">
                <div class="log-filter-selector">&lt;</div>
            </div>
        </div>
        <div class="log-entry" v-for="log in log_entries" :key=log.log_id v-show="log_classes[log.level]">
            <div class="log-timestamp">{{ log.time }}</div>
            <div class="log-level level-info">{{ log.level }}</div>
            <div class="log-msg level-info">{{ log.msg }}</div>
        </div>
        <div id="sim-status-container">
            <div id="sim-info"></div>
            <div id="sim-status"></div>
        </div>        
    </div>
</template>

<script>
export default {
    name: "Log",
    props: ['send_logs'],
    data() {
        return {
            log_entries: [],
            log_counter: 0,
            "log_classes": {
                "E": true,
                "W": true,
                "I": true,
                "D": true,
                ">": true,
                "<": true,
            },
        }
    },
    methods: {
        toggle_log_level(level) {
            switch(level) {
                case 'E':
                    this.log_classes["E"] = !this.log_classes["E"]
                    break
                case 'W':
                    this.log_classes["W"] = !this.log_classes["W"]
                    break
                case 'I':
                    this.log_classes["I"] = !this.log_classes["I"]
                    break
                case 'D':
                    this.log_classes["D"] = !this.log_classes["D"]
                    break
                case '>':
                    this.log_classes[">"] = !this.log_classes[">"]
                    break
                case '<':
                    this.log_classes["<"] = !this.log_classes["<"]
                    break
            }
        }        
    },
    watch: {
        send_logs() {
            console.log(this.send_logs)
            if (this.send_logs) {
                for (let i in this.send_logs) {
                    for (let j in this.send_logs[i]) {
                        this.log_counter++
                        this.send_logs[i][j]["log_id"] = "log_id_" + this.log_counter
                        this.log_entries.push(this.send_logs[i][j])
                    }
                    this.send_logs.splice(i, 1)
                }
            }
        }
    }
}
</script>

<style scoped>
#log-container {
    padding: 10px 0px 0px 10px;
    grid-row: 2 / 3;
    overflow-y: auto;
    overscroll-behavior-y: contain;
    scroll-snap-type: y mandatory;
    height: 100%;
}

#log-container > div:last-child {
    scroll-snap-align: end;
}

#status-container div {
    font-size: 13px;
}

#sim-info {
    height: 100%;
    float: right;
    display: flex;
    align-items: center;
}

#sim-status {
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
}

.log-entry {
    display: grid;
    width: 100%;
    grid-template-columns: 156px 5px minmax(0, 1fr);
    grid-column-gap: 8px;
    font-size: 12px;
}

.log-timestamp {
    grid-column: 1 / 2;
    color: #00218b;
}

.log-level {
    grid-column: 2 / 3;
}

.log-msg {
    margin-right: 5px;
    grid-column: 3 / 4;
    overflow-wrap: break-word;
    text-align: left;
}

.clickable {
    cursor: pointer;
}

#log-filter-container {
    position: absolute;
    right: 0;
    margin: 0px 25px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 13px;
}

#log-filter-container .log-filter-level {
    display: inline-flex;
    cursor: pointer;
    height: 20px;
    width: 20px;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
    background-color: white;
}

#log-filter-ctl-level-error {
    border-left: 1px solid #cccccc;
}

#log-filter-container .log-filter-level.selected-log-filter {
    font-size: 14px;
    font-weight: bold;
    background-color: #f0f0f0;
}

.level-error {
    color: rgb(200, 0, 0);
}

.level-debug {
    color: rgb(136, 18, 128);
}

.level-warning {
    color: rgb(255, 96, 0);
}

.level-output {
    color: #007000;
}

.level-input {
    color: #000070;
}

#log-filter-ctl-level-error.selected-log-filter .log-filter-selector {
    color: rgb(200, 0, 0);
}

#log-filter-ctl-level-debug.selected-log-filter .log-filter-selector {
    color: rgb(136, 18, 128);
}

#log-filter-ctl-level-warning.selected-log-filter .log-filter-selector {
    color: rgb(206, 102, 38);
}

#log-filter-ctl-level-output.selected-log-filter .log-filter-selector {
    color: #007000;
}

#log-filter-ctl-level-input.selected-log-filter .log-filter-selector {
    color: #000070;
}

</style>