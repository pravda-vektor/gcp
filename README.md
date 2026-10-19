# Sitio FT-00080 — versión completa

Sitio estático de apoyo para el curso **Fundamentos de Datos e Inteligencia Artificial en Google Vertex**.

## Estructura principal

- Inicio
- Materia
  - Fundamentos
  - Navegación en Google Cloud
  - Cloud Storage
  - BigQuery
  - GoogleSQL
  - Gemini y prompting
  - Agent Studio
  - Validación integrada
- Prueba Tipo
- Recursos

## Prueba Tipo

La Prueba Tipo contiene el flujo completo y navegable:

1. Preparar el espacio en Cloud Storage.
2. Localizar el documento fuente.
3. Importar el PDF en Gemini.
4. Convertir el PDF a texto plano.
5. Subir `criterio_revision.txt`.
6. Ejecutar el agente.
7. Recuperar la ejecución si es necesario.
8. Revisar los archivos generados.
9. Verificar en BigQuery.
10. Verificar con Gemini en BigQuery.
11. Revisar la entrega final, descargar `informe_final.md` y subir ese informe a la plataforma de evaluación. Los demás archivos permanecen en Cloud Storage para revisión del relator.

## Navegación

`pages/materia.html` funciona como mapa de contenidos con búsqueda y filtro por área.

`pages/recursos.html` funciona como índice de referencia. Los prompts y consultas permanecen integrados en el módulo donde se explican o ejecutan, evitando duplicaciones.

## Material visual

Los marcadores `VISUAL: ...` indican lugares preparados para incorporar capturas o grabaciones demostrativas sin modificar la estructura pedagógica del sitio.



## Capturas del entorno

El sitio incorpora una selección curada de capturas reales del entorno usado durante el curso. Las anotaciones rojas existentes en algunas imágenes se conservan cuando ayudan a identificar la acción relevante. Las capturas se presentan con un marco y caption consistentes y pueden abrirse a tamaño completo.


## Pulido final

- Las capturas usan `alumno-00` únicamente como ejemplo visual; los estudiantes deben usar su `alumno-XX` asignado.
- La introducción de la Prueba Tipo explica avisos normales de Chrome, verificación en dos pasos y errores temporales de capacidad.
- Las capturas pequeñas conservan su tamaño natural para evitar pixelación.
- Se redujeron duplicaciones visuales dentro de una misma página y se ajustaron captions que podían inducir a error.
- Las tarjetas principales del inicio son navegables.

## Desafíos Extra

El sitio incluye cinco ejercicios opcionales que reutilizan el mismo agente y los datos existentes:

1. Perfil de clientes de las operaciones seleccionadas.
2. Exposición crediticia reciente de esos clientes.
3. Resumen de exposición por segmento y nivel de riesgo.
4. Instrumentos con PnL diario negativo en su valorización más reciente.
5. Resumen de cartera por tipo de instrumento y emisor.

No se crean archivos fuente ni datasets nuevos. Los desafíos 1–3 reutilizan `criterio_revision.txt`; los desafíos 4–5 reciben su criterio directamente en el prompt. Cada ejercicio incluye prompt, SQL de referencia explicado y los mismos prompts de recuperación de la Prueba Tipo.

## Prompts de recuperación

Los dos prompts de recuperación validados aparecen:
- inmediatamente debajo del prompt principal de la Prueba Tipo;
- nuevamente en el paso 07, con diagnóstico detallado;
- en la materia de Agent Studio;
- inmediatamente debajo de cada prompt de Desafíos Extra.

Las copias se verificaron textualmente contra una única fuente de verdad para evitar divergencias.

## Modo nocturno

El sitio incluye un selector de modo claro/nocturno en la cabecera.

- Si el usuario no ha elegido un tema, se respeta la preferencia del sistema.
- La elección manual se conserva en `localStorage`.
- El cambio de tema no altera las capturas ni los bloques de código.

## Casos de clase y profundizaciones

La página `pages/casos-clase.html` reúne preguntas y situaciones reales surgidas durante las clases.

Incluye:
- Caso 01 — Agentes aplicados al flujo de auditoría.
- Caso 02 — Tipos y naturaleza de los datos.
- Caso 03 — Integridad, consistencia y comportamiento.
- Caso 04 — Autoservicio de datos.
- Caso 05 — De Excel y CSV a análisis reproducible con GoogleSQL.
- Caso 06 — Patrones SQL para clientes y productos.
- Caso 07 — Automatización de indicadores y actualización de datos.

Los bloques SQL de esta sección utilizan tablas y campos reales de `arched-osprey-506820-i9.analitica_bancaria_demo`.

### Profundizaciones del Caso 01

- Profundización A — Repositorios, RAG y el patrón de “super agente”.
- Profundización B — Preview versus Agent Runtime.
- Profundización C — Memoria, conocimiento, feedback y fine-tuning.
- Profundización D — MLOps, LLMOps y AgentOps.
- Profundización E — Modelos predictivos, BigQuery ML, SVM y modelos personalizados.
- Profundización F — Gemini, Agent Studio, Agent Runtime y la transición desde Vertex AI.

Los conceptos que exceden el alcance formal del curso incluyen una definición breve y enlaces oficiales de Google Cloud.

## QA final

Revisión final realizada sobre esta versión:

- ejemplos SQL contrastados con los esquemas reales de los seis CSV del curso;
- bloques presentados como SQL sin placeholders ni fragmentos incompletos;
- prompts de recuperación validados contra los textos aprobados;
- enlaces internos, anchors, imágenes e IDs revisados;
- nomenclatura 2026 de Agent Studio, Agent Runtime, Gemini Enterprise Agent Platform, Knowledge Catalog, RAG Engine, Model Registry y BigQuery ML revisada contra documentación oficial;
- conceptos adicionales al curso acompañados por definición breve y referencia oficial cuando corresponde.

Nota: la revisión de SQL es estructural y semántica contra los archivos reales del curso. La ejecución en vivo dentro del proyecto BigQuery depende de que el proyecto, dataset y permisos del entorno permanezcan disponibles.
