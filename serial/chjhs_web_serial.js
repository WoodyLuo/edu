/*
This website uses the web serial API to read the output of serial data of the microcontroller and convert the data into a table of web page elements. In addition, the table data in the web page can also be downloaded to the local computer and stored in Excel format, which facilitates users to conduct subsequent Excel data analysis.
*/

// The program has not yet been reconstruction.

var data_table = null;
var serial_port_monitor = document.getElementById("serial_monitor");
var serial_button = document.getElementById("serial_button");
var baud_rate_element = document.getElementById("baud_rate");
var _baud_rate = "NULL";
var _serial = null;
var _port = null;
var _decoder = new TextDecoderStream();  // 將 bit data 解碼為文字
var _reader = null;
let _buffer = "";
var export_button = document.getElementById("export_button");
var _first_row = true;
var _num = 1;
var _num_of_datasets = null;
var _line_chart_canva = document.getElementById("my_chart");
var _lables = [];
var _datasets = {
  labels: _lables,
  datasets:[]
};
var _chart_config = {
  type: "line",
  data:_datasets,
  options:{}
};
var _line_chart = new Chart(_line_chart_canva, _chart_config);
var download_button = document.getElementById("download_button");

download_button.addEventListener("click", (event) => {
  /*Get image of canvas element*/
  var _url_base64jp = _line_chart_canva.toDataURL("image/png", 1);
  /*get download button (tag: <a></a>) */
  _image_data_url =  document.getElementById("image_data_url");
  /*insert chart image url to download button (tag: <a></a>) */
  _image_data_url.href = _url_base64jp;
});

async function requestSerialPort(){
    // 建立web預覽器的serial物件
    _serial = navigator.serial;
    // 選擇目標（Serial Port）
    try{
        _port = await _serial.requestPort();
         // 設定 baud rate
        await _port.open({ baudRate: Number(_baud_rate) });
    }catch(error){
        alert(error);
        return 0;
    }
    const readableStreamClosed = _port.readable.pipeTo(_decoder.writable);
    _reader = _decoder.readable.getReader();
    // Listen to data coming from the serial device.
    var _buffer = "";
    var is_new_line = false;
    var serial_data = [];
    while (true) {
        const { value, done } = await _reader.read();
        if (done) {
            // Allow the serial port to be closed later.
            _reader.releaseLock();
            break;
        }
        _buffer = _buffer + value;
        is_new_line = _buffer.slice(-1)==="\n" ? true : false;
        serial_data = _buffer.split("\r\n");
        while(true){
            //console.log(serial_data.length);
            //console.log(serial_data.shift());
            //console.log(serial_data.length === undefined);
            if(! (serial_data.length === 1)){
                var _row = serial_data.shift();
                await makeTableRow("serial_data", _row, true);
                //var p = document.createElement('p');
                //p.textContent = serial_data.shift();
                //console.log(p.textContent);
                //serial_port_monitor.appendChild(p);
            }else{
                _buffer = serial_data.pop();
                break;
            }
        }
    }
}

serial_button.addEventListener("click", (event) => {
    _baud_rate = baud_rate_element.value;
    if(_baud_rate != "NULL"){
        requestSerialPort();
    }else{
        alert("「未」選擇序列埠傳輸速率！請選擇傳輸速率！！");
    }
});

export_button.addEventListener("click", (event) => {
    tableToExcel("serial_data", "SerialData");
});

async function makeTableRow(serial_table_id, string_data, time_stamp){
    if(data_table === null){
        data_table = document.getElementById(serial_table_id);
        export_button.disabled = false;
    }
    if(time_stamp && _first_row){
        string_data = "Time," + string_data;
    }else if(time_stamp){
        string_data = new Date().toTimeString().split(" ")[0] + "," + string_data;
    }
    string_data = string_data.replace(" ", "");
    string_data = string_data.split(",");
    // Make datasets frame.
    if(_first_row){
      
      _num_of_datasets = string_data.length - 1;
      //console.log("_num_of_datasets:"+_num_of_datasets);
      //console.log("string_data.length:"+string_data.length);
      await makeDatasetsFrame(_num_of_datasets, string_data);
      download_button.disabled = false;
    }else{
      // Deal with x-axis' label
      _datasets.labels.push(_num);
      _num++;
    }
    let _data_row = data_table.insertRow(-1);
    let _counter = 0;
    while(string_data.length!=0){
        let _cell = _data_row.insertCell(_counter);
        let _a_data = string_data.shift();
        //console.log(_counter);
        //console.log(_a_data);
        _cell.innerHTML = _a_data;
        if(!_first_row && _counter > 0){
          _datasets.datasets[_counter-1].data.push(parseFloat(_a_data));
        }
        _counter++;
    }
    _first_row = false;
}

async function makeDatasetsFrame(data_length, data){
  for(let i = 0; i <data_length; i++){
    var new_dataset = new ColorManager();
    new_dataset.setColorByIndex(i+1);
    _datasets.datasets.push({
      ...new_dataset.config,
      label: data[i+1],
      data:[],
    });
  }
}

setInterval(async function() {
  await _line_chart.update();
}, 250);

var tableToExcel = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,'
      , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
      , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
      , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
    return function(table, name) {
      if (!table.nodeType) table = document.getElementById(table)
      var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
      window.location.href = uri + base64(format(template, ctx))
    }
})()


class ColorManager{
    constructor(){
      this.config = {
        fill: false,
        backgroundColor: "", 
        borderColor: "", 
        pointBackgroundColor: "",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff", 
        pointHoverBorderColor: "",
      };
      this.colorTable = {"blue":1, "red":2, "yellow":3, "orange":4, "green":5, "violet":6, "brown":7, "grey":0};                 
    }; // ColorManager.constructor()
    blue(){
      this.config.backgroundColor = "rgba(0, 176, 240, 0.2)";
      this.config.borderColor = "rgb(0, 176, 240)";
      this.config.pointBackgroundColor = "rgb(0, 175, 240)";
      this.config.pointHoverBorderColor = "rgb(255, 99, 132)";
    };// ColorManager.blue()
    red(){
      this.config.backgroundColor = "rgba(255, 99, 132, 0.2)";
      this.config.borderColor = "rgb(255, 99, 132)";
      this.config.pointBackgroundColor = "rgb(255, 99, 132)";
      this.config.pointHoverBorderColor = "rgb(255, 99, 132)";
    };// ColorManager.red()
    yellow(){
      this.config.backgroundColor = "rgba(232, 193, 107, 0.2)";
      this.config.borderColor = "rgb(232, 193, 107)";
      this.config.pointBackgroundColor = "rgb(232, 193, 107)";
      this.config.pointHoverBorderColor = "rgb(232, 193, 107)";
    };// ColorManager.yellow()
    orange(){
      this.config.backgroundColor = "rgba(255, 140, 55, 0.2)";
      this.config.borderColor = "rgb(255, 140, 55)";
      this.config.pointBackgroundColor = "rgb(255, 140, 55)";
      this.config.pointHoverBorderColor = "rgb(255, 140, 55)";
    };// ColorManager.orange()
    green(){
      this.config.backgroundColor = "rgba(0, 181, 92, 0.2)";
      this.config.borderColor = "rgb(0, 181, 92)";
      this.config.pointBackgroundColor = "rgb(0, 181, 92)";
      this.config.pointHoverBorderColor = "rgb(0, 181, 92)";
    };// ColorManager.green()
    violet(){
      this.config.backgroundColor = "rgba(111, 55, 142, 0.2)";
      this.config.borderColor = "rgb(111, 55, 142)";
      this.config.pointBackgroundColor = "rgb(111, 55, 142)";
      this.config.pointHoverBorderColor = "rgb(111, 55, 142)";
    };// ColorManager.violet()
    brown(){
      this.config.backgroundColor = "rgba(155, 77, 78, 0.2)";
      this.config.borderColor = "rgb(155, 77, 78)";
      this.config.pointBackgroundColor = "rgb(155, 77, 78)";
      this.config.pointHoverBorderColor = "rgb(155, 77, 78)";
    };// ColorManager.brown()
    grey(){
      this.config.backgroundColor = "rgba(147, 77, 78, 0.2)";
      this.config.borderColor = "rgb(147, 77, 78)";
      this.config.pointBackgroundColor = "rgb(147, 77, 78)";
      this.config.pointHoverBorderColor = "rgb(147, 77, 78)";
    };// ColorManager.grey()
    getAllColorKeys(){
      return ["blue" ,"red", "yellow", "orange", "green", "violet", "brown", "grey"];
    };// ColorManager.getAllColorKeys()
    setColorByIndex(_index){
      var _temp = _index%8;
      if(_temp===1){
        this.blue();
      }else if(_temp===2){
        this.red();
      }else if(_temp===3){
        this.yellow();
      }else if(_temp===4){
        this.orange();
      }else if(_temp===5){
        this.green();
      }else if(_temp===6){
        this.violet();
      }else if(_temp===7){
        this.brown();
      }else if(_temp===0){
        this.grey();
      }else{
        throw "TypeError: Please enter a NUMBER.";
      }// if.. else if.. else..
    };// ColorManager.setColorByIndex()
    setConfig(newConfig){
      this.config = {
        ...this.config,
        ...newConfig
      };
    }// ColorManager.setConfig()
    getConfig(_colorOfDataset){
      var _colorIndex = NaN;
      if(Number.isInteger(_colorOfDataset)){
        this.setColorByIndex(_colorOfDataset);
      }else if(typeof(_colorOfDataset)==='string'){
        _colorIndex = this.colorTable[_colorOfDataset];
        if(!_colorIndex){
          throw "UndefinedError: Please check your color code was unavailable.";
        }else{
          this.setColorByIndex(_colorIndex);
        }// if..else..
      }// if..else if..
      return this.config;
    }// ColorManager.getConfig()
};// ColorManager{}


// Get the button
let go_to_top_button = document.getElementById("goto_top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    go_to_top_button.style.display = "block";
  } else {
    go_to_top_button.style.display = "none";
  }
}



/*
function tableToExcel(table, name) {
  var uri = 'data:application/vnd.ms-excel;base64,'
      ,
      template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
      , base64 = function (s) {
          return window.btoa(unescape(encodeURIComponent(s)))
      }
      , format = function (s, c) {
          return s.replace(/{(\w+)}/g, function (m, p) {
              return c[p];
          })
      }
  if (!table.nodeType) table = document.getElementById(table)
  var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
  var a = document.createElement('a');
  a.href = uri + base64(format(template, ctx))
  a.download = name+'.xls';
  //triggering the function
  a.click();
}
*/


// vendor=9025 "Arduino (www.arduino.cc)", product=67 "Arduino Uno",

