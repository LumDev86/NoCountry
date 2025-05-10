![Texto alternativo](./img/nocountrytalent_cover.jpg)

# 📨 Funcionalidad de Mensajería para Simulación Laboral - NoCountry

Este proyecto implementa una funcionalidad de mensajería dentro de un entorno de simulación laboral, específicamente pensado para plataformas como **NoCountry**.

## 🚀 Descripción General

El sistema permite a los usuarios enviar mensajes, responder a otros, marcar mensajes como leídos y consultar mensajes por distintos criterios: por usuario, por chat, no leídos, o por tipo de chat (grupal o individual).

Esta funcionalidad puede ser fácilmente integrada en aplicaciones más grandes, como paneles de comunicación interna o plataformas colaborativas.

## 🔧 Tecnologías Utilizadas

- **Node.js** + **Express** para el servidor backend.
- **TypeScript** para una tipificación segura y mantenimiento escalable.
- **Prisma ORM** para la gestión de base de datos.
- **PostgreSQL** como base de datos relacional.
- **Supabase** como entorno de alojamiento y base de datos (opcional).
- **Postman** para testing de endpoints.

## 📌 Decisión de la funcionalidad

La razón por la cual decidí desarrollar la funcionalidad de mensajería es porque considero que **la comunicación efectiva** es fundamental en cualquier equipo, especialmente en un entorno de simulación como el que propone **NoCountry**.

De las tres funcionalidades sugeridas, todas eran valiosas, pero la de comunicación me pareció esencial para:
- Garantizar que los participantes puedan intercambiar información de forma clara y organizada.
- Simular un entorno laboral realista, donde la mensajería interna entre compañeros y líderes de proyecto es clave.
- Agregar una capa de colaboración que potencia el trabajo grupal.

Además, esta elección me permitió diseñar una arquitectura reutilizable y escalable que puede crecer con el proyecto.

## 🧠 Aprendizaje y Nuevas Tecnologías

Gracias a esta prueba técnica, tuve la oportunidad de conocer y trabajar con tecnologías que no había utilizado en profundidad antes, como:

- **Prisma**: ORM moderno que facilita enormemente las operaciones con bases de datos relacionales.
- **Supabase**: una alternativa moderna a Firebase, muy útil para alojar datos de forma rápida y segura.

Esta experiencia amplió mis conocimientos en el desarrollo backend y la construcción de APIs robustas, y reforzó mi interés por seguir profundizando en arquitecturas bien diseñadas.

## 📬 Endpoints disponibles

- `POST /messages`: Crear mensaje
- `GET /messages/chat/:chatId`: Obtener mensajes de un chat
- `GET /messages/user/:userId`: Obtener mensajes de un usuario
- `GET /messages/unread/:userId`: Mensajes no leídos para un usuario
- `PATCH /messages/:messageId/read`: Marcar mensaje como leído
- `GET /messages/chatType/:chatType`: Obtener mensajes por tipo de chat
- `GET /messages/:messageId/replies`: Respuestas a un mensaje

## 📁 Estructura del Proyecto

```
📦src
 ┣ 📂controllers
 ┃ ┗ 📜message.controller.ts
 ┣ 📂services
 ┃ ┗ 📜message.service.ts
 ┣ 📂routes
 ┃ ┗ 📜message.routes.ts
 ┗ 📂config
   ┗ 📜prismaClient.ts
```

## 📫 Autor

**Lucas Matias Segovia**  
📧 lms.segovia86@gmail.com

---

Este proyecto es parte de una simulación laboral de **NoCountry**, orientada al desarrollo profesional y la colaboración en equipos ágiles.
