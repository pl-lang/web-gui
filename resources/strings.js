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
    },
    "@expression-undefined-variable":{
      "title":[{
        "tag": "div",
        "class": "bar flex-row space-between center-align error-bar",
        "content":[{
          "tag": "span",
          "class": "title small-title error-title",
          "content": ["Se usó una variable inexistente."]
        }]
      }],
      "description":[{
        "tag":"p",
        "content":[
          "La variable  ",
          {"tag":"span", "class":"code", "content":["${var name}"]},
          " forma parte de una expresión pero nunca fue declarada. "
        ],
        "class":""
      }],
      "suggestion":[{
        "tag":"p",
        "content":["Todas las variables deben ser declaradas antes de ser utilizadas."],
        "class":""
      }]
    },
    "@expression-incompatible-operator-types":{
      "title":[{
        "tag": "div",
        "class": "bar flex-row space-between center-align error-bar",
        "content":[{
          "tag": "span",
          "class": "title small-title error-title",
          "content": ["Se está intentando operar con datos de tipos incompatibles."]
        }]
      }],
      "description":[{
        "tag":"p",
        "content":[
          "El operador  ",
          {"tag":"span", "class":"code", "content":["${var operator}"]},
          " solo soporta datos de tipo:",
          {"tag":"ul", "prop":"expected", "template":{"tag":"li", "content":[{"tag":"span", "class":"code", "content":["${var item}"]}]}},
          {"tag":"p", "content":[
            "Pero recibió un dato de tipo ",
            {"tag":"span", "class":"code", "content":["${var unexpected}"]},
            "."
          ]}
        ],
        "class":""
      }],
      "suggestion":[{
        "tag":"p",
        "content":["Todas las variables deben ser declaradas antes de ser utilizadas."],
        "class":""
      }]
    },
    "index-out-of-bounds":{
      "title":[{
        "tag": "div",
        "class": "bar flex-row space-between center-align error-bar",
        "content":[{
          "tag": "span",
          "class": "title small-title error-title",
          "content": ["Se intentó acceder al valor de un arreglo con un indice fuera de limite."]
        }]
      }],
      "description":[{
        "tag":"p",
        "content":[
          "Al acceder a un valor del arreglo ",
          {"tag":"span", "class":"code", "content":["${var name}"]},
          " el indice numero ",
          {"tag":"span", "content":["${var bad_index}"]},
          " está fuera del limite. Se esperaba un numero entero entre 1 y ",
          {"tag":"span", "content":["${var expected}"]},
          ", pero se recibió ",
          {"tag":"span", "content":["${var bad_value}", "."]}
        ]
      }],
      "suggestion":[{
        "tag":"p",
        "content":["Los indices que se usan al acceder a un arreglo deben ser mayores a 1 y menores a la dimension correspondiente del arreglo."]
      }]
    },
    "@array-too-many-indexes":{
      "title":[{
        "tag": "div",
        "class": "bar flex-row space-between center-align error-bar",
        "content":[{
          "tag": "span",
          "class": "title small-title error-title",
          "content": ["Se usaron demasiados indices al acceder a un elemento de un arreglo"]
        }]
      }],
      "description":[{
        "tag":"p",
        "content":[
          "Al acceder a un elemento de ",
          {"tag":"span", "class":"code", "content":["${var name}"]},
          " se recibieron ",
          {"tag":"span", "content":["${var indexes}"]},
          " indices pero el arreglo solo necesita ",
          {"tag":"span", "content":["${var dimensions}"]},
          "."
        ]
      }],
      "suggestion":[{
        "tag":"p",
        "content":["No debes usar mas indices de los necesarios para acceder a un elemento de un arreglo."]
      }]
    },
    "@array-not-enough-indexes":{
      "title":[{
        "tag": "div",
        "class": "bar flex-row space-between center-align error-bar",
        "content":[{
          "tag": "span",
          "class": "title small-title error-title",
          "content": ["Se usaron menos indices de los necesarios al acceder a un elemento de un arreglo"]
        }]
      }],
      "description":[{
        "tag":"p",
        "content":[
          "Al acceder a un elemento de ",
          {"tag":"span", "class":"code", "content":["${var name}"]},
          " se usó ",
          {"tag":"span", "content":["${var indexes}"]},
          " indice/s pero el arreglo necesita ",
          {"tag":"span", "content":["${var dimensions}"]},
          "."
        ]
      }],
      "suggestion":[{
        "tag":"p",
        "content":["No debes usar menos indices de los necesarios para acceder a un elemento de un arreglo."]
      }]
    },
    "@array-missing-index":{
      "title":[{
        "tag": "div",
        "class": "bar flex-row space-between center-align error-bar",
        "content":[{
          "tag": "span",
          "class": "title small-title error-title",
          "content": ["Se intentó acceder a un arreglo sin especificar ningun indice."]
        }]
      }],
      "description":[{
        "tag":"p",
        "content":[
          "No se especificó ningun indice al intentar acceder a un elemento del arreglo ",
          {"tag":"span", "class":"code", "content":["${var name}"]},
          ".",
          " Los indices indican que elemento del arreglo se quiere obtener o modificar."
        ]
      }],
      "suggestion":[{
        "tag":"p",
        "content":[
          "Modifica tu codigo para que use ",
          {"tag":"span", "content":["${var expected}"]},
          " indice/s al acceder elementos de a ",
          {"tag":"span", "class":"code", "content":["${var name}"]},
          "."
        ]
      }]
    },
    "var-isnt-array":{
      "title":[{
        "tag": "div",
        "class": "bar flex-row space-between center-align error-bar",
        "content":[{
          "tag": "span",
          "class": "title small-title error-title",
          "content": ["Se intentó invocar una variable como si fuera un arreglo."]
        }]
      }],
      "description":[{
        "tag":"p",
        "content":[
          "La variable ",
          {"tag":"span", "class":"code", "content":["${var name}"]},
          " no es un arreglo, no es necesario usar indices para acceder al valor que contiene."
        ]
      }],
      "suggestion":[{
        "tag":"p",
        "content":[
          "Quita los indices de la invocacion de ",
          {"tag":"span", "class":"code", "content":["${var name}"]},
          "."
        ]
      }]
    },
    "@assignment-undefined-variable":{
      "title":[{
        "tag": "div",
        "class": "bar flex-row space-between center-align error-bar",
        "content":[{
          "tag": "span",
          "class": "title small-title error-title",
          "content": ["Se intentó asignar a una variable inexistente."]
        }]
      }],
      "description":[{
        "tag":"p",
        "content":[
          "La variable ",
          {"tag":"span", "class":"code", "content":["${var name}"]},
          " no está declarada pero se intentó asignarle un valor."
        ]
      }],
      "suggestion":[{
        "tag":"p",
        "content":[
          "Las variables deben ser declaradas antes de ser utilizadas."
        ]
      }]
    },
    "@assignment-undefined-variable-with-type":{
      "title":[{
        "tag": "div",
        "class": "bar flex-row space-between center-align error-bar",
        "content":[{
          "tag": "span",
          "class": "title small-title error-title",
          "content": ["Se intentó asignar a una variable inexistente."]
        }]
      }],
      "description":[{
        "tag":"p",
        "content":[
          "La variable ",
          {"tag":"span", "class":"code", "content":["${var name}"]},
          " no está declarada pero se intentó asignarle un valor de tipo ",
          {"tag":"span", "class":"code", "content":["${var type}"]},
          "."
        ]
      }],
      "suggestion":[{
        "tag":"p",
        "content":[
          "Para solucionar este error declara una variable llamada ",
          {"tag":"span", "class":"code", "content":["${var name}"]},
          " de tipo ",
          {"tag":"span", "class":"code", "content":["${var type}"]},
          "."
        ]
      }]
    }
  }
}

export default strings
