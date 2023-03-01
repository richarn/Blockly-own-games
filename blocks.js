Blockly.Blocks['mover'] = {
    init: function() {
        this.jsonInit({

            "type": "movimiento",
            "message0": "mover %1",
        "args0": [
            {
                "type": "input_value",
                "name": "VALUE",
                "check": "String"
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    });
          
    }
};

Blockly.JavaScript['mover'] = function(block) {
    // returns a string for testing.
    var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
    Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
    console.log("argument0", argument0);
    // let result = ['mover('+argument0+')', Blockly.JavaScript.ORDER_MEMBER];
    // console.log("result", result);
    return 'mover('+argument0+')';
    
};


  //genera el bloque
  Blockly.Blocks['move_up'] = {
      init: function() {
        this.jsonInit({
          "message0": '"Arriba"',
          "args0": [],
          "output": "String",
          "colour": 160,
          "tooltip": "arriba."
        });
      }
    };
    
    //generador move up
    Blockly.JavaScript['move_up'] = function(block) {
      // returns a string for testing.
      return ['"move_up "', Blockly.JavaScript.ORDER_MEMBER];
    };

    Blockly.Blocks['move_down'] = {
      init: function() {
        this.jsonInit({
          "message0": '"Abajo"',
          "args0": [],
          "output": "String",
          "colour": 160,
          "tooltip": "abajo."
        });
      }
    };

    //generador move down
    Blockly.JavaScript['move_down'] = function(block) {
      // returns a string for testing.
      return ['"move_down"', Blockly.JavaScript.ORDER_MEMBER];
    }    

    Blockly.Blocks['move_left'] = {
      init: function() {
        this.jsonInit({
          "message0": '"Izquierda"',
          "args0": [],
          "output": "String",
          "colour": 160,
          "tooltip": "izquierda."
        });
      }
    };

    //generador move left
    Blockly.JavaScript['move_left'] = function(block) {
      // returns a string for testing.
      return ['"move_left"', Blockly.JavaScript.ORDER_MEMBER];
    }    

    Blockly.Blocks['move_rigth'] = {
      init: function() {
        this.jsonInit({
          "message0": '"Derecha"',
          "args0": [],
          "output": "String",
          "colour": 160,
          "tooltip": "derecha."
        });
      }
    };
    
    //generador move rigth 
    Blockly.JavaScript['move_rigth'] = function(block) {
      // returns a string for testing.
      return ['"move_rigth"', Blockly.JavaScript.ORDER_MEMBER];
    }

