const strings = {
  "lexical-error":{
    "unknownToken":{
      "title":[
        {
          "tag":"div",
          "class":"bar flex-row space-between center-align error-bar",
          "content":[
            {
              "tag":"pre",
              "class":"title small-title error-title",
              "content":[
                "No se reconoce el caracter ",
                {"tag":"span", "class":"code", "content":["${var unexpectedChar}"]}
              ]
            }
          ]
        }
      ],
      "description":[
        {
          "tag":"p",
          "content":["Se encontró un caracter desconocido al leer el código"],
          "class":""
        }
      ],
      "suggestion":[
        {
          "tag":"p",
          "content":["Para corregir el error, elimina el caracter desconocido"],
          "class":""
        }
      ]
    }
  },
  "type-error": {
    "default":{
      "title":[{
        "tag":"div",
        "class":"bar flex-row space-between center-align error-bar",
        "content":[
          {
            "tag":"pre",
            "class":"title small-title error-title",
            "content":["El programa contiene un error de tipo en alguna linea..."]
          }
        ]
      }]
    },
    "@leer-variable-doesnt-exist":{
      "title":[{
        "tag":"div",
        "class":"bar flex-row space-between center-align error-bar",
        "content":[{"class":"title small-title error-title", "content":"Se esta intentando leer una variable no declarada."}]
      }],
      "description":[{
        "tag":"p",
        "content":["La variable ", {"tag":"span", "class":"code", "content":["${var name}"]}, " no existe."],
        "class":""
      }],
      "suggestion":[{
        "tag":"p",
        "content":["Para arreglar este error, declara la variable ", {"tag":"span", "class":"code", "content":["${var name}"]}, ". Asegurate de usar el tipo correcto."],
        "class":""
      }]
    },
    'incompatible-types-at-assignment': {
      "title":[{
        "tag": "div",
        "class": "bar flex-row space-between center-align error-bar",
        "content":[{
          "tag": "span",
          "class": "title small-title error-title",
          "content": [
            "Se intentó asignar un valor ",
            {"tag":"span", "class":"code", "content":["${var payload_type}"]},
            " a una variable de tipo ",
            {"tag":"span", "class":"code", "content":["${var target_type}"]}
          ]
        }]
      }],
      "description":[{
        "tag":"p",
        "content":[
          "No se pueden asignar valores de tipo ",
          {"tag":"span", "class":"code", "content":["${var payload_type}"]},
          " a variables de tipo ",
          {"tag":"span", "class":"code", "content":["${var target_type}"]},
          " porque los tipos no son compatibles."
        ],
        "class":""
      }],
      "suggestion":[{
        "tag":"p",
        "content":["Deberias cambiar el tipo de la variable o el tipo del valor que quieres asignarle."],
        "class":""
      }]
    },
    "repeated-variable":{
      "title":[{
        "tag": "div",
        "class": "bar flex-row space-between center-align error-bar",
        "content":[{
          "tag": "span",
          "class": "title small-title error-title",
          "content": ["Al menos dos variables tienen el mismo nombre."]
        }]
      }],
      "description":[{
        "tag":"p",
        "content":[
          "Cada variable debe tener un nombre unico, pero hay al menos dos variables llamadas ",
          {"tag":"span", "class":"code", "content":["${var name}"]},
          ". La original es de tipo ",
          {"tag":"span", "class":"code", "content":["${var original_type}"]},
          " y la repetida es de tipo ",
          {"tag":"span", "class":"code", "content":["${var repeated_type}"]},
          "."
        ],
        "class":""
      }],
      "suggestion":[{
        "tag":"p",
        "content":["Asegurate de que cada variable tenga un nombre unico."],
        "class":""
      }]
    },
    "@condition-invalid-expression":{
      "title":[{
        "tag": "div",
        "class": "bar flex-row space-between center-align error-bar",
        "content":[{
          "tag": "span",
          "class": "title small-title error-title",
          "content": ["La condicion de una estructura no devuelve un valor logico."]
        }]
      }],
      "description":[{
        "tag":"p",
        "content":[
          "Una estructura tiene una condicion que devuelve un valor de tipo ",
          {"tag":"span", "class":"code", "content":["${var unexpected}"]},
          ", cuando debería devolver un valor de tipo ",
          {"tag":"span", "class":"code", "content":["logico"]},
          "."
        ],
        "class":""
      }],
      "suggestion":[{
        "tag":"p",
        "content":["Modifica la condicion para que sea una expresion logica."],
        "class":""
      }]
    }
  }
}

export default strings
