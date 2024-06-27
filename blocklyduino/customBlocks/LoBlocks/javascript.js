Blockly.Arduino.basic_ = {};

Blockly.Arduino["chjhs_RGB_value"] = function () {
  var a =
      Blockly.Arduino.valueToCode(this, "RED", Blockly.Arduino.ORDER_NONE) ||
      "0",
    b =
      Blockly.Arduino.valueToCode(this, "GREEN", Blockly.Arduino.ORDER_NONE) ||
      "0",
    c =
      Blockly.Arduino.valueToCode(this, "BLUE", Blockly.Arduino.ORDER_NONE) ||
      "0";
  if (parseInt(a) > 255) a = "255";
  else if (parseInt(a) < 0) a = "0";
  if (parseInt(b) > 255) b = "255";
  else if (parseInt(b) < 0) b = "0";
  if (parseInt(c) > 255) c = "255";
  else if (parseInt(c) < 0) c = "0";
  return [
    "rgb_color(" + a + "," + b + "," + c + ")",
    Blockly.Arduino.ORDER_ATOMIC,
  ];
};

Blockly.Arduino["get_color_from_picker"] = function () {
  var a = this.getFieldValue("RGB");
  return [
    "rgb_color(" + hexToR(a) + "," + hexToG(a) + "," + hexToB(a) + ")",
    Blockly.Arduino.ORDER_ATOMIC,
  ];
};

// CHJHS restart
Blockly.Arduino["initializes_restart"] = function () {
  Blockly.Arduino.definitions_["chjhs_program_restart"] =
    "void(* resetFunc) (void) = 0;";
  return "resetFunc();\n";
};

// CHJHS define
var chjhs_define_identifier_counter = 0;
Blockly.Arduino["chjhs_define_identifier"] = function (block) {
  chjhs_define_identifier_counter++;
  var a = Blockly.Arduino.nameDB_.getUnsafeName(this.getFieldValue("varName")),
    b = Blockly.Arduino.valueToCode(
      block,
      "content",
      Blockly.Arduino.ORDER_ATOMIC
    );
  Blockly.Arduino.definitions_[a + chjhs_define_identifier_counter] =
    "#define " + a + " " + b;
  return "";
};

Blockly.Arduino["chjhs_define_call_function"] = function (block) {
  var a = Blockly.Arduino.nameDB_.getUnsafeName(this.getFieldValue("varName")),
    b = Blockly.Arduino.valueToCode(
      block,
      "content",
      Blockly.Arduino.ORDER_ATOMIC
    );
  var code = a.split("(")[0] + "(" + b + ");\n";
  return code;
};

Blockly.Arduino["chjhs_define_call_variable"] = function () {
  return Blockly.Arduino.nameDB_.getUnsafeName(this.getFieldValue("varName"));
};

Blockly.Arduino["chjhs_define_call_function_assigment"] = function (block) {
  var a = Blockly.Arduino.nameDB_.getUnsafeName(this.getFieldValue("varName")),
    b = Blockly.Arduino.valueToCode(
      block,
      "content",
      Blockly.Arduino.ORDER_ATOMIC
    );
  var code = a.split("(")[0] + "(" + b + ")";
  return code;
};

Blockly.Arduino["chjhs_define_expression"] = function () {
  return this.getFieldValue("EXPRESSION");
};

Blockly.Arduino["chjhs_define_expression_input"] = function () {
  return this.getFieldValue("EXPRESSION");
};

Blockly.Arduino["text_program_comment_single_line"] = function () {
  return "// " + this.getFieldValue("COMMENT") + "\n";
};

Blockly.Arduino["text_program_copyright"] = function () {
  var a = this.getFieldValue("DATE"),
    b = this.getFieldValue("AUTHOR"),
    c = this.getFieldValue("PROGRAM_NAME"),
    d = this.getFieldValue("INTRODUCTION");
  var code =
    "/* Copyright (C)\n" +
    " * Date: " +
    a +
    "\n * Author: " +
    b +
    "\n * Progame Name: " +
    c +
    "\n * Program Introduction: " +
    d +
    "\n */";
  Blockly.Arduino.definitions_["define_program_copyright"] = code;
  return "";
};

var chjhs_define_if_counter = 0;
Blockly.Arduino["chjhs_define_if"] = function (block) {
  chjhs_define_if_counter++;
  var a =
    Blockly.Arduino.valueToCode(
      block,
      "EXPRESSION",
      Blockly.Arduino.ORDER_ATOMIC
    ) || "";
  var b = a.replace(" ", "").split("==")[0];
  var c = a.replace(" ", "").split("==")[1];
  Blockly.Arduino.definitions_["define_if_" + chjhs_define_if_counter + b + c] =
    "#if " + a;
  return "";
};

var chjhs_define_elif_counter = 0;
Blockly.Arduino["chjhs_define_elif"] = function (block) {
  chjhs_define_elif_counter++;
  var a =
    Blockly.Arduino.valueToCode(
      block,
      "EXPRESSION",
      Blockly.Arduino.ORDER_ATOMIC
    ) || "";
  var b = a.replace(" ", "").split("==")[0];
  var c = a.replace(" ", "").split("==")[1];
  Blockly.Arduino.definitions_[
    "define_elif_" + chjhs_define_elif_counter + b + c
  ] = "#elif " + a;
  return "";
};

var chjhs_define_else_counter = 0;
Blockly.Arduino["chjhs_define_else"] = function () {
  chjhs_define_else_counter++;
  Blockly.Arduino.definitions_["define_else_" + chjhs_define_else_counter] =
    "#else";
  return "";
};

var chjhs_define_endif_counter = 0;
Blockly.Arduino["chjhs_define_endif"] = function (block) {
  chjhs_define_endif_counter++;
  var a =
    Blockly.Arduino.valueToCode(
      block,
      "EXPRESSION",
      Blockly.Arduino.ORDER_ATOMIC
    ) || "";
  Blockly.Arduino.definitions_["define_endif_" + chjhs_define_endif_counter] =
    "#endif";
  return "";
};

Blockly.Arduino["set_mearm"] = function (block) {
  //Blockly.Arduino.definitions_['name'] = '//definitions_';
  //Blockly.Arduino.setups_['name'] = '//setups_';
  //Blockly.Arduino.functions_['name'] = 'String blockly() {\n  return "Hello World";\n}';

  var value_basePin = Blockly.Arduino.valueToCode(
    block,
    "basePin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_shoulderPin = Blockly.Arduino.valueToCode(
    block,
    "shoulderPin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_elbowPin = Blockly.Arduino.valueToCode(
    block,
    "elbowPin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_gripperPin = Blockly.Arduino.valueToCode(
    block,
    "gripperPin",
    Blockly.Arduino.ORDER_ATOMIC
  );

  Blockly.Arduino.definitions_.define_mearm = '#include "meArm.h"';
  Blockly.Arduino.definitions_.ini_mearm = "meArm arm;";
  Blockly.Arduino.setups_.define_mearm = "arm.begin(%1, %2, %3, %4);\n"
    .replace("%1", value_basePin)
    .replace("%2", value_shoulderPin)
    .replace("%3", value_elbowPin)
    .replace("%4", value_gripperPin);

  var code = "";
  return code;
};

Blockly.Arduino["ini_set_mearm"] = function (block) {
  //Blockly.Arduino.definitions_['name'] = '//definitions_';
  //Blockly.Arduino.setups_['name'] = '//setups_';
  //Blockly.Arduino.functions_['name'] = 'String blockly() {\n  return "Hello World";\n}';

  var value_basePin = Blockly.Arduino.valueToCode(
    block,
    "basePin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_shoulderPin = Blockly.Arduino.valueToCode(
    block,
    "shoulderPin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_elbowPin = Blockly.Arduino.valueToCode(
    block,
    "elbowPin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_gripperPin = Blockly.Arduino.valueToCode(
    block,
    "gripperPin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_xMin = Blockly.Arduino.valueToCode(
    block,
    "xMin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_xMax = Blockly.Arduino.valueToCode(
    block,
    "xMax",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_yMin = Blockly.Arduino.valueToCode(
    block,
    "yMin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_yMax = Blockly.Arduino.valueToCode(
    block,
    "yMax",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_zMin = Blockly.Arduino.valueToCode(
    block,
    "zMin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_zMax = Blockly.Arduino.valueToCode(
    block,
    "zMax",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_gMin = Blockly.Arduino.valueToCode(
    block,
    "gMin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_gMax = Blockly.Arduino.valueToCode(
    block,
    "gMax",
    Blockly.Arduino.ORDER_ATOMIC
  );

  Blockly.Arduino.definitions_.define_mearm = '#include "meArm.h"';
  Blockly.Arduino.definitions_.ini_mearm =
    "meArm arm(%1, %2, %3, %4, %5, %6, %7, %8);"
      .replace("%1", value_xMin)
      .replace("%2", value_xMax)
      .replace("%3", value_yMin)
      .replace("%4", value_yMax)
      .replace("%5", value_zMin)
      .replace("%6", value_zMax)
      .replace("%7", value_gMin)
      .replace("%8", value_gMax);
  Blockly.Arduino.setups_.define_mearm = "arm.begin(%1, %2, %3, %4);\n"
    .replace("%1", value_basePin)
    .replace("%2", value_shoulderPin)
    .replace("%3", value_elbowPin)
    .replace("%4", value_gripperPin);

  var code = "";
  return code;
};

Blockly.Arduino["get_mearm_angle"] = function (block) {
  //Blockly.Arduino.definitions_['name'] = '//definitions_';
  //Blockly.Arduino.setups_['name'] = '//setups_';
  //Blockly.Arduino.functions_['name'] = 'String blockly() {\n  return "Hello World";\n}';

  var a = this.getFieldValue("selectedServo");
  if (a === "angleX") {
    a = "arm.getX()";
  } else if (a === "angleY") {
    a = "arm.getY()";
  } else if (a === "angleZ") {
    a = "arm.getZ()";
  } else if (a === "angleG") {
    a = "arm.getG()";
  }

  var code = a;
  return code;
};

Blockly.Arduino["set_mearm_angle"] = function (block) {
  //Blockly.Arduino.definitions_['name'] = '//definitions_';
  //Blockly.Arduino.setups_['name'] = '//setups_';
  //Blockly.Arduino.functions_['name'] = 'String blockly() {\n  return "Hello World";\n}';

  var a = this.getFieldValue("selectedServo");
  if (a === "angleX") {
    a = "arm.setAngleX(%1);\n";
  } else if (a === "angleY") {
    a = "arm.setAngleY(%1);\n";
  } else if (a === "angleZ") {
    a = "arm.setAngleZ(%1);\n";
  } else if (a === "angleG") {
    a = "arm.setAngleG(%1);\n";
  }
  var value_servoAngle = Blockly.Arduino.valueToCode(
    block,
    "servoAngle",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var code = a.replace("%1", value_servoAngle);
  return code;
};

Blockly.Arduino["move_mearm"] = function (block) {
  //Blockly.Arduino.definitions_['name'] = '//definitions_';
  //Blockly.Arduino.setups_['name'] = '//setups_';
  //Blockly.Arduino.functions_['name'] = 'String blockly() {\n  return "Hello World";\n}';

  var value_angleX = Blockly.Arduino.valueToCode(
    block,
    "angleX",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_angleY = Blockly.Arduino.valueToCode(
    block,
    "angleY",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_angleZ = Blockly.Arduino.valueToCode(
    block,
    "angleZ",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var value_angleG = Blockly.Arduino.valueToCode(
    block,
    "angleG",
    Blockly.Arduino.ORDER_ATOMIC
  );

  var code = "arm.goDirectlyTo(%1, %2, %3, %4);\n"
    .replace("%1", value_angleX)
    .replace("%2", value_angleY)
    .replace("%3", value_angleZ)
    .replace("%4", value_angleG);
  return code;
};

// "inout_custom_digital_write"
// I/O
Blockly.Arduino["iopin_setting"] = function (block) {
  var a = Blockly.Arduino.valueToCode(
    block,
    "pin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var b = this.getFieldValue("mode");
  if (b === "PULLUP") {
    b = "INPUT_PULLUP";
  }
  var code = "pinMode(" + a + ", " + b + ");\n";
  return code;
};

Blockly.Arduino["iopin_pin_number_uno"] = function (block) {
  return this.getFieldValue("pin");
};

Blockly.Arduino["iopin_digital_pin_state"] = function () {
  return this.getFieldValue("state");
};

Blockly.Arduino["iopin_digital_write_with_output_mode"] = function () {
  var a =
    Blockly.Arduino.valueToCode(this, "pin", Blockly.Arduino.ORDER_ATOMIC) ||
    "13";
  var b = this.getFieldValue("state");
  Blockly.Arduino.setups_["setup_output_" + a] = "pinMode(" + a + ", OUTPUT);";
  return "digitalWrite(" + a + ", " + b + ");\n";
};

Blockly.Arduino["iopin_digital_write"] = function () {
  var a =
    Blockly.Arduino.valueToCode(this, "pin", Blockly.Arduino.ORDER_ATOMIC) ||
    "13";
  var b = this.getFieldValue("state");
  return "digitalWrite(" + a + ", " + b + ");\n";
};

Blockly.Arduino["iopin_digital_read_with_input_mode"] = function () {
  var a =
    Blockly.Arduino.valueToCode(this, "pin", Blockly.Arduino.ORDER_ATOMIC) ||
    "13";
  Blockly.Arduino.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
  return "digitalRead(" + a + ")";
};

Blockly.Arduino["iopin_digital_read"] = function () {
  var a =
    Blockly.Arduino.valueToCode(this, "pin", Blockly.Arduino.ORDER_ATOMIC) ||
    "13";
  return "digitalRead(" + a + ")";
};

Blockly.Arduino["iopin_digital_read_with_pullup_mode"] = function () {
  var a =
    Blockly.Arduino.valueToCode(this, "pin", Blockly.Arduino.ORDER_ATOMIC) ||
    "13";
  Blockly.Arduino.setups_["setup_pullup_" + a] =
    "pinMode(" + a + ", INPUT_PULLUP);";
  return "digitalRead(" + a + ")";
};

Blockly.Arduino["inout_digital_pulsein"] = function (block) {
  var a = Blockly.Arduino.valueToCode(
    block,
    "pin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var b = this.getFieldValue("signal");
  var code = "pulseIn(" + a + ", " + b + ")";
  return code;
};

Blockly.Arduino["iopin_digital_pin_number_uno"] = function (block) {
  return this.getFieldValue("pin");
};

// iopin_analog_value
Blockly.Arduino["iopin_analog_value"] = function (block) {
  var a = Blockly.Arduino.valueToCode(
    block,
    "value",
    Blockly.Arduino.ORDER_ATOMIC
  );
  if (parseInt(a, 10) < 0) {
    a = "0";
  } else if (parseInt(a, 10) > 255) {
    a = "255";
  }
  return a;
};

Blockly.Arduino["iopin_analog_write_with_output_mode"] = function () {
  var a = Blockly.Arduino.valueToCode(
    this,
    "pin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var b = Blockly.Arduino.valueToCode(
    this,
    "value",
    Blockly.Arduino.ORDER_ATOMIC
  );
  Blockly.Arduino.setups_["setup_analog_output_" + a] =
    "pinMode(" + a + ", OUTPUT);";
  return "analogWrite(" + a + ", " + b + ");\n";
};

Blockly.Arduino["iopin_analog_write"] = function () {
  var a = Blockly.Arduino.valueToCode(
    this,
    "pin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var b = Blockly.Arduino.valueToCode(
    this,
    "value",
    Blockly.Arduino.ORDER_ATOMIC
  );
  return "analogWrite(" + a + ", " + b + ");\n";
};

Blockly.Arduino["iopin_analog_read_with_input_mode"] = function () {
  var a = Blockly.Arduino.valueToCode(
    this,
    "pin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  Blockly.Arduino.setups_["setup_analog_input_" + a] =
    "pinMode(" + a + ", INPUT);";
  return "analogRead(" + a + ")";
};

Blockly.Arduino["iopin_analog_read"] = function () {
  var a = Blockly.Arduino.valueToCode(
    this,
    "pin",
    Blockly.Arduino.ORDER_ATOMIC
  );
  return "analogRead(" + a + ")";
};

Blockly.Arduino["iopin_analog_pin_number_uno"] = function () {
  return this.getFieldValue("pin");
};

Blockly.Arduino["text_special_character"] = function (block) {
  //Blockly.Arduino.definitions_['name'] = '//definitions_';
  //Blockly.Arduino.setups_['name'] = '//setups_';
  //Blockly.Arduino.functions_['name'] = 'String blockly() {\n  return "Hello World";\n}';
  var code = "";
  var a = this.getFieldValue("special_character");
  if (a == "char(194)") {
    code = a;
  } else {
    code = "'" + a + "'";
  }
  return code;
};

Blockly.Arduino["math_randomseed"] = function (block) {
  var SEED = Blockly.Arduino.valueToCode(
    block,
    "seed",
    Blockly.Arduino.ORDER_ATOMIC
  );
  var code = "randomSeed(" + SEED + ");\n";
  return code;
};

// Serial
Blockly.Arduino["serial_parse"] = function (block) {
  var code = "";
  var a = this.getFieldValue("type");
  if (a === "INT") {
    code = "Serial.parseInt()";
  } else if (a === "FLOAT") {
    code = "Serial.parseFloat()";
  }
  return code;
};
Blockly.Arduino["serial_end"] = function () {
  return "Serial.end();\n";
};

Blockly.Arduino["serial_peek"] = function () {
  return "Serial.peek();\n";
};

// Luo Wen Cheng: CHJHS Servo
Blockly.Arduino.chjhs_servo_init = function () {
  var a =
      Blockly.Arduino.valueToCode(this, "PIN", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    b = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    );
  if (Blockly.Arduino.my_board_type == "ATtiny85") {
    Blockly.Arduino.definitions_.define_servo =
      "#include <Adafruit_SoftServo.h>";
    Blockly.Arduino.definitions_["define_class_servo_" + b] =
      "Adafruit_SoftServo " + b + ";";
  } else {
    Blockly.Arduino.definitions_.define_servo = "#include <Servo.h>";
    Blockly.Arduino.definitions_["define_class_servo_" + b] =
      "Servo " + b + ";";
  }
  return b + ".attach(" + a + ");\n";
};

Blockly.Arduino.chjhs_servo_custom_init = function () {
  var a =
      Blockly.Arduino.valueToCode(this, "PIN", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    b = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    c =
      Blockly.Arduino.valueToCode(this, "MIN", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    d =
      Blockly.Arduino.valueToCode(this, "MAX", Blockly.Arduino.ORDER_ATOMIC) ||
      "0";
  if (Blockly.Arduino.my_board_type == "ATtiny85") {
    Blockly.Arduino.definitions_.define_servo =
      "#include <Adafruit_SoftServo.h>";
    Blockly.Arduino.definitions_["define_class_servo_" + b] =
      "Adafruit_SoftServo " + b + ";";
  } else {
    Blockly.Arduino.definitions_.define_servo = "#include <Servo.h>";
    Blockly.Arduino.definitions_["define_class_servo_" + b] =
      "Servo " + b + ";";
  }
  return b + ".attach(" + a + "," + c + "," + d + ");\n";
};

Blockly.Arduino.chjhs_servo_write_pin = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b =
      Blockly.Arduino.valueToCode(
        this,
        "ANGLE",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "90";
  return a + ".write(" + b + ");\n";
};

Blockly.Arduino.chjhs_servo_360 = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b = this.getFieldValue("DIR"),
    c =
      Blockly.Arduino.valueToCode(
        this,
        "SPEED",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "0";
  var speed = "90";
  if (b == "0") speed = "90-" + c;
  else if (b == "180") speed = "90+" + c;
  if (Blockly.Arduino.my_board_type == "ATtiny85")
    return a + ".write360(" + speed + ");\n";
  else return a + ".write(" + speed + ");\n";
};

Blockly.Arduino.chjhs_servo_detach = function () {
  var a = Blockly.Arduino.nameDB_.getName(
    this.getFieldValue("varName"),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  return a + ".detach();\n";
};

// Luo Wen Cheng: CHJHS LCD1602
Blockly.Arduino["chjhs_lcd1602_init"] = function () {
  var a = this.getFieldValue("ADDRESS"),
    b = this.getFieldValue("TYPE");
  Blockly.Arduino.definitions_.define_lcd1602_include =
    '#include "LiquidCrystal_I2C.h"';
  Blockly.Arduino.definitions_.define_lcd1602_invoke =
    "LiquidCrystal_I2C lcd(" + a + ");";
  Blockly.Arduino.setups_.ljj_lcd1602 = "lcd.begin(" + b + ");";
  return "";
};

Blockly.Arduino["chjhs_lcd1602_show"] = function () {
  var a =
      Blockly.Arduino.valueToCode(this, "X", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    b =
      Blockly.Arduino.valueToCode(this, "Y", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    c =
      Blockly.Arduino.valueToCode(this, "TEXT", Blockly.Arduino.ORDER_ATOMIC) ||
      "";
  return "lcd.setCursor(" + a + "," + b + ");\nlcd.print(String(" + c + "));\n";
};

Blockly.Arduino["chjhs_lcd1602_char"] = function () {
  var a =
      Blockly.Arduino.valueToCode(this, "X", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    b =
      Blockly.Arduino.valueToCode(this, "Y", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    c =
      Blockly.Arduino.valueToCode(
        this,
        "INDEX",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "";
  return "lcd.setCursor(" + a + "," + b + ");\nlcd.write(" + c + ");\n";
};

Blockly.Arduino["chjhs_lcd1602_backlight"] = function () {
  var a = this.getFieldValue("MODE");
  return "lcd.setBacklight(" + (a == "up" ? "HIGH" : "LOW") + ");\n";
};

Blockly.Arduino["chjhs_lcd1602_clear"] = function () {
  return "lcd.clear();\n";
};

Blockly.Arduino["chjhs_lcd1602_scroll"] = function () {
  var a = this.getFieldValue("MODE");
  return "lcd." + a + "();\n";
};

Blockly.Arduino["chjhs_lcd1602_bitmap"] = function () {
  var a = this.getFieldValue("INDEX"),
    swapStr = "B",
    allSwapStr = "{";
  for (tempY = 0; tempY < 8; tempY++) {
    for (tempX = 0; tempX < 5; tempX++) {
      if (this.getFieldValue("L" + tempY + tempX) == "TRUE") swapStr += "1";
      else swapStr += "0";
    }
    allSwapStr += swapStr;
    if (tempY < 7) allSwapStr += ",";
    swapStr = "B";
  }
  allSwapStr += "}";
  Blockly.Arduino.definitions_["define_lcd1602_bitmap_" + a] =
    "const byte lcdBitmap_" + a + "[8]=" + allSwapStr + ";";
  return "lcd.createChar(" + a + ",(uint8_t *)lcdBitmap_" + a + ");\n";
};

Blockly.Arduino["chjhs_lcd1602_bitmap_show"] = function () {
  var a =
      Blockly.Arduino.valueToCode(this, "X", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    b =
      Blockly.Arduino.valueToCode(this, "Y", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    c =
      Blockly.Arduino.valueToCode(
        this,
        "INDEX",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "0";
  return "lcd.setCursor(" + a + "," + b + ");\nlcd.write(byte(" + c + "));\n";
};

// add
Blockly.Arduino["chjhs_bmp280_read_value"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b = this.getFieldValue("TYPE"),
    c = "";
  switch (b) {
    case "C":
      c = a + ".readTemperature()";
      break;
    case "Pa":
      c = a + ".readPressure()";
      break;
    case "m":
      c = a + ".readAltitude(SEALEVELPRESSURE_HPA)";
  }
  return [c, Blockly.Arduino.ORDER_ATOMIC];
};

// Luo Wen Cheng: CHJHS SSD1306
Blockly.Arduino["chjhs_oled128x64_init"] = function (block) {
  Blockly.Arduino.definitions_["define_wire"] = "#include <Wire.h>";
  Blockly.Arduino.definitions_.include_adafruit_gfx_lib =
    "#include<Adafruit_GFX.h> ";
  Blockly.Arduino.definitions_.include_ssd1306_oled_lib =
    "#include<Adafruit_SSD1306.h>";
  var oled_type = this.getFieldValue("OLED_TYPE");
  var a = NaN;
  var b = NaN;
  if (oled_type === "SSD1306_Grove") {
    a = "SSD1306";
    b = "0xBC";
  } else if (oled_type === "SSD1306") {
    a = "SSD1306";
    b = "0x3C";
  }
  var _width =
    Blockly.Arduino.valueToCode(this, "WIDTH", Blockly.Arduino.ORDER_ATOMIC) ||
    "0";
  var _height =
    Blockly.Arduino.valueToCode(this, "HEIGHT", Blockly.Arduino.ORDER_ATOMIC) ||
    "0";

  Blockly.Arduino.definitions_.define_adafruit_oled_declare =
    "Adafruit_" +
    a +
    " " +
    "display(" +
    _width +
    ", " +
    _height +
    ", &Wire, -1);";
  return "display.begin(SSD1306_SWITCHCAPVCC, " + b + ")";
};

Blockly.Arduino["chjhs_oled128x64_set_cursor"] = function () {
  var a = Blockly.Arduino.valueToCode(this, "X", Blockly.Arduino.ORDER_ATOMIC), 
      b = Blockly.Arduino.valueToCode(this, "Y", Blockly.Arduino.ORDER_ATOMIC);
  return "display.setCursor( " + a + ", " + b + " );\n";
};

Blockly.Arduino["chjhs_oled128x64_draw_pixel"] = function () {
  var a = Blockly.Arduino.valueToCode(this, "X", Blockly.Arduino.ORDER_ATOMIC), 
      b = Blockly.Arduino.valueToCode(this, "Y", Blockly.Arduino.ORDER_ATOMIC);
  return "display.drawPixel( " + a + ", " + b + ", WHITE" + " );\n";
};

Blockly.Arduino["chjhs_oled128x64_draw_line"] = function () {
  var a = Blockly.Arduino.valueToCode(this, "SX", Blockly.Arduino.ORDER_ATOMIC), 
      b = Blockly.Arduino.valueToCode(this, "SY", Blockly.Arduino.ORDER_ATOMIC), 
      c = Blockly.Arduino.valueToCode(this, "EX", Blockly.Arduino.ORDER_ATOMIC), 
      d = Blockly.Arduino.valueToCode(this, "EY", Blockly.Arduino.ORDER_ATOMIC);
  return "display.drawLine( " + a + ", " + b + ", " + c + ", " + d +  ", WHITE" + " );\n";
};

Blockly.Arduino["chjhs_oled128x64_draw_rectangle"] = function (block) {
  var a = Blockly.Arduino.valueToCode(this, "LT_X", Blockly.Arduino.ORDER_ATOMIC), 
      b = Blockly.Arduino.valueToCode(this, "LT_Y", Blockly.Arduino.ORDER_ATOMIC), 
      c = Blockly.Arduino.valueToCode(this, "WIDTH", Blockly.Arduino.ORDER_ATOMIC), 
      d = Blockly.Arduino.valueToCode(this, "HEIGHT", Blockly.Arduino.ORDER_ATOMIC), 
      f = block.getFieldValue("MODE") === "TRUE",
      code = "";
  if(f){
    code = "display.fillRect( " + a + ", " + b + ", " + c + ", " + d + ", WHITE );\n"
  }else{
    code = "display.drawRect( " + a + ", " + b + ", " + c + ", " + d + ", WHITE );\n";
  }
  return code;
};

Blockly.Arduino["chjhs_oled128x64_draw_round_rectangle"] = function (block) {
  var a = Blockly.Arduino.valueToCode(this, "LT_X", Blockly.Arduino.ORDER_ATOMIC), 
      b = Blockly.Arduino.valueToCode(this, "LT_Y", Blockly.Arduino.ORDER_ATOMIC), 
      c = Blockly.Arduino.valueToCode(this, "WIDTH", Blockly.Arduino.ORDER_ATOMIC), 
      d = Blockly.Arduino.valueToCode(this, "HEIGHT", Blockly.Arduino.ORDER_ATOMIC), 
      f = Blockly.Arduino.valueToCode(this, "R", Blockly.Arduino.ORDER_ATOMIC), 
      g = block.getFieldValue("MODE") === "TRUE",
      code = "";
  if(g){
    code = "display.fillRoundRect( " + a + ", " + b + ", " + c + ", " + d + ", " + f + ", WHITE );\n"
  }else{
    code = "display.drawRoundRect( " + a + ", " + b + ", " + c + ", " + d + ", " + f + ", WHITE );\n";
  }
  return code;
};

Blockly.Arduino["chjhs_oled128x64_draw_circle"] = function (block) {
  var a = Blockly.Arduino.valueToCode(this, "X", Blockly.Arduino.ORDER_ATOMIC), 
      b = Blockly.Arduino.valueToCode(this, "Y", Blockly.Arduino.ORDER_ATOMIC), 
      c = Blockly.Arduino.valueToCode(this, "R", Blockly.Arduino.ORDER_ATOMIC), 
      d = block.getFieldValue("MODE") === "TRUE"
      code = "";
  if(d){
    code = "display.fillCircle( " + a + ", " + b + ", " + c + ", WHITE" + " );\n"
  }else{
    code = "display.drawCircle( " + a + ", " + b + ", " + c + ", WHITE" + " );\n";
  }
  return code;
};

Blockly.Arduino["chjhs_oled128x64_draw_triangle"] = function (block) {
  var a = Blockly.Arduino.valueToCode(this, "X1", Blockly.Arduino.ORDER_ATOMIC), 
      b = Blockly.Arduino.valueToCode(this, "Y1", Blockly.Arduino.ORDER_ATOMIC), 
      c = Blockly.Arduino.valueToCode(this, "X2", Blockly.Arduino.ORDER_ATOMIC), 
      d = Blockly.Arduino.valueToCode(this, "Y2", Blockly.Arduino.ORDER_ATOMIC), 
      f = Blockly.Arduino.valueToCode(this, "X3", Blockly.Arduino.ORDER_ATOMIC), 
      g = Blockly.Arduino.valueToCode(this, "Y3", Blockly.Arduino.ORDER_ATOMIC), 
      h = block.getFieldValue("MODE") === "TRUE"
      code = "";
  if(h){
    code = "display.fillTriangle( " + a + ", " + b + ", " + c + ", " + d + ", " + f + ", " + g + ", WHITE );\n";
  }else{
    code = "display.drawTriangle( " + a + ", " + b + ", " + c + ", " + d + ", " + f + ", " + g + ", WHITE );\n";
  }
  return code;
};


Blockly.Arduino["chjhs_oled128x64_rotation"] = function () {
  var a = this.getFieldValue("ROTATION");
  return "display.setRotation(" + a + ");\n";
};

Blockly.Arduino["chjhs_oled128x64_flip"] = function () {
  var a = this.getFieldValue("FLIP_MODE");
  return "display.invertDisplay(" + a + ");\n";
};

Blockly.Arduino["chjhs_oled128x64_show"] = function () {
  var a =
      Blockly.Arduino.valueToCode(this, "X", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    b =
      Blockly.Arduino.valueToCode(this, "Y", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    c =
      Blockly.Arduino.valueToCode(this, "TEXT", Blockly.Arduino.ORDER_ATOMIC) ||
      "";
  return "display.setCursor(" + a + "," + b + ");\ndisplay.print(" + c + ");\n";
};

Blockly.Arduino["chjhs_oled128x64_display"] = function () {
  return "display.display();\n";
};

Blockly.Arduino["chjhs_oled128x64_clear"] = function () {
  return "display.clearDisplay();\n";
};

Blockly.Arduino["chjhs_oled128x64_pixel_color"] = function () {
  var a = this.getFieldValue("COLOR_MODE");
  return "display.setTextColor( " + a + " );\n";
};

Blockly.Arduino["chjhs_oled128x64_font_size"] = function () {
  var a = this.getFieldValue("FONT_SIZE");
  return "display.setTextSize( " + a + " );\n";
};

Blockly.Arduino["chjhs_oled128x64_display_bitmap"] = function () {
  var a = Blockly.Arduino.valueToCode(this, "X", Blockly.Arduino.ORDER_ATOMIC), 
      b = Blockly.Arduino.valueToCode(this, "Y", Blockly.Arduino.ORDER_ATOMIC), 
      c = Blockly.Arduino.valueToCode(this, "BITMAP", Blockly.Arduino.ORDER_ATOMIC), 
      d = Blockly.Arduino.valueToCode(this, "WIDTH", Blockly.Arduino.ORDER_ATOMIC), 
      f = Blockly.Arduino.valueToCode(this, "HEIGHT", Blockly.Arduino.ORDER_ATOMIC);
  return "display.drawBitmap( " + a + ", " + b + ", " + c + ", " + d +  ", " + f + ", WHITE" + " );\n";
};


Blockly.Arduino["chjhs_oled128x64_bitmap"] = function () {
  var a = this.getFieldValue("BITMAP");
  var code = "";
  if (a == "CHJHS") {
    Blockly.Arduino.definitions_["chjhs_logo"] =
      "static const unsigned char PROGMEM chjhs_logo [] = { 	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xc7, 0xff, 0xff, 0xf3, 0xff, 0xff,  	0xff, 0xfe, 0x87, 0xff, 0xff, 0xf1, 0xbf, 0xff, 0xff, 0xfc, 0x0f, 0xff, 0xff, 0xf8, 0xbf, 0xff,  	0xff, 0xf2, 0x7f, 0xff, 0xff, 0xfe, 0x2f, 0xff, 0xff, 0xf8, 0x1f, 0xff, 0xff, 0xf8, 0x0f, 0xff,  	0xff, 0xe9, 0xbf, 0xff, 0xff, 0xff, 0x83, 0xff, 0xff, 0xe8, 0x7f, 0xf0, 0x1f, 0xfe, 0x17, 0xff,  	0xff, 0xa3, 0x7f, 0xcf, 0xe7, 0xff, 0x67, 0xff, 0xff, 0xd1, 0xff, 0xbf, 0xfb, 0xff, 0xcd, 0xff,  	0xff, 0x88, 0xff, 0x7f, 0xfb, 0xff, 0x91, 0xff, 0xff, 0xcf, 0xff, 0x7f, 0xfd, 0xff, 0xf1, 0xff,  	0xff, 0xc1, 0xfe, 0xff, 0xfc, 0x7f, 0x83, 0xff, 0xfc, 0xdf, 0xf9, 0xff, 0xff, 0x8f, 0xfb, 0x9f,  	0xfe, 0x5f, 0xe7, 0xcf, 0x00, 0xf7, 0xfe, 0x3f, 0xfe, 0x3f, 0xdf, 0x01, 0x00, 0xfb, 0xfc, 0x7f,  	0xff, 0x3f, 0x9f, 0xcf, 0xad, 0xfd, 0xfc, 0x7f, 0xff, 0x3f, 0xbf, 0x01, 0xad, 0xfd, 0xfc, 0xff,  	0xff, 0x3f, 0xbf, 0xcf, 0x00, 0xfd, 0xfc, 0xff, 0xff, 0xbf, 0xbf, 0x01, 0xe0, 0xfe, 0xfc, 0xff,  	0xff, 0x9f, 0xff, 0xff, 0xe6, 0xfe, 0xfd, 0xff, 0xff, 0x9f, 0xbf, 0x7d, 0x00, 0xfd, 0xfd, 0xff,  	0xff, 0x97, 0xbf, 0x7d, 0xe6, 0xfd, 0xe9, 0xff, 0xff, 0x8f, 0x9f, 0x39, 0x00, 0xfd, 0xf1, 0xff,  	0xf9, 0x8f, 0xdf, 0x7d, 0xe7, 0xfb, 0xf1, 0xcf, 0xfc, 0x8f, 0xef, 0xff, 0xff, 0xf7, 0xf1, 0x9f,  	0xfe, 0x0f, 0xf7, 0x77, 0x26, 0xf7, 0xf8, 0x3f, 0xfe, 0x0f, 0xf7, 0x67, 0x26, 0xf7, 0xf8, 0x7f,  	0xff, 0x1f, 0xff, 0x67, 0x36, 0xf7, 0xf8, 0xff, 0xff, 0x0f, 0xff, 0x67, 0xa6, 0xf7, 0xf8, 0xff,  	0xff, 0x8f, 0xf7, 0x70, 0x06, 0xf7, 0xf1, 0xff, 0xff, 0x8e, 0xf7, 0xe0, 0x07, 0xf7, 0x71, 0xff,  	0xff, 0xc6, 0xf7, 0xff, 0xff, 0xef, 0xa3, 0xff, 0xff, 0xe0, 0xfb, 0xff, 0xff, 0xcf, 0x83, 0xff,  	0xff, 0xf0, 0xfd, 0xff, 0xff, 0x9f, 0x87, 0xff, 0xff, 0xf0, 0xfe, 0x3c, 0x3f, 0x3f, 0x0f, 0xff,  	0xff, 0xe0, 0x7f, 0xc7, 0xc0, 0xff, 0x03, 0xff, 0xff, 0xc0, 0x7f, 0xff, 0xff, 0xfe, 0x03, 0xff,  	0xff, 0xc4, 0x1f, 0xff, 0xff, 0xfc, 0x01, 0xff, 0xff, 0xff, 0x0f, 0xff, 0xff, 0xf0, 0xfd, 0xff,  	0xff, 0xff, 0x83, 0xff, 0xff, 0xe1, 0xff, 0xff, 0xff, 0xff, 0xe1, 0xff, 0xff, 0x87, 0xff, 0xff,  	0xff, 0xff, 0xfc, 0x08, 0x10, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xff, 0x48, 0x0a, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xfe, 0x48, 0x1a, 0x7f, 0xff, 0xff, 0xff, 0xff, 0xf8, 0x2c, 0x16, 0x1f, 0xff, 0xff,  	0xff, 0xff, 0xf8, 0x7e, 0x7f, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xff, 0xff, 0x3f, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff };";
      code = "chjhs_logo";
    } else if (a == "GAMEOVER") {
    Blockly.Arduino.definitions_["gameover_logo"] =
      "const unsigned char PROGMEM game_over [] = {" +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xf8, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xc0, 0x03, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0x80, 0x01, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x0f, 0xf1, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0x38, 0x1c, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe, 0x78, 0x1e, 0x7f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfe, 0x79, 0x9e, 0x7f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xe1, 0x87, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfc, 0xe1, 0x87, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xc7, 0xe7, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfc, 0xcf, 0xf7, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xc3, 0xc7, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfc, 0xe1, 0x87, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xe1, 0x87, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfc, 0xf9, 0x9f, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xf9, 0x9f, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfc, 0xf9, 0x9f, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xf8, 0x1f, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfc, 0xf8, 0x1f, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xff, 0xff, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xf8, 0xff, 0xff, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xe0, 0x00, 0x00, 0x07, 0xff, 0xff, " +
      "0xff, 0xff, 0xe2, 0x00, 0x00, 0x47, 0xff, 0xff, 0xff, 0xff, 0xe7, 0xff, 0xff, 0xe7, 0xff, 0xff, " +
      "0xff, 0xff, 0xe7, 0xff, 0xff, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xc0, 0x00, 0x00, 0x03, 0xff, 0xff, " +
      "0xff, 0xff, 0x80, 0x00, 0x00, 0x01, 0xff, 0xff, 0xff, 0xff, 0x9f, 0xff, 0xff, 0xf1, 0xff, 0xff, " +
      "0xff, 0xff, 0x9f, 0xff, 0xff, 0xf9, 0xff, 0xff, 0xff, 0xff, 0x80, 0x00, 0x00, 0x01, 0xff, 0xff, " +
      "0xff, 0xff, 0x80, 0x00, 0x00, 0x03, 0xff, 0xff, 0xff, 0xff, 0xc0, 0x00, 0x00, 0x03, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xe0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0xe0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, " +
      "0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, " +
      "0xe7, 0xe0, 0x1c, 0x07, 0x80, 0x7c, 0x03, 0xe7, 0xe7, 0xc0, 0x18, 0x03, 0x00, 0x38, 0x03, 0xe7, " +
      "0xe7, 0xcf, 0xf9, 0xf3, 0x31, 0x19, 0xff, 0xe7, 0xe7, 0xcf, 0xf9, 0xf3, 0x33, 0x99, 0xff, 0xe7, " +
      "0xe7, 0xcf, 0xf9, 0xf3, 0x33, 0x99, 0xff, 0xe7, 0xe7, 0xcf, 0xf9, 0xf3, 0x33, 0x99, 0xf7, 0xe7, " +
      "0xe7, 0xcc, 0x18, 0x03, 0x33, 0x98, 0x03, 0xe7, 0xe7, 0xcc, 0x18, 0x03, 0x33, 0x98, 0x03, 0xe7, " +
      "0xe7, 0xcf, 0x99, 0xf3, 0x33, 0x99, 0xff, 0xe7, 0xe7, 0xcf, 0x99, 0xf3, 0x33, 0x99, 0xff, 0xe7, " +
      "0xe7, 0xcf, 0x99, 0xf3, 0x33, 0x99, 0xff, 0xe7, 0xe7, 0xc0, 0x19, 0xf3, 0x33, 0x98, 0x03, 0xe7, " +
      "0xe7, 0xe0, 0x39, 0xf3, 0x33, 0x9c, 0x03, 0xe7, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, " +
      "0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, " +
      "0xe7, 0xe0, 0x39, 0xf3, 0xc0, 0x3c, 0x07, 0xe7, 0xe7, 0xc0, 0x19, 0xf3, 0x80, 0x38, 0x07, 0xe7, " +
      "0xe7, 0xcf, 0x99, 0xe3, 0x9f, 0xf9, 0xf3, 0xe7, 0xe7, 0xcf, 0x9c, 0xe7, 0x9f, 0xf9, 0xf3, 0xe7, " +
      "0xe7, 0xcf, 0x9c, 0xe7, 0x9f, 0xf9, 0xf3, 0xe7, 0xe7, 0xcf, 0x9c, 0xe7, 0x80, 0x38, 0x07, 0xe7, " +
      "0xe7, 0xcf, 0x9e, 0x4f, 0x80, 0x38, 0x07, 0xe7, 0xe7, 0xcf, 0x9e, 0x4f, 0x9f, 0xf9, 0xc7, 0xe7, " +
      "0xe7, 0xcf, 0x9e, 0x0f, 0x9f, 0xf9, 0xe7, 0xe7, 0xe7, 0xcf, 0x9f, 0x1f, 0x9f, 0xf9, 0xe7, 0xe7, " +
      "0xe7, 0xc7, 0x9f, 0x1f, 0x9f, 0xf9, 0xf3, 0xe7, 0xe7, 0xe0, 0x3f, 0x1f, 0xc0, 0x39, 0xf3, 0xe7, " +
      "0xe7, 0xe0, 0x3f, 0xbf, 0xc0, 0x3b, 0xf3, 0xe7, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, " +
      "0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, 0xe0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, " +
      "0xe0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff" +
      "};";
      code = "game_over";
  }
  return code;
};

Blockly.Arduino['chjhs_oled128x64_return_parameter'] = function(block) {
  var dropdown_parameter = block.getFieldValue('PARAMETER');
  var code = "";
  if(dropdown_parameter === "CX"){
    code = "display.getCursorX()";
  }else if(dropdown_parameter === "CY"){
    code = "display.getCursorY()";
  }else if(dropdown_parameter === "W"){
    code = "display.width()";
  }else if(dropdown_parameter === "H"){
    code = "display.height()";
  }else if(dropdown_parameter === "R"){
    code = "display.getRotation()";
  }
  return [code, Blockly.Arduino.ORDER_NONE];
};



// Luo Wen Cheng: CHJHS WS2812
Blockly.Arduino["chjhs_ws2812_neopixel_begin"] = function () {
  var a =
      Blockly.Arduino.valueToCode(
        this,
        "BRIGHTNESS",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "0",
    b =
      Blockly.Arduino.valueToCode(this, "PIN", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    c =
      Blockly.Arduino.valueToCode(
        this,
        "TOTAL",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "0",
    d = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    );
  e = this.getFieldValue("PIXEL_FORMAT");
  Blockly.Arduino.basic_[d + "_ws2812_brightness"] = a;
  Blockly.Arduino.definitions_.define_include_neopixel =
    "#include <Adafruit_NeoPixel.h>";
  Blockly.Arduino.definitions_["define_ws2812_neopixel_" + d] =
    "Adafruit_NeoPixel " +
    d +
    " = Adafruit_NeoPixel(" +
    c +
    "," +
    b +
    ",NEO_" +
    e +
    " + NEO_KHZ800);\nuint32_t " +
    d +
    "_arr[" +
    c +
    "]={0};";
  //  Blockly.Arduino.definitions_['ws2812_'+d+'_event']='void '+d+'SetAllLedsColor(uint32_t myLedColor)\n{\n  for(int i=0;i<'+c+';i++)\n    '+d+'.setPixelColor(i,myLedColor);\n  '+d+'.show();\n}\n';
  Blockly.Arduino.definitions_["ws2812_" + d + "_event"] =
    "void " +
    d +
    "SetAllLedsColor(uint32_t myLedColor)\n{\n  for(int i=0;i<" +
    c +
    ";i++){\n    " +
    d +
    "_arr[i]=myLedColor;\n  }\n}\n\nvoid " +
    d +
    "ShowAllLedsColor()\n{\n  for(int i=0;i<" +
    c +
    ";i++){\n    " +
    d +
    ".setPixelColor(i," +
    d +
    "_arr[i]);\n  }\n  " +
    d +
    ".show();\n}\n\nvoid " +
    d +
    "FlowLedsColors(byte dir)\n{\n  uint32_t tempData=0;\n  if (dir==1){\n    tempData=" +
    d +
    "_arr[0];\n    for(int i=0;i<" +
    (parseInt(c) - 1) +
    ";i++){\n      " +
    d +
    "_arr[i]=" +
    d +
    "_arr[i+1];\n    }\n    " +
    d +
    "_arr[" +
    (parseInt(c) - 1) +
    "]=tempData;\n  } else if (dir==2){\n    tempData=" +
    d +
    "_arr[" +
    (parseInt(c) - 1) +
    "];\n    for(int i=" +
    (parseInt(c) - 1) +
    ";i>0;i--){\n      " +
    d +
    "_arr[i]=" +
    d +
    "_arr[i-1];\n    }\n    " +
    d +
    "_arr[0]=tempData;\n  }\n  " +
    d +
    "ShowAllLedsColor();\n}\n";
  Blockly.Arduino.setups_["setup_ws2812_neopixel_" + d] =
    "" +
    d +
    ".begin();\n  " +
    d +
    ".setBrightness(" +
    a +
    ");\n  " +
    d +
    ".show();\n  " +
    d +
    "ShowAllLedsColor();";
  return "";
};

Blockly.Arduino["chjhs_ws2812_neopixel_set_all_led_color"] = function () {
  var a =
      Blockly.Arduino.valueToCode(
        this,
        "COLOR",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "",
    b = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    );
  a = a.replace("rgb_color", b + ".Color");
  return b + "SetAllLedsColor(" + a + ");\n" + b + "ShowAllLedsColor();\n";
};

Blockly.Arduino["chjhs_ws2812_neopixel_set_color"] = function () {
  var a =
      Blockly.Arduino.valueToCode(
        this,
        "INDEX",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "0",
    b =
      Blockly.Arduino.valueToCode(
        this,
        "COLOR",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "",
    c = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    );
  b = b.replace("rgb_color", c + ".Color");
  return (
    c +
    "_arr[" +
    a +
    "]=" +
    b +
    ";\n" +
    c +
    ".setPixelColor(" +
    a +
    "," +
    b +
    ");\n"
  );
};

Blockly.Arduino["chjhs_ws2812_neopixel_brightness"] = function () {
  var a =
      Blockly.Arduino.valueToCode(
        this,
        "BRIGHTNESS",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "",
    b = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    );
  Blockly.Arduino.basic_[b + "_ws2812_brightness"] = a;
  return b + ".setBrightness(" + a + ");\n" + b + ".show();\n";
};

Blockly.Arduino["chjhs_ws2812_neopixel_show"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
    this.getFieldValue("varName"),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  return a + ".show();\n";
};

Blockly.Arduino["chjhs_ws2812_neopixel_trun_off"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
    this.getFieldValue("varName"),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  return a + ".clear();\n" + a + ".show();\n";
};

Blockly.Arduino["chjhs_ws2812_color_flow"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b = this.getFieldValue("DIRECTION");
  return a + "FlowLedsColors(" + b + ");\n";
};

Blockly.Arduino["chjhs_ws2812_color_next"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b = this.getFieldValue("DIRECTION"),
    c =
      Blockly.Arduino.valueToCode(
        this,
        "COLOR",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "",
    d =
      Blockly.Arduino.valueToCode(
        this,
        "INTERVAL",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "0";
  c = c.replace("rgb_color", a + ".Color");
  Blockly.Arduino.definitions_["ws2812_next_" + a + "_color_event"] =
    "void " +
    a +
    "ChangeNextColor(uint32_t myLedColor,byte dir,uint8_t interval)\n{\n  int myLength=(sizeof(" +
    a +
    "_arr)/sizeof(" +
    a +
    "_arr[0]));\n  if (dir==2){\n    for(int i=0;i<myLength;i++){\n      " +
    a +
    "_arr[i]=myLedColor;\n      " +
    a +
    ".setPixelColor(i,myLedColor);\n      " +
    a +
    ".show();\n      delay(interval);\n    }\n  } else if (dir==1){\n    for(int i=(myLength-1);i>-1;i--){\n      " +
    a +
    "_arr[i]=myLedColor;\n      " +
    a +
    ".setPixelColor(i,myLedColor);\n      " +
    a +
    ".show();\n      delay(interval);\n    }\n  }\n}\n";
  return a + "ChangeNextColor(" + c + "," + b + "," + d + ");\n";
};

Blockly.Arduino["chjhs_ws2812_color_blink"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b =
      Blockly.Arduino.valueToCode(
        this,
        "COLOR1",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "",
    c =
      Blockly.Arduino.valueToCode(
        this,
        "COLOR2",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "",
    d =
      Blockly.Arduino.valueToCode(
        this,
        "INTERVAL",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "0";
  b = b.replace("rgb_color", a + ".Color");
  c = c.replace("rgb_color", a + ".Color");
  Blockly.Arduino.definitions_["ws2812_" + a + "_2color_blink_event"] =
    "void " +
    a +
    "ColorsBlink(uint32_t myLedColor1,uint32_t myLedColor2,uint8_t interval)\n{\n  int myLength=(sizeof(" +
    a +
    "_arr)/sizeof(" +
    a +
    "_arr[0]));\n  for(int i=0;i<myLength;i++){\n    if ((i%2)==0)\n      " +
    a +
    "_arr[i]=myLedColor1;\n    else\n      " +
    a +
    "_arr[i]=myLedColor2;\n    " +
    a +
    ".setPixelColor(i," +
    a +
    "_arr[i]);\n  }\n  " +
    a +
    ".show();\n  delay(interval);\n}\n";
  return (
    a +
    "ColorsBlink(" +
    b +
    "," +
    c +
    "," +
    d +
    ");\n" +
    a +
    "ColorsBlink(" +
    c +
    "," +
    b +
    "," +
    d +
    ");\n"
  );
};

Blockly.Arduino["chjhs_ws2812_color_breathe"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b =
      Blockly.Arduino.valueToCode(
        this,
        "COLOR",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "",
    c =
      Blockly.Arduino.valueToCode(
        this,
        "INTERVAL",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "0";
  b = b.replace("rgb_color", a + ".Color");
  Blockly.Arduino.definitions_["ws2812_" + a + "_breathe_event"] =
    "void " +
    a +
    "Breathe(uint32_t myLedColor,uint8_t interval)\n{\n  " +
    a +
    ".clear();\n  " +
    a +
    ".show();\n  " +
    a +
    ".setBrightness(0);\n  " +
    a +
    "SetAllLedsColor(myLedColor);\n  " +
    a +
    "ShowAllLedsColor();\n  for(int i=0;i<255;i++){\n    " +
    a +
    ".setBrightness(i);\n    " +
    a +
    ".show();\n    if (i==1)\n      " +
    a +
    "ShowAllLedsColor();\n    delay(interval);\n  }\n  for(int i=255;i>-1;i--){\n    " +
    a +
    ".setBrightness(i);\n    " +
    a +
    ".show();\n    delay(interval);\n  }\n}\n";
  return (
    a +
    "Breathe(" +
    b +
    "," +
    c +
    ");\n" +
    a +
    ".setBrightness(" +
    Blockly.Arduino.basic_[a + "_ws2812_brightness"] +
    ");\n"
  );
};

// Luo Wen Cheng: CHJHS Ultrasonic HC-SR04
Blockly.Arduino["chjhs_ultrasonic_init"] = function () {
  var a =
      Blockly.Arduino.valueToCode(
        this,
        "TRIG_PIN",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "0",
    b =
      Blockly.Arduino.valueToCode(
        this,
        "ECHO_PIN",
        Blockly.Arduino.ORDER_ATOMIC
      ) || "0",
    c = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    );
  Blockly.Arduino.definitions_.define_ultrasonic_include =
    "#include <Ultrasonic.h>";
  Blockly.Arduino.definitions_["define_ultrasonic_" + c + "_invoke"] =
    "Ultrasonic " + c + "(" + a + ", " + b + ");";
  return "";
};

Blockly.Arduino["chjhs_ultrasonic_get_distance"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
    this.getFieldValue("varName"),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  return [
    a + ".convert(" + a + ".timing(), Ultrasonic::CM)",
    Blockly.Arduino.ORDER_ATOMIC,
  ];
};

// Luo Wen Cheng: CHJHS DHT
Blockly.Arduino["chjhs_dht_init"] = function () {
  var a = this.getFieldValue("DHT_TYPE"),
    b =
      Blockly.Arduino.valueToCode(this, "PIN", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    c = this.getFieldValue("TYPE"),
    d = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    );
  if (
    Blockly.Arduino.my_board_type == "Arduino" ||
    Blockly.Arduino.my_board_type == "Pico"
  ) {
    Blockly.Arduino.definitions_.define_dht_include = '#include "DHT.h"';
  } else {
    Blockly.Arduino.definitions_.define_dht_include = '#include "DHT.h"';
  }
  Blockly.Arduino.definitions_["define_dht_pin" + b] =
    "#define DHTPIN" + b + " " + b;
  Blockly.Arduino.definitions_["define_dht_class" + b] =
    "DHT " + d + "(DHTPIN" + b + ", " + a + ");";
  Blockly.Arduino.setups_["setup_" + a + "_" + b] = d + ".begin();";
  return "";
};

Blockly.Arduino["chjhs_dht_read"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b =
      Blockly.Arduino.valueToCode(this, "PIN", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    c = this.getFieldValue("TYPE");
  var d = "";
  switch (c) {
    case "H":
      d = a + ".readHumidity()";
      break;
    case "C":
      d = a + ".readTemperature()";
      break;
    case "F":
      d = a + ".readTemperature(true)";
  }
  return [d, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["chjhs_dht_compute_heat_index"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b =
      Blockly.Arduino.valueToCode(this, "C", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    c =
      Blockly.Arduino.valueToCode(this, "H", Blockly.Arduino.ORDER_ATOMIC) ||
      "0";
  var d = "";
  d = a + ".computeHeatIndex(" + b + ", " + c + ", false)";
  return [d, Blockly.Arduino.ORDER_ATOMIC];
};

// Luo Wen Cheng: CHJHS BMP280
Blockly.Arduino["chjhs_bmp280_init"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b = this.getFieldValue("ADDRESS"),
    c = "";
  Blockly.Arduino.definitions_["define_wire"] = "#include <Wire.h>";
  Blockly.Arduino.definitions_["define_spi"] = "#include <SPI.h>";
  Blockly.Arduino.definitions_["define_bmp280"] =
    "#include <Adafruit_BMP280.h>\n#define SEALEVELPRESSURE_HPA (1013.25)\nAdafruit_BMP280 " +
    a +
    ";";

  return a + ".begin(" + b + ", BMP280_CHIPID)";
};

Blockly.Arduino["chjhs_bmp280_read_value"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b = this.getFieldValue("TYPE"),
    c = "";
  switch (b) {
    case "C":
      c = a + ".readTemperature()";
      break;
    case "Pa":
      c = a + ".readPressure()";
      break;
    case "m":
      c = a + ".readAltitude(SEALEVELPRESSURE_HPA)";
  }
  return [c, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["chjhs_bmp280_compute_water_boiling_point"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b =
      Blockly.Arduino.valueToCode(this, "hPa", Blockly.Arduino.ORDER_ATOMIC) ||
      "0",
    c = "";
  c = a + ".waterBoilingPoint(" + b + ")";
  return [c, Blockly.Arduino.ORDER_ATOMIC];
};

// Luo Wen Cheng: CHJHS LIS3DHTR, ADXL345
Blockly.Arduino["chjhs_lis3dhtr_init"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b = this.getFieldValue("ADDRESS");
  Blockly.Arduino.definitions_["define_wire"] = "#include <Wire.h>";
  Blockly.Arduino.definitions_["define_lis3dhtr"] =
    '#include "LIS3DHTR.h"\n#define WIRE Wire\nLIS3DHTR<TwoWire> ' + a + ";";
  Blockly.Arduino.setups_["setup_" + a + "_" + b] =
    a + ".begin(WIRE, " + b + ");";
  Blockly.Arduino.setups_["setup_" + a + "_" + b + "_set_datarate"] =
    a + ".setOutputDataRate(LIS3DHTR_DATARATE_50HZ);";
  Blockly.Arduino.setups_["setup_" + a + "_" + b + "_set_solution"] =
    a + ".setHighSolution(true);";
  return "";
};

Blockly.Arduino["chjhs_lis3dhtr_get_data"] = function () {
  var a = Blockly.Arduino.nameDB_.getName(
      this.getFieldValue("varName"),
      Blockly.VARIABLE_CATEGORY_NAME
    ),
    b = this.getFieldValue("TYPE"),
    c = "";
  switch (b) {
    case "X":
      c = a + ".getAccelerationX()";
      break;
    case "Y":
      c = a + ".getAccelerationY()";
      break;
    case "Z":
      c = a + ".getAccelerationZ()";
  }
  return [c, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["chjhs_adxl345_init"] = function () {
  var a = this.getFieldValue("ADDRESS");
  Blockly.Arduino.definitions_["define_wire"] = "#include <Wire.h>";
  Blockly.Arduino.definitions_["define_adxl345" + a] =
    "int ADXL345_ADDRESS = " + a + ";";
  Blockly.Arduino.definitions_["define_adxl345" + a + "_variables"] =
    "int _X0, _X1, _Y0, _Y1, _Z1, _Z0;";
  Blockly.Arduino.definitions_["define_adxl345_setReg"] =
    "void setReg(int reg, int data){\n  Wire.beginTransmission(ADXL345_ADDRESS);\n  Wire.write(reg);\n  Wire.write(data);\n  Wire.endTransmission();\n}";
  Blockly.Arduino.definitions_["define_adxl345_getData"] =
    "int getData(int reg){\n  Wire.beginTransmission(ADXL345_ADDRESS);\n  Wire.write(reg);\n  Wire.endTransmission();\n  Wire.requestFrom(ADXL345_ADDRESS,1);\n  if(Wire.available()<=1){\n    return Wire.read();\n  }\n}";
  Blockly.Arduino.setups_["setup_wire_begin"] = "Wire.begin();";
  Blockly.Arduino.setups_["setup_adxl345_setReg_measurement"] =
    "setReg(0x2D, 0x8);   // Measurement mode";
  Blockly.Arduino.setups_["setup_adxl345_setReg_sampling"] =
    "setReg(0x2C, 0x0A);  // Sampling rate 100Hz";
  Blockly.Arduino.setups_["setup_adxl345_setReg_rate"] =
    "setReg(0x31, 0x8);   // Data Format Control";
  Blockly.Arduino.setups_["setup_adxl345_setReg_offset_x"] =
    "setReg(0x1E, 0x0);   // Offsets x-axis accel values";
  Blockly.Arduino.setups_["setup_adxl345_setReg_offset_y"] =
    "setReg(0x1F, 0x0);   // Offsets y-axis accel values";
  Blockly.Arduino.setups_["setup_adxl345_setReg_offset_z"] =
    "setReg(0x20, 0x0);   // Offsets z-axis accel values";
  Blockly.Arduino.setups_["setup_adxl345_delay"] = "delay(500);";
  return "";
};

Blockly.Arduino["chjhs_adxl345_get_data"] = function () {
  var a = this.getFieldValue("TYPE"),
    b = "";
  switch (a) {
    case "X":
      Blockly.Arduino.definitions_["define_adxl345_getX"] =
        "float getAccelerationX(){\n  int _X0 = getData(0x32);\n  int _X1 = getData(0x33);\n  return ((_X1 << 8)  + _X0) / 256.0;\n}";
      b = "getAccelerationX()";
      break;
    case "Y":
      Blockly.Arduino.definitions_["define_adxl345_getY"] =
        "float getAccelerationY(){\n  int _Y0 = getData(0x34);\n  int _Y1 = getData(0x35);\n  return ((_Y1 << 8)  + _Y0) / 256.0;\n}";
      b = "getAccelerationY()";
      break;
    case "Z":
      Blockly.Arduino.definitions_["define_adxl345_getZ"] =
        "float getAccelerationZ(){\n  int _Z0 = getData(0x36);\n  int _Z1 = getData(0x37);\n  return ((_Z1 << 8)  + _Z0) / 256.0;\n}";
      b = "getAccelerationZ()";
  }
  return [b, Blockly.Arduino.ORDER_ATOMIC];
};


// Luo Wen Cheng: CHJHS Tetris
Blockly.Arduino["chjhs_tetris_create_all_blocks"] = function () {
  Blockly.Arduino.definitions_["define_tetris_all_blocks"] = 
  "const char pieces_S[2][2][4] = {{{1, 2, 0, 1}, {0, 0, 1, 1}},{{0, 0, 1, 1}, {0, 1, 1, 2}}};\n" + 
  "const char pieces_T[4][2][4] = {{{0, 1, 2, 1},{0, 0, 0, 1}},{{1, 0, 1, 1},{0, 1, 1, 2}},{{1, 0, 1, 2},{0, 1, 1, 1}},{{0, 0, 1, 0},{0, 1, 1, 2}}};\n" +                             
  "const char pieces_L[4][2][4] = {{{0, 0, 0, 1}, {0, 1, 2, 2}},{{0, 1, 2, 0}, {0, 0, 0, 1}},{{0, 1, 1, 1}, {0, 0, 1, 2}},{{2, 0, 1, 2}, {0, 1, 1, 1}}};\n" + 
  "const char pieces_O[1][2][4] = {{{0, 1, 0, 1}, {0, 0, 1, 1}}};\n" +
  "const char pieces_J[4][2][4] = {{{1, 1, 0, 1}, {0, 1, 2, 2}},{{0, 0, 1, 2}, {0, 1, 1, 1}},{{0, 1, 0, 0}, {0, 0, 1, 2}},{{0, 1, 2, 2}, {0, 0, 0, 1}}};\n" + 
  "const char pieces_I[2][2][4] = {{{0, 1, 2, 3}, {0, 0, 0, 0}},{{0, 0, 0, 0}, {0, 1, 2, 3}}};\n" + 
  "const char pieces_Z[2][2][4] = {{{0, 1, 1, 2}, {0, 0, 1, 1}},{{1, 0, 1, 0}, {0, 1, 1, 2}}};";
  Blockly.Arduino.definitions_["define_tetris_copyPiece"] = 
  "void copyPiece(short piece[2][4], short type, short rotation){\n" + 
  "  switch(type){\n" + 
  "    case 0: //S \n" + 
  "      for(short i = 0; i < 4; i++){\n" + 
  "        piece[0][i] = pieces_S[rotation][0][i];\n" + 
  "        piece[1][i] = pieces_S[rotation][1][i];\n" +  
  "      }// for\n" + 
  "      break;\n" + 
  "    case 1: //T\n" + 
  "      for(short i = 0; i < 4; i++){\n" + 
  "        piece[0][i] = pieces_T[rotation][0][i];\n" + 
  "        piece[1][i] = pieces_T[rotation][1][i];\n" + 
  "      }// for\n" + 
  "      break;\n" + 
  "    case 2: //L\n" + 
  "      for(short i = 0; i < 4; i++){\n" + 
  "        piece[0][i] = pieces_L[rotation][0][i];\n" + 
  "        piece[1][i] = pieces_L[rotation][1][i];\n" + 
  "      }// for\n" + 
  "      break;\n" + 
  "    case 3: //O\n" + 
  "      for(short i = 0; i < 4; i++){\n" + 
  "        piece[0][i] = pieces_O[0][0][i];\n" + 
  "        piece[1][i] = pieces_O[0][1][i];\n" + 
  "      }// for\n" + 
  "      break;\n" + 
  "    case 4: //J\n" + 
  "      for(short i = 0; i < 4; i++){\n" + 
  "        piece[0][i] = pieces_J[rotation][0][i];\n" + 
  "        piece[1][i] = pieces_J[rotation][1][i];\n" + 
  "      }// for\n" + 
  "      break;\n" + 
  "    case 5: //I\n" + 
  "      for(short i = 0; i < 4; i++){\n" + 
  "        piece[0][i] = pieces_I[rotation][0][i];\n" + 
  "        piece[1][i] = pieces_I[rotation][1][i];\n" + 
  "      }// for\n" + 
  "      break;\n" + 
  "    case 6: //Z\n" + 
  "      for(short i = 0; i < 4; i++){\n" + 
  "        piece[0][i] = pieces_Z[rotation][0][i];\n" + 
  "        piece[1][i] = pieces_Z[rotation][1][i];\n" + 
  "      }// for\n" + 
  "      break;\n" + 
  "  }// switch\n" + 
  "}";
  return "";
};

Blockly.Arduino["chjhs_tetris_create_hardware_variable"] = function () {
  var a = Blockly.Arduino.valueToCode(this, "UP", Blockly.Arduino.ORDER_ATOMIC) || "0",
      b = Blockly.Arduino.valueToCode(this, "DOWN", Blockly.Arduino.ORDER_ATOMIC) || "0",
      c = Blockly.Arduino.valueToCode(this, "LEFT", Blockly.Arduino.ORDER_ATOMIC) || "0",
      d = Blockly.Arduino.valueToCode(this, "RIGHT", Blockly.Arduino.ORDER_ATOMIC) || "0",
      f = Blockly.Arduino.valueToCode(this, "SOUND", Blockly.Arduino.ORDER_ATOMIC) || "0",
      g = Blockly.Arduino.valueToCode(this, "WIDTH", Blockly.Arduino.ORDER_ATOMIC) || "0", 
      h = Blockly.Arduino.valueToCode(this, "HEIGHT", Blockly.Arduino.ORDER_ATOMIC) || "0";
  Blockly.Arduino.definitions_["define_tetris_hardware_variable"] = 
  "#define WIDTH " + g + "\n" + 
  "#define HEIGHT " + h + "\n" + 
  "#define LEFT_BTN_PIN " + c + "\n" + 
  "#define RIGHT_BTN_PIN " + d + "\n" +                             
  "#define UP_BTN_PIN " + a + "\n" + 
  "#define DOWN_BTN_PIN " + b + "\n" + 
  "#define SPEAKER_PIN " + f + "\n" + 
  "bool is_left_button_up, is_right_button_up, is_up_button_up;\n" + 
  "unsigned long timer, delayer;";
  return "";
};


Blockly.Arduino["chjhs_tetris_get_block"] = function () {
  var a = this.getFieldValue("TYPE"),
      b = Blockly.Arduino.valueToCode(this, "ROTATION", Blockly.Arduino.ORDER_ATOMIC) || "0",
      c = Blockly.Arduino.valueToCode(this, "X", Blockly.Arduino.ORDER_ATOMIC) || "0",
      d = Blockly.Arduino.valueToCode(this, "Y", Blockly.Arduino.ORDER_ATOMIC) || "0",
      code = "";
  if(a === "S"){
    code = "pieces_S[" + b + "][" + c + "][" + d + "]";
  }else if(a === "T"){
    code = "pieces_T[" + b + "][" + c + "][" + d + "]";
  }else if(a === "L"){
    code = "pieces_L[" + b + "][" + c + "][" + d + "]";
  }else if(a === "O"){
    code = "pieces_O[" + b + "][" + c + "][" + d + "]";
  }else if(a === "J"){
    code = "pieces_J[" + b + "][" + c + "][" + d + "]";
  }else if(a === "I"){
    code = "pieces_I[" + b + "][" + c + "][" + d + "]";
  }else if(a === "Z"){
    code = "pieces_Z[" + b + "][" + c + "][" + d + "]";
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["chjhs_tetris_get_hardware_variable"] = function () {
  return this.getFieldValue("VAR");
};

Blockly.Arduino["chjhs_tetris_set_hardware_variable"] = function (block) {
  var dropdown_var = block.getFieldValue('VAR');
  var value_value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || "null";
  var code = dropdown_var + " = " + value_value + ";\n";
  return code;
};

Blockly.Arduino["chjhs_tetris_create_game_variables"] = function () {
  var a = Blockly.Arduino.valueToCode(this, "BLOCK_D", Blockly.Arduino.ORDER_ATOMIC) || "0",
      b = Blockly.Arduino.valueToCode(this, "BLOCK_E", Blockly.Arduino.ORDER_ATOMIC) || "0",
      c = Blockly.Arduino.valueToCode(this, "SCENE_X", Blockly.Arduino.ORDER_ATOMIC) || "0",
      d = Blockly.Arduino.valueToCode(this, "SCENE_Y", Blockly.Arduino.ORDER_ATOMIC) || "0";
  Blockly.Arduino.definitions_["chjhs_program_restart"] ="void(* resetFunc) (void) = 0;";
  Blockly.Arduino.definitions_["chjhs_logo"] =
  "static const unsigned char PROGMEM chjhs_logo [] = { 	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xc7, 0xff, 0xff, 0xf3, 0xff, 0xff,  	0xff, 0xfe, 0x87, 0xff, 0xff, 0xf1, 0xbf, 0xff, 0xff, 0xfc, 0x0f, 0xff, 0xff, 0xf8, 0xbf, 0xff,  	0xff, 0xf2, 0x7f, 0xff, 0xff, 0xfe, 0x2f, 0xff, 0xff, 0xf8, 0x1f, 0xff, 0xff, 0xf8, 0x0f, 0xff,  	0xff, 0xe9, 0xbf, 0xff, 0xff, 0xff, 0x83, 0xff, 0xff, 0xe8, 0x7f, 0xf0, 0x1f, 0xfe, 0x17, 0xff,  	0xff, 0xa3, 0x7f, 0xcf, 0xe7, 0xff, 0x67, 0xff, 0xff, 0xd1, 0xff, 0xbf, 0xfb, 0xff, 0xcd, 0xff,  	0xff, 0x88, 0xff, 0x7f, 0xfb, 0xff, 0x91, 0xff, 0xff, 0xcf, 0xff, 0x7f, 0xfd, 0xff, 0xf1, 0xff,  	0xff, 0xc1, 0xfe, 0xff, 0xfc, 0x7f, 0x83, 0xff, 0xfc, 0xdf, 0xf9, 0xff, 0xff, 0x8f, 0xfb, 0x9f,  	0xfe, 0x5f, 0xe7, 0xcf, 0x00, 0xf7, 0xfe, 0x3f, 0xfe, 0x3f, 0xdf, 0x01, 0x00, 0xfb, 0xfc, 0x7f,  	0xff, 0x3f, 0x9f, 0xcf, 0xad, 0xfd, 0xfc, 0x7f, 0xff, 0x3f, 0xbf, 0x01, 0xad, 0xfd, 0xfc, 0xff,  	0xff, 0x3f, 0xbf, 0xcf, 0x00, 0xfd, 0xfc, 0xff, 0xff, 0xbf, 0xbf, 0x01, 0xe0, 0xfe, 0xfc, 0xff,  	0xff, 0x9f, 0xff, 0xff, 0xe6, 0xfe, 0xfd, 0xff, 0xff, 0x9f, 0xbf, 0x7d, 0x00, 0xfd, 0xfd, 0xff,  	0xff, 0x97, 0xbf, 0x7d, 0xe6, 0xfd, 0xe9, 0xff, 0xff, 0x8f, 0x9f, 0x39, 0x00, 0xfd, 0xf1, 0xff,  	0xf9, 0x8f, 0xdf, 0x7d, 0xe7, 0xfb, 0xf1, 0xcf, 0xfc, 0x8f, 0xef, 0xff, 0xff, 0xf7, 0xf1, 0x9f,  	0xfe, 0x0f, 0xf7, 0x77, 0x26, 0xf7, 0xf8, 0x3f, 0xfe, 0x0f, 0xf7, 0x67, 0x26, 0xf7, 0xf8, 0x7f,  	0xff, 0x1f, 0xff, 0x67, 0x36, 0xf7, 0xf8, 0xff, 0xff, 0x0f, 0xff, 0x67, 0xa6, 0xf7, 0xf8, 0xff,  	0xff, 0x8f, 0xf7, 0x70, 0x06, 0xf7, 0xf1, 0xff, 0xff, 0x8e, 0xf7, 0xe0, 0x07, 0xf7, 0x71, 0xff,  	0xff, 0xc6, 0xf7, 0xff, 0xff, 0xef, 0xa3, 0xff, 0xff, 0xe0, 0xfb, 0xff, 0xff, 0xcf, 0x83, 0xff,  	0xff, 0xf0, 0xfd, 0xff, 0xff, 0x9f, 0x87, 0xff, 0xff, 0xf0, 0xfe, 0x3c, 0x3f, 0x3f, 0x0f, 0xff,  	0xff, 0xe0, 0x7f, 0xc7, 0xc0, 0xff, 0x03, 0xff, 0xff, 0xc0, 0x7f, 0xff, 0xff, 0xfe, 0x03, 0xff,  	0xff, 0xc4, 0x1f, 0xff, 0xff, 0xfc, 0x01, 0xff, 0xff, 0xff, 0x0f, 0xff, 0xff, 0xf0, 0xfd, 0xff,  	0xff, 0xff, 0x83, 0xff, 0xff, 0xe1, 0xff, 0xff, 0xff, 0xff, 0xe1, 0xff, 0xff, 0x87, 0xff, 0xff,  	0xff, 0xff, 0xfc, 0x08, 0x10, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xff, 0x48, 0x0a, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xfe, 0x48, 0x1a, 0x7f, 0xff, 0xff, 0xff, 0xff, 0xf8, 0x2c, 0x16, 0x1f, 0xff, 0xff,  	0xff, 0xff, 0xf8, 0x7e, 0x7f, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xff, 0xff, 0x3f, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  	0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff };";
  Blockly.Arduino.definitions_["gameover_logo"] =
      "const unsigned char PROGMEM game_over [] = {" +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xf8, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xc0, 0x03, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0x80, 0x01, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x0f, 0xf1, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0x38, 0x1c, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe, 0x78, 0x1e, 0x7f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfe, 0x79, 0x9e, 0x7f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xe1, 0x87, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfc, 0xe1, 0x87, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xc7, 0xe7, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfc, 0xcf, 0xf7, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xc3, 0xc7, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfc, 0xe1, 0x87, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xe1, 0x87, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfc, 0xf9, 0x9f, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xf9, 0x9f, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfc, 0xf9, 0x9f, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xf8, 0x1f, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xfc, 0xf8, 0x1f, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xfc, 0xff, 0xff, 0x3f, 0xff, 0xff, " +
      "0xff, 0xff, 0xf8, 0xff, 0xff, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xe0, 0x00, 0x00, 0x07, 0xff, 0xff, " +
      "0xff, 0xff, 0xe2, 0x00, 0x00, 0x47, 0xff, 0xff, 0xff, 0xff, 0xe7, 0xff, 0xff, 0xe7, 0xff, 0xff, " +
      "0xff, 0xff, 0xe7, 0xff, 0xff, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xc0, 0x00, 0x00, 0x03, 0xff, 0xff, " +
      "0xff, 0xff, 0x80, 0x00, 0x00, 0x01, 0xff, 0xff, 0xff, 0xff, 0x9f, 0xff, 0xff, 0xf1, 0xff, 0xff, " +
      "0xff, 0xff, 0x9f, 0xff, 0xff, 0xf9, 0xff, 0xff, 0xff, 0xff, 0x80, 0x00, 0x00, 0x01, 0xff, 0xff, " +
      "0xff, 0xff, 0x80, 0x00, 0x00, 0x03, 0xff, 0xff, 0xff, 0xff, 0xc0, 0x00, 0x00, 0x03, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xe0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0xe0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, " +
      "0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, " +
      "0xe7, 0xe0, 0x1c, 0x07, 0x80, 0x7c, 0x03, 0xe7, 0xe7, 0xc0, 0x18, 0x03, 0x00, 0x38, 0x03, 0xe7, " +
      "0xe7, 0xcf, 0xf9, 0xf3, 0x31, 0x19, 0xff, 0xe7, 0xe7, 0xcf, 0xf9, 0xf3, 0x33, 0x99, 0xff, 0xe7, " +
      "0xe7, 0xcf, 0xf9, 0xf3, 0x33, 0x99, 0xff, 0xe7, 0xe7, 0xcf, 0xf9, 0xf3, 0x33, 0x99, 0xf7, 0xe7, " +
      "0xe7, 0xcc, 0x18, 0x03, 0x33, 0x98, 0x03, 0xe7, 0xe7, 0xcc, 0x18, 0x03, 0x33, 0x98, 0x03, 0xe7, " +
      "0xe7, 0xcf, 0x99, 0xf3, 0x33, 0x99, 0xff, 0xe7, 0xe7, 0xcf, 0x99, 0xf3, 0x33, 0x99, 0xff, 0xe7, " +
      "0xe7, 0xcf, 0x99, 0xf3, 0x33, 0x99, 0xff, 0xe7, 0xe7, 0xc0, 0x19, 0xf3, 0x33, 0x98, 0x03, 0xe7, " +
      "0xe7, 0xe0, 0x39, 0xf3, 0x33, 0x9c, 0x03, 0xe7, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, " +
      "0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, " +
      "0xe7, 0xe0, 0x39, 0xf3, 0xc0, 0x3c, 0x07, 0xe7, 0xe7, 0xc0, 0x19, 0xf3, 0x80, 0x38, 0x07, 0xe7, " +
      "0xe7, 0xcf, 0x99, 0xe3, 0x9f, 0xf9, 0xf3, 0xe7, 0xe7, 0xcf, 0x9c, 0xe7, 0x9f, 0xf9, 0xf3, 0xe7, " +
      "0xe7, 0xcf, 0x9c, 0xe7, 0x9f, 0xf9, 0xf3, 0xe7, 0xe7, 0xcf, 0x9c, 0xe7, 0x80, 0x38, 0x07, 0xe7, " +
      "0xe7, 0xcf, 0x9e, 0x4f, 0x80, 0x38, 0x07, 0xe7, 0xe7, 0xcf, 0x9e, 0x4f, 0x9f, 0xf9, 0xc7, 0xe7, " +
      "0xe7, 0xcf, 0x9e, 0x0f, 0x9f, 0xf9, 0xe7, 0xe7, 0xe7, 0xcf, 0x9f, 0x1f, 0x9f, 0xf9, 0xe7, 0xe7, " +
      "0xe7, 0xc7, 0x9f, 0x1f, 0x9f, 0xf9, 0xf3, 0xe7, 0xe7, 0xe0, 0x3f, 0x1f, 0xc0, 0x39, 0xf3, 0xe7, " +
      "0xe7, 0xe0, 0x3f, 0xbf, 0xc0, 0x3b, 0xf3, 0xe7, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, " +
      "0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, 0xe0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, " +
      "0xe0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, " +
      "0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff" +
      "};";
  Blockly.Arduino.definitions_["define_tetris_game_variables"] = 
  "const int PROGMEM click_tone = 1047;\n" + 
  "const int PROGMEM erase_tone = 2093;\n" + 
  "const int PROGMEM tone_duration = 100;\n" + 
  "const short MARGIN_TOP = 19;\n" + 
  "const short MARGIN_LEFT = 3;\n" + 
  "const short SIZE = 5;\n" + 
  "const short TYPES = 7;\n" + 
  "short currentType, nextType, rotation;\n" + 
  "short pieceX, pieceY;\n" +                             
  "int interval = 20, score = 0;\n" + 
  "short piece[" + a + "][" + b +"];\n" + 
  "bool grid[" + c + "][" + d +"];";
  Blockly.Arduino.definitions_["define_tetris_checkLines"] = 
  "void checkLines(){\n" + 
  "  boolean full;\n" + 
  "  for(short y = 17; y >= 0; y--){\n" + 
  "    full = true;\n" + 
  "    for(short x = 0; x < 10; x++){\n" + 
  "      full = full && grid[x][y];\n" + 
  "    }// for\n" + 
  "    if(full){\n" + 
  "      breakLine(y);\n" + 
  "      y++;\n" + 
  "    }// if\n" + 
  "  }// for\n" + 
  "}// checkLines";
  Blockly.Arduino.definitions_["define_tetris_refresh"] = 
  "void refresh(){\n" + 
  "  display.clearDisplay();\n" + 
  "  drawLayout();\n" + 
  "  drawGrid();\n" + 
  "  drawPiece(currentType, 0, pieceX, pieceY);\n" + 
  "  display.display();\n" + 
  "}// refresh";
  Blockly.Arduino.definitions_["define_tetris_currentCollision"] = 
  "bool currentCollision(){\n" + 
  "  for(short i = 0; i < 4; i++){\n" + 
  "    short y = pieceY + piece[1][i];\n" + 
  "    short x = pieceX + piece[0][i];\n" + 
  "    if(grid[x][y]){\n" + 
  "      return true;\n" + 
  "    }// if\n" + 
  "  }// for\n" + 
  "  return false;\n" + 
  "}// currentCollision"; 
  Blockly.Arduino.definitions_["define_tetris_nextHorizontalCollision"] = 
  "bool nextHorizontalCollision(short piece[2][4], int amount){\n" + 
  "  for(short i = 0; i < 4; i++){\n" + 
  "    short newX = pieceX + piece[0][i] + amount;\n" + 
  "    if(newX > 9 || newX < 0 || grid[newX][pieceY + piece[1][i]]){\n" + 
  "      return true;\n" + 
  "    }// if\n" + 
  "  }// for\n" + 
  "  return false;\n" + 
  "}// nextHorizontalCollision";
  Blockly.Arduino.definitions_["define_tetris_nextCollision"] = 
  "bool nextCollision(){\n" + 
  "  for(short i = 0; i < 4; i++){\n" + 
  "    short y = pieceY + piece[1][i] + 1;\n" + 
  "    short x = pieceX + piece[0][i];\n" + 
  "    if(y > 17 || grid[x][y]){\n" + 
  "      return true;\n" + 
  "    }// if\n" + 
  "  }// for\n" + 
  "  return false;\n" + 
  "}// nextCollision";
  Blockly.Arduino.definitions_["define_tetris_generate"] = 
  "void generate(){\n" + 
  "  currentType = nextType;\n" + 
  "  nextType = random(TYPES);\n" + 
  "  if(currentType == 5){\n" + 
  "    pieceX = random(7);\n" + 
  "  }else if(currentType == 3){\n" + 
  "    pieceX = random(9);\n" + 
  "  }else{\n" + 
  "    pieceX = random(8);\n" + 
  "  }// if..elif..else\n" + 
  "  pieceY = 0;\n" + 
  "  rotation = 0;\n" + 
  "  copyPiece(piece, currentType, rotation);\n" + 
  "}// generate";
  Blockly.Arduino.definitions_["define_tetris_getMaxRotation"] = 
  "short getMaxRotation(short type){\n" + 
  "  if(type == 0 || type == 5 || type == 6){\n" + 
  "    return 2;\n" + 
  "  }else if(type == 1 || type == 2 || type == 4){\n" + 
  "    return 4;\n" + 
  "  }else if(type == 3){\n" + 
  "    return 1;\n" + 
  "  }// if..elif..\n" + 
  "}// getMaxRotation";
  Blockly.Arduino.definitions_["define_tetris_canRotate"] = 
  "bool canRotate(short rotation){\n" + 
  "  short piece[2][4];\n" + 
  "  copyPiece(piece, currentType, rotation);\n" + 
  "  return !nextHorizontalCollision(piece, 0);\n" + 
  "}// canRotate";
  Blockly.Arduino.definitions_["define_tetris_drawLayout"] = 
  "void drawLayout(){\n" + 
  "  display.drawLine(0, 15, WIDTH, 15, WHITE);\n" + 
  "  display.drawRect(0, 0, WIDTH, HEIGHT, WHITE);\n" + 
  "  drawNextPiece();\n" + 
  "  char text[6];\n" + 
  "  itoa(score, text, 10);\n" + 
  "  drawText(text, getNumberLength(score), 7, 4);\n" + 
  "}// drawLayout";
  Blockly.Arduino.definitions_["define_tetris_breakLine"] = 
  "void breakLine(short line){\n" + 
  "  tone(SPEAKER_PIN, erase_tone, 1000 / tone_duration);\n" + 
  "  delay(100);\n" + 
  "  noTone(SPEAKER_PIN);\n" + 
  "  for(short y = line; y >= 0; y--){\n" + 
  "    for(short x = 0; x < 10; x++){\n" + 
  "      grid[x][y] = grid[x][y-1];\n" + 
  "    }// for\n" + 
  "  }// for\n" + 
  "  for(short x = 0; x < 10; x++){\n" + 
  "    grid[x][0] = 0;\n" + 
  "  }// for\n" + 
  "  display.invertDisplay(true);\n" + 
  "  delay(50);\n" + 
  "  display.invertDisplay(false);\n" + 
  "  score += 10;\n" + 
  "}// breakLine";
  Blockly.Arduino.definitions_["define_tetris_drawGrid"] = 
  "void drawGrid(){\n" + 
  "  for(short x = 0; x < 10; x++){\n" + 
  "    //Serial.println(grid[x][y]);\n" + 
  "    if(grid[x][0]==1 && pieceY==0){\n" + 
  "      if(currentCollision()){\n" + 
  "        display.clearDisplay();\n" + 
  "        display.drawBitmap(0, 0, game_over, 64, 128,  WHITE);\n" + 
  "        display.display();\n" + 
  "        tone(SPEAKER_PIN, erase_tone, 1000 / tone_duration);\n" + 
  "        delay(2000);\n" + 
  "        resetFunc();  //call reset\n" + 
  "      }// if\n" + 
  "    }// if - game over check\n" + 
  "    for(short y = 0; y < 18; y++){\n" + 
  "      if(grid[x][y]){\n" + 
  "        display.fillRect(MARGIN_LEFT + (SIZE + 1)*x, MARGIN_TOP + (SIZE + 1)*y, SIZE, SIZE, WHITE);\n" + 
  "      }// if\n" + 
  "    }// for\n" + 
  "  }// for\n" + 
  "}// drawGrid";
  Blockly.Arduino.definitions_["define_tetris_drawPiece"] = 
  "void drawPiece(short type, short rotation, short x, short y){\n" + 
  "  for(short i = 0; i < 4; i++){\n" + 
  "    display.fillRect(MARGIN_LEFT + (SIZE + 1)*(x + piece[0][i]), MARGIN_TOP + (SIZE + 1)*(y + piece[1][i]), SIZE, SIZE, WHITE);\n" + 
  "  }// for\n" + 
  "}// drawPiece";
  Blockly.Arduino.definitions_["define_tetris_drawNextPiece"] = 
  "void drawNextPiece(){\n" + 
  "  short nPiece[2][4];\n" + 
  "  copyPiece(nPiece, nextType, 0);\n" + 
  "  for(short i = 0; i < 4; i++){\n" + 
  "    display.fillRect(50 + 3*nPiece[0][i], 4 + 3*nPiece[1][i], 2, 2, WHITE);\n" + 
  "  }// for\n" + 
  "}// drawNextPiece";
  Blockly.Arduino.definitions_["define_tetris_getNumberLength"] = 
  "short getNumberLength(int n){\n" + 
  "  short counter = 1;\n" + 
  "  while(n >= 10){\n" + 
  "    n /= 10;\n" + 
  "    counter++;\n" + 
  "  }// while\n" + 
  "  return counter;\n" + 
  "}// getNumberLength";
  Blockly.Arduino.definitions_["define_tetris_drawText"] = 
  "void drawText(char text[], short length, int x, int y){\n" + 
  "  display.setTextSize(1);      // Normal 1:1 pixel scale\n" + 
  "  display.setTextColor(WHITE); // Draw white text\n" + 
  "  display.setCursor(x, y);     // Start at top-left corner\n" + 
  "  for(short i = 0; i < length; i++){\n" + 
  "    display.write(text[i]);\n" + 
  "  }// for\n" + 
  "}// drawText";
  return "";
};

Blockly.Arduino["chjhs_tetris_get_game_variables"] = function () {
  return this.getFieldValue("VAR");
};

Blockly.Arduino["chjhs_tetris_set_game_variables"] = function (block) {
  var dropdown_var = block.getFieldValue('VAR');
  var value_value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || "null";
  var code = dropdown_var + " = " + value_value + ";\n";
  return code;
};

Blockly.Arduino["chjhs_tetris_get_game_variables_2d"] = function (block) {
  var a = Blockly.Arduino.valueToCode(block, "D", Blockly.Arduino.ORDER_ATOMIC) || "0",
      b = Blockly.Arduino.valueToCode(block, "S", Blockly.Arduino.ORDER_ATOMIC) || "0";
  return this.getFieldValue("VAR") + "[" + a + "][" + b + "]";
};

Blockly.Arduino["chjhs_tetris_set_game_variables_2d"] = function (block) {
  var a = Blockly.Arduino.valueToCode(block, "D", Blockly.Arduino.ORDER_ATOMIC) || "0",
      b = Blockly.Arduino.valueToCode(block, "S", Blockly.Arduino.ORDER_ATOMIC) || "0";
  var dropdown_var = block.getFieldValue('VAR');
  var value_value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || "null";
  var code = dropdown_var + "[" + a + "][" + b + "] = " + value_value + ";\n";
  return code;
};

Blockly.Arduino['chjhs_tetris_copy_piece'] = function(block) {
  var value_piece = Blockly.Arduino.valueToCode(block, 'PIECE', Blockly.Arduino.ORDER_ATOMIC) || "null";
  var value_type = Blockly.Arduino.valueToCode(block, 'TYPE', Blockly.Arduino.ORDER_ATOMIC) || "null";
  var value_rotation = Blockly.Arduino.valueToCode(block, 'ROTATION', Blockly.Arduino.ORDER_ATOMIC) || "null";
  var code = "copyPiece(" + value_piece + ", " + value_type + ", " + value_rotation + ");\n";
  return code;
};

Blockly.Arduino['chjhs_tetris_draw_layout'] = function(block) {
  var code = "drawLayout();\n";
  return code;
};

Blockly.Arduino['chjhs_tetris_refresh'] = function(block) {
  var code = "refresh();\n";
  return code;
};

Blockly.Arduino['chjhs_tetris_generate'] = function(block) {
  var code = "generate();\n";
  return code;
};

Blockly.Arduino['chjhs_tetris_check_lines'] = function(block) {
  var code = "checkLines();\n";
  return code;
};

Blockly.Arduino['chjhs_tetris_current_collision'] = function(block) {
  var code = "currentCollision()";
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['chjhs_tetris_next_horizontal_collision'] = function(block) {
  var value_piece = Blockly.Arduino.valueToCode(block, 'PIECE', Blockly.Arduino.ORDER_ATOMIC) || "null";
  var value_amount = Blockly.Arduino.valueToCode(block, 'AMOUNT', Blockly.Arduino.ORDER_ATOMIC) || "null";
  var code = "nextHorizontalCollision(" + value_piece + ", " + value_amount + ")";
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['chjhs_tetris_next_collision'] = function(block) {
  var code = "nextCollision()";
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['chjhs_tetris_get_max_rotation'] = function(block) {
  var value_type = Blockly.Arduino.valueToCode(block, 'TYPE', Blockly.Arduino.ORDER_ATOMIC) || "null";
  var code = "getMaxRotation(" + value_type + ")";
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['chjhs_tetris_can_rotation'] = function(block) {
  var value_rotation = Blockly.Arduino.valueToCode(block, 'ROTATION', Blockly.Arduino.ORDER_ATOMIC) || "null";
  var code = "canRotate(" + value_rotation + ")";
  return [code, Blockly.Arduino.ORDER_NONE];
};

//Keyboards
Blockly.Arduino.keyboards={};
Blockly.Arduino.keyboards_0_init=function(){
  var a0=Blockly.Arduino.valueToCode(this,"PIN_0",Blockly.Arduino.ORDER_ATOMIC)||"0",
      a1=Blockly.Arduino.valueToCode(this,"PIN_1",Blockly.Arduino.ORDER_ATOMIC)||"0",
      a2=Blockly.Arduino.valueToCode(this,"PIN_2",Blockly.Arduino.ORDER_ATOMIC)||"0",
      a3=Blockly.Arduino.valueToCode(this,"PIN_3",Blockly.Arduino.ORDER_ATOMIC)||"0",
      a4=Blockly.Arduino.valueToCode(this,"PIN_4",Blockly.Arduino.ORDER_ATOMIC)||"0",
      a5=Blockly.Arduino.valueToCode(this,"PIN_5",Blockly.Arduino.ORDER_ATOMIC)||"0",
      a6=Blockly.Arduino.valueToCode(this,"PIN_6",Blockly.Arduino.ORDER_ATOMIC)||"0";
  Blockly.Arduino.definitions_.define_keypad_include="#include \"Adafruit_Keypad.h\"";
  Blockly.Arduino.definitions_.define_keypad_invoke='char keyPadChar=\'\\0\';\nconst byte keyRowsCount = 4;\nconst byte keyColsCount = 3;\nchar keys[keyRowsCount][keyColsCount] = {{\'1\', \'2\', \'3\'}, {\'4\', \'5\', \'6\'}, {\'7\', \'8\', \'9\'}, {\'*\', \'0\', \'#\'}};\nbyte rowPins[keyRowsCount] = {'+a0+','+a1+','+a2+','+a3+'};\nbyte colPins[keyColsCount] = {'+a4+','+a5+','+a6+'};\nAdafruit_Keypad customKeypad = Adafruit_Keypad( makeKeymap(keys), rowPins, colPins, keyRowsCount, keyColsCount);\n';
  Blockly.Arduino.definitions_.define_keypad_event="void checkPad(keypadEvent e)\n{\n  if (((char)e.bit.KEY!=\'\\0\')&&(e.bit.EVENT == KEY_JUST_PRESSED))\n    checkPadPress();\n  else if (((char)e.bit.KEY!=\'\\0\')&&(e.bit.EVENT == KEY_JUST_RELEASED))\n    checkPadRelease();\n}\n";
  Blockly.Arduino.definitions_.define_keypad_press_event="void checkPadPress()\n{\n}\n";
  Blockly.Arduino.definitions_.define_keypad_release_event="void checkPadRelease()\n{\n}\n";
  return'customKeypad.begin();\n';
}

Blockly.Arduino.keyboards_1_init=function(){
  var a0=Blockly.Arduino.valueToCode(this,"PIN_0",Blockly.Arduino.ORDER_ATOMIC)||"0",
      a1=Blockly.Arduino.valueToCode(this,"PIN_1",Blockly.Arduino.ORDER_ATOMIC)||"0",
      a2=Blockly.Arduino.valueToCode(this,"PIN_2",Blockly.Arduino.ORDER_ATOMIC)||"0",
      a3=Blockly.Arduino.valueToCode(this,"PIN_3",Blockly.Arduino.ORDER_ATOMIC)||"0",
      a4=Blockly.Arduino.valueToCode(this,"PIN_4",Blockly.Arduino.ORDER_ATOMIC)||"0",
      a5=Blockly.Arduino.valueToCode(this,"PIN_5",Blockly.Arduino.ORDER_ATOMIC)||"0",
      a6=Blockly.Arduino.valueToCode(this,"PIN_6",Blockly.Arduino.ORDER_ATOMIC)||"0",
      a7=Blockly.Arduino.valueToCode(this,"PIN_7",Blockly.Arduino.ORDER_ATOMIC)||"0";
  Blockly.Arduino.definitions_.define_keypad_include="#include \"Adafruit_Keypad.h\"";
  Blockly.Arduino.definitions_.define_keypad_invoke='char keyPadChar=\'\\0\';\nconst byte keyRowsCount = 4;\nconst byte keyColsCount = 4;\nchar keys[keyRowsCount][keyColsCount] = {{\'1\', \'2\', \'3\', \'A\'}, {\'4\', \'5\', \'6\', \'B\'}, {\'7\', \'8\', \'9\', \'C\'}, {\'*\', \'0\', \'#\', \'D\'}};\nbyte rowPins[keyRowsCount] = {'+a0+','+a1+','+a2+','+a3+'};\nbyte colPins[keyColsCount] = {'+a4+','+a5+','+a6+','+a7+'};\nAdafruit_Keypad customKeypad = Adafruit_Keypad( makeKeymap(keys), rowPins, colPins, keyRowsCount, keyColsCount);\n';
  Blockly.Arduino.definitions_.define_keypad_event="void checkPad(keypadEvent e)\n{\n  if (((char)e.bit.KEY!=\'\\0\')&&(e.bit.EVENT == KEY_JUST_PRESSED))\n    checkPadPress();\n  else if (((char)e.bit.KEY!=\'\\0\')&&(e.bit.EVENT == KEY_JUST_RELEASED))\n    checkPadRelease();\n}\n";
  Blockly.Arduino.definitions_.define_keypad_press_event="void checkPadPress()\n{\n}\n";
  Blockly.Arduino.definitions_.define_keypad_release_event="void checkPadRelease()\n{\n}\n";
  return'customKeypad.begin();\n';
}

Blockly.Arduino.keyboards_check=function(){
  return'customKeypad.tick();\nif(customKeypad.available()){\n  keypadEvent e = customKeypad.read();\n  keyPadChar=(char)e.bit.KEY;\n  checkPad(e);\n}\n';
}

Blockly.Arduino.keyboards_event=function(){
  var a=this.getFieldValue("EVENT"),
      b=Blockly.Arduino.statementToCode(this,"KEYBOARD_EVENT");
  if (a=="1"){
    Blockly.Arduino.definitions_.define_keypad_press_event="void checkPadPress()\n{\n"+b+"}\n";
  }
  else if (a=="0"){
    Blockly.Arduino.definitions_.define_keypad_release_event="void checkPadRelease()\n{\n"+b+"}\n";
  }
  return'';
}

Blockly.Arduino.keyboards_value=function(){
  return['String(keyPadChar)',Blockly.Arduino.ORDER_ATOMIC];
}


//STEPPER
Blockly.Arduino.chjhs_stepper={};
Blockly.Arduino.chjhs_stepper_init=function(){
  var a=this.getFieldValue("INDEX"),
      b=Blockly.Arduino.valueToCode(this,"PIN1",Blockly.Arduino.ORDER_ATOMIC)||"0",
      c=Blockly.Arduino.valueToCode(this,"PIN2",Blockly.Arduino.ORDER_ATOMIC)||"0",
      d=Blockly.Arduino.valueToCode(this,"PIN3",Blockly.Arduino.ORDER_ATOMIC)||"0",
      e=Blockly.Arduino.valueToCode(this,"PIN4",Blockly.Arduino.ORDER_ATOMIC)||"0",
      f=Blockly.Arduino.valueToCode(this,"stepsPerRev",Blockly.Arduino.ORDER_ATOMIC)||"0",
      g=Blockly.Arduino.valueToCode(this,"stepDelay",Blockly.Arduino.ORDER_ATOMIC)||"0",
      h=Math.trunc(parseFloat(g)*1000);
  Blockly.Arduino.definitions_.define_chjhs_stepper_include='#include "Unistep2.h"';
  Blockly.Arduino.definitions_["define_chjhs_stepper_"+a+"_invoke"]='Unistep2 stepper_'+a+'('+b+', '+c+', '+d+', '+e+', '+f+', '+h+');\nbool stepper_'+a+'_FirstStop=true;';
  
  return'';
}

Blockly.Arduino.chjhs_stepper_move=function(){
  var a=this.getFieldValue("INDEX"),
      b=Blockly.Arduino.valueToCode(this,"STEPS",Blockly.Arduino.ORDER_ATOMIC)||"0";
  return'stepper_'+a+'.move('+b+');\nstepper_'+a+'_FirstStop=(stepper_'+a+'.stepsToGo() != 0);\n';
}

Blockly.Arduino.chjhs_stepper_move_to=function(){
  var a=this.getFieldValue("INDEX"),
      b=Blockly.Arduino.valueToCode(this,"STEPS",Blockly.Arduino.ORDER_ATOMIC)||"0";
  return'stepper_'+a+'.moveTo('+b+');\nstepper_'+a+'_FirstStop=(stepper_'+a+'.stepsToGo() != 0);\n';
}

Blockly.Arduino.chjhs_stepper_run=function(){
  var a=this.getFieldValue("INDEX");
  return"stepper_" + a + ".run();\n";
}

Blockly.Arduino.chjhs_stepper_stop=function(){
  var a=this.getFieldValue("INDEX");
  return'stepper_'+a+'.stop();\nstepper_'+a+'_FirstStop=false;\n';
}

Blockly.Arduino.chjhs_stepper_statement_not_moving = function() { 
  var a=this.getFieldValue("INDEX"), 
      b=Blockly.Arduino.statementToCode(this,"STEPPER_NOT_MOVING_IF");
  return 'if (stepper_'+a+'_FirstStop && stepper_'+a+'.stepsToGo() == 0) {\n'+b+'}';
};

Blockly.Arduino.chjhs_stepper_is_moving=function(){
  var a=this.getFieldValue("INDEX");
  return['stepper_'+a+'.stepsToGo() != 0',Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.chjhs_stepper_remain_steps=function(){
  var a=this.getFieldValue("INDEX");
  return['stepper_'+a+'.stepsToGo()',Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.chjhs_stepper_position=function(){
  var a=this.getFieldValue("INDEX");
  return['stepper_'+a+'.currentPosition()',Blockly.Arduino.ORDER_ATOMIC];
}



