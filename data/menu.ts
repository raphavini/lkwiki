import { MenuItem } from '../types';

export const menuConfig: MenuItem[] = [
  {
    title: 'Introdução',
    path: 'introducao',
  },
  {
    title: 'Looker',
    children: [
      {
        title: 'Dashboards',
        defaultExpanded: true,
        path: 'looker/dashboards'
      },
      {
        title: 'Explores',
        defaultExpanded: true,
        children: [
          { title: 'Base de Usuários', path: 'looker/explorer/usuarios' }
        ],
      },
    ],
  },
  {
    title: 'BigQuery',
    defaultExpanded: true,
    children: [
      {
        title: 'Camada de consumo',
        defaultExpanded: true,
        children: [
          { title: 'con_users', path: 'bigquery/consumo/con-users' },
        ],
      },
      {
        title: 'Camada de staging',
        children: [
          { title: 'vw_stg_users', path: 'bigquery/staging/vw_stg_users' },
        ],
      },
    ],
  },
];
