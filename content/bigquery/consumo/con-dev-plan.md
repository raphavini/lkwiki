# Tabela: con_dev_plan

Esta tabela contém os planos de desenvolvimento associados aos usuários.

## Esquema da Tabela

| Coluna         | Tipo    | Descrição                               |
|----------------|---------|-------------------------------------------|
| `user_id`      | STRING  | Identificador único do usuário.           |
| `plan_id`      | STRING  | Identificador do plano de desenvolvimento.|
| `start_date`   | DATE    | Data de início do plano.                  |
| `end_date`     | DATE    | Data de término do plano.                 |
| `is_active`    | BOOLEAN | Indica se o plano está ativo.             |

## Exemplo de Query

```sql
SELECT
  user_id,
  plan_id,
  start_date
FROM
  `project.dataset.con_dev_plan`
WHERE
  is_active = TRUE
LIMIT 10;
```
