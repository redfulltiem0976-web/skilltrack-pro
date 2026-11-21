# SkillTrack Pro — versión 2.0

**Tipo:** Personas y aprendizaje. **Estado:** prototipo académico ejecutable (NO es un sistema empresarial en producción).

Una herramienta personal para visualizar habilidades autoevaluadas, completar rutas de aprendizaje y guardar metas, evidencias y notas de mentoría.

## Funciones implementadas y comprobables
- Mapa radar de cinco habilidades
- Módulos de aprendizaje
- Metas con fecha y evidencias
- Informe individual CSV

- Persistencia local mediante SQLite.
- API HTTP construida con Node.js, sin instalación de dependencias de terceros.
- Diseño adaptable a escritorio y celular.
- Datos inventados, visibles desde el primer inicio.

## Requisitos

- Windows, macOS o Linux; Node.js **22.13 o posterior**, preferentemente LTS reciente. `node:sqlite` figura como experimental en Node 22.
- No se necesita instalar paquetes con npm ni tener cuentas externas.

## Ejecutar

```bash
node server.js
```

Abre http://127.0.0.1:3003/

En Windows se puede ejecutar `INICIAR_WINDOWS.bat` con doble clic.
Para ejecutar pruebas:

```bash
npm test
```

Se incluyen dos archivos de prueba por proyecto. Para reiniciar la demostración, detén la aplicación y elimina `data/demo.sqlite` (si existe), luego vuelve a ejecutarla.

## Seguridad, alcance y límites

- La demostración corre solo en **127.0.0.1**; no ofrece autenticación ni servicios en la nube.
- No introduzcas datos personales reales ni información confidencial de una empresa.
- Los nombres, repuestos, costos y registros incluidos son ficticios.
- El proyecto no demuestra que una empresa real haya usado ni aprobado la herramienta.
- GitHub: repositorio **no creado** hasta publicarlo manualmente.

## Qué puedes explicar al profesor

- El problema genérico que resuelve el sistema, sin atribuir requisitos internos a TECNO SUR.
- Cómo diseñaste la interfaz y las validaciones de la API.
- Cómo se almacenan los datos y se impiden operaciones incorrectas.
- Qué prueba puedes ejecutar para demostrar el comportamiento.

## Evidencia verificada
Dos pruebas automatizadas. Se verifican progreso, autoevaluaciones, metas y notas. Los puntajes son ilustrativos.

## Interpretación responsable

El radar muestra **autoevaluaciones de prueba de 1 a 5**. Las recomendaciones de foco eligen la habilidad con menor autoevaluación y no califican si la persona es apta para un puesto. Los módulos completados y las metas se guardan en SQLite.

Endpoints: `GET /api/people/:id/profile`, `POST /api/people/:id/assessment`, `POST /api/people/:id/goals`, `PATCH /api/goals/:id`, `POST /api/people/:id/notes`, `GET /api/people/:id/export`.
