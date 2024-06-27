// Luo Wen Cheng: General Block
Blockly.Blocks["get_color_from_picker"] = {
  init: function () {
    this.setColour(Blockly.Msg["COLOR_HUE"]);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["TEXT_CHJHS_COLOR"])
      .appendField(new Blockly.FieldColour("#000000"), "RGB");
    this.setInputsInline(!0);
    this.setOutput(!0, "String");
    this.setTooltip(Blockly.Msg["TEXT_CHJHS_COLORPICKER_TOOLTIP"]);
  },
};

Blockly.Blocks["chjhs_RGB_value"] = {
  init: function () {
    this.setColour(Blockly.Msg["COLOR_HUE"]);
    this.appendDummyInput().appendField(Blockly.Msg["TEXT_CHJHS_COLOR"]);
    this.appendValueInput("RED").setCheck("Number").appendField("R");
    this.appendValueInput("GREEN").setCheck("Number").appendField("G");
    this.appendValueInput("BLUE").setCheck("Number").appendField("B");
    this.setInputsInline(!0);
    this.setOutput(!0, "String");
    this.setTooltip("");
  },
};

Blockly.Blocks["initializes_restart"] = {
	init: function () {
		this.setHelpUrl("");
		this.setColour("290");
		this.appendDummyInput().appendField(Blockly.Msg["TEXT_CHJHS_RESTART"]);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);
    this.setEnabled(true);
    this.setTooltip("");}
};

// Luo Wen Cheng: define
Blockly.Blocks["chjhs_define_identifier"] = {
  init: function () {
    this.setColour(Blockly.Msg["COLOR_PURPLE_PINK"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_MACRO_DEFINE"])
      .appendField(Blockly.Msg["TEXT_MACRO_IDENTIFIER"])
      .appendField(new Blockly.FieldVariable("MACRO_NAME"), "varName");
    this.appendValueInput("content").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_define_call_function"] = {
  init: function () {
    this.setColour(Blockly.Msg["COLOR_PURPLE_PINK"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_MACRO_CALL_FUNCTION"])
      .appendField(Blockly.Msg["TEXT_MACRO_IDENTIFIER"])
      .appendField(new Blockly.FieldVariable("MACRO_FUNCTION(x)"), "varName");
    this.appendValueInput("content")
      .appendField(Blockly.Msg["TEXT_ARGUMENT"])
      .setCheck(null);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_define_call_variable"] = {
	init: function () {
	  this.setColour(Blockly.Msg["COLOR_PURPLE_PINK"]);
	  this.appendDummyInput()
		.appendField(Blockly.Msg["TEXT_MACRO_CALL_VARIABLE"])
		.appendField(new Blockly.FieldVariable("MACRO_NAME"), "varName");
	  this.setInputsInline(true);
	  this.setOutput(true, null);
	  this.setTooltip("");
	  this.setHelpUrl("");
	},
  };

Blockly.Blocks["chjhs_define_call_function_assigment"] = {
  init: function () {
    this.setColour(Blockly.Msg["COLOR_PURPLE_PINK"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_MACRO_CALL_FUNCTION"])
      .appendField(Blockly.Msg["TEXT_MACRO_IDENTIFIER"])
      .appendField(new Blockly.FieldVariable("MACRO_FUNCTION(x)"), "varName");
    this.appendValueInput("content")
      .appendField(Blockly.Msg["TEXT_ARGUMENT"])
      .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_define_expression"] = {
  init: function () {
    this.setColour(Blockly.Msg["COLOR_PURPLE_PINK"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_MACRO_EXPRESSION"])
      .appendField(new Blockly.FieldTextInput(""), "EXPRESSION");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["chjhs_define_expression_input"] = {
  init: function () {
    this.setColour(Blockly.Msg["COLOR_PURPLE_PINK"]);
    this.appendValueInput("EXPRESSION")
        .appendField(Blockly.Msg["TEXT_MACRO_EXPRESSION"]);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["chjhs_define_if"] = {
init: function () {
    this.setHelpUrl("");
    this.setColour(Blockly.Msg["COLOR_PURPLE_PINK"]);
    this.appendValueInput("EXPRESSION")
    	.appendField(Blockly.Msg["TEXT_MACRO_IF"]);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);}
};

Blockly.Blocks["chjhs_define_elif"] = {
	init: function () {
		this.setHelpUrl("");
		this.setColour(Blockly.Msg["COLOR_PURPLE_PINK"]);
		this.appendValueInput("EXPRESSION")
			.appendField(Blockly.Msg["TEXT_MACRO_ELIF"]);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);}
};

Blockly.Blocks["chjhs_define_else"] = {
	init: function () {
		this.setHelpUrl("");
		this.setColour(Blockly.Msg["COLOR_PURPLE_PINK"]);
		this.appendDummyInput()
			.appendField(Blockly.Msg["TEXT_MACRO_ELSE"]);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);}
};

Blockly.Blocks["chjhs_define_endif"] = {
	init: function () {
	  	this.setColour(Blockly.Msg["COLOR_PURPLE_PINK"]);
	  	this.appendDummyInput()
			.appendField(Blockly.Msg["TEXT_MACRO_ENDIF"]);
	  	this.setInputsInline(true);
	  	this.setInputsInline(!0);
    	this.setPreviousStatement(!0);
    	this.setNextStatement(!0);
	  	this.setHelpUrl("");
	},
};

// Luo Wen Cheng: NTUST meArm
Blockly.Blocks["set_mearm"] = {
  init: function () {
    this.appendValueInput("basePin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_SET_BASE_PIN"]);
    this.appendValueInput("shoulderPin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_SET_SHOULDER_PIN"]);
    this.appendValueInput("elbowPin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_SET_ELBOW_PIN"]);
    this.appendValueInput("gripperPin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_SET_GRIPPWR_PIN"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(Blockly.Msg["TEXT_SET_MEARM_HELP"]);
    this.setHelpUrl(Blockly.Msg["TEXT_SET_MEARM_HELP_URL"]);
  },
};

Blockly.Blocks["ini_set_mearm"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg["TEXT_INI_SET_MEARM_PIN"]);
    this.appendValueInput("basePin")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["TEXT_INI_SET_BASE_PIN"]);
    this.appendValueInput("shoulderPin")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["TEXT_INI_SET_SHOULDER_PIN"]);
    this.appendValueInput("elbowPin")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["TEXT_INI_SET_ELBOW_PIN"]);
    this.appendValueInput("gripperPin")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["TEXT_INI_SET_GRIPPWR_PIN"]);
    this.appendDummyInput().appendField(
      Blockly.Msg["TEXT_INI_SET_MEARM_RANGE"]
    );
    this.appendValueInput("xMin")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["TEXT_INI_SET_X_MIN"]);
    this.appendValueInput("xMax")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["TEXT_INI_SET_X_MAX"]);
    this.appendValueInput("yMin")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["TEXT_INI_SET_Y_MIN"]);
    this.appendValueInput("yMax")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["TEXT_INI_SET_Y_MAX"]);
    this.appendValueInput("zMin")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["TEXT_INI_SET_Z_MIN"]);
    this.appendValueInput("zMax")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["TEXT_INI_SET_Z_MAX"]);
    this.appendValueInput("gMin")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["TEXT_INI_SET_G_MIN"]);
    this.appendValueInput("gMax")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["TEXT_INI_SET_G_MAX"]);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(Blockly.Msg["TEXT_SET_MEARM_HELP"]);
    this.setHelpUrl(Blockly.Msg["TEXT_SET_MEARM_HELP_URL"]);
  },
};

Blockly.Blocks["get_mearm_angle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_GET_MEARM_ANGLE"])
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_INI_SET_BASE_PIN"], "angleX"],
          [Blockly.Msg["TEXT_INI_SET_SHOULDER_PIN"], "angleY"],
          [Blockly.Msg["TEXT_INI_SET_ELBOW_PIN"], "angleZ"],
          [Blockly.Msg["TEXT_INI_SET_GRIPPWR_PIN"], "angleG"],
        ]),
        "selectedServo"
      );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip(Blockly.Msg["TEXT_GET_MEARM_ANGLE_HELP"]);
    this.setHelpUrl(Blockly.Msg["TEXT_SET_MEARM_HELP_URL"]);
  },
};

Blockly.Blocks["set_mearm_angle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_SET_MEARM_ANGLE"])
      .appendField(
        new Blockly.FieldDropdown([
          ["Base", "angleX"],
          ["Right-side Shoulder", "angleY"],
          ["Left-side Elbow", "angleZ"],
          ["Gripper", "angleG"],
        ]),
        "selectedServo"
      );
    this.appendValueInput("servoAngle").setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(Blockly.Msg["TEXT_SET_MEARM_ANGLE_HELP"]);
    this.setHelpUrl("https://github.com/WoodyLuo/meArm");
  },
};

Blockly.Blocks["move_mearm"] = {
  init: function () {
    this.appendValueInput("angleX")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_MOVE_MEARM"]);
    this.appendValueInput("angleY")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_SET_SHOULDER_PIN"]);
    this.appendValueInput("angleZ")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_SET_ELBOW_PIN"]);
    this.appendValueInput("angleG")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_SET_GRIPPWR_PIN"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(Blockly.Msg["TEXT_MOVE_MEARM_HELP"]);
    this.setHelpUrl(Blockly.Msg["TEXT_SET_MEARM_HELP_URL"]);
  },
};

// Unsigned_Long
Blockly.Blocks["inout_digital_pulsein"] = {
  init: function () {
    this.appendDummyInput().appendField(
      Blockly.Msg["TEXT_CHJHS_INOUT_PULSEIN"]
    );
    this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_SINGLE"])
      .appendField(
        new Blockly.FieldDropdown([
          ["由高至低（LOW）", "LOW"],
          ["由低至高（HIGH）", "HIGH"],
        ]),
        "signal"
      );
    this.setInputsInline(true);
    this.setOutput(true, "Unsigned_Long");
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip(Blockly.Msg["TEXT_CHJHS_INOUT_PULSEIN_HELP"]);
    this.setHelpUrl(Blockly.Msg["TEXT_CHJHS_INOUT_PULSEIN_HELPURL"]);
  },
};

Blockly.Blocks["text_special_character"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_SPECIAL_CHARACTER"])
      .appendField(
        new Blockly.FieldDropdown([
          ["換行（newline）", "/n"],
          ["回首位（carriage return）", "/r"],
          ["換行（tab）", "/t"],
          ["度數（degree, °）", "char(194)"],
        ]),
        "special_character"
      );
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["TEXT_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["text_program_comment_single_line"] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_COMMENT"])
        .appendField(new Blockly.FieldTextInput(""), "COMMENT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["COLOR_GRAY"]);
    this.setTooltip(Blockly.Msg["TEXT_COMMENT_HELP"]);
    this.setHelpUrl(Blockly.Msg["TEXT_COMMENT_HELP_URL"]);
  },
};

Blockly.Blocks["text_program_copyright"] = {
  init: function () {
    this.appendDummyInput()
        .appendField("/* " + Blockly.Msg["TEXT_COPYRIGHT"]);
    this.appendDummyInput()
        .appendField(" *")
        .appendField(Blockly.Msg["TEXT_DATE"])
        .appendField(new Blockly.FieldTextInput(""), "DATE");
    this.appendDummyInput()
        .appendField(" *")
        .appendField(Blockly.Msg["TEXT_AUTHOR"])
        .appendField(new Blockly.FieldTextInput(""), "AUTHOR");
    this.appendDummyInput()
        .appendField(" *")
        .appendField(Blockly.Msg["TEXT_PROGRAM_NAME"])
        .appendField(new Blockly.FieldTextInput(""), "PROGRAM_NAME");
    this.appendDummyInput()
        .appendField(" *")
        .appendField(Blockly.Msg["TEXT_PROGRAM_INTRODUCTION"])
        .appendField(new Blockly.FieldTextInput(""), "INTRODUCTION");
    this.appendDummyInput()
        .appendField(" */");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["COLOR_GRAY"]);
    this.setTooltip(Blockly.Msg["TEXT_COMMENT_HELP"]);
    this.setHelpUrl(Blockly.Msg["TEXT_COMMENT_HELP_URL"]);
  },
};

Blockly.Blocks["math_randomseed"] = {
  init: function () {
    this.appendValueInput("seed")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_RANDOMSEED);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["MATH_HUE"]);
    this.setTooltip(Blockly.Msg["TEXT_CHJHS_RANDOMSEED_HELP"]);
    this.setHelpUrl(Blockly.Msg["TEXT_CHJHS_RANDOMSEED_HELPURL"]);
  },
};

// IO
Blockly.Blocks["iopin_setting"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg["TEXT_CHJHS_IOPIN_SETTIN"]);
    this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_IS"])
      .appendField(
        new Blockly.FieldDropdown([
          ["輸入（Input）", "INPUT"],
          ["輸出（Output）", "OUTPUT"],
          ["上拉電阻（Pull-up）輸入", "PULLUP"],
        ]),
        "mode"
      )
      .appendField(Blockly.Msg["TEXT_CHJHS_MODE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip(Blockly.Msg["TEXT_CHJHS_IOPIN_SETTIN_HLEP"]);
    this.setHelpUrl(Blockly.Msg["TEXT_CHJHS_IOPIN_SETTIN_HLEPURL"]);
  },
};

Blockly.Blocks["iopin_pin_number_uno"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["0 - RX", "0"],
          ["1 - TX", "1"],
          ["2", "2"],
          ["~3", "3"],
          ["4", "4"],
          ["~5", "5"],
          ["~6", "6"],
          ["7", "7"],
          ["8", "8"],
          ["~9", "9"],
          ["~10 - SS ( SPI ) ", "10"],
          ["~11 - MOSI ( SPI ) ", "11"],
          ["12 - MISO ( SPI ) ", "12"],
          ["13 - SCK ( SPI ) ", "13"],
          ["A0", "14"],
          ["A1", "15"],
          ["A2", "16"],
          ["A3", "17"],
          ["A4 - SDA ( I2C ) ", "18"],
          ["A5 - SCL ( I2C )", "19"],
        ]),
        "pin"
      )
      .appendField("（UNO）");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["iopin_digital_pin_state"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["高電位（HIGH）", "HIGH"],
        ["低電位（LOW）", "LOW"],
      ]),
      "state"
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["iopin_digital_write_with_output_mode"] = {
  init: function () {
    this.appendDummyInput().appendField(
      Blockly.Msg["TEXT_IOPIN_DIGITAL_WRITE"]
    );
    this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.appendDummyInput().appendField(
      Blockly.Msg["TEXT_IOPIN_PIN_WRITE_WITH_OUTPUT_MODE"]
    );
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_STATE"])
      .appendField(
        new Blockly.FieldDropdown([
          ["高電位（HIGH）", "HIGH"],
          ["低電位（LOW）", "LOW"],
        ]),
        "state"
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["iopin_digital_write"] = {
  init: function () {
    this.appendDummyInput().appendField(
      Blockly.Msg["TEXT_IOPIN_DIGITAL_WRITE"]
    );
    this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_STATE"])
      .appendField(
        new Blockly.FieldDropdown([
          ["高電位（HIGH）", "HIGH"],
          ["低電位（LOW）", "LOW"],
        ]),
        "state"
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["iopin_digital_read_with_input_mode"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg["TEXT_IOPIN_DIGITAL_READ"]);
    this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.appendDummyInput().appendField(
      Blockly.Msg["TEXT_IOPIN_PIN_READ_WITH_INPUT_MODE"]
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["iopin_digital_read"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg["TEXT_IOPIN_DIGITAL_READ"]);
    this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["iopin_digital_read_with_pullup_mode"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg["TEXT_IOPIN_DIGITAL_READ"]);
    this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.appendDummyInput().appendField(
      Blockly.Msg["TEXT_IOPIN_DIGITAL_READ_WITH_PULLUP_MODE"]
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["iopin_digital_pin_number_uno"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["0 - RX", "0"],
          ["1 - TX", "1"],
          ["2", "2"],
          ["~3", "3"],
          ["4", "4"],
          ["~5", "5"],
          ["~6", "6"],
          ["7", "7"],
          ["8", "8"],
          ["~9", "9"],
          ["~10 - SS ( SPI ) ", "10"],
          ["~11 - MOSI ( SPI ) ", "11"],
          ["12 - MISO ( SPI ) ", "12"],
          ["13 - SCK ( SPI ) ", "13"],
        ]),
        "pin"
      )
      .appendField("（UNO）");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["iopin_analog_value"] = {
  init: function () {
    this.appendValueInput("value").setCheck("Number");
    this.appendDummyInput().appendField("（0~255）");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["iopin_analog_write_with_output_mode"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg["TEXT_IOPIN_ANALOG_WRITE"]);
    this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.appendDummyInput().appendField(
      Blockly.Msg["TEXT_IOPIN_PIN_WRITE_WITH_OUTPUT_MODE"]
    );
    this.appendValueInput("value")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_VALUE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["iopin_analog_write"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg["TEXT_IOPIN_ANALOG_WRITE"]);
    this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.appendValueInput("value")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_VALUE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["iopin_analog_read_with_input_mode"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg["TEXT_IOPIN_ANALOG_READ"]);
    this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.appendDummyInput().appendField(
      Blockly.Msg["TEXT_IOPIN_PIN_READ_WITH_INPUT_MODE"]
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["iopin_analog_read"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg["TEXT_IOPIN_ANALOG_READ"]);
    this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["iopin_analog_pin_number_uno"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["A0", "14"],
          ["A1", "15"],
          ["A2", "16"],
          ["A3", "17"],
          ["A4 - SDA ( I2C ) ", "18"],
          ["A5 - SCL ( I2C )", "19"],
          ["~3", "3"],
          ["~5", "5"],
          ["~6", "6"],
          ["~9", "9"],
          ["~10 - SS ( SPI ) ", "10"],
          ["~11 - MOSI ( SPI ) ", "11"],
        ]),
        "pin"
      )
      .appendField("（UNO）");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["IOPIN_HUE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["serial_parse"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_SERIAL_PARSE"])
      .appendField(
        new Blockly.FieldDropdown([
          ["整數（integer）", "INT"],
          ["浮點數（float）", "FLOAT"],
        ]),
        "type"
      );
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["SERIAL_HUE"]);
    this.setTooltip(Blockly.Msg["TEXT_CHJHS_SERIAL_PARSE_HELP"]);
    this.setHelpUrl(Blockly.Msg["TEXT_CHJHS_SERIAL_PARSE_HELPURL"]);
  },
};

Blockly.Blocks["serial_end"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg["TEXT_CHJHS_SERIAL_END"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["SERIAL_HUE"]);
    this.setTooltip(Blockly.Msg["TEXT_CHJHS_SERIAL_END_HELP"]);
    this.setHelpUrl("");
  },
};

Blockly.Blocks["serial_peek"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg["TEXT_CHJHS_SERIAL_PEEK"]);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["SERIAL_HUE"]);
    this.setTooltip(Blockly.Msg["TEXT_CHJHS_SERIAL_PEEK_HELP"]);
    this.setHelpUrl("");
  },
};

// Luo Wen Cheng: CHJHS Servo
Blockly.Blocks["chjhs_servo_init"] = {
  init: function () {
    this.setColour(Blockly.Msg["SERVO_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CATEGORY_SERVO"])
      .appendField(Blockly.Msg["TEXT_CHJHS_SETUP"]);
    this.appendDummyInput().appendField(
      new Blockly.FieldVariable("servo1"),
      "varName"
    );
    this.appendValueInput("PIN").appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    //this.appendDummyInput().appendField(Blockly.Msg.SERVO_ANGLE_TEXT2);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LJJ_QUNO_TOOLTIP);
  },
};

Blockly.Blocks["chjhs_servo_custom_init"] = {
  init: function () {
    this.setColour(Blockly.Msg["SERVO_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CATEGORY_SERVO"])
      .appendField(Blockly.Msg["TEXT_CHJHS_SETUP"]);
    this.appendDummyInput().appendField(
      new Blockly.FieldVariable("servo1"),
      "varName"
    );
    this.appendValueInput("PIN").appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.appendValueInput("MIN").appendField(
      Blockly.Msg["TEXT_SERVO_PULSE_RANGE"]
    );
    this.appendValueInput("MAX").appendField(Blockly.Msg["TEXT_CHJHS_TO"]);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg["TEXT_SERVO_HELP"]);
  },
};

Blockly.Blocks["chjhs_servo_write_pin"] = {
  init: function () {
    this.setColour(Blockly.Msg["SERVO_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CATEGORY_SERVO"])
      .appendField(new Blockly.FieldVariable("servo1"), "varName");
    this.appendValueInput("ANGLE")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_SERVO_ANGLE"]);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg["TEXT_SERVO_HELP"]);
  },
};

Blockly.Blocks["chjhs_servo_360"] = {
  init: function () {
    this.setColour(Blockly.Msg["SERVO_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_SERVO_360"])
      .appendField(new Blockly.FieldVariable("servo1"), "varName");
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_SERVO_ROTATE"])
      .appendField(
        new Blockly.FieldDropdown(Blockly.Msg["TEXT_SERVO_360_DIRECTION"]),
        "DIR"
      );
    this.appendValueInput("SPEED")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_SERVO_SPEED"].replace("~255", "~90"));
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg["TEXT_SERVO_HELP"]);
  },
};

Blockly.Blocks["chjhs_servo_detach"] = {
  init: function () {
    this.setColour(Blockly.Msg["SERVO_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CATEGORY_SERVO"])
      .appendField(new Blockly.FieldVariable("servo1"), "varName")
      .appendField(Blockly.Msg["TEXT_SERVO_DETACH"]);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg["TEXT_SERVO_HELP"]);
  },
};

// Luo Wen Cheng: CHJHS LCD1602
Blockly.Blocks["chjhs_lcd1602_init"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_LCD1602_TITLE"])
      .appendField(
        new Blockly.FieldDropdown([
          ["1602", "16,2"],
          ["2004", "20,4"],
        ]),
        "TYPE"
      )
      .appendField(Blockly.Msg["TEXT_CHJHS_SETUP"])
      .appendField(Blockly.Msg["TEXT_CHJHS_I2C_ADDRESS"]);
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["0x27", "0x27"],
        ["0x3F", "0x3F"],
        ["0x20", "0x20"],
      ]),
      "ADDRESS"
    );
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
  },
};

Blockly.Blocks["chjhs_lcd1602_show"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_LCD1602_TITLE"])
      .appendField(Blockly.Msg["TEXT_LCD1602_EN_NUM_TEXT"]);
    this.appendValueInput("X").setCheck("Number").appendField("X");
    this.appendValueInput("Y").setCheck("Number").appendField("Y");
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField(Blockly.Msg["TEXT_LCD1602_PUT_STRING"]);
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LJJ_LCD1602_TOOLTIP);
  },
};

Blockly.Blocks["chjhs_lcd1602_ascii_char"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_LCD1602_TITLE"])
      .appendField(Blockly.Msg["TEXT_LCD1602_CHAR"]);
    this.appendValueInput("X").setCheck("Number").appendField("X");
    this.appendValueInput("Y").setCheck("Number").appendField("Y");
    this.appendValueInput("INDEX")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_LCD1602_CHAR_CODE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
  },
};

Blockly.Blocks["chjhs_lcd1602_backlight"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_LCD1602_TITLE"])
      .appendField(Blockly.Msg["TEXT_LCD1602_BACKLIGHT"])
      .appendField(
        new Blockly.FieldDropdown(Blockly.Msg["TEXT_CHJHS_POWER_MODE"]),
        "MODE"
      );
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_lcd1602_clear"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_LCD1602_TITLE"])
      .appendField(Blockly.Msg["TEXT_LCD1602_CLEAR"]);
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_lcd1602_scroll"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_LCD1602_TITLE"])
      .appendField(Blockly.Msg["TEXT_LCD1602_SCROLL"])
      .appendField(
        new Blockly.FieldDropdown(Blockly.Msg["TEXT_LCD1602_SCROLL_TYPE"]),
        "MODE"
      )
      .appendField(Blockly.Msg["TEXT_LCD1602_SCROLL_CHARACTER"]);
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_lcd1602_bitmap"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_LCD1602_TITLE"])
      .appendField(Blockly.Msg["TEXT_LCD1602_BITMAP"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_LCD1602_BITMAP_INDEX"])
      .appendField(
        new Blockly.FieldDropdown([
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
        ]),
        "INDEX"
      );
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L00")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L01")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L02")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L03")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L04");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L10")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L11")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L12")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L13")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L14");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L20")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L21")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L22")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L23")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L24");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L30")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L31")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L32")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L33")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L34");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L40")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L41")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L42")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L43")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L44");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L50")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L51")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L52")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L53")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L54");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L60")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L61")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L62")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L63")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L64");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L70")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L71")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L72")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L73")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "L74");
    this.setInputsInline(false);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_lcd1602_bitmap_show"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_LCD1602_TITLE"])
      .appendField(Blockly.Msg["TEXT_LCD1602_BITMAP_SHOW"]);
    this.appendValueInput("INDEX")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_LCD1602_BITMAP_INDEX"]);
    this.appendValueInput("X").setCheck("Number").appendField("X");
    this.appendValueInput("Y").setCheck("Number").appendField("Y");
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_bmp280_init"] = {
  init: function () {
    this.setColour(Blockly.Msg["SENSOR_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_BMP280"])
      .appendField(Blockly.Msg["TEXT_CHJHS_SETUP"])
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("bmp"), "varName");
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_I2C"])
      .appendField(
        new Blockly.FieldDropdown([
          ["0x76（GY）", "0x76"],
          ["0x77（Grove）", "0x77"],
        ]),
        "ADDRESS"
      );
    this.setInputsInline(!0);
    this.setOutput(!0, "Number");
    this.setTooltip(Blockly.Msg["TEXT_CHJHS_BMP280_INIT_TOOLTIP"]);
  },
};

// Luo Wen Cheng: CHJHS SSD1306
Blockly.Blocks["chjhs_oled128x64_init"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_RESOLUTION"] + ":");
    this.appendValueInput("WIDTH").setCheck("Number").appendField(Blockly.Msg["TEXT_WIDTH"]);
    this.appendValueInput("HEIGHT").setCheck("Number").appendField(Blockly.Msg["TEXT_HEIGHT"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_SETUP_I2C"])
      .appendField(
        new Blockly.FieldDropdown([
          ["SSD1306（Grove）", "SSD1306_Grove"],
          ["SSD1306", "SSD1306"],
        ]),
        "OLED_TYPE"
      );
    this.setInputsInline(!0);
    this.setOutput(!0, "Number");
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_oled128x64_rotation"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_DISPLAY_ROTATION"])
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_DISPLAY_ROTATION_ZERO"], "0"],
          [Blockly.Msg["TEXT_DISPLAY_ROTATION_NINETY"], "1"],
          [Blockly.Msg["TEXT_DISPLAY_ROTATION_ONE_HUNDRED_EIGHTY"], "2"],
          [Blockly.Msg["TEXT_DISPLAY_ROTATION_TWO_HUNDRED_SEVENTY"], "3"],
        ]),
        "ROTATION"
      );
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_oled128x64_flip"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["OLED_DISPLAY_FLIP_VERTICAL"])
      .appendField(
        new Blockly.FieldDropdown([
          ["False", "0"],
          ["True", "1"],
        ]),
        "FLIP_MODE"
      );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_oled128x64_set_cursor"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_DISPLAY_SET_CURSOR"]);
    this.appendValueInput("X").setCheck("Number").appendField("X");
    this.appendValueInput("Y").setCheck("Number").appendField("Y");
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_oled128x64_show"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_DISPLAY_EN_NUM_TEXT"]);
    this.appendValueInput("X").setCheck("Number").appendField("X");
    this.appendValueInput("Y").setCheck("Number").appendField("Y");
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField(Blockly.Msg["TEXT_DISPLAY_PUT_STRING"]);
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_oled128x64_draw_pixel"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_PIXEL"]);
    this.appendValueInput("X").setCheck("Number").appendField("X");
    this.appendValueInput("Y").setCheck("Number").appendField("Y");
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_oled128x64_draw_line"] = {
	init: function () {
		this.setHelpUrl("");
		this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_LINE"]);
    this.appendValueInput("SX").setCheck("Number").appendField(Blockly.Msg["TEXT_DISPLAY_START_X"]);
    this.appendValueInput("SY").setCheck("Number").appendField(Blockly.Msg["TEXT_DISPLAY_START_Y"]);
    this.appendValueInput("EX").setCheck("Number").appendField(Blockly.Msg["TEXT_DISPLAY_END_X"]);
    this.appendValueInput("EY").setCheck("Number").appendField(Blockly.Msg["TEXT_DISPLAY_END_Y"]);
    this.setInputsInline(!0);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);}
};

Blockly.Blocks["chjhs_oled128x64_draw_rectangle"] = {
	init: function () {
		this.setHelpUrl("");
		this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_RECTANGLE"]);
    this.appendValueInput("LT_X").setCheck("Number").appendField(Blockly.Msg["TEXT_DISPLAY_LEFT_TOP_X"]);
    this.appendValueInput("LT_Y").setCheck("Number").appendField(Blockly.Msg["TEXT_DISPLAY_LEFT_TOP_Y"]);
    this.appendValueInput("WIDTH").setCheck("Number").appendField(Blockly.Msg["TEXT_WIDTH"]);
    this.appendValueInput("HEIGHT").setCheck("Number").appendField(Blockly.Msg["TEXT_HEIGHT"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "MODE")
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_FILL_MODE"]);
    this.setInputsInline(!0);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);}
};

Blockly.Blocks["chjhs_oled128x64_draw_round_rectangle"] = {
	init: function () {
		this.setHelpUrl("");
		this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_ROUND_RECTANGLE"]);
    this.appendValueInput("LT_X").setCheck("Number").appendField(Blockly.Msg["TEXT_DISPLAY_LEFT_TOP_X"]);
    this.appendValueInput("LT_Y").setCheck("Number").appendField(Blockly.Msg["TEXT_DISPLAY_LEFT_TOP_Y"]);
    this.appendValueInput("WIDTH").setCheck("Number").appendField(Blockly.Msg["TEXT_WIDTH"]);
    this.appendValueInput("HEIGHT").setCheck("Number").appendField(Blockly.Msg["TEXT_HEIGHT"]);
    this.appendValueInput("R").setCheck("Number").appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_ROUND_RECTANGLE_RADIUS_R"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "MODE")
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_FILL_MODE"]);
    this.setInputsInline(!0);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);}
};

Blockly.Blocks["chjhs_oled128x64_display"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_DISPLAY_DISPLAY"]);
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_oled128x64_clear"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_LCD1602_CLEAR"]);
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_oled128x64_pixel_color"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_LCD1602_PIXEL_COLOR"])
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_CHJHS_BLACK"], "BLACK"],
          [Blockly.Msg["TEXT_CHJHS_WHITE"], "WHITE"],
          [Blockly.Msg["TEXT_CHJHS_INVERSE"], "INVERSE"],
        ]),
        "COLOR_MODE"
      );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_oled128x64_font_size"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_LCD1602_FONT_SIZE"])
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_CHJHS_SMALL"], "1"],
          [Blockly.Msg["TEXT_CHJHS_NORMAL"], "2"],
          [Blockly.Msg["TEXT_CHJHS_BIG"], "3"],
          [Blockly.Msg["TEXT_CHJHS_LARGE"], "4"],
        ]),
        "FONT_SIZE"
      );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_oled128x64_display_bitmap"] = {
	init: function () {
		this.setHelpUrl("");
		this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_DISPLAY_DISPLAY_BITMAP"]);
    this.appendValueInput("X").setCheck("Number").appendField("X");
    this.appendValueInput("Y").setCheck("Number").appendField("Y");
		this.appendValueInput("BITMAP");
    this.appendValueInput("WIDTH").setCheck("Number").appendField(Blockly.Msg["TEXT_WIDTH"]);
    this.appendValueInput("HEIGHT").setCheck("Number").appendField(Blockly.Msg["TEXT_HEIGHT"]);
    this.setInputsInline(!0);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);}
};

Blockly.Blocks["chjhs_oled128x64_bitmap"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_DISPLAY_BITMAP"])
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_DISPLAY_LOGO_CHJHS"], "CHJHS"],
          [Blockly.Msg["TEXT_DISPLAY_LOGO_GAMEOVER"], "GAMEOVER"],
        ]),
        "BITMAP"
      );
    this.setInputsInline(!0);
    this.setOutput(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_oled128x64_inverse_font"] = {
  init: function () {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_LCD1602_INVERSE_FONT"])
      .appendField(
        new Blockly.FieldDropdown([
          ["False", "0"],
          ["True", "1"],
        ]),
        "INVERSE_MODE"
      );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks['chjhs_oled128x64_draw_circle'] = {
  init: function() {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_CIRCLE"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_CIRCLE_CENTER_X"]);
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_CIRCLE_CENTER_Y"]);
    this.appendValueInput("R")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_CIRCLE_RADIUS_R"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "MODE")
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_FILL_MODE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_oled128x64_draw_triangle'] = {
  init: function() {
    this.setColour(Blockly.Msg["DISPLAY_HUE"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_TRIANBLE"]);
    this.appendValueInput("X1")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_TRIANBLE_X1"]);
    this.appendValueInput("Y1")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_TRIANBLE_Y1"]);
        this.appendValueInput("X2")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_TRIANBLE_X2"]);
    this.appendValueInput("Y2")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_TRIANBLE_Y2"]);
        this.appendValueInput("X3")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_TRIANBLE_X3"]);
    this.appendValueInput("Y3")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_TRIANBLE_Y3"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "MODE")
        .appendField(Blockly.Msg["TEXT_DISPLAY_DRAW_FILL_MODE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_oled128x64_return_parameter'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_OLED128X64_TITLE"])
      .appendField(Blockly.Msg["TEXT_OLED128X64_GET_PARAMETER"])
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg["TEXT_OLED128X64_GET_PARAMETER_CURSOR_X"],"CX"], [Blockly.Msg["TEXT_OLED128X64_GET_PARAMETER_CURSOR_Y"],"CY"], [Blockly.Msg["TEXT_WIDTH"],"W"], [Blockly.Msg["TEXT_HEIGHT"],"H"], [Blockly.Msg["TEXT_OLED128X64_GET_PARAMETER_ROTATION"],"R"]]), "PARAMETER");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(Blockly.Msg["DISPLAY_HUE"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



// Luo Wen Cheng: CHJHS WS2812
Blockly.Blocks["chjhs_ws2812_neopixel_begin"] = {
  init: function () {
    this.setColour(Blockly.Msg["RGBLED_HUE"]);
    this.appendDummyInput()
      .appendField("WS2812")
      .appendField(Blockly.Msg["TEXT_CHJHS_SETUP"])
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("strip"), "varName");
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_WS2812_PIXEL_FORMAT"])
      .appendField(
        new Blockly.FieldDropdown([
          ["GRB", "GRB"],
          ["RGB", "RGB"],
        ]),
        "PIXEL_FORMAT"
      );
    this.appendValueInput("PIN")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.appendValueInput("TOTAL")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_WS2812_LED_NUMBER"]);
    this.appendValueInput("BRIGHTNESS")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_BRIGHTNESS"] + "(0~255)");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_ws2812_neopixel_set_all_led_color"] = {
  init: function () {
    this.setColour(Blockly.Msg["RGBLED_HUE"]);
    this.appendDummyInput()
      .appendField("WS2812")
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("strip"), "varName")
      .appendField(Blockly.Msg["TEXT_CHJHS_WS2812_SET_ALL_LED_COLOR"]);
    this.appendValueInput("COLOR").setCheck("String");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_ws2812_neopixel_set_color"] = {
  init: function () {
    this.setColour(Blockly.Msg["RGBLED_HUE"]);
    this.appendDummyInput()
      .appendField("WS2812")
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("strip"), "varName");
    this.appendValueInput("INDEX")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_WS2812_SET_LED"]);
    this.appendValueInput("COLOR")
      .setCheck("String")
      .appendField(Blockly.Msg["TEXT_CHJHS_COLOR"]);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_ws2812_neopixel_brightness"] = {
  init: function () {
    this.setColour(Blockly.Msg["RGBLED_HUE"]);
    this.appendDummyInput()
      .appendField("WS2812")
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("strip"), "varName");
    this.appendValueInput("BRIGHTNESS")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_BRIGHTNESS"] + "(0~255)");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_ws2812_neopixel_show"] = {
  init: function () {
    this.setColour(Blockly.Msg["RGBLED_HUE"]);
    this.appendDummyInput()
      .appendField("WS2812")
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("strip"), "varName")
      .appendField(Blockly.Msg["TEXT_CHJHS_WS2812_UPDATE_SHOW"]);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_ws2812_neopixel_trun_off"] = {
  init: function () {
    this.setColour(Blockly.Msg["RGBLED_HUE"]);
    this.appendDummyInput()
      .appendField("WS2812")
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("strip"), "varName")
      .appendField(Blockly.Msg["TEXT_CHJHS_TURN_OFF"]);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_ws2812_color_flow"] = {
  init: function () {
    this.setColour(Blockly.Msg["RGBLED_HUE"]);
    this.appendDummyInput()
      .appendField("WS2812")
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("strip"), "varName");
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_WS2812_FLOW"])
      .appendField(
        new Blockly.FieldDropdown(Blockly.Msg["TEXT_CHJHS_WS2812_FLOW_LIST"]),
        "DIRECTION"
      );
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_ws2812_color_next"] = {
  init: function () {
    this.setColour(Blockly.Msg["RGBLED_HUE"]);
    this.appendDummyInput()
      .appendField("WS2812")
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("strip"), "varName");
    this.appendValueInput("COLOR")
      .setCheck("String")
      .appendField(Blockly.Msg["TEXT_CHJHS_WS2812_COLOR_NEXT"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_DIRECTION"])
      .appendField(
        new Blockly.FieldDropdown(Blockly.Msg["TEXT_CHJHS_WS2812_FLOW_LIST"]),
        "DIRECTION"
      );
    this.appendValueInput("INTERVAL")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_TIME_INTERVAL"]);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_ws2812_color_blink"] = {
  init: function () {
    this.setColour(Blockly.Msg["RGBLED_HUE"]);
    this.appendDummyInput()
      .appendField("WS2812")
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("strip"), "varName");
    this.appendValueInput("COLOR1")
      .setCheck("String")
      .appendField(Blockly.Msg["TEXT_CHJHS_WS2812_COLOR_BLINK"])
      .appendField(Blockly.Msg["TEXT_CHJHS_COLOR"] + "1");
    this.appendValueInput("COLOR2")
      .setCheck("String")
      .appendField(Blockly.Msg["TEXT_CHJHS_COLOR"] + "2");
    this.appendValueInput("INTERVAL")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_TIME_INTERVAL"]);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_ws2812_color_breathe"] = {
  init: function () {
    this.setColour(Blockly.Msg["RGBLED_HUE"]);
    this.appendDummyInput()
      .appendField("WS2812")
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("strip"), "varName");
    this.appendValueInput("COLOR")
      .setCheck("String")
      .appendField(Blockly.Msg["TEXT_CHJHS_WS2812_COLOR_BREATHE"])
      .appendField(Blockly.Msg["TEXT_CHJHS_COLOR"]);
    this.appendValueInput("INTERVAL")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_TIME_INTERVAL"]);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("");
  },
};

// Luo Wen Cheng: CHJHS Ultrasonic HC-SR04
Blockly.Blocks["chjhs_ultrasonic_init"] = {
  init: function () {
    this.setColour(Blockly.Msg["SENSOR_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_ULTRASONIC"])
      .appendField(Blockly.Msg["TEXT_CHJHS_SETUP"])
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("sonar"), "varName");
    this.appendValueInput("TRIG_PIN")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_TRIG_PIN"]);
    this.appendValueInput("ECHO_PIN")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_ECHO_PIN"]);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_ultrasonic_get_distance"] = {
  init: function () {
    this.setColour(Blockly.Msg["SENSOR_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_ULTRASONIC"])
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("sonar"), "varName")
      .appendField(Blockly.Msg["TEXT_CHJHS_DISTANCE"]);
    this.setInputsInline(!0);
    this.setOutput(!0, "Number");
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_dht_init"] = {
  init: function () {
    this.setColour(Blockly.Msg["SENSOR_HUE"]);
    this.appendDummyInput()
      .appendField(
        Blockly.Msg["TEXT_CHJHS_DHT_SENSOR"] +
          " " +
          Blockly.Msg["TEXT_CHJHS_SETUP"]
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["DHT11", "DHT11"],
          ["DHT22", "DHT22"],
        ]),
        "DHT_TYPE"
      )
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("dht"), "varName");
    this.appendValueInput("PIN")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_dht_read"] = {
  init: function () {
    this.setColour(Blockly.Msg["SENSOR_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_DHT_SENSOR"])
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("dht"), "varName");
    this.appendValueInput("PIN")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_PIN"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_MESUREMENT_TYPE"])
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_CHJHS_HUMIDITY_PERCENT"], "H"],
          [Blockly.Msg["TEXT_CHJHS_TEMPERATURE_CELCIUS"], "C"],
          [Blockly.Msg["TEXT_CHJHS_TEMPERATURE_FAHRENHEIT"], "F"],
        ]),
        "TYPE"
      );
    this.setInputsInline(!0);
    this.setOutput(!0, "Number");
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_dht_compute_heat_index"] = {
  init: function () {
    this.setColour(Blockly.Msg["SENSOR_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_DHT_SENSOR"])
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("dht"), "varName")
      .appendField(Blockly.Msg["TEXT_CHJHS_DHT_COMPUTE_HEAT_INDEX"]);
    this.appendValueInput("C")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_TEMPERATURE_CELCIUS"]);
    this.appendValueInput("H")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_HUMIDITY_PERCENT"]);
    this.setInputsInline(!0);
    this.setOutput(!0, "Number");
    this.setTooltip("");
  },
};

// Luo Wen Cheng: CHJHS BMP280
Blockly.Blocks["chjhs_bmp280_init"] = {
  init: function () {
    this.setColour(Blockly.Msg["SENSOR_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_BMP280"])
      .appendField(Blockly.Msg["TEXT_CHJHS_SETUP"])
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("bmp"), "varName");
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_I2C"])
      .appendField(
        new Blockly.FieldDropdown([
          ["0x76（GY）", "0x76"],
          ["0x77（Grove）", "0x77"],
        ]),
        "ADDRESS"
      );
    this.setInputsInline(!0);
    this.setOutput(!0, "Number");
    this.setTooltip(Blockly.Msg["TEXT_CHJHS_BMP280_INIT_TOOLTIP"]);
  },
};

Blockly.Blocks["chjhs_bmp280_read_value"] = {
  init: function () {
    this.setColour(Blockly.Msg["SENSOR_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_BMP280"])
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("bmp"), "varName");
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_MESUREMENT_TYPE"])
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_CHJHS_TEMPERATURE_CELCIUS"], "C"],
          [Blockly.Msg["TEXT_CHJHS_BAROMETRIC_PRESSURE_PA"], "Pa"],
          [Blockly.Msg["TEXT_CHJHS_ALTITUDE_ABOVE_SEA_LEVEL_METER"], "m"],
        ]),
        "TYPE"
      );
    this.setInputsInline(!0);
    this.setOutput(!0, "Number");
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_bmp280_compute_water_boiling_point"] = {
  init: function () {
    this.setColour(Blockly.Msg["SENSOR_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_BMP280"])
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("bmp"), "varName")
      .appendField(
        Blockly.Msg["TEXT_CHJHS_BMP280_COMPUTE_WATER_BOILING_POINT"]
      );
    this.appendValueInput("hPa")
      .setCheck("Number")
      .appendField(Blockly.Msg["TEXT_CHJHS_BAROMETRIC_PRESSURE_HPA"]);
    this.setInputsInline(!0);
    this.setOutput(!0, "Number");
    this.setTooltip("");
  },
};

// Luo Wen Cheng: CHJHS LIS3DHTR, ADXL345
Blockly.Blocks["chjhs_lis3dhtr_init"] = {
  init: function () {
    this.setColour(Blockly.Msg["SENSOR_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_LIS3DHTR"])
      .appendField(Blockly.Msg["TEXT_CHJHS_SETUP"])
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("LIS"), "varName");
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_I2C_ADDRESS"])
      .appendField(
        new Blockly.FieldDropdown([["0x19（Grove）", "0x19"]]),
        "ADDRESS"
      );
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_lis3dhtr_get_data"] = {
  init: function () {
    this.setColour(Blockly.Msg["SENSOR_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_LIS3DHTR"])
      .appendField(Blockly.Msg["TEXT_CHJHS_VARIABLE_NAME"])
      .appendField(new Blockly.FieldVariable("LIS"), "varName")
      .appendField(Blockly.Msg["TEXT_CHJHS_MESUREMENT_TYPE"]);
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_CHJHS_AXIS_X"], "X"],
          [Blockly.Msg["TEXT_CHJHS_AXIS_Y"], "Y"],
          [Blockly.Msg["TEXT_CHJHS_AXIS_Z"], "Z"],
        ]),
        "TYPE"
      )
      .appendField(Blockly.Msg["TEXT_CHJHS_GRAVITY"]);
    this.setInputsInline(!0);
    this.setOutput(!0, "Number");
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_adxl345_init"] = {
  init: function () {
    this.setColour(Blockly.Msg["SENSOR_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_ADXL345"])
      .appendField(Blockly.Msg["TEXT_CHJHS_SETUP"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_I2C_ADDRESS"])
      .appendField(
        new Blockly.FieldDropdown([["0x53（ADXL345）", "0x53"]]),
        "ADDRESS"
      );
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("");
  },
};

Blockly.Blocks["chjhs_adxl345_get_data"] = {
  init: function () {
    this.setColour(Blockly.Msg["SENSOR_HUE"]);
    this.appendDummyInput()
      .appendField(Blockly.Msg["TEXT_CHJHS_ADXL345"])
      .appendField(Blockly.Msg["TEXT_CHJHS_MESUREMENT_TYPE"]);
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_CHJHS_AXIS_X"], "X"],
          [Blockly.Msg["TEXT_CHJHS_AXIS_Y"], "Y"],
          [Blockly.Msg["TEXT_CHJHS_AXIS_Z"], "Z"],
        ]),
        "TYPE"
      )
      .appendField(Blockly.Msg["TEXT_CHJHS_GRAVITY"]);
    this.setInputsInline(!0);
    this.setOutput(!0, "Number");
    this.setTooltip("");
  },
};


// Luo Wen Cheng: CHJHS Tetris
Blockly.Blocks['chjhs_tetris_create_hardware_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_TITLE"])
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_HARDWARD_VARIABLES"]);
    this.appendValueInput("UP")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_UP_KEY"]);
    this.appendValueInput("DOWN")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_DOWN_KEY"]);
    this.appendValueInput("LEFT")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_LEFT_KEY"]);
    this.appendValueInput("RIGHT")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_RIGHT_KEY"]);
    this.appendValueInput("SOUND")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_SOUND_PIN"]);
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TEXT_WIDTH"]);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TEXT_HEIGHT"]);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_create_all_blocks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_TITLE"])
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_ALL_BLOCKS"])
        .appendField(new Blockly.FieldImage("./media/CHJHS_Tetris_S.png", 45, 45, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldImage("./media/CHJHS_Tetris_T.png", 45, 45, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldImage("./media/CHJHS_Tetris_L.png", 45, 45, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldImage("./media/CHJHS_Tetris_O.png", 45, 45, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldImage("./media/CHJHS_Tetris_J.png", 45, 45, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldImage("./media/CHJHS_Tetris_I.png", 45, 45, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldImage("./media/CHJHS_Tetris_Z.png", 45, 45, { alt: "*", flipRtl: "FALSE" }));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_get_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_TITLE"]);
    this.appendValueInput("ROTATION")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_BLOCK_DIRECTION"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_CHJHS_AXIS_X"]);
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_CHJHS_AXIS_Y"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_GET_BLOCK_VALUE"])
        .appendField(new Blockly.FieldDropdown([
          [{"src":"./media/CHJHS_Tetris_S.png","width":45,"height":45,"alt":"*"},"S"],
          [{"src":"./media/CHJHS_Tetris_T.png","width":45,"height":45,"alt":"*"},"T"],
          [{"src":"./media/CHJHS_Tetris_L.png","width":45,"height":45,"alt":"*"},"L"],
          [{"src":"./media/CHJHS_Tetris_O.png","width":45,"height":45,"alt":"*"},"O"],
          [{"src":"./media/CHJHS_Tetris_J.png","width":45,"height":45,"alt":"*"},"J"],
          [{"src":"./media/CHJHS_Tetris_I.png","width":45,"height":45,"alt":"*"},"I"],
          [{"src":"./media/CHJHS_Tetris_Z.png","width":45,"height":45,"alt":"*"},"Z"]
        ]), "TYPE");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_get_hardware_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_GET_HARDWARD_VARIABLES"])
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_CHJHS_TETRIS_UP_BUTTON_PIN"],"UP_BTN_PIN"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_DOWN_BUTTON_PIN"],"DOWN_BTN_PIN"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_LEFT_BUTTON_PIN"],"LEFT_BTN_PIN"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_RIGHT_BUTTON_PIN"],"RIGHT_BTN_PIN"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_SPEAKER_PIN"],"SPEAKER_PIN"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_RIGHT_BUTTON_UP"],"is_right_button_up"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_LEFT_BUTTON_UP"],"is_left_button_up"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_UP_BUTTON_UP"],"is_up_button_up"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_TIMER"],"timer"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_DELAYER"],"delayer"],
          [Blockly.Msg["TEXT_WIDTH"],"WIDTH"],
          [Blockly.Msg["TEXT_HEIGHT"],"HEIGHT"]]), "VAR");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_set_hardware_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_SET_HARDWARD_VARIABLES"])
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_CHJHS_TETRIS_UP_BUTTON_PIN"],"UP_BTN_PIN"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_DOWN_BUTTON_PIN"],"DOWN_BTN_PIN"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_LEFT_BUTTON_PIN"],"LEFT_BTN_PIN"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_RIGHT_BUTTON_PIN"],"RIGHT_BTN_PIN"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_SPEAKER_PIN"],"SPEAKER_PIN"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_RIGHT_BUTTON_UP"],"is_right_button_up"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_LEFT_BUTTON_UP"],"is_left_button_up"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_UP_BUTTON_UP"],"is_up_button_up"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_TIMER"],"timer"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_DELAYER"],"delayer"]]), "VAR");
    this.appendValueInput("VALUE")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_create_game_variables'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK"]);
    this.appendValueInput("BLOCK_D")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK_DIMENSION"]);
    this.appendValueInput("BLOCK_E")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK_SPACE"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_GAME_SPACE"]);
    this.appendValueInput("SCENE_X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TEXT_WIDTH"]);
    this.appendValueInput("SCENE_Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TEXT_HEIGHT"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_GAME_SOUND"] + ", " + 
        Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_GAME_SCORE"] + ", " + 
        Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK_TYPE"] + ", " + 
        Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK_ROTATION"] + ", " + 
        Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK_POSITION"]);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_get_game_variables'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_GET"])
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_CURRENT_TYPE"],"currentType"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_NEXT_TYPE"],"nextType"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_ROTATION"],"rotation"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_PIECE_X"],"pieceX"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_PIECE_Y"],"pieceY"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_INTERVAL"],"interval"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_SCORE"],"score"],
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK"],"piece"],
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_GAME_SPACE"],"grid"],
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_CLICK_TONE"],"click_tone"],
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_ERASE_TONE"],"erase_tone"],
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_TONE_DURATION"],"tone_duration"],
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_MARGIN_TOP"],"MARGIN_TOP"],
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_MARGIN_LEFT"],"MARGIN_LEFT"],
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_SIZE"],"SIZE"],
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_TYPES"],"TYPES"]]), "VAR");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_set_game_variables'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_SET"])
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_CURRENT_TYPE"],"currentType"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_NEXT_TYPE"],"nextType"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_ROTATION"],"rotation"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_PIECE_X"],"pieceX"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_PIECE_Y"],"pieceY"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_INTERVAL"],"interval"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_SCORE"],"score"]]), "VAR");
    this.appendValueInput("VALUE")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_get_game_variables_2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_GET"])
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK"],"piece"],  
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_GAME_SPACE"],"grid"]]), "VAR");
    this.appendValueInput("D")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK_DIMENSION"]);
    this.appendValueInput("S")
        .setCheck("Number")
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK_SPACE"]);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_set_game_variables_2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_SET"])
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK"],"piece"], 
          [Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_GAME_SPACE"],"grid"]]), "VAR");
          this.appendValueInput("D")
          .setCheck("Number")
          .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK_DIMENSION"]);
    this.appendValueInput("S")
          .setCheck("Number")
          .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK_SPACE"]);
    this.appendValueInput("VALUE")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_copy_piece'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_COPY_BLOCK"]);
    this.appendValueInput("PIECE")
        .setCheck(null)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_BLOCK"]);
    this.appendValueInput("TYPE")
        .setCheck(null)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_TYPE"]);
    this.appendValueInput("ROTATION")
        .setCheck(null)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK_ROTATION"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_draw_layout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_DRAW_LAYOUT"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_refresh'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_REFRESH"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_generate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_GENERATE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_check_lines'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CHECK_LINES"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_current_collision'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CURRENT_COLLISION"]);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_next_horizontal_collision'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_NEXT_HORIZONTAL_COLLISION"]);
    this.appendValueInput("PIECE")
        .setCheck(null)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_BLOCK"]);
    this.appendValueInput("AMOUNT")
        .setCheck(null)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_MOVE_AMOUNT"]);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_next_collision'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_NEXT_COLLISION"]);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_get_max_rotation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_GET_MAX_ROTATION"]);
    this.appendValueInput("TYPE")
        .setCheck(null)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_TYPE"]);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chjhs_tetris_can_rotation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CAN_ROTATE"]);
    this.appendValueInput("ROTATION")
        .setCheck(null)
        .appendField(Blockly.Msg["TEXT_CHJHS_TETRIS_CREATE_GAME_VARIABLES_BLOCK_ROTATION"]);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Msg["COLOR_TETRIS"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Keyboard
Blockly.Blocks.keyboards={};
Blockly.Blocks.keyboards.HUE=Blockly.Msg["COLOR_KEYPAYS"];
Blockly.Blocks.keyboards_0_init={init:function(){
  this.setHelpUrl(Blockly.Msg.KEYBOARDS_HELPURL);
  this.setColour(Blockly.Blocks.keyboards.HUE);
  this.appendDummyInput()
      .appendField(Blockly.Msg.KEYBOARDS_TITLE+'(3X4)')
      .appendField(Blockly.Msg.KEYBOARDS_INIT);
  this.appendValueInput("PIN_0")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"1");
  this.appendValueInput("PIN_1")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"2");
  this.appendValueInput("PIN_2")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"3");
  this.appendValueInput("PIN_3")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"4");
  this.appendValueInput("PIN_4")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"5");
  this.appendValueInput("PIN_5")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"6");
  this.appendValueInput("PIN_6")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"7");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.KEYBOARDS_TOOLTIP)}
};

Blockly.Blocks.keyboards_1_init={init:function(){
  this.setHelpUrl(Blockly.Msg.KEYBOARDS_HELPURL);
  this.setColour(Blockly.Blocks.keyboards.HUE);
  this.appendDummyInput()
      .appendField(Blockly.Msg.KEYBOARDS_TITLE+'(4X4)')
      .appendField(Blockly.Msg.KEYBOARDS_INIT);
  this.appendValueInput("PIN_0")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"1");
  this.appendValueInput("PIN_1")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"2");
  this.appendValueInput("PIN_2")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"3");
  this.appendValueInput("PIN_3")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"4");
  this.appendValueInput("PIN_4")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"5");
  this.appendValueInput("PIN_5")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"6");
  this.appendValueInput("PIN_6")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"7");
  this.appendValueInput("PIN_7")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEXT_CHJHS_PIN+"8");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.KEYBOARDS_TOOLTIP)}
};

Blockly.Blocks.keyboards_check={init:function(){
  this.setHelpUrl(Blockly.Msg.KEYBOARDS_HELPURL);
  this.setColour(Blockly.Blocks.keyboards.HUE);
  this.appendDummyInput()
      .appendField(Blockly.Msg.KEYBOARDS_TITLE)
      .appendField(Blockly.Msg.KEYBOARDS_CHECK);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.KEYBOARDS_TOOLTIP)}
};

Blockly.Blocks.keyboards_event={init:function(){
  this.setHelpUrl(Blockly.Msg.KEYBOARDS_HELPURL);
  this.setColour(Blockly.Blocks.keyboards.HUE);
  this.appendDummyInput()
      .appendField(Blockly.Msg.KEYBOARDS_TITLE)
      .appendField(Blockly.Msg.KEYBOARDS_EVENT);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.KEYBOARDS_EVENT_LIST),"EVENT");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.appendStatementInput("KEYBOARD_EVENT");
  this.setTooltip(Blockly.Msg.KEYBOARDS_TOOLTIP)}
};

Blockly.Blocks.keyboards_value={init:function(){
  this.setHelpUrl(Blockly.Msg.KEYBOARDS_HELPURL);
  this.setColour(Blockly.Blocks.keyboards.HUE);
  this.appendDummyInput()
      .appendField(Blockly.Msg.KEYBOARDS_TITLE)
      .appendField(Blockly.Msg.KEYBOARDS_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.KEYBOARDS_TOOLTIP)}
};


//STEPPER
Blockly.Blocks.chjhs_stepper={};
Blockly.Blocks.chjhs_stepper.HUE = Blockly.Msg["COLOR_STEPPER"];
Blockly.Blocks.chjhs_stepper_init={init:function(){
  this.setHelpUrl(Blockly.Msg.CHJHS_STEPPER_HELPURL);
  this.setColour(Blockly.Blocks.chjhs_stepper.HUE);
	this.appendDummyInput()
	    .appendField(Blockly.Msg.CHJHS_STEPPER_TITLE)
      .appendField(Blockly.Msg.LJJ_SERIAL_INIT);
	this.appendDummyInput() 
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.CHJHS_STEPPER_LIST),"INDEX")
      .appendField(Blockly.Msg.LIOU_ROBOT_PIN);
  this.appendValueInput("PIN1")
      .setCheck("Number")
      .appendField('IN_1');
  this.appendValueInput("PIN2")
      .setCheck("Number")  
      .appendField('IN_2');
  this.appendValueInput("PIN3")
      .setCheck("Number")  
      .appendField('IN_3');
  this.appendValueInput("PIN4")
      .setCheck("Number")  
      .appendField('IN_4');
  this.appendValueInput("stepsPerRev")
      .setCheck("Number")
      .appendField(Blockly.Msg.CHJHS_STEPPER_STEP_PRE_REV);
  this.appendValueInput("stepDelay")
      .setCheck("Number")
      .appendField(Blockly.Msg.CHJHS_STEPPER_SETP_DELAY);
  this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
  this.setTooltip(Blockly.Msg.CHJHS_STEPPER_TOOLTIP)}
};

Blockly.Blocks.chjhs_stepper_move={init:function(){
  this.setHelpUrl(Blockly.Msg.CHJHS_STEPPER_HELPURL);
  this.setColour(Blockly.Blocks.chjhs_stepper.HUE);
	this.appendDummyInput()
	    .appendField(Blockly.Msg.CHJHS_STEPPER_TITLE)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.CHJHS_STEPPER_LIST),"INDEX")
  this.appendValueInput("STEPS")
      .setCheck("Number")
      .appendField(Blockly.Msg.CHJHS_STEPPER_MOVE_STEPS);
  this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
  this.setTooltip(Blockly.Msg.CHJHS_STEPPER_TOOLTIP)}
};

Blockly.Blocks.chjhs_stepper_move_to={init:function(){
  this.setHelpUrl(Blockly.Msg.CHJHS_STEPPER_HELPURL);
  this.setColour(Blockly.Blocks.chjhs_stepper.HUE);
	this.appendDummyInput()
	    .appendField(Blockly.Msg.CHJHS_STEPPER_TITLE)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.CHJHS_STEPPER_LIST),"INDEX")
  this.appendValueInput("STEPS")
      .setCheck("Number")
      .appendField(Blockly.Msg.CHJHS_STEPPER_MOVE_TO);
  this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
  this.setTooltip(Blockly.Msg.CHJHS_STEPPER_TOOLTIP)}
};

Blockly.Blocks.chjhs_stepper_run={init:function(){
  this.setHelpUrl(Blockly.Msg.CHJHS_STEPPER_HELPURL);
  this.setColour(Blockly.Blocks.chjhs_stepper.HUE);
	this.appendDummyInput()
	    .appendField(Blockly.Msg.CHJHS_STEPPER_TITLE)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.CHJHS_STEPPER_LIST),"INDEX")
  this.appendDummyInput()
      .appendField(Blockly.Msg.CHJHS_STEPPER_RUN);
  this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
  this.setTooltip(Blockly.Msg.CHJHS_STEPPER_TOOLTIP)}
};

Blockly.Blocks.chjhs_stepper_stop={init:function(){
  this.setHelpUrl(Blockly.Msg.CHJHS_STEPPER_HELPURL);
  this.setColour(Blockly.Blocks.chjhs_stepper.HUE);
	this.appendDummyInput()
	    .appendField(Blockly.Msg.CHJHS_STEPPER_TITLE)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.CHJHS_STEPPER_LIST),"INDEX")
      .appendField(Blockly.Msg.CHJHS_STEPPER_STOP);
  this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
  this.setTooltip(Blockly.Msg.CHJHS_STEPPER_TOOLTIP)}
};

Blockly.Blocks.chjhs_stepper_statement_not_moving={init:function(){
  this.setHelpUrl(Blockly.Msg.CHJHS_STEPPER_HELPURL);
  this.setColour(Blockly.Blocks.chjhs_stepper.HUE);
	this.appendDummyInput()
	    .appendField(Blockly.Msg.CHJHS_STEPPER_TITLE)
      .appendField(Blockly.Msg.LIOU_ROBOT_WHEN)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.CHJHS_STEPPER_LIST),"INDEX")
      .appendField(Blockly.Msg.CHJHS_STEPPER_STATEMENT_NOT_MOVING);
	this.setInputsInline(true);
  this.appendStatementInput("STEPPER_NOT_MOVING_IF");
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
  this.setTooltip(Blockly.Msg.CHJHS_STEPPER_TOOLTIP)}
};

Blockly.Blocks.chjhs_stepper_is_moving={init:function(){
  this.setHelpUrl(Blockly.Msg.CHJHS_STEPPER_HELPURL);
  this.setColour(Blockly.Blocks.chjhs_stepper.HUE);
	this.appendDummyInput()
	    .appendField(Blockly.Msg.CHJHS_STEPPER_TITLE)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.CHJHS_STEPPER_LIST),"INDEX")
      .appendField(Blockly.Msg.CHJHS_STEPPER_IS_MOVING);
  this.setInputsInline(true);
  this.setOutput(!0,"Boolean");
  this.setTooltip(Blockly.Msg.CHJHS_STEPPER_TOOLTIP)}
};

Blockly.Blocks.chjhs_stepper_remain_steps={init:function(){
  this.setHelpUrl(Blockly.Msg.CHJHS_STEPPER_HELPURL);
  this.setColour(Blockly.Blocks.chjhs_stepper.HUE);
	this.appendDummyInput()
	    .appendField(Blockly.Msg.CHJHS_STEPPER_TITLE)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.CHJHS_STEPPER_LIST),"INDEX")
      .appendField(Blockly.Msg.CHJHS_STEPPER_REMAIN_STEPS);
  this.setInputsInline(true);
  this.setOutput(!0,"Number");
  this.setTooltip(Blockly.Msg.CHJHS_STEPPER_TOOLTIP)}
};

Blockly.Blocks.chjhs_stepper_position={init:function(){
  this.setHelpUrl(Blockly.Msg.CHJHS_STEPPER_HELPURL);
  this.setColour(Blockly.Blocks.chjhs_stepper.HUE);
	this.appendDummyInput()
	    .appendField(Blockly.Msg.CHJHS_STEPPER_TITLE)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.CHJHS_STEPPER_LIST),"INDEX")
      .appendField(Blockly.Msg.CHJHS_STEPPER_POSITION);
  this.setInputsInline(true);
  this.setOutput(!0,"Number");
  this.setTooltip(Blockly.Msg.CHJHS_STEPPER_TOOLTIP)}
};



