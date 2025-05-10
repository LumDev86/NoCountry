![Texto alternativo](./img/nocountrytalent_cover.jpg)
# 📬 Sistema de Gestión de Mensajes (Comunicación Interna) - Prueba Técnica

## Descripción

Este proyecto es una implementación de un sistema backend para gestionar mensajes en una aplicación tipo chat. Permite crear, leer, guardar mensajes, enviar mensajes, marcar como leídos, filtrar por usuario, por tipo de chat y obtener respuestas a mensajes, siguiendo principios de arquitectura limpia y buenas prácticas de desarrollo.

---

## 📌 Decisión de la funcionalidad

La razón por la cual decidí desarrollar la funcionalidad de mensajería es porque considero que **la comunicación** es fundamental en cualquier equipo, especialmente en un entorno de simulación como el que propone **NoCountry**.

De las tres funcionalidades sugeridas, todas eran valiosas, pero la de comunicación me pareció esencial para:
- Garantizar que los participantes puedan intercambiar información de forma clara y organizada.
- Simular un entorno laboral realista, donde la mensajería interna entre compañeros y líderes de proyecto es clave.
- Agregar una capa de colaboración que potencia el trabajo grupal.

Además, esta elección me permitió diseñar una arquitectura reutilizable y escalable que puede crecer con el proyecto.

## 🧠 Aprendizaje y Nuevas Tecnologías

Gracias a esta prueba técnica, tuve la oportunidad de conocer y trabajar con tecnologías que no había utilizado en profundidad antes, como:

- **Prisma**
- **Supabase**

Esta experiencia amplió mis conocimientos en el desarrollo backend y la construcción de APIs robustas, y reforzó mi interés por seguir profundizando en arquitecturas bien diseñadas.

---

## 🛠️ Tecnologías

- **Node.js** + **Express**
- **TypeScript**
- **Prisma ORM**
- **Supabase (PostgreSQL)**
- **Postman**

---

## 📦 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/LumDev86/NoCountry.git
   cd proyecto-mensajes
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar la base de datos en `.env`:
   ```env
   DATABASE_URL=postgresql_supabase://usuario:contraseña@localhost:5432/nombre_db
   ```

4. Ejecutar migraciones (si aplica):
   ```bash
   npx prisma migrate dev --name init
   ```

5. Levantar el servidor:
   ```bash
   npm run dev
   ```

---

## 📄 Estructura de la Base de Datos
![Base de datos](./img//diagrama%20base%20de%20datos.PNG)

### 🔄 Relaciones entre tablas

- User ↔ ChatParticipant: Un usuario puede estar en múltiples chats.
- Chat ↔ ChatParticipant: Un chat puede tener múltiples participantes.
- Chat ↔ Message: Un chat contiene múltiples mensajes.
- User ↔ Message: Un usuario puede enviar múltiples mensajes.

---

## 📁 Estructura del Proyecto

```
📦src
 ┣ 📂controllers
 ┃   ┗ 📜message.controller.ts
 ┃   ┗ 📜chats.controller.ts
 ┃   ┗ 📜users.controller.ts
 ┣ 📂services
 ┃   ┗ 📜message.service.ts
 ┃   ┗ 📜chats.service.ts
 ┃   ┗ 📜users.service.ts
 ┣ 📂routes
 ┃   ┗ 📜message.routes.ts
 ┃   ┗ 📜chats.routes.ts
 ┃   ┗ 📜users.routes.ts
 ┗ 📂config
   ┗ 📜prismaClient.ts
```

---

## 🚀 Endpoints principales

### Endpoint base: api/messages

| Método | Ruta                                 | Descripción                            |
|--------|--------------------------------------|----------------------------------------|
| POST   | `/`                          | Crear un nuevo mensaje                 |
| GET    | `/chat/:chatId`             | Obtener mensajes de un chat            |
| GET    | `/user/:userId`             | Obtener mensajes por usuario           |
| PATCH  | `/:messageId/read`          | Marcar un mensaje como leído           |
| GET    | `/chatType/:chatType`       | Mensajes por tipo de chat (GROUP-ONE_ON_ONE-SUBGROUP)   |
| GET    | `/:messageId/replies`       | Obtener respuestas a un mensaje        |
| GET    | `/unread/:userId`           | Obtener mensajes no leídos por usuario |

### Endpoint base: api/users

| Método | Ruta                                 | Descripción                            |
|--------|--------------------------------------|----------------------------------------|
| POST   | `/`                          | Crear un nuevo usuario                 |
| GET    | `/`             | Obtener usuarios            |

### Endpoint base: api/chats

| Método | Ruta                                 | Descripción                            |
|--------|--------------------------------------|----------------------------------------|
| POST   | `/`                          | Crear un nuevo chat                 |
| GET    | `/`             | Obtener mensajes de un chat            |

---

## ✅ Características técnicas

- Modularización por capas (`controllers`, `services`, `routes`)
- Tipado fuerte con TypeScript
- Respuestas estándar mediante `ControllerHandler`
- Manejo de errores robusto
- Prisma ORM para consulta eficiente y relaciones

---

## 🧠 Razonamiento Técnico

La arquitectura fue pensada para mantener separación de responsabilidades, facilitar testeo y escalabilidad. La lógica de negocio se encuentra encapsulada en los servicios, manteniendo los controladores simples y enfocados en el flujo HTTP. Se aprovecha el sistema de relaciones de Prisma para reducir consultas complejas y evitar overfetching.

---

## 📌 Mejora futura sugerida

- Soporte para WebSocket (mensajes en tiempo real)
- Microservicios
- Validaciones con Zod/Joi
- Manejo de archivos adjuntos
- Seguridad y autenticación con JWT

---

## 🧑‍💻 Autor

**Lucas Matias Segovia**  
📧 lms.segovia86@gmail.com  
