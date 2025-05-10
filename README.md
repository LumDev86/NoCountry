
# 📬 Sistema de Gestión de Mensajes - Prueba Técnica

## Descripción

Este proyecto es una implementación de un sistema backend para gestionar mensajes en una aplicación tipo chat. Permite crear, leer, marcar como leídos, filtrar por usuario, por tipo de chat y obtener respuestas a mensajes, siguiendo principios de arquitectura limpia y buenas prácticas de desarrollo.

---

## 🛠️ Tecnologías

- **Node.js** + **Express**
- **TypeScript**
- **Prisma ORM**
- **Supabase (PostgreSQL)**
- Arquitectura monolítica basada en Controladores, Servicios y Rutas

---

## 📦 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/proyecto-mensajes.git
   cd proyecto-mensajes
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar la base de datos en `.env`:
   ```env
   DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_db
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

## 🚀 Endpoints principales

| Método | Ruta                                 | Descripción                            |
|--------|--------------------------------------|----------------------------------------|
| POST   | `/messages`                          | Crear un nuevo mensaje                 |
| GET    | `/messages/chat/:chatId`             | Obtener mensajes de un chat            |
| GET    | `/messages/user/:userId`             | Obtener mensajes por usuario           |
| PATCH  | `/messages/:messageId/read`          | Marcar un mensaje como leído           |
| GET    | `/messages/chatType/:chatType`       | Mensajes por tipo de chat (paginado)   |
| GET    | `/messages/:messageId/replies`       | Obtener respuestas a un mensaje        |
| GET    | `/messages/unread/:userId`           | Obtener mensajes no leídos por usuario |

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
- Validaciones con Zod/Joi
- Manejo de archivos adjuntos
- Seguridad y autenticación con JWT

---

## 🧑‍💻 Autor

**Lucas Matias Segovia**  
📧 lms.segovia86@gmail.com  
💼 En busca de mi primera oportunidad IT
