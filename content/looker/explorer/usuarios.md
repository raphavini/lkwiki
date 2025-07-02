# Documentação da View: users

Esta view contém informações detalhadas sobre os usuários cadastrados na plataforma, servindo como a fonte principal para dados de perfil, status e identificadores. Os dados são provenientes da tabela [stg_application.vw_stg_users](#/bigquery/staging/vw_stg_users) .

## Dimensões

As dimensões representam os campos e atributos individuais de cada usuário.

| Nome (Label) | Descrição | Tipo de Dado |
| :--- | :--- | :--- |
| **ID** | Identificador único do usuário na plataforma.<br>*(Chave Primária)* | `string` |
| **ID do Concierge** | Identificador associado ao concierge responsável pelo usuário, quando aplicável. | `string` |
| **Email** | Endereço de e-mail do usuário. | `string` |
| **Email (Assinante)** | Endereço de e-mail do usuário. Apenas para usuários que têm a role 'Assinante'. | `string` |
| **ID Externo** | Identificador externo usado para integração com sistemas terceiros. | `string` |
| **Já preencheu a anamnese?** | Indica se este usuário já preencheu a anamnese na plataforma (Sim/Não). | `string` |
| **Nome** | Nome completo do usuário. | `string` |
| **Senha** | Senha do usuário armazenada no sistema. ⚠️ **Dado potencialmente sensível.** | `string` |
| **Telefone** | Número de telefone do usuário. ⚠️ **Dado potencialmente sensível.** | `string` |
| **URL da Foto** | Endereço da foto de perfil do usuário. (Este campo contém um link clicável). | `string` |
| **Reset Token** | Token utilizado para redefinição de senha. ⚠️ **Dado potencialmente sensível.** | `string` |
| **ID do Tipo de Usuário** | Identificador do tipo de usuário atribuído ao usuário na plataforma. | `string` |
| **Signup Token** | Token utilizado durante o processo de cadastro do usuário. ⚠️ **Dado potencialmente sensível.** | `string` |
| **Tipo** | Tipo de usuário, conforme categorização definida pela plataforma. | `string` |
| **ID Zenvia** | Identificador de integração com o Zenvia. | `string` |
| **Email de Checkout** | Email utilizado pelo usuário no momento da finalização do processo de checkout na plataforma. | `string` |
| **ID do Concierge Anterior**| Identificador do concierge anterior que esteve associado ao usuário. | `string` |
| **Status do Usuário**| Status atual do usuário na plataforma (Ativo/Inativo). | `string` |
| **CPF** | Número do CPF (Cadastro de Pessoa Física) associado ao usuário. ❌ **Dado Sensível.**<br>*(Campo oculto na interface)* | `string` |
| **URL de Pagamento** | Endereço da URL de pagamento associado ao usuário. (Este campo contém um link clicável). | `string` |

---

### Cadastro do Usuário

Agrupamento de dimensões relacionadas à data e hora em que a conta do usuário foi criada.

| Nome (Label) | Descrição | Tipo de Dado |
| :--- | :--- | :--- |
| **Cadastro do Usuário: Data & Hora** | Data e hora em que o usuário foi cadastrado na plataforma. | `date_time` |
| **Cadastro do Usuário: Data** | Data em que o usuário foi cadastrado na plataforma. | `date` |
| **Cadastro do Usuário: Hora** | Hora em que o usuário foi cadastrado na plataforma. | `string` |
| **Cadastro do Usuário: Semana** | Data correspondente à segunda-feira da semana em que o usuário foi cadastrado. | `date_week` |
| **Cadastro do Usuário: Mês** | Mês em que o usuário foi cadastrado na plataforma. | `date_month` |
| **Cadastro do Usuário: Ano** | Ano em que o usuário foi cadastrado na plataforma. | `date_year` |

---

### Atualização do Usuário

Agrupamento de dimensões relacionadas à última atualização dos dados do usuário.

| Nome (Label) | Descrição | Tipo de Dado |
| :--- | :--- | :--- |
| **Atualização do Usuário: Data & Hora**| Data e hora em que as informações do usuário foram atualizadas pela última vez. | `date_time` |
| **Atualização do Usuário: Data**| Data em que as informações do usuário foram atualizadas pela última vez. | `date` |
| **Atualização do Usuário: Hora**| Hora em que as informações do usuário foram atualizadas pela última vez. | `string` |
| **Atualização do Usuário: Semana**| Data da segunda-feira da semana em que as informações do usuário foram atualizadas. | `date_week` |
| **Atualização do Usuário: Mês**| Mês em que as informações do usuário foram atualizadas pela última vez. | `date_month` |
| **Atualização do Usuário: Ano**| Ano em que as informações do usuário foram atualizadas pela última vez. | `date_year` |

---

### Último Login

Agrupamento de dimensões relacionadas à data e hora do último acesso do usuário.

| Nome (Label) | Descrição | Tipo de Dado |
| :--- | :--- | :--- |
| **Último Login: Data & Hora** | Data e hora em que o usuário efetuou login pela última vez na plataforma. | `date_time` |
| **Último Login: Data** | Data em que o usuário efetuou login pela última vez na plataforma. | `date` |
| **Último Login: Hora** | Hora em que o usuário efetuou login pela última vez na plataforma. | `string` |
| **Último Login: Semana** | Data da segunda-feira da semana em que o usuário efetuou login pela última vez. | `date_week` |
| **Último Login: Mês** | Mês em que o usuário efetuou login pela última vez na plataforma. | `date_month` |
| **Último Login: Ano** | Ano em que o usuário efetuou login pela última vez na plataforma. | `date_year` |

---

## Medidas

As medidas são cálculos agregados baseados nas dimensões, como contagens e totais.

| Nome (Label) | Descrição | Tipo de Cálculo |
| :--- | :--- | :--- |
| **Contagem** | Quantidade total de usuários. | `count` |
| **Qtd Usuários** | Quantidade de usuários únicos. | `count_distinct` |
| **Qtd Usuários (até 30 dias atrás)** | Quantidade de usuários únicos cadastrados há mais de 30 dias. Não inclui cadastros dos últimos 30 dias. | `count_distinct` |