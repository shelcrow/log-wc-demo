const template = document.createElement('template')
template.innerHTML = `
<style>
    * {
        margin: 0;
        padding: 0;
    }

    @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i');

    html {
        height: 100%;
        font-family: 'Roboto', sans-serif;
    }

    body {
        font-size: 11px;
        display: grid;
        grid-template-rows: 30px auto 30px;
        font-family: 'Roboto', sans-serif;
        height: 100%;
    }

    #sim-navbar {
        grid-row: 1 / 2;
        border-bottom: 1px solid #aaaaaa;
        margin: 0px 10px 0px 10px;
        display: grid;
        grid-template-columns: 80px auto 80px;
        background-color: #f8f8f8;
    }

    #sim-controls-container {
        overflow-y: hidden;
        grid-column: 1 / 2;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 4px;
    }

    #sim-controls-container.on #sim-start-btn {
        display: none;
    }

    #sim-controls-container.off #sim-stop-btn {
        display: none;
    }

    #sim-settings-container {
        padding-top: 5px;
        overflow-y: hidden;
        grid-column: 3 / 4;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #sim-start-btn {
        padding-top: 1px;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    #sim-start-btn svg {
        fill: rgb(74, 142, 88);
        height: 33px;
        width: 33px;
    }

    #sim-stop-btn {
        padding-top: 1px;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    #sim-stop-btn svg {
        fill: rgb(198, 43, 50);
        height: 33px;
        width: 33px;
    }

    #sim-settings-btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #sim-settings-btn svg {
        fill: rgb(49, 44, 44);
        height: 23px;
        width: 23px;
    }

    #sim-log-container {
        padding: 10px 0px 0px 10px;
        grid-row: 2 / 3;
        overflow-y: auto;
        overscroll-behavior-y: contain;
        scroll-snap-type: y mandatory;
        height: calc(100% - 10px);
    }

    #sim-log-container > div:last-child {
        scroll-snap-align: end;
    }

    #sim-status-container {
        grid-row: 3 / 4;
        margin: 0px 10px 0px 10px;
        border-top: 1px solid #aaaaaa;
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
    }

    .clickable {
        cursor: pointer;
    }

    #der-sim-settings-param .label {
        display: inline-block;
        margin-right: 4px;
        text-align: right;
        width: 126px;
        font-weight: 700;
    }

    #der-sim-settings-param input {
        display: inline-block;
        width: 300px;
        padding: 1px 2px;
    }

    #der-sim-settings-dialog button {
        padding: 1px 6px;
    }

    #sim-log-filter-container {
        position: absolute;
        right: 0;
        margin: 0px 25px 0px 0px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 13px;
    }

    #sim-log-filter-container .log-filter-level {
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

    #sim-log-filter-container .log-filter-level.selected-log-filter {
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

    #sim-help-msg {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -50px;
        transform: translateX(-50%);
        font-size: 16px;
    }    
    </style>
    <div id="sim-log-container">
        <div id="sim-log-filter-container">
            <div class="log-filter-level selected-log-filter" id="log-filter-ctl-level-error"><div class="log-filter-selector">E</div></div>
            <div class="log-filter-level selected-log-filter" id="log-filter-ctl-level-warning"><div class="log-filter-selector">W</div></div>
            <div class="log-filter-level selected-log-filter" id="log-filter-ctl-level-info"><div class="log-filter-selector">I</div></div>
            <div class="log-filter-level selected-log-filter" id="log-filter-ctl-level-debug"><div class="log-filter-selector">D</div></div>
            <div class="log-filter-level selected-log-filter" id="log-filter-ctl-level-input"><div class="log-filter-selector">&gt;</div></div>
            <div class="log-filter-level selected-log-filter" id="log-filter-ctl-level-output"><div class="log-filter-selector">&lt;</div></div>
        </div>
    </div>
`

var example_logs = [
    [
      {
        "time": "2021-01-26 15:42:50.184999",
        "level": "I",
        "msg": "Adding DER - sid = 1 addr = 40000"
      },
      {
        "time": "2021-01-26 15:42:50.194007",
        "level": "I",
        "msg": "Adding model 1"
      },
      {
        "time": "2021-01-26 15:42:50.194007",
        "level": "I",
        "msg": "Adding model 701"
      },
      {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 702"
      },
      {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 703"
      },
      {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 704"
      },
      {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 705"
      },
      {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 706"
      },
      {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 707"
      },
      {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 708"
      },
      {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 709"
      },
      {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 710"
      },
      {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 711"
      },
      {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 712"
      },
      {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 713"
      },
      {
        "time": "2021-01-26 15:42:50.196968",
        "level": "I",
        "msg": "Simulator starting on 0.0.0.0:8502"
      }
    ],
    [
      {
        "time": "2021-01-26 15:42:55.572451",
        "level": ">",
        "msg": "00000000000601039C400003"
      },
      {
        "time": "2021-01-26 15:42:55.572451",
        "level": "<",
        "msg": "00000000000901030653756E530001"
      },
      {
        "time": "2021-01-26 15:42:55.595689",
        "level": ">",
        "msg": "00000000000601039C430001"
      },
      {
        "time": "2021-01-26 15:42:55.595689",
        "level": "<",
        "msg": "0000000000050103020042"
      },
      {
        "time": "2021-01-26 15:42:55.611310",
        "level": ">",
        "msg": "00000000000601039C420044"
      },
      {
        "time": "2021-01-26 15:42:55.611310",
        "level": "<",
        "msg": "00000000008B0103880001004253756E5370656354657374000000000000000000000000000000000000000000546573742D313534372D310000000000000000000000000000000000000000006F70745F615F625F6300000000000000312E322E330000000000000000000000736E2D313233343536373839000000000000000000000000000000000000000000010000"
      },
      {
        "time": "2021-01-26 15:42:55.627020",
        "level": ">",
        "msg": "00000000000601039C860001"
      },
      {
        "time": "2021-01-26 15:42:55.627020",
        "level": "<",
        "msg": "00000000000501030202BD"
      },
      {
        "time": "2021-01-26 15:42:55.642632",
        "level": ">",
        "msg": "00000000000601039C870001"
      },
      {
        "time": "2021-01-26 15:42:55.642632",
        "level": "<",
        "msg": "0000000000050103020099"
      },
      {
        "time": "2021-01-26 15:42:55.657949",
        "level": ">",
        "msg": "00000000000601039C86007D"
      },
      {
        "time": "2021-01-26 15:42:55.657949",
        "level": "<",
        "msg": "0000000001390103FA02BD009900030002FFFFFFFF00000000FFFFFFFF2648271000C803D9019B096009600000EA6A000000000000009600000000000000000000000000000009000000000000000001C20226028A01F4019001A40C800D05005003D800890078007800000000000000310000000000000000000000000000000200000000000000000CE40D05005003DA00880078007800000000000000320000000000000000000000000000000300000000000000000DAC0D05002803DB008A0078FFFF0000000000000033000000000000000000000000000000040000000000000000FFFFFFFFFFFFFFFFFFFFFFFD0000FFFD0000000000030003FFFF00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
      },
      {
        "time": "2021-01-26 15:42:55.657949",
        "level": ">",
        "msg": "00000000000601039C86007D00000000000601039D03001E"
      },
      {
        "time": "2021-01-26 15:42:55.658949",
        "level": "<",
        "msg": "0000000001390103FA02BD009900030002FFFFFFFF00000000FFFFFFFF2648271000C803D9019B096009600000EA6A000000000000009600000000000000000000000000000009000000000000000001C20226028A01F4019001A40C800D05005003D800890078007800000000000000310000000000000000000000000000000200000000000000000CE40D05005003DA00880078007800000000000000320000000000000000000000000000000300000000000000000DAC0D05002803DB008A0078FFFF0000000000000033000000000000000000000000000000040000000000000000FFFFFFFFFFFFFFFFFFFFFFFD0000FFFD0000000000030003FFFF00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
      },
      {
        "time": "2021-01-26 15:42:55.660943",
        "level": ">",
        "msg": "00000000000601039D210001"
      },
      {
        "time": "2021-01-26 15:42:55.660943",
        "level": "<",
        "msg": "00000000000501030202BE"
      },
      {
        "time": "2021-01-26 15:42:55.660943",
        "level": ">",
        "msg": "00000000000601039D220001"
      },
      {
        "time": "2021-01-26 15:42:55.660943",
        "level": "<",
        "msg": "0000000000050103020032"
      },
      {
        "time": "2021-01-26 15:42:55.673990",
        "level": ">",
        "msg": "00000000000601039D210034"
      },
      {
        "time": "2021-01-26 15:42:55.673990",
        "level": "<",
        "msg": "00000000006B01036802BE00322710271003E8271003E82AF809C40000000000000000000000F0010E00D2003203520352FFFF00020003FFFFFFFFFFFF2710FFFFFFFFFFFFFFFF2710FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0000FFFD00000000000000000000"
      },
      {
        "time": "2021-01-26 15:42:55.689594",
        "level": ">",
        "msg": "00000000000601039D550001"
      },
      {
        "time": "2021-01-26 15:42:55.689594",
        "level": "<",
        "msg": "00000000000501030202BF"
      },
      {
        "time": "2021-01-26 15:42:55.704988",
        "level": ">",
        "msg": "00000000000601039D560001"
      },
      {
        "time": "2021-01-26 15:42:55.704988",
        "level": "<",
        "msg": "0000000000050103020011"
      },
      {
        "time": "2021-01-26 15:42:55.720923",
        "level": ">",
        "msg": "00000000000601039D550013"
      },
      {
        "time": "2021-01-26 15:42:55.720923",
        "level": "<",
        "msg": "00000000002901032602BF00110001041A03950000177A0000173E0000012C000000640000003CFFFFFFFFFFFDFFFE"
      },
      {
        "time": "2021-01-26 15:42:55.737006",
        "level": ">",
        "msg": "00000000000601039D680001"
      },
      {
        "time": "2021-01-26 15:42:55.737006",
        "level": "<",
        "msg": "00000000000501030202C0"
      },
      {
        "time": "2021-01-26 15:42:55.752832",
        "level": ">",
        "msg": "00000000000601039D690001"
      },
      {
        "time": "2021-01-26 15:42:55.752832",
        "level": "<",
        "msg": "0000000000050103020041"
      },
      {
        "time": "2021-01-26 15:42:55.753834",
        "level": ">",
        "msg": "00000000000601039D680043"
      },
      {
        "time": "2021-01-26 15:42:55.753834",
        "level": "<",
        "msg": "00000000008901038602C000410000FFFFFFFFFFFFFFFFFFFF0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF800000008000000080008000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF800000008000000080008000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFD8000800080008000800003B60001FFFFFFFFFFFFFFFFFFFFFFFF"
      },
      {
        "time": "2021-01-26 15:42:55.768016",
        "level": ">",
        "msg": "00000000000601039DAB0001"
      },
      {
        "time": "2021-01-26 15:42:55.768016",
        "level": "<",
        "msg": "00000000000501030202C1"
      },
      {
        "time": "2021-01-26 15:42:55.783825",
        "level": ">",
        "msg": "00000000000601039DAC0001"
      },
      {
        "time": "2021-01-26 15:42:55.783825",
        "level": "<",
        "msg": "0000000000050103020043"
      },
      {
        "time": "2021-01-26 15:42:55.799085",
        "level": ">",
        "msg": "00000000000601039DAB0045"
      },
      {
        "time": "2021-01-26 15:42:55.799085",
        "level": "<",
        "msg": "00000000008D01038A02C100430001000000000004000300000000000000000000FFFEFFFE800000040001000100010000FFFFFFFF00000006000123F00BB825C60000283C000029CCF44800040001000100010000FFFFFFFF00000006000024540BB82562000027D800002968F06000040001000100010000FFFFFFFF00000006000024B807D025620000290400002A30F830"
      },
      {
        "time": "2021-01-26 15:42:55.814851",
        "level": ">",
        "msg": "00000000000601039DF00001"
      },
      {
        "time": "2021-01-26 15:42:55.814851",
        "level": "<",
        "msg": "00000000000501030202C2"
      },
      {
        "time": "2021-01-26 15:42:55.830270",
        "level": ">",
        "msg": "00000000000601039DF10001"
      },
      {
        "time": "2021-01-26 15:42:55.830270",
        "level": "<",
        "msg": "000000000005010302001F"
      },
      {
        "time": "2021-01-26 15:42:55.845710",
        "level": ">",
        "msg": "00000000000601039DF00021"
      },
      {
        "time": "2021-01-26 15:42:55.845710",
        "level": "<",
        "msg": "00000000004501034202C2001F00000000000000020002FFFFFFFFFFFFFFFFFFFF000000008000000200010000000A0001006A0064006E00000002000100000005000000690064006D0000"
      },
      {
        "time": "2021-01-26 15:42:55.861182",
        "level": ">",
        "msg": "00000000000601039E110001"
      },
      {
        "time": "2021-01-26 15:42:55.861182",
        "level": "<",
        "msg": "00000000000501030202C3"
      },
      {
        "time": "2021-01-26 15:42:55.876928",
        "level": ">",
        "msg": "00000000000601039E120001"
      },
      {
        "time": "2021-01-26 15:42:55.876928",
        "level": "<",
        "msg": "0000000000050103020033"
      },
      {
        "time": "2021-01-26 15:42:55.892384",
        "level": ">",
        "msg": "00000000000601039E110035"
      },
      {
        "time": "2021-01-26 15:42:55.892384",
        "level": "<",
        "msg": "00000000006D01036A02C300330001FFFFFFFF00020002FFFE0000FFFF0002138800000005FFFFFFFFFFFF00021B5800000005FFFFFFFFFFFF0002177000000005FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
      },
      {
        "time": "2021-01-26 15:42:55.907682",
        "level": ">",
        "msg": "00000000000601039E460001"
      },
      {
        "time": "2021-01-26 15:42:55.907682",
        "level": "<",
        "msg": "00000000000501030202C4"
      },
      {
        "time": "2021-01-26 15:42:55.923357",
        "level": ">",
        "msg": "00000000000601039E470001"
      },
      {
        "time": "2021-01-26 15:42:55.923357",
        "level": "<",
        "msg": "000000000005010302001D"
      },
      {
        "time": "2021-01-26 15:42:55.938563",
        "level": ">",
        "msg": "00000000000601039E46001F"
      },
      {
        "time": "2021-01-26 15:42:55.938563",
        "level": "<",
        "msg": "00000000004101033E02C4001D0001FFFFFFFF00020001FFFE0000FFFF00022EE0000000052EE00000000500022710000000052710000000050002271000000005271000000005"
      },
      {
        "time": "2021-01-26 15:42:55.953943",
        "level": ">",
        "msg": "00000000000601039E650001"
      },
      {
        "time": "2021-01-26 15:42:55.953943",
        "level": "<",
        "msg": "00000000000501030202C5"
      },
      {
        "time": "2021-01-26 15:42:55.970306",
        "level": ">",
        "msg": "00000000000601039E660001"
      },
      {
        "time": "2021-01-26 15:42:55.970306",
        "level": "<",
        "msg": "0000000000050103020017"
      },
      {
        "time": "2021-01-26 15:42:55.985916",
        "level": ">",
        "msg": "00000000000601039E650019"
      },
      {
        "time": "2021-01-26 15:42:55.985916",
        "level": "<",
        "msg": "00000000003501033202C500170001FFFFFFFF000100018000FFFEFFFF0001FFFFFFFF000000050001FFFFFFFF000000050001FFFFFFFF00000005"
      },
      {
        "time": "2021-01-26 15:42:56.001772",
        "level": ">",
        "msg": "00000000000601039E7E0001"
      },
      {
        "time": "2021-01-26 15:42:56.001772",
        "level": "<",
        "msg": "00000000000501030202C6"
      },
      {
        "time": "2021-01-26 15:42:56.016955",
        "level": ">",
        "msg": "00000000000601039E7F0001"
      },
      {
        "time": "2021-01-26 15:42:56.016955",
        "level": "<",
        "msg": "0000000000050103020017"
      },
      {
        "time": "2021-01-26 15:42:56.017921",
        "level": ">",
        "msg": "00000000000601039E7E0019"
      },
      {
        "time": "2021-01-26 15:42:56.018917",
        "level": "<",
        "msg": "00000000003501033202C60017FFFFFFFFFFFF000100018000FFFEFFFF0001FFFFFFFF000000050001FFFFFFFF000000050001FFFFFFFF00000005"
      },
      {
        "time": "2021-01-26 15:42:56.032912",
        "level": ">",
        "msg": "00000000000601039E970001"
      },
      {
        "time": "2021-01-26 15:42:56.032912",
        "level": "<",
        "msg": "00000000000501030202C7"
      },
      {
        "time": "2021-01-26 15:42:56.048869",
        "level": ">",
        "msg": "00000000000601039E980001"
      },
      {
        "time": "2021-01-26 15:42:56.048869",
        "level": "<",
        "msg": "0000000000050103020015"
      },
      {
        "time": "2021-01-26 15:42:56.049836",
        "level": ">",
        "msg": "00000000000601039E970017"
      },
      {
        "time": "2021-01-26 15:42:56.049836",
        "level": "<",
        "msg": "00000000003101032E02C70015FFFFFFFFFFFF00010000000000000000FFFFFFFEFFFE00000000EA7E0000EA420028002800000258FFFF"
      },
      {
        "time": "2021-01-26 15:42:56.064175",
        "level": ">",
        "msg": "00000000000601039EAE0001"
      },
      {
        "time": "2021-01-26 15:42:56.064175",
        "level": "<",
        "msg": "00000000000501030202C8"
      },
      {
        "time": "2021-01-26 15:42:56.080069",
        "level": ">",
        "msg": "00000000000601039EAF0001"
      },
      {
        "time": "2021-01-26 15:42:56.080069",
        "level": "<",
        "msg": "0000000000050103020012"
      },
      {
        "time": "2021-01-26 15:42:56.095777",
        "level": ">",
        "msg": "00000000000601039EAE0014"
      },
      {
        "time": "2021-01-26 15:42:56.095777",
        "level": "<",
        "msg": "00000000002B01032802C80012FFFFFFFFFFFF00010001000000000000000000008000FFFE0001FFFFFFFFFFFF80008000"
      },
      {
        "time": "2021-01-26 15:42:56.111048",
        "level": ">",
        "msg": "00000000000601039EC20001"
      },
      {
        "time": "2021-01-26 15:42:56.111048",
        "level": "<",
        "msg": "00000000000501030202C9"
      },
      {
        "time": "2021-01-26 15:42:56.126228",
        "level": ">",
        "msg": "00000000000601039EC30001"
      },
      {
        "time": "2021-01-26 15:42:56.126228",
        "level": "<",
        "msg": "0000000000050103020006"
      },
      {
        "time": "2021-01-26 15:42:56.141718",
        "level": ">",
        "msg": "00000000000601039EC20008"
      },
      {
        "time": "2021-01-26 15:42:56.141718",
        "level": "<",
        "msg": "00000000001301031002C90006FFFFFFFFFFFFFFFFFFFF8000"
      },
      {
        "time": "2021-01-26 15:42:56.157074",
        "level": ">",
        "msg": "00000000000601039ECA0001"
      },
      {
        "time": "2021-01-26 15:42:56.157074",
        "level": "<",
        "msg": "000000000005010302FFFF"
      }
    ],
    [
      {
        "time": "2021-01-26 15:43:01.788962",
        "level": ">",
        "msg": "00000000000601039C420044"
      },
      {
        "time": "2021-01-26 15:43:01.788962",
        "level": "<",
        "msg": "00000000008B0103880001004253756E5370656354657374000000000000000000000000000000000000000000546573742D313534372D310000000000000000000000000000000000000000006F70745F615F625F6300000000000000312E322E330000000000000000000000736E2D313233343536373839000000000000000000000000000000000000000000010000"
      }
    ],
    [
      {
        "time": "2021-01-26 15:43:05.389911",
        "level": ">",
        "msg": "00000000000901109C840001020004"
      },
      {
        "time": "2021-01-26 15:43:05.389911",
        "level": "<",
        "msg": "00000000000601109C840001"
      }
    ],
    [
      {
        "time": "2021-01-26 15:43:07.529094",
        "level": ">",
        "msg": "00000000000601039C420044"
      },
      {
        "time": "2021-01-26 15:43:07.529094",
        "level": "<",
        "msg": "00000000008B0103880001004253756E5370656354657374000000000000000000000000000000000000000000546573742D313534372D310000000000000000000000000000000000000000006F70745F615F625F6300000000000000312E322E330000000000000000000000736E2D313233343536373839000000000000000000000000000000000000000000040000"
      }
    ],
    [
      {
        "time": "2021-01-26 15:43:11.910335",
        "level": ">",
        "msg": "00000000000901109C840001020001"
      },
      {
        "time": "2021-01-26 15:43:11.910335",
        "level": "<",
        "msg": "00000000000601109C840001"
      }
    ]
]

var log_entry_html = 
                    `<div class="log-entry">
                        <div class="log-timestamp"></div>
                        <div class="log-level"></div>
                        <div class="log-msg"></div>
                    </div>`
var log_level_filters = ['level-error', 'level-warning', 'level-debug',
                         'level-info', 'level-output', 'level-input']

class Log extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // this.sr = this.shadowRoot
  }

  // called when element is added to DOM
  connectedCallback() {
    var sr = this.shadowRoot
    // $('#log-start-btn', sr).click(this.start_log)
    // $('.log-filter-level', sr).click(this.update_log_filter)

    // this.init_jquery_fxn()
    this.start_log()
  }

  // register attributes, passed to web component, for watching
  static get observedAttributes() {
    return ['start-log'];
  }

  // when attr changes, run commands
  attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'start'){
        // run cmd if start changes
        if (start == 'true') {
            // start_log()
        } else {
        // stop log
        }
    }
  }

  start_log() {
    for (let i of example_logs) {
        for (let j of i) {
            let el = this.format_log(j['time'], j['level'], j['msg'])
            $('#log-container').append(el)
        }
    }
  
  }

  format_log(timestamp, level, msg) {
    let el = $(log_entry_html)
    let show_bool = false
    $(el).find('.log-timestamp').text(timestamp)
    $(el).find('.log-level').text(level)
    $(el).find('.log-msg').text(msg)
    
    switch (level) {
        case 'E':
            $(el).find('.log-msg').addClass('level-error')
            $(el).find('.log-level').addClass('level-error')
            $(el).addClass('level-error')
            show_bool = log_level_filters.includes('level-error')
            break
        case 'W':
            $(el).find('.log-msg').addClass('level-warning')
            $(el).find('.log-level').addClass('level-warning')
            $(el).addClass('level-warning')
            show_bool = log_level_filters.includes('level-warning')
            break
        case 'D':
            $(el).find('.log-msg').addClass('level-debug')
            $(el).find('.log-level').addClass('level-debug')
            $(el).addClass('level-debug')
            show_bool = log_level_filters.includes('level-debug')
            break
        case 'I':
            $(el).find('.log-msg').addClass('level-info')
            $(el).find('.log-level').addClass('level-info')
            $(el).addClass('level-info')
            show_bool = log_level_filters.includes('level-info')
            break
        case '<':
            $(el).find('.log-msg').addClass('level-output')
            $(el).find('.log-level').addClass('level-output')
            $(el).addClass('level-output')
            show_bool = log_level_filters.includes('level-output')
            break
        case '>':
            $(el).find('.log-msg').addClass('level-input')
            $(el).find('.log-level').addClass('level-input')
            $(el).addClass('level-input')
            show_bool = log_level_filters.includes('level-input')
            break
        case null:
            alert('Received unknown log level for filter.')
            break
        default:
            alert('Received unknown log level for filter.')
    }

    
    if (!show_bool) {
        $(el).hide()
    }

    return el
  }

  update_log_filter(event) {
    console.log(this)
    let id = this.id.slice(15)
    console.log(this.shadowRoot)
    console.log('clicking log: ' + id)
    console.log($(this.id))
    $(id, this.shadowRoot).toggleClass('selected-log-filter')
    if ($('#' + this.id).hasClass('selected-log-filter')) {
        if (!log_level_filters.includes(id)) {
            log_level_filters.push(id)
        }
    } else {
        if (log_level_filters.includes(id)) {
            let index = log_level_filters.indexOf(id)
            log_level_filters.splice(index, 1)
        }
    }

    $('.log-entry').hide()
    for (let i in log_level_filters) {
        $('.log-entry' + '.' + log_level_filters[i]).show()
    }
  }
}

window.customElements.define('suns-log', Log);