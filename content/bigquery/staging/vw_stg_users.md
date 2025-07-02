# Documentação da Tabela de Usuários

Esta documentação descreve os campos disponíveis na tabela ou visão de usuários, detalhando cada atributo do registro do usuário.

## Descrição dos Campos

A tabela a seguir detalha cada um dos campos disponíveis.

| Nome do Campo | Tipo de Dado | Descrição | Permite Nulo? |
| :--- | :--- | :--- | :--- |
| `id` | STRING | ID do usuario. (Chave Primária) | Sim |
| `external_id` | STRING | ID do usuario externo. | Sim |
| `type` | STRING | Tipo de usuário. | Sim |
| `name` | STRING | Nome do usuário. | Sim |
| `email_address` | STRING | Email do usuario. | Sim |
| `password` | STRING | Senha. ⚠️ **Dado Sensível.** | Sim |
| `role_id` | STRING | ID do papel (role) do usuário. | Sim |
| `reset_token` | STRING | Token de reset. ⚠️ **Dado Sensível.** | Sim |
| `last_login` | TIMESTAMP | Data e hora do último login. | Sim |
| `created_at` | TIMESTAMP | Data de criação do registro do usuário. | Sim |
| `updated_at` | TIMESTAMP | Data da última atualização do registro. | Sim |
| `first_login` | BOOLEAN | Flag que indica se é o primeiro login do usuário. | Sim |
| `concierge_id` | STRING | ID do concierge associado ao usuário. | Sim |
| `phone_number` | STRING | Número do telefone do usuario. ⚠️ **Dado Sensível.** | Sim |
| `signup_token` | STRING | Token de signup (cadastro). ⚠️ **Dado Sensível.** | Sim |
| `photo_url` | STRING | URL da foto do usuario. | Sim |
| `zenvia_id` | STRING | ID de integração com o Zenvia. | Sim |
| `checkout_email` | STRING | Email utilizado no checkout. | Sim |
| `previous_concierge_id`| STRING | ID do concierge anterior do usuário. | Sim |
| `user_status` | STRING | Status do usuário (ex: Ativo, Inativo). | Sim |
| `cpf` | STRING | CPF do usuario. ❌ **Dado Altamente Sensível.** | Sim |
| `payment_url` | STRING | URL de pagamento associada ao usuário. | Sim |