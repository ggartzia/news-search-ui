import React, { PureComponent } from 'react';
import { ScatterChart,
	     Scatter, 
	     XAxis, 
	     YAxis, 
	     CartesianGrid, 
	     Tooltip, 
	     ResponsiveContainer } from 'recharts';

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const dati = [
{
"created_at": "Wed Mar 16 22:18:54 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 22:17:54 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 22:17:33 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 22:14:46 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 22:12:35 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 22:12:00 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 22:06:31 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 22:06:29 +0000 2022",
"text": "Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener exper… https://t.co/khtittSLHQ"
},
{
"created_at": "Wed Mar 16 22:05:38 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 22:05:32 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 22:05:20 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 22:02:29 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 22:01:04 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:59:31 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:57:59 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:57:24 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:56:13 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:55:17 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:52:28 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:49:34 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:48:06 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:44:35 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:43:11 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:42:34 +0000 2022",
"text": "Otro enchufado inútil y sin oficio .\nQue verguenza  https://t.co/5uWuveSrav"
},
{
"created_at": "Wed Mar 16 21:41:09 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:39:45 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:35:40 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:34:28 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:28:19 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:28:08 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:27:38 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:25:27 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:25:13 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:25:12 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:22:46 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:20:13 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:19:55 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:17:37 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:16:32 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:16:11 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:15:33 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:14:15 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:11:02 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:10:28 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:09:41 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:09:22 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:08:07 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:07:56 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:07:46 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:06:28 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:05:38 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:04:04 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:02:48 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:02:36 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:01:46 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 21:00:55 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:59:09 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:57:42 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:55:59 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:55:15 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:53:24 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:52:33 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:52:28 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:51:34 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:49:00 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:48:01 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:47:23 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:47:19 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:46:37 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:44:39 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:42:35 +0000 2022",
"text": "\"Igualdad, mérito y capacidad\". Tenemos una profunda labor por delante.\n\nhttps://t.co/r6hGB1VZyf"
},
{
"created_at": "Wed Mar 16 20:42:17 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:40:44 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:40:26 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:39:40 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:37:58 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:37:26 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:33:27 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:30:31 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:30:15 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:30:11 +0000 2022",
"text": "Colocando inutiles y parasitos\nSánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Cas… https://t.co/j2Q6neqMFr"
},
{
"created_at": "Wed Mar 16 20:29:32 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:29:31 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:29:15 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:29:00 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:26:55 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:26:55 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:25:47 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:25:39 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:24:27 +0000 2022",
"text": "@sanchezcastejon ¿Mete a éste para pagarle las trampas en las listas?  https://t.co/TFUydMSJsP\n\nhttps://t.co/hOdx1tD8ik"
},
{
"created_at": "Wed Mar 16 20:24:14 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:15:48 +0000 2022",
"text": "Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener exper… https://t.co/JYR3sqGaU4"
},
{
"created_at": "Wed Mar 16 20:13:41 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:07:20 +0000 2022",
"text": "Otro mamarracho mas q tenemos q pagarle un sueldo, no @sanchezcastejon ?? Menos mas q vienen tiempos difíciles https://t.co/0bHYm6938V"
},
{
"created_at": "Wed Mar 16 20:06:59 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:06:53 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:04:32 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:04:11 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 20:02:53 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:58:42 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:58:10 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:57:29 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:56:21 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:52:14 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:52:10 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:51:44 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:51:34 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:50:47 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:49:26 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:48:27 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:47:19 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:47:13 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:47:08 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:40:48 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:27:55 +0000 2022",
"text": "Los que venían a regenerar lo que hacen en realidad es recolocar. Asco de política española.\nhttps://t.co/OIRPZzuRtU"
},
{
"created_at": "Wed Mar 16 19:26:44 +0000 2022",
"text": "Esto es el recorte de gastos del @PSOE @Agenda2030Gob @sanchezcastejon....... gentuza!!\nSánchez coloca como \"embaja… https://t.co/Ie4xN2aLd7"
},
{
"created_at": "Wed Mar 16 19:26:06 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:23:46 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:23:09 +0000 2022",
"text": "https://t.co/89avqzjXgt"
},
{
"created_at": "Wed Mar 16 19:22:24 +0000 2022",
"text": "RT @wessroa: Dedazo!!! 👉Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener exper…"
},
{
"created_at": "Wed Mar 16 19:20:31 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:13:51 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:11:03 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:09:49 +0000 2022",
"text": "Dedazo!!! 👉Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no… https://t.co/JtPOvWrkwB"
},
{
"created_at": "Wed Mar 16 19:09:22 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:08:51 +0000 2022",
"text": "Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener exper… https://t.co/UBadLDWDOc"
},
{
"created_at": "Wed Mar 16 19:07:30 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:04:57 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:03:43 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:02:59 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:00:22 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 19:00:07 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:59:45 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:58:44 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:57:27 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:57:00 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:55:35 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:54:55 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:54:55 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:53:22 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:52:38 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:52:23 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:51:38 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:50:47 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:50:26 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:50:24 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:50:20 +0000 2022",
"text": "RT @MariaJessblanc2: https://t.co/5fnJAMMpPJ"
},
{
"created_at": "Wed Mar 16 18:49:55 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:48:38 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:47:58 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:46:59 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:45:24 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:44:56 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:44:45 +0000 2022",
"text": "El chiringuito, el chiringuito..\nSánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la C… https://t.co/cwKBLRRHUF"
},
{
"created_at": "Wed Mar 16 18:42:54 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:42:34 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:42:28 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:42:23 +0000 2022",
"text": "Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener exper… https://t.co/tC8iuapsvk"
},
{
"created_at": "Wed Mar 16 18:42:12 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:41:38 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:41:37 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:41:14 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:41:14 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:40:38 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:40:17 +0000 2022",
"text": "RT @elmundoes: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experiencia di…"
},
{
"created_at": "Wed Mar 16 18:39:37 +0000 2022",
"text": "Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener exper… https://t.co/znUzL4Mf1a"
},
{
"created_at": "Wed Mar 16 18:34:12 +0000 2022",
"text": "https://t.co/5fnJAMMpPJ"
},
{
"created_at": "Wed Mar 16 18:02:17 +0000 2022",
"text": "RT @ElMundoEspana: Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener experienci…"
},
{
"created_at": "Wed Mar 16 17:39:50 +0000 2022",
"text": "Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener exper… https://t.co/hlJM89ng6R"
},
{
"created_at": "Wed Mar 16 17:17:35 +0000 2022",
"text": "Tus impuestos para sanidad y educación, eh @sanchezcastejon ?\n\nSánchez coloca como \"embajador para la Covid\" al soc… https://t.co/tr1Z2KEfbC"
},
{
"created_at": "Wed Mar 16 17:09:50 +0000 2022",
"text": "Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener exper… https://t.co/ZUpKyCsdzf"
},
{
"created_at": "Wed Mar 16 16:55:48 +0000 2022",
"text": "Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener exper… https://t.co/aJOjI9jsge"
},
{
"created_at": "Wed Mar 16 16:51:35 +0000 2022",
"text": "RT @jatirado_oc: #Coronavirus #España Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por…"
},
{
"created_at": "Wed Mar 16 16:51:12 +0000 2022",
"text": "#Coronavirus #España Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de Améri… https://t.co/BeZhteag72"
},
{
"created_at": "Wed Mar 16 16:45:59 +0000 2022",
"text": "Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener exper… https://t.co/cDvnclUeZs"
},
{
"created_at": "Wed Mar 16 16:40:33 +0000 2022",
"text": "🔴  SETROI #NOTICIAS. https://t.co/24Of0amqPv Borja Cabezón, ex diputado madrileño y ex alto cargo en Moncloa, logra… https://t.co/1gVKdap2tE"
},
{
"created_at": "Wed Mar 16 16:26:44 +0000 2022",
"text": "Sánchez coloca como \"embajador para la Covid\" al socialista que fue vetado en la Casa de América por no tener exper… https://t.co/5Q3Z8PyVuL"
}
]
export default class Chart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
