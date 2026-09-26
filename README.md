# Panadería Santa Inés

Sitio web oficial de **Panadería Santa Inés**, una panadería tradicional ubicada en **Huasco, Región de Atacama (Chile)**. El proyecto combina una identidad cálida inspirada en la panadería artesanal con una arquitectura moderna en React, TypeScript y Tailwind CSS.

---

## Vista previa

> Una experiencia digital enfocada en transmitir confianza, tradición y cercanía, permitiendo a los clientes conocer los productos y realizar encargos directamente por WhatsApp.

### Características principales

* Catálogo dinámico de productos.
* Filtros por categorías.
* Encargos vía WhatsApp.
* Diseño responsive.
* Animaciones con Motion.
* Arquitectura modular y escalable.
* Sistema de contenido desacoplado (`content/`).

---

## Tecnologías

| Tecnología               | Uso              |
| ------------------------ | ---------------- |
| React 19                 | UI               |
| TypeScript               | Tipado           |
| Vite                     | Bundler          |
| Tailwind CSS v3          | Estilos          |
| Motion                   | Animaciones      |
| Lucide React             | Iconografía      |
| Radix UI                 | Componentes base |
| Class Variance Authority | Variantes UI     |

---

## Arquitectura

El proyecto está organizado siguiendo una separación clara entre contenido, lógica y presentación.

```text
src/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   └── App.tsx
│
├── content/
│   ├── business.ts
│   ├── hero.ts
│   ├── products.ts
│   ├── navigation.ts
│   ├── schedule.ts
│   ├── types.ts
│   └── data.ts
│
├── hooks/
│   ├── useScrolled.ts
│   └── useScrollSpy.ts
│
├── lib/
│   ├── theme.ts
│   ├── cn.ts
│   ├── whatsapp.ts
│   └── constants.ts
│
└── styles/
```

### Principios aplicados

* **Content-first architecture**: el contenido del negocio vive separado de la UI.
* **Reusable UI Components**: componentes reutilizables para mantener consistencia.
* **Single Source of Truth**: `content/data.ts` actúa como fachada del dominio.
* **Type-safe development**: tipado fuerte en TypeScript.

---

## Diseño

La identidad visual está inspirada en una panadería artesanal contemporánea.

### Paleta principal

| Color     | Uso             |
| --------- | --------------- |
| `#2B211B` | Color principal |
| `#FFF8EC` | Fondo           |
| `#FFFCF7` | Superficies     |
| `#C99648` | Acento          |
| `#8A5A3B` | Secundario      |
| `#F3E8D2` | Crema           |

### Tipografías

* **Playfair Display** — títulos editoriales.
* **Inter** — interfaz y contenido.

---

## Funcionalidades

### Navegación

* Scroll suave.
* Navbar inteligente.
* Scroll Spy.
* Menú móvil independiente.

### Catálogo

* Categorías dinámicas.
* Productos desacoplados del componente.
* WhatsApp contextual por producto.

### Experiencia

* Diseño responsive.
* Animaciones suaves.
* Imágenes con fallback.
* Optimización para accesibilidad.

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/JavierCabreraDev/Panaderia-Santa-Ines.git
```

Entrar al proyecto:

```bash
cd Panaderia-Santa-Ines
```

Instalar dependencias:

```bash
pnpm install
```

Ejecutar:

```bash
pnpm dev
```

Compilar:

```bash
pnpm build
```

Verificar TypeScript:

```bash
pnpm tsc --noEmit
```

---

## Próximas mejoras

### Arquitectura

* [x] Modularización del dominio.
* [x] Hooks reutilizables.
* [x] Design Tokens.
* [ ] Design System completo.
* [ ] Motion Presets.
* [ ] Optimización de imágenes.

### Producto

* [ ] Café al paso.
* [ ] Página de temporada.
* [ ] SEO avanzado.
* [ ] Datos estructurados adicionales.

---

## Capturas

> Se incorporarán capturas del Hero, catálogo de productos y experiencia móvil a medida que avance el proyecto.

---

## Autor

**Javier Cabrera**

Ingeniero · Desarrollador Web

* Portfolio: https://javiercabreravejar.cl
* GitHub: https://github.com/JavierCabreraDev

---

## Licencia

Este proyecto fue desarrollado para **Panadería Santa Inés** como parte de su transformación digital y modernización de presencia web.
