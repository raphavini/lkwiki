export const wikiContent: Record<string, string> = {
  'introducao': `# Bem-vindo à Wiki de Dados da ...

## Como Contribuir

A documentação é um esforço coletivo! Se você encontrar uma página desatualizada, incorreta ou se quiser documentar um novo ativo de dados, por favor, entre em contato com a equipe de Data Platform.`,
  'bigquery/consumo/con-dev-plan': `# Tabela: con_dev_plan

Esta tabela contém os planos de desenvolvimento associados aos usuários.

## Esquema da Tabela

| Coluna         | Tipo    | Descrição                               |
|----------------|---------|-------------------------------------------|
| \`user_id\`      | STRING  | Identificador único do usuário.           |
| \`plan_id\`      | STRING  | Identificador do plano de desenvolvimento.|
| \`start_date\`   | DATE    | Data de início do plano.                  |
| \`end_date\`     | DATE    | Data de término do plano.                 |
| \`is_active\`    | BOOLEAN | Indica se o plano está ativo.             |

## Exemplo de Query

\`\`\`sql
SELECT
  user_id,
  plan_id,
  start_date
FROM
  \`project.dataset.con_dev_plan\`
WHERE
  is_active = TRUE
LIMIT 10;
\`\`\``,
  'bigquery/consumo/con-users': `# Documentação da Visão de Consumo de Usuários - Tabela: con_users

Esta visão consolidada fornece informações detalhadas sobre os usuários, seus papéis, status de assinatura e interações na plataforma.

## Descrição dos Campos

A tabela a seguir detalha cada um dos campos disponíveis na visão \`con_users.vw_users\`.

| Nome do Campo                         | Tipo de Dado | Descrição                                                                                                                              | Modo     |
| ------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| \`user_id\`                             | STRING       | Identificador único do usuário.                                                                                                        | NULLABLE |
| \`user_name\`                           | STRING       | Nome completo do usuário.                                                                                                              | NULLABLE |
| \`user_email_address\`                  | STRING       | Endereço de e-mail do usuário.                                                                                                         | NULLABLE |
| \`user_first_login\`                    | BOOLEAN      | **Atenção:** O tipo de dado é BOOLEAN, mas a descrição indica "Data e hora do primeiro login". Pode haver uma inconsistência a ser verificada. | NULLABLE |
| \`user_last_login\`                     | TIMESTAMP    | Data e hora do último login registrado do usuário.                                                                                     | NULLABLE |
| \`user_type\`                           | STRING       | Categoria ou tipo do usuário (ex: "cliente", "administrador").                                                                         | NULLABLE |
| \`has_phone\`                           | BOOLEAN      | Flag que indica se o usuário possui um número de telefone cadastrado.                                                                  | NULLABLE |
| \`has_photo_url\`                       | BOOLEAN      | Flag que indica se o usuário possui uma foto de perfil.                                                                                | NULLABLE |
| \`has_cpf\`                             | BOOLEAN      | Flag que indica se o usuário possui um CPF cadastrado.                                                                                 | NULLABLE |
| \`user_status\`                         | STRING       | Status atual do usuário na plataforma (ex: "ativo", "inativo", "pendente").                                                            | NULLABLE |
| \`is_assigner\`                         | BOOLEAN      | Flag que identifica se o usuário é um assinante.                                                                                       | NULLABLE |
| \`user_created_at\`                     | TIMESTAMP    | Data e hora da criação do registro do usuário.                                                                                         | NULLABLE |
| \`user_concierge_id\`                   | STRING       | Identificador único do concierge associado ao assinante.                                                                               | NULLABLE |
| \`user_concierge_name\`                 | STRING       | Nome do concierge associado ao assinante.                                                                                              | NULLABLE |
| \`user_concierge_email\`                | STRING       | Endereço de e-mail do concierge associado ao assinante.                                                                                | NULLABLE |
| \`role_id\`                             | STRING       | Identificador único do papel (role) do usuário.                                                                                        | NULLABLE |
| \`role_name\`                           | STRING       | Nome técnico do papel do usuário.                                                                                                      | NULLABLE |
| \`role_display_name\`                   | STRING       | Nome de exibição do papel do usuário.                                                                                                  | NULLABLE |
| \`role_description\`                    | STRING       | Descrição detalhada das permissões e finalidade do papel.                                                                              | NULLABLE |
| \`checkout_plan_status\`                | STRING       | Status atual do processo de checkout do plano (ex: "completed", "pending").                                                            | NULLABLE |
| \`checkout_plan_subscriber_status\`     | STRING       | Status do assinante dentro do plano (ex: "active", "canceled").                                                                        | NULLABLE |
| \`checkout_plan_name\`                  | STRING       | Nome do plano de checkout adquirido pelo usuário.                                                                                      | NULLABLE |
| \`checkout_plan_created\`               | TIMESTAMP    | Data e hora em que o processo de checkout foi iniciado ou criado.                                                                      | NULLABLE |
| \`checkout_plan_duration\`              | INTEGER      | Duração do plano de checkout, geralmente em dias, meses ou anos.                                                                       | NULLABLE |
| \`event_hosts_name\`                    | STRING       | Nome do anfitrião do evento associado ao usuário.                                                                                      | NULLABLE |`,
  'bigquery/staging/vw_stg_users': `# Documentação da Tabela de Usuários

Esta documentação descreve os campos disponíveis na tabela ou visão de usuários, detalhando cada atributo do registro do usuário.

## Descrição dos Campos

A tabela a seguir detalha cada um dos campos disponíveis.

| Nome do Campo | Tipo de Dado | Descrição | Permite Nulo? |
| :--- | :--- | :--- | :--- |
| \`id\` | STRING | ID do usuario. (Chave Primária) | Sim |
| \`external_id\` | STRING | ID do usuario externo. | Sim |
| \`type\` | STRING | Tipo de usuário. | Sim |
| \`name\` | STRING | Nome do usuário. | Sim |
| \`email_address\` | STRING | Email do usuario. | Sim |
| \`password\` | STRING | Senha. ⚠️ **Dado Sensível.** | Sim |
| \`role_id\` | STRING | ID do papel (role) do usuário. | Sim |
| \`reset_token\` | STRING | Token de reset. ⚠️ **Dado Sensível.** | Sim |
| \`last_login\` | TIMESTAMP | Data e hora do último login. | Sim |
| \`created_at\` | TIMESTAMP | Data de criação do registro do usuário. | Sim |
| \`updated_at\` | TIMESTAMP | Data da última atualização do registro. | Sim |
| \`first_login\` | BOOLEAN | Flag que indica se é o primeiro login do usuário. | Sim |
| \`concierge_id\` | STRING | ID do concierge associado ao usuário. | Sim |
| \`phone_number\` | STRING | Número do telefone do usuario. ⚠️ **Dado Sensível.** | Sim |
| \`signup_token\` | STRING | Token de signup (cadastro). ⚠️ **Dado Sensível.** | Sim |
| \`photo_url\` | STRING | URL da foto do usuario. | Sim |
| \`zenvia_id\` | STRING | ID de integração com o Zenvia. | Sim |
| \`checkout_email\` | STRING | Email utilizado no checkout. | Sim |
| \`previous_concierge_id\`| STRING | ID do concierge anterior do usuário. | Sim |
| \`user_status\` | STRING | Status do usuário (ex: Ativo, Inativo). | Sim |
| \`cpf\` | STRING | CPF do usuario. ❌ **Dado Altamente Sensível.** | Sim |
| \`payment_url\` | STRING | URL de pagamento associada ao usuário. | Sim |`,
  'looker/dashboards': `# Dashboards

## <a href="https://maristaanalytics.cloud.looker.com/dashboards/puc_iii_lake_prd_raw::usuarios?Email=acacianasr%40gmail.com" target="_blank" rel="noopener noreferrer">Dashboard de Usuários</a>`,
  'looker/explorer/usuarios': `# Documentação da View: users

Esta view contém informações detalhadas sobre os usuários cadastrados na plataforma, servindo como a fonte principal para dados de perfil, status e identificadores. Os dados são provenientes da tabela [stg_application.vw_stg_users](#/bigquery/staging/vw_stg_users) .

## Dimensões

As dimensões representam os campos e atributos individuais de cada usuário.

| Nome (Label) | Descrição | Tipo de Dado |
| :--- | :--- | :--- |
| **ID** | Identificador único do usuário na plataforma.<br>*(Chave Primária)* | \`string\` |
| **ID do Concierge** | Identificador associado ao concierge responsável pelo usuário, quando aplicável. | \`string\` |
| **Email** | Endereço de e-mail do usuário. | \`string\` |
| **Email (Assinante)** | Endereço de e-mail do usuário. Apenas para usuários que têm a role 'Assinante'. | \`string\` |
| **ID Externo** | Identificador externo usado para integração com sistemas terceiros. | \`string\` |
| **Já preencheu a anamnese?** | Indica se este usuário já preencheu a anamnese na plataforma (Sim/Não). | \`string\` |
| **Nome** | Nome completo do usuário. | \`string\` |
| **Senha** | Senha do usuário armazenada no sistema. ⚠️ **Dado potencialmente sensível.** | \`string\` |
| **Telefone** | Número de telefone do usuário. ⚠️ **Dado potencialmente sensível.** | \`string\` |
| **URL da Foto** | Endereço da foto de perfil do usuário. (Este campo contém um link clicável). | \`string\` |
| **Reset Token** | Token utilizado para redefinição de senha. ⚠️ **Dado potencialmente sensível.** | \`string\` |
| **ID do Tipo de Usuário** | Identificador do tipo de usuário atribuído ao usuário na plataforma. | \`string\` |
| **Signup Token** | Token utilizado durante o processo de cadastro do usuário. ⚠️ **Dado potencialmente sensível.** | \`string\` |
| **Tipo** | Tipo de usuário, conforme categorização definida pela plataforma. | \`string\` |
| **ID Zenvia** | Identificador de integração com o Zenvia. | \`string\` |
| **Email de Checkout** | Email utilizado pelo usuário no momento da finalização do processo de checkout na plataforma. | \`string\` |
| **ID do Concierge Anterior**| Identificador do concierge anterior que esteve associado ao usuário. | \`string\` |
| **Status do Usuário**| Status atual do usuário na plataforma (Ativo/Inativo). | \`string\` |
| **CPF** | Número do CPF (Cadastro de Pessoa Física) associado ao usuário. ❌ **Dado Sensível.**<br>*(Campo oculto na interface)* | \`string\` |
| **URL de Pagamento** | Endereço da URL de pagamento associado ao usuário. (Este campo contém um link clicável). | \`string\` |

---

### Cadastro do Usuário

Agrupamento de dimensões relacionadas à data e hora em que a conta do usuário foi criada.

| Nome (Label) | Descrição | Tipo de Dado |
| :--- | :--- | :--- |
| **Cadastro do Usuário: Data & Hora** | Data e hora em que o usuário foi cadastrado na plataforma. | \`date_time\` |
| **Cadastro do Usuário: Data** | Data em que o usuário foi cadastrado na plataforma. | \`date\` |
| **Cadastro do Usuário: Hora** | Hora em que o usuário foi cadastrado na plataforma. | \`string\` |
| **Cadastro do Usuário: Semana** | Data correspondente à segunda-feira da semana em que o usuário foi cadastrado. | \`date_week\` |
| **Cadastro do Usuário: Mês** | Mês em que o usuário foi cadastrado na plataforma. | \`date_month\` |
| **Cadastro do Usuário: Ano** | Ano em que o usuário foi cadastrado na plataforma. | \`date_year\` |

---

### Atualização do Usuário

Agrupamento de dimensões relacionadas à última atualização dos dados do usuário.

| Nome (Label) | Descrição | Tipo de Dado |
| :--- | :--- | :--- |
| **Atualização do Usuário: Data & Hora**| Data e hora em que as informações do usuário foram atualizadas pela última vez. | \`date_time\` |
| **Atualização do Usuário: Data**| Data em que as informações do usuário foram atualizadas pela última vez. | \`date\` |
| **Atualização do Usuário: Hora**| Hora em que as informações do usuário foram atualizadas pela última vez. | \`string\` |
| **Atualização do Usuário: Semana**| Data da segunda-feira da semana em que as informações do usuário foram atualizadas. | \`date_week\` |
| **Atualização do Usuário: Mês**| Mês em que as informações do usuário foram atualizadas pela última vez. | \`date_month\` |
| **Atualização do Usuário: Ano**| Ano em que as informações do usuário foram atualizadas pela última vez. | \`date_year\` |

---

### Último Login

Agrupamento de dimensões relacionadas à data e hora do último acesso do usuário.

| Nome (Label) | Descrição | Tipo de Dado |
| :--- | :--- | :--- |
| **Último Login: Data & Hora** | Data e hora em que o usuário efetuou login pela última vez na plataforma. | \`date_time\` |
| **Último Login: Data** | Data em que o usuário efetuou login pela última vez na plataforma. | \`date\` |
| **Último Login: Hora** | Hora em que o usuário efetuou login pela última vez na plataforma. | \`string\` |
| **Último Login: Semana** | Data da segunda-feira da semana em que o usuário efetuou login pela última vez. | \`date_week\` |
| **Último Login: Mês** | Mês em que o usuário efetuou login pela última vez na plataforma. | \`date_month\` |
| **Último Login: Ano** | Ano em que o usuário efetuou login pela última vez na plataforma. | \`date_year\` |

---

## Medidas

As medidas são cálculos agregados baseados nas dimensões, como contagens e totais.

| Nome (Label) | Descrição | Tipo de Cálculo |
| :--- | :--- | :--- |
| **Contagem** | Quantidade total de usuários. | \`count\` |
| **Qtd Usuários** | Quantidade de usuários únicos. | \`count_distinct\` |
| **Qtd Usuários (até 30 dias atrás)** | Quantidade de usuários únicos cadastrados há mais de 30 dias. Não inclui cadastros dos últimos 30 dias. | \`count_distinct\` |`,
};
