const documentacao = {
    openapi: "3.0.3",
    info: {
        title: 'API Ordem de serviços',
        description: 'Documentação da API de ordens de serviço',
        version: '1.0.0'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'localhost'

        }
    ],
    tags: [
        { name: 'Usuários', description: 'operações realacionadas aos usuários' },
        { name: 'Departamentos', description: 'operações realacionadas aos Departamentos' },
        { name: 'OrdemServico', description: 'operações realacionadas a OrdemServicos' }
    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar usuários",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "apllication/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Usuarios" }
                                }
                            }
                        }
                    }
                }
            },
            post:{
                tags:['Usuários'],
                summary: 'Cadastrar novo usuário',
                description: 'Recebe nome, email, senha para cadastrar novo usuario',
                requestBody:{
                    required: true,
                    content:{
                        'application/json':{
                            schema:{
                                $ref: '#/components/schemas/Cadastro_Usuario'
                            }
                        }
                    }
                },
                responses:{
                    201:{
                        description: "Usuario cadastrado com sucesso",
                    },
                    400:{
                        description: 'Erro na requisição(preencha todos os campos)'
                    },
                    500:{
                        description: 'Erro interno no servidor'
                    }
                }
            }
        },
        "/usuarios/{id_usuario}":{
            put:{
                tags:["Usuários"],
                summary: "Atualizar usuario completo",
                description:"atualiza todos os campos dos usuarios existente, sendo nescessário enviar todos os campos(nome, email, senha)",
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuario a ser atualizado",
                        schema:{type: "integer"},
                        example: 1
                    }
                ],
                requestBody:{
                    required: true,
                    content:{
                        "application/json":{
                            schema: {$ref: '#/components/schemas/Atualizacao_Usuario'}
                        }
                    }
                },
                responses:{
                    200: {
                        description:"Usuario atualizado com sucesso",
                        content:{"application/json": {example: "Usuario atualizado"}}
                    },
                    404: {description:"Usuario noa encontrado",
                        content:{"application/json": {example: "Usuario não encontrado"}}},
                    500: {description:"Erro no servidor"}
                }
            },
            patch:{
                tags:["Usuários"],
                summary: "Atualizar parcialmente o usuário",
                description:"atualiza apenas os campos enviados, não sendo necessarioenviar todos os campos",
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuario a ser atualizado",
                        schema:{type: "integer"},
                        example: 1
                    }
                ],
                requestBody:{
                    required: true,
                    content:{
                        "application/json":{
                            schema: {$ref: '#/components/schemas/Atualizacao_Parcial_Usuario'},
                            examples: {
                                apenas_nome: {summary: "Atualizar apenas o nome", value: {nome: "Novo Nome"}},
                                apenas_email: {summary: "Atualizar apenas o email", value: {email: "novo@email.com"}},
                            }
                        }
                    }
                },
                responses:{
                    200: {
                        description:"Usuario atualizado com sucesso",
                        content:{"application/json": {example: "Usuario atualizado"}}
                    },
                    400: {
                        description: "Nenhum campo a ser atualizado"
                    },
                    404: {description:"Usuario noa encontrado",
                        content:{"application/json": {example: "Usuario não encontrado"}}},
                    500: {description:"Erro no servidor"}
                }
            },
            delete:{
                tags:["Usuários"],
                summary: "Remover o usuário",
                description:"Remover os usuarios",
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuario a ser removido",
                        schema:{type: "integer"},
                        example: 1
                    }
                ],
                responses:{
                    200: {
                        description:"Usuario removido com sucesso",
                        content:{"application/json": {example: "Usuario removido"}}
                    },
                    500: {description:"Erro no servidor"}
                }
            },
        },
        "/departamentos": {
            get: {
                tags: ["Departamentos"],
                summary: "Listar departamentos",
                responses: {
                    200: {
                        description: "dados obtidos com sucesso",
                        content: {
                            "apllication/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Departamentos" }
                                }
                            }
                        }
                    }
                }
            },
            post:{
                tags:['Departamentos'],
                summary: 'Cadastrar novo departamentos',
                description: 'Recebe nome, descrição para cadastrar novo departamentos',
                requestBody:{
                    required: true,
                    content:{
                        'application/json':{
                            schema:{
                                $ref: '#/components/schemas/Cadastro_departamentos'
                            }
                        }
                    }
                },
                responses:{
                    201:{
                        description: "departamentos cadastrado com sucesso",
                    },
                    400:{
                        description: 'Erro na requisição(preencha todos os campos)'
                    },
                    500:{
                        description: 'Erro interno no servidor'
                    }
                }
            }

        },
        "/departamentos/{id_departamento}":{
            put:{
                tags:["Departamentos"],
                summary: "Atualizar departamento completo",
                description:"atualiza todos os campos dos departamentos existente, sendo nescessário enviar todos os campos(nome, descricao)",
                parameters: [
                    {
                        name: "id_departamento",
                        in: "path",
                        required: true,
                        description: "ID do departamento a ser atualizado",
                        schema:{type: "integer"},
                        example: 1
                    }
                ],
                requestBody:{
                    required: true,
                    content:{
                        "application/json":{
                            schema: {$ref: '#/components/schemas/Atualizacao_departamento'}
                        }
                    }
                },
                responses:{
                    200: {
                        description:"departamento atualizado com sucesso",
                        content:{"application/json": {example: "departamento atualizado"}}
                    },
                    404: {description:"departamento noa encontrado",
                        content:{"application/json": {example: "departamento não encontrado"}}},
                    500: {description:"Erro no servidor"}
                }
            },
            patch:{
                tags:["Departamentos"],
                summary: "Atualizar parcialmente o departamento",
                description:"atualiza apenas os campos enviados, não sendo necessario enviar todos os campos",
                parameters: [
                    {
                        name: "id_departamento",
                        in: "path",
                        required: true,
                        description: "ID do departamento a ser atualizado",
                        schema:{type: "integer"},
                        example: 1
                    }
                ],
                requestBody:{
                    required: true,
                    content:{
                        "application/json":{
                            schema: {$ref: '#/components/schemas/Atualizacao_Parcial_Departamento'},
                            examples: {
                                apenas_nome: {summary: "Atualizar apenas o nome", value: {nome: "Novo Nome"}},
                                apenas_descricao: {summary: "Atualizar apenas a descricao", value: {descricao: "Nova Descrição"}},
                            }
                        }
                    }
                },
                responses:{
                    200: {
                        description:"Departamento atualizado com sucesso",
                        content:{"application/json": {example: "Departamento atualizado"}}
                    },
                    400: {
                        description: "Nenhum campo a ser atualizado"
                    },
                    404: {description:"Departamento noa encontrado",
                        content:{"application/json": {example: "Departamento não encontrado"}}},
                    500: {description:"Erro no servidor"}
                }
            },
            delete:{
                tags:["Departamentos"],
                summary: "Remover o departamento",
                description:"Remover os departamento",
                parameters: [
                    {
                        name: "id_departamento",
                        in: "path",
                        required: true,
                        description: "ID do departamento a ser removido",
                        schema:{type: "integer"},
                        example: 1
                    }
                ],
                responses:{
                    200: {
                        description:"Departamento removido com sucesso",
                        content:{"application/json": {example: "Departamento removido"}}
                    },
                    500: {description:"Erro no servidor"}
                }
            },
        },
        "/ordem_servicos": {
            get: {
                tags: ['OrdemServico'],
                summary: "Lista da ordem de servições",
                responses: {
                    200: {
                        description: "dados obtidos com sucesso",
                        content: {
                            "apllication/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Ordem" }
                                }
                            }
                        }
                    }
                }
            },
            post:{
                tags:['OrdemServico'],
                summary: 'Cadastrar nova ordem',
                description: 'Recebe nr_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento para cadastrar novo usuario',
                requestBody:{
                    required: true,
                    content:{
                        'application/json':{
                            schema:{
                                $ref: '#/components/schemas/Cadastro_Ordem'
                            }
                        }
                    }
                },
                responses:{
                    201:{
                        description: "Ordem cadastrado com sucesso",
                    },
                    400:{
                        description: 'Erro na requisição(preencha todos os campos)'
                    },
                    500:{
                        description: 'Erro interno no servidor'
                    }
                }
            }
        },
        "/ordem_servicos/{id_ordem}":{
            put:{
                tags:["OrdemServico"],
                summary: "Atualizar ordem_servicos completo",
                description:"atualiza todos os campos dos ordem_servicoss existente, sendo nescessário enviar todos os campos(nome, email, senha)",
                parameters: [
                    {
                        name: "id_ordem",
                        in: "path",
                        required: true,
                        description: "ID do ordem_servicos a ser atualizado",
                        schema:{type: "integer"},
                        example: 1
                    }
                ],
                requestBody:{
                    required: true,
                    content:{
                        "application/json":{
                            schema: {$ref: '#/components/schemas/Atualizacao_ordem_servicos'}
                        }
                    }
                },
                responses:{
                    200: {
                        description:"ordem_servicos atualizado com sucesso",
                        content:{"application/json": {example: "ordem_servicos atualizado"}}
                    },
                    404: {description:"ordem_servicos noa encontrado",
                        content:{"application/json": {example: "ordem_servicos não encontrado"}}},
                    500: {description:"Erro no servidor"}
                }
            },
            patch:{
                tags:["OrdemServico"],
                summary: "Atualizar parcialmente a ordem",
                description:"atualiza apenas os campos enviados, não sendo necessario enviar todos os campos",
                parameters: [
                    {
                        name: "id_ordem",
                        in: "path",
                        required: true,
                        description: "ID da ordem a ser atualizado",
                        schema:{type: "integer"},
                        example: 1
                    }
                ],
                requestBody:{
                    required: true,
                    content:{
                        "application/json":{
                            schema: {$ref: '#/components/schemas/Atualizacao_Parcial_ordem_servico'},
                            examples: {
                                apenas_titulo: {summary: "Atualizar apenas o titulo", value: {titulo: "Novo Nome"}},
                                apenas_descricao: {summary: "Atualizar apenas a descricao", value: {descricao: "Nova Descrição"}},
                                apenas_prioridade: {summary: "Atualizar apenas a prioridade", value: {prioridade: "Nova prioridade"}},
                                apenas_status: {summary: "Atualizar apenas o status", value: {status: "Novo status"}},
                                apenas_data: {summary: "Atualizar apenas a data", value: {data: "Nova Data"}},
                                apenas_id_usuario: {summary: "Atualizar apenas o id_usuario", value: {id_usuario: "Novo id_usuario"}},
                                apenas_id_departamento: {summary: "Atualizar apenas o id_departamento", value: {id_usuario: "Novo id_departamento"}},
                            }
                        }
                    }
                },
                responses:{
                    200: {
                        description:"Ordem atualizado com sucesso",
                        content:{"application/json": {example: "Ordem atualizado"}}
                    },
                    400: {
                        description: "Nenhum campo a ser atualizado"
                    },
                    404: {description:"Ordem noa encontrado",
                        content:{"application/json": {example: "Ordem não encontrado"}}},
                    500: {description:"Erro no servidor"}
                }
            },
            delete:{
                tags:["OrdemServico"],
                summary: "Remover a ordem",
                description:"Remover as ordem",
                parameters: [
                    {
                        name: "id_ordem",
                        in: "path",
                        required: true,
                        description: "ID da ordem a ser removido",
                        schema:{type: "integer"},
                        example: 1
                    }
                ],
                responses:{
                    200: {
                        description:"Ordem removido com sucesso",
                        content:{"application/json": {example: "Ordem removido"}}
                    },
                    500: {description:"Erro no servidor"}
                }
            },
        },
    },
    components: {
        schemas: {
            Lista_Usuarios: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "ricardo" },
                    email: { type: "string", example: 'ricardo@email.com' }
                }
            },
            Cadastro_Usuario: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "ricardo" },
                    email: { type: "string", example: 'ricardo@email.com' },
                    senha: { type: "string", example: "senha123" }
                }
            },
            Atualizacao_Usuario: {
                type: "object",
                required: ["nome", "email", "senha"] ,
                properties: {
                    nome: { type: "string", example: "ricardo" },
                    email: { type: "string", example: 'ricardo@email.com' },
                    senha: { type: "string", example: "senha123" }
                }
            },
            Atualizacao_Parcial_Usuario: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "ricardo" },
                    email: { type: "string", example: 'ricardo@email.com' },
                    senha: { type: "string", example: "senha123" }
                }
            },
            Lista_Departamentos: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "sala 3" },
                    descricao: { type: "string", example: "entre e vire a esquerda" }
                }
            },
            Cadastro_departamentos: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "carregador quebrado" },
                    descricao: { type: "string", example: 'entre na sala 4' },
                }
            },
            Atualizacao_departamento: {
                type: "object",
                required: ["nome", "descricao"],
                properties: {
                    nome: { type: "string", example: "sala 3" },
                    descricao: { type: "string", example: "entre e vire a esquerda" }
                }
            },
            Atualizacao_Parcial_Departamento: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "ricardo" },
                    descricao: { type: "string", example: 'descrição' }
                }
            },
            Lista_Ordem: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nr_ordem: { type: "integer", example: 1001 },
                    titulo: { type: "string", example: 'trocar cabo de rede' },
                    descricao: { type: "string", example: "ponto de rede da sala 203 esta sem conexão" },
                    prioridade: { type: "string", example: "media" },
                    status: { type: "string", example: "em andamento" },
                    data: { type: "date", example: "2026-02-26"},
                    id_usuario: {type: "integer", example: 1},
                    id_departamento: {type: "integer", example: 1}
                }
            },
            Cadastro_Ordem: {
                type: "object",
                properties: {
                    nr_ordem: { type: "integer", example: 1001 },
                    titulo: { type: "string", example: 'trocar cabo de rede' },
                    descricao: { type: "string", example: "ponto de rede da sala 203 esta sem conexão" },
                    prioridade: { type: "string", example: "media" },
                    status: { type: "string", example: "em andamento" },
                    data: { type: "date", example: "2026-02-26"},
                    id_usuario: {type: "integer", example: 1},
                    id_departamento: {type: "integer", example: 1}
                }
            },
            Atualizacao_ordem_servicos: {
                type: "object",
                required: ["titulo", "descricao", "prioridade", "status", "data", "id_usuario", "id_departamento"] ,
                properties: {
                    titulo: { type: "string", example: 'trocar cabo de rede' },
                    descricao: { type: "string", example: "ponto de rede da sala 203 esta sem conexão" },
                    prioridade: { type: "string", example: "media" },
                    status: { type: "string", example: "em andamento" },
                    data: { type: "date", example: "2026-02-26"},
                    id_usuario: {type: "integer", example: 1},
                    id_departamento: {type: "integer", example: 1}
                }
            },
            Atualizacao_Parcial_ordem_servicos: {
                type: "object",
                properties: {
                    titulo: { type: "string", example: "titulo" },
                    descricao: { type: "string", example: 'descrição' },
                    prioridade: { type: "string", example: 'prioridade' },
                    status: { type: "string", example: 'status' },
                    data: { type: "string", example: 'data' },
                    id_usuario: { type: "string", example: 'id_usuario' },
                    id_departamento: { type: "string", example: 'id_departamento' }
                }
            }
        }
    }
}

export default documentacao