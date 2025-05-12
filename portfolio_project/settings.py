DATABASES = {}  # 🔥 Desactiva la base de datos
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

INSTALLED_APPS = [
    'django.contrib.staticfiles',  # Solo archivos estáticos
    'portfolio_app',  # Tu aplicación del portafolio
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.middleware.common.CommonMiddleware',
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')], # 📌 Asegurar acceso a plantillas
        'APP_DIRS': True,
    },
]