const documentacao = {
  openapi: "3.0.3",
  info: {
    title: "API Usuarios",
    description: "Documentação da API de usuários",
    version: "1.0.0"
  },
  servers: [
    {
      url: "http://localhost:3003",
      description: "localhost"
    }
  ],
  tags: [
    { name: "Usuários", description: "operações relacionadas aos usuários" },
    { name: "Servico", description: "operações relacionadas aos serviços" },
    { name: "Agendamento", description: "operações relacionadas aos agendamentos" }
  ],
  paths: {
    "/usuarios": {
      get: {
        tags: ["Usuários"],
        summary: "Listar usuários",
        security: [
          {bearerAuth: []}
        ],
        responses: {
          200: {
            description: "Dados obtidos com sucesso",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Lista_Usuarios" }
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["Usuários"],
        summary: "Cadastrar novo usuário",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Cadastro_Usuario" }
            }
          }
        },
        responses: {
          201: { description: "Usuário cadastrado com sucesso" },
          400: { description: "Erro na requisição" },
          500: { description: "Erro interno no servidor" }
        }
      }
    },

    "/usuarios/{id_usuario}": {
      put: {
        tags: ["Usuários"],
        summary: "Atualizar usuário completo",
        security: [
          {bearerAuth: []}
        ],
        parameters: [
          {
            name: "id_usuario",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Atualizacao_Usuario" }
            }
          }
        },
        responses: {
          200: { description: "Usuário atualizado" },
          404: { description: "Usuário não encontrado" }
        }
      },

      delete: {
        tags: ["Usuários"],
        summary: "Remover usuário",
        security: [
          {bearerAuth: []}
        ],
        parameters: [
          {
            name: "id_usuario",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        responses: {
          200: { description: "Usuário removido com sucesso" }
        }
      }
    },

    "/login": {
      post: {
        tags: ["Usuários"],
        summary: "Realizar login",
        description: "Autentica um usuário e retorna seus dados",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Login_Usuario" }
            }
          }
        },
        responses: {
          200: {
            description: "Login realizado com sucesso",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Resposta_Login" }
              }
            }
          },
          400: { description: "Erro na requisição" },
          500: { description: "Erro interno no servidor" }
        }
      }
    },
    "/servicos": {
      get: {
        tags: ["Servico"],
        summary: "Listar serviços",
        security: [
          {bearerAuth: []}
        ],
        responses: {
          200: {
            description: "Dados obtidos com sucesso",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Lista_Servico" }
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["Servico"],
        summary: "Cadastrar novo serviço",
        security: [
          {bearerAuth: []}
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Cadastro_Servico" }
            }
          }
        },
        responses: {
          201: { description: "Serviço cadastrado com sucesso" },
          400: { description: "Erro na requisição" },
          500: { description: "Erro interno no servidor" }
        }
      }
    },

    "/servico/{id_servico}": {
      put: {
        tags: ["Servico"],
        summary: "Atualizar serviços completo",
        security: [
          {bearerAuth: []}
        ],
        parameters: [
          {
            name: "id_servico",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Atualizacao_Servico" }
            }
          }
        },
        responses: {
          200: { description: "serviço atualizado" },
          404: { description: "serviço não encontrado" }
        }
      },

      delete: {
        tags: ["Servico"],
        summary: "Remover serviço",
        security: [
          {bearerAuth: []}
        ],
        parameters: [
          {
            name: "id_servico",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        responses: {
          200: { description: "Serviço removido com sucesso" }
        }
      }
    },
    "/agendamentos": {
      get: {
        tags: ["Agendamento"],
        summary: "Listar agendamentos",
        security: [
          {bearerAuth: []}
        ],
        responses: {
          200: {
            description: "Dados obtidos com sucesso",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Lista_Agendamento" }
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["Agendamento"],
        summary: "Cadastrar novo agendamento",
        security: [
          {bearerAuth: []}
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Cadastro_Agendamento" }
            }
          }
        },
        responses: {
          201: { description: "Usuário cadastrado com sucesso" },
          400: { description: "Erro na requisição" },
          500: { description: "Erro interno no servidor" }
        }
      }
    },

    "/agendamentos/{id_agendamentos}": {
      put: {
        tags: ["Agendamento"],
        summary: "Atualizar agendamento completo",
        security: [
          {bearerAuth: []}
        ],
        parameters: [
          {
            name: "id_agendamento",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Atualizacao_Agendamento" }
            }
          }
        },
        responses: {
          200: { description: "Usuário atualizado" },
          404: { description: "Usuário não encontrado" }
        }
      },

      delete: {
        tags: ["Agendamento"],
        summary: "Remover agendamento",
        security: [
          {bearerAuth: []}
        ],
        parameters: [
          {
            name: "id_agendamento",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        responses: {
          200: { description: "Agendamento removido com sucesso" }
        }
      }
    },


  },
  components: {
    securitySchemes:{
      bearerAuth:{
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description:'Insira o Token obtido no login'
      }
    },
    schemas: {
      Lista_Usuarios: {
        type: "object",
        properties: {
          id_usuario: { type: "integer", example: 1 },
          nome: { type: "string", example: "João" },
          email: { type: "string", example: "joao@email.com" }
        }
      },

      Cadastro_Usuario: {
        type: "object",
        required: ["nome", "email", "senha"],
        properties: {
          nome: { type: "string" },
          email: { type: "string" },
          senha: { type: "string" },
          tipo: { type: "string", example: "admin" }
        }
      },

      Atualizacao_Usuario: {
        type: "object",
        required: ["nome", "email", "senha"],
        properties: {
          nome: { type: "string" },
          email: { type: "string" },
          senha: { type: "string" },
          tipo: { type: "string" }
        }
      },
      Lista_Servico: {
        type: "object",
        properties: {
          id_usuario: { type: "integer", example: 1 },
          nome: { type: "string", example: "João" },
          email: { type: "string", example: "joao@email.com" }
        }
      },

      Cadastro_Servico: {
        type: "object",
        required: ["nome", "email", "senha"],
        properties: {
          nome: { type: "string" },
          email: { type: "string" },
          senha: { type: "string" },
          tipo: { type: "string", example: "admin" }
        }
      },

      Atualizacao_Servico: {
        type: "object",
        required: ["nome", "email", "senha"],
        properties: {
          nome: { type: "string" },
          email: { type: "string" },
          senha: { type: "string" },
          tipo: { type: "string" }
        }
      },
      Lista_Agendamento: {
        type: "object",
        properties: {
          id_usuario: { type: "integer", example: 1 },
          nome: { type: "string", example: "João" },
          email: { type: "string", example: "joao@email.com" }
        }
      },

      Cadastro_Agendamento: {
        type: "object",
        required: ["nome", "email", "senha"],
        properties: {
          nome: { type: "string" },
          email: { type: "string" },
          senha: { type: "string" },
          tipo: { type: "string", example: "admin" }
        }
      },

      Atualizacao_Agendamento: {
        type: "object",
        required: ["nome", "email", "senha"],
        properties: {
          nome: { type: "string" },
          email: { type: "string" },
          senha: { type: "string" },
          tipo: { type: "string" }
        }
      },

      Login_Usuario: {
        type: "object",
        required: ["email", "senha"],
        properties: {
          email: { type: "string", example: "usuario@gmail.com" },
          senha: { type: "string", example: "senha123" }
        }
      },

      Resposta_Login: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Login realizado com sucesso"
          },
          token: {
            type:'string',
            description: 'Token JWT gerado',
            example: 'eyjklakgrisikuyy...'
          },
          usuario: {
            type: "object",
            properties: {
              id_usuario: { type: "integer", example: 1 },
              email: { type: "string", example: "usuario@email.com" }
            }
          }
        }
      },
    }
  }
};

export default documentacao;