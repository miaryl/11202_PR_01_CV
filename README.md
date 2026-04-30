# CV viewer – Django Template Version

A modern, themeable CV/resume interface built with Django templates, HTML, CSS, and  JavaScript.

## Overview

This project renders a structured CV using Django template variables (`{{ }}`) and provides a clean UI with a glassmorphism-inspired design. It includes a dynamic theme switcher with multiple visual styles.

The template is designed to integrate directly into an existing Django project where CV data is passed as a context object.

---

## Features

* Django template-based rendering (`{{ cv.* }}`)
* Fully responsive layout
* Glass-style card UI
* Dynamic theme switching (stored in `localStorage`)
* Multiple themes:

  * **Default** (dark purple)
  * **Blossom** (light pink / gold)
  * **Metal** (dark / high-contrast)

---

## Project Structure

```
project/
│
├── templates/
│   └── cv.html
│
├── static/
│   └── assets/
│       └── css/
│           └── styles.css
```

---

## Data Requirements

The template expects a `cv` object in the Django context with the following structure:

```python
{
  "personal_info": {
    "nombre": "",
    "apellidos": "",
    "email_profesional1": "",
    "telefono1": "",
    "ciudad": ""
  },
  "professional_profile": {
    "profesion": "",
    "resumen": ""
  },
  "work_experience": [
    {
      "puesto": "",
      "company": "",
      "ubicacion": "",
      "fecha_inicio": "",
      "fecha_fin": "",
      "trabajo_actual": true,
      "descripcion": ""
    }
  ],
  "education": [
    {
      "titulo": "",
      "centro": "",
      "ubicacion": "",
      "fecha_inicio": "",
      "fecha_fin": ""
    }
  ],
  "skills": [
    { "nombre": "" }
  ],
  "projects": [
    {
      "nombre": "",
      "descripcion": ""
    }
  ],
  "social_network": {
    "linkedin": "",
    "github": ""
  }
}
```

---

## Usage

### 1. Add Template

Place the HTML file inside your Django templates directory:

```
templates/cv.html
```

---

### 2. Load Static Files

At the top of your template:

```django
{% load static %}
```

---

### 3. Pass Context from View

Example Django view:

```python
def cv_view(request):
    return render(request, "cv.html", {"cv": data})
```

---

### 4. Run Project

```bash
python manage.py runserver
```

---

## Theme System

Themes are implemented using CSS variables and applied via:

```html
<html data-theme="default">
```

Switching is handled via JavaScript:

```js
document.documentElement.setAttribute("data-theme", theme);
localStorage.setItem("theme", theme);
```

### Available Themes

| Theme   | Description              |
| ------- | ------------------------ |
| default | Dark purple (base)       |
| pink    | Light / blossom / gold   |
| metal   | Dark high-contrast style |

---

## Important Notes

* All colors are controlled via CSS variables (`--bg`, `--text`, etc.)
* Avoid hardcoding colors in components
* Ensure no duplicate `.card` styles override variables
* Use hard refresh if styles do not update (`Ctrl + Shift + R`)

---

## Browser Support

* Modern browsers (Chrome, Edge, Firefox, Safari)
* Requires support for:

  * CSS variables
  * `color-mix()` (optional fallback may be needed)

---

## Future Improvements

* Animated theme transitions
* Icon-based theme switcher
* Print-friendly CV export (PDF)
* Multi-language support
* Editable admin panel integration

---

## Author

Internal project – prepared for integration into existing Django system.

---
