module.exports = [{
  "url": "/mock/events",
  "method": "get",
  "type": "jsf",
  "response": {
      "type": "object",
      "required": ["status", "data"],
      "properties": {
          "status": {
              "type": "string",
              "pattern": "ok"
          },
          "data": {
              "type": "array",
              "uniqueItems": true,
              "minItems": 6,
              "items": {
                  "type": "object",
                  "required": ["id", "name", "created_at", "type", "repo", "avatar"],
                  "properties": {
                      "id": {
                          "$ref": "#/definitions/positiveInt"
                      },
                      "name": {
                          "type": "string",
                          "faker": "name.findName"
                      },
                      "created_at": {
                          "type": "string",
                          "chance": {
                              "date": {
                                  "string": true
                              }
                          }
                      },
                      "type": {
                          "type": "string",
                          "enum": ["pull request", "push", "create", "delete"]
                      },
                      "repo": {
                          "type": "string",
                          "faker": "commerce.product"
                      },
                      "avatar": {
                          "type": "string",
                          "faker": "internet.avatar"
                      }
                  }
              }
          }
      },
      "definitions": {
          "positiveInt": {
              "type": "integer",
              "minimum": 0,
              "exclusiveMinimum": true
          }
      }
  }
},
{
  "url": /mock\/event\/\d+/,
  "method": "get",
  "type": "jsf",
  "response": {
      "type": "object",
      "required": ["status", "data"],
      "properties": {
          "status": {
              "type": "string",
              "pattern": "ok"
          },
          "data": {
              "type": "object",
              "required": ["name", "created_at", "title", "avatar", "message"],
              "properties": {
                  "name": {
                      "type": "string",
                      "faker": "name.findName"
                  },
                  "created_at": {
                      "type": "string",
                      "chance": {
                          "date": {
                              "string": true
                          }
                      }
                  },
                  "title": {
                      "type": "string",
                      "enum": ["Owner", "Contributor"]
                  },
                  "avatar": {
                      "type": "string",
                      "faker": "internet.avatar"
                  },
                  "message": {
                      "type": "string",
                      "faker": "lorem.paragraph"
                  }
              }
          }
      }
  }
},
{
  "url": "/mock/event",
  "method": "post",
  "response": {
      "status": "ok",
      "data": {
          "id": 6
      }
  }
},
{
  "url": "/mock/event",
  "method": "delete",
  "response": {
      "status": "ok",
      "data": {
          "id": 6
      }
  }
},
{
  "url": "/mock/event",
  "method": "put",
  "response": {
      "status": "ok",
      "data": {
          "id": 6
      }
  }
}
]