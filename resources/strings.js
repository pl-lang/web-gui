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
                "No se reconoce el operador ",
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
    }
  }
}

export default strings
