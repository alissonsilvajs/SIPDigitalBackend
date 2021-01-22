# Documentação da API

Os seguintes exemplos servirão para teste a aplicação criada para o teste.

## API - Autenticação

- `POST /session`: Obtém o token de autenticação do usuário
Exemplo de envio:
```
{
  "email": "teste@gmail.com",
  "password": "12345678"
}
```

- `POST /user/store`: Cadastra um usuário.
Exemplo de envio:
```
{
	"name": "Teste",
	"email": "teste@gmail.com",
	"password": "12345678",
	"confirmPassword": "12345678"
}
```

## API - Produtos

- `GET /products`: Retorna todos os produtos.
Exemplo de resposta:
```
[
  {
    "id": 4,
    "name": "Teste",
    "price": "R$ 100,00",
    "description": "Lorem ipsum sit dolor amet",
    "image": "anything.png"
  }
]
```

- `GET /products/:id`: Retorna um produto de acordo com o paramêtro inserido.

Exemplo de resposta:
```
{
  "id": 4,
  "name": "Teste",
  "price": "R$ 100,00",
  "description": "Lorem ipsum sit dolor amet",
  "image": "anything.png"
}
```

- `POST /products`: Cria um produto.

Exemplo de envio:
```
{
  "name": "Teste",
  "price": "R$ 100,00",
  "description": "Lorem ipsum sit dolor amet",
  "image": "anything.png"
}
```

Exemplo de resposta:
```
{
  "id": 4,
  "name": "Teste",
  "price": "R$ 100,00",
  "description": "Lorem ipsum sit dolor amet",
  "image": "anything.png"
}
```

- `PUT /products/:id`: Modifica um produto.

Exemplo de envio:
```
{
  "name": "Teste",
  "price": "R$ 100,00",
  "description": "Lorem ipsum sit dolor amet",
  "image": "anything.png"
}
```

Exemplo de resposta:
```
{
  "id": 4,
  "name": "Teste",
  "price": "R$ 100,00",
  "description": "Lorem ipsum sit dolor amet",
  "image": "anything.png"
}
```

- `DELETE /products/:id`: Remove um produto.

Exemplo de resposta:
```
[]
```
