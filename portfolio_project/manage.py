#!/usr/bin/env python
import os
import sys


if __name__ == "__main__":
    # 📌 Configurar el módulo de configuración del proyecto Django
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "portfolio_project.settings")

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Error: Django no está instalado o no se encuentra en el entorno virtual."
        ) from exc

    execute_from_command_line(sys.argv)
