#!/usr/bin/env python
import os
import sys

if __name__ == "__main__":
    # 📌 Asegurar que la configuración del proyecto Django es correcta
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "portfolio_project.settings")

    # 🔹 Verificar que el entorno virtual está activado antes de continuar
    if sys.prefix == sys.base_prefix:
        print("⚠️ Advertencia: El entorno virtual no está activado.")
        print("Por favor, activa el entorno antes de ejecutar manage.py.")
        sys.exit(1)

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Error: Django no está instalado o el entorno virtual no está configurado correctamente."
        ) from exc

    execute_from_command_line(sys.argv)