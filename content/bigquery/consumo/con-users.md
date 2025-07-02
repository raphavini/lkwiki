# Documentação da Visão de Consumo de Usuários - Tabela: con_users

Esta visão consolidada fornece informações detalhadas sobre os usuários, seus papéis, status de assinatura e interações na plataforma.

## Descrição dos Campos

A tabela a seguir detalha cada um dos campos disponíveis na visão `con_users.vw_users`.

| Nome do Campo                         | Tipo de Dado | Descrição                                                                                                                              | Modo     |
| ------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `user_id`                             | STRING       | Identificador único do usuário.                                                                                                        | NULLABLE |
| `user_name`                           | STRING       | Nome completo do usuário.                                                                                                              | NULLABLE |
| `user_email_address`                  | STRING       | Endereço de e-mail do usuário.                                                                                                         | NULLABLE |
| `user_first_login`                    | BOOLEAN      | **Atenção:** O tipo de dado é BOOLEAN, mas a descrição indica "Data e hora do primeiro login". Pode haver uma inconsistência a ser verificada. | NULLABLE |
| `user_last_login`                     | TIMESTAMP    | Data e hora do último login registrado do usuário.                                                                                     | NULLABLE |
| `user_type`                           | STRING       | Categoria ou tipo do usuário (ex: "cliente", "administrador").                                                                         | NULLABLE |
| `has_phone`                           | BOOLEAN      | Flag que indica se o usuário possui um número de telefone cadastrado.                                                                  | NULLABLE |
| `has_photo_url`                       | BOOLEAN      | Flag que indica se o usuário possui uma foto de perfil.                                                                                | NULLABLE |
| `has_cpf`                             | BOOLEAN      | Flag que indica se o usuário possui um CPF cadastrado.                                                                                 | NULLABLE |
| `user_status`                         | STRING       | Status atual do usuário na plataforma (ex: "ativo", "inativo", "pendente").                                                            | NULLABLE |
| `is_assigner`                         | BOOLEAN      | Flag que identifica se o usuário é um assinante.                                                                                       | NULLABLE |
| `user_created_at`                     | TIMESTAMP    | Data e hora da criação do registro do usuário.                                                                                         | NULLABLE |
| `user_concierge_id`                   | STRING       | Identificador único do concierge associado ao assinante.                                                                               | NULLABLE |
| `user_concierge_name`                 | STRING       | Nome do concierge associado ao assinante.                                                                                              | NULLABLE |
| `user_concierge_email`                | STRING       | Endereço de e-mail do concierge associado ao assinante.                                                                                | NULLABLE |
| `role_id`                             | STRING       | Identificador único do papel (role) do usuário.                                                                                        | NULLABLE |
| `role_name`                           | STRING       | Nome técnico do papel do usuário.                                                                                                      | NULLABLE |
| `role_display_name`                   | STRING       | Nome de exibição do papel do usuário.                                                                                                  | NULLABLE |
| `role_description`                    | STRING       | Descrição detalhada das permissões e finalidade do papel.                                                                              | NULLABLE |
| `checkout_plan_status`                | STRING       | Status atual do processo de checkout do plano (ex: "completed", "pending").                                                            | NULLABLE |
| `checkout_plan_subscriber_status`     | STRING       | Status do assinante dentro do plano (ex: "active", "canceled").                                                                        | NULLABLE |
| `checkout_plan_name`                  | STRING       | Nome do plano de checkout adquirido pelo usuário.                                                                                      | NULLABLE |
| `checkout_plan_created`               | TIMESTAMP    | Data e hora em que o processo de checkout foi iniciado ou criado.                                                                      | NULLABLE |
| `checkout_plan_duration`              | INTEGER      | Duração do plano de checkout, geralmente em dias, meses ou anos.                                                                       | NULLABLE |
| `event_hosts_name`                    | STRING       | Nome do anfitrião do evento associado ao usuário.                                                                                      | NULLABLE |
