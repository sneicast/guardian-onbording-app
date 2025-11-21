# Guardian Onboarding Backend

API desarrollada con NestJS para gestionar el proceso de onboarding y los productos ofrecidos por una entidad financiera. Incluye autenticación JWT, validación de solicitudes y caché de productos.

## Tecnologías y dependencias principales
- Node.js 20+
- NestJS
- Passport + JWT
- class-validator / class-transformer
- Cache manager in-memory (NestJS)

## Colección de Postman
La colección se encuentra en la raíz del proyecto: [`./guardian-onbording-service.postman_collection.json`](./guardian-onbording-service.postman_collection.json). Ímportala en Postman para probar los endpoints disponibles.

## Levantar el proyecto en local
1. Clonar el repositorio y ubicarse en este paquete (`guardian-onbording-backend`).
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar variables de entorno (crear `.env` con `JWT_SECRET`, `JWT_EXPIRES_IN`, etc.).
4. Ejecutar en modo desarrollo:
   ```bash
   npm run start:dev
   ```
5. La API estará disponible en `http://localhost:3000`.

## Estructura breve
- `src/modules/auth` – autenticación y emisión de tokens.
- `src/modules/onboarding` – flujos de registro de clientes.
- `src/modules/products` – catálogo de productos y caché.