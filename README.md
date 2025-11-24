# Guardian Onboarding

Proyecto de Guardian de Onboarding para la gestión del proceso de registro y onboarding de clientes. Este repositorio contiene tanto el backend como el frontend de la aplicación.

## Descripción

Guardian Onboarding es una solución completa que permite gestionar el proceso de onboarding de clientes, incluyendo autenticación, visualización de productos y registro de nuevos clientes.

## Arquitectura

El proyecto está compuesto por dos aplicaciones principales:

- **Backend**: API REST desarrollada con **NestJS** que gestiona la autenticación, el proceso de onboarding y el catálogo de productos.
- **Frontend**: Aplicación web desarrollada con **Angular** que proporciona la interfaz de usuario para interactuar con los servicios del backend.

## Estructura del Repositorio

```
guardian-onbording-app/
├── guardian-onboarding-backend/          # Backend en NestJS
└── guardian-onboarding-frontend-angular/ # Frontend en Angular
```

## Documentación

Para más información sobre cada componente del proyecto, consulta la documentación específica:

### Backend (NestJS)

📖 [Ver documentación del Backend](./guardian-onboarding-backend/README.md)

El backend incluye:
- Autenticación JWT
- Gestión de onboarding
- Catálogo de productos
- Validación de solicitudes
- Caché en memoria

### Frontend (Angular)

📖 [Ver documentación del Frontend](./guardian-onboarding-frontend-angular/README.md)

El frontend incluye:
- Página de login
- Gestión de productos
- Formulario de registro de clientes
- Interfaz moderna con Tailwind CSS

## Inicio Rápido

Para comenzar a trabajar con el proyecto:

1. **Backend**: Navega a la carpeta `guardian-onboarding-backend` y sigue las instrucciones en su README.
2. **Frontend**: Navega a la carpeta `guardian-onboarding-frontend-angular` y sigue las instrucciones en su README.

Cada proyecto tiene sus propias dependencias y configuraciones. Consulta la documentación específica de cada uno para más detalles sobre la instalación y ejecución.

