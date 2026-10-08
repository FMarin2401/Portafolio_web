# Portafolio web · Francisco Marin Castillo

Mi portafolio personal: un sitio estático, sin frameworks ni dependencias, donde presento mis proyectos de inteligencia artificial, desarrollo web y automatización industrial.

🔗 **Sitio en vivo:** [frankmarincas.dev](https://frankmarincas.dev)

## Sobre el proyecto

Soy estudiante de Ingeniería en Inteligencia Artificial en la Universidad Iberoamericana León. Este sitio reúne lo que hago y cómo lo hago: proyectos de machine learning, búsqueda semántica, desarrollo frontend y PLC/HMI Siemens.

Lo construí a mano con HTML, CSS y JavaScript para practicar buenas prácticas de la web sin depender de herramientas externas.

## Características

- **Modo claro y oscuro** con botón. Respeta la preferencia del sistema y recuerda tu elección.
- **Menú hamburguesa** en móvil, con cierre al elegir una sección o al pulsar Escape.
- **Navegación que sigue el scroll**: el menú resalta la sección que estás viendo.
- **Diseño responsive**, pensado desde pantallas pequeñas hasta escritorio.
- **Accesible**: HTML semántico, enlace para saltar al contenido, estados ARIA y respeto a `prefers-reduced-motion`.
- **Ligero**: sin librerías, sin paso de compilación.

## Tecnologías

| Área | Herramientas |
| --- | --- |
| Estructura | HTML5 semántico |
| Estilos | CSS3 con variables (custom properties), metodología BEM |
| Comportamiento | JavaScript vanilla (`IntersectionObserver`, `localStorage`) |
| Hosting | Cloudflare Workers (assets estáticos) |
| Control de versiones | Git y GitHub |

## Decisiones de diseño

- **Tokens de diseño en `:root`**: colores, espaciado y radios viven en variables. El tema oscuro solo redefine esos valores, sin tocar los componentes.
- **BEM**: todas las clases tienen el mismo peso de especificidad, lo que evita guerras de estilos y hace el CSS predecible (`.project__title`, `.button--primary`).
- **`theme-init.js` sin `defer`**: se ejecuta antes del primer pintado para evitar el parpadeo del tema equivocado al cargar.
- **Mejora progresiva**: el menú móvil solo se oculta si JavaScript está activo; sin JS, sigue siendo navegable.

## Estructura

```
.
├── public/                 # Todo lo que se publica
│   ├── index.html
│   ├── styles.css
│   ├── script.js           # Menú, tema y sección activa
│   ├── theme-init.js       # Aplica el tema antes de pintar
│   ├── robots.txt
│   ├── sitemap.xml
│   └── assets/
│       ├── images/
│       └── documents/
├── wrangler.jsonc          # Configuración de Cloudflare
└── README.md
```

## Ejecutar en local

No hay nada que instalar ni compilar. Desde la raíz del repositorio:

```bash
python3 -m http.server --directory public 8000
```

Luego abre <http://localhost:8000>.

## Despliegue

El sitio se publica en Cloudflare Workers como un Worker de assets estáticos, configurado en `wrangler.jsonc`. Cada `git push` a la rama `main` dispara un nuevo despliegue automático.

## Contacto

- 📧 [frankmarin2401@gmail.com](mailto:frankmarin2401@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/francisco-marin-cast)
- 🐙 [@FMarin2401](https://github.com/FMarin2401)

---

© 2026 Francisco Marin Castillo. Todos los derechos reservados.
