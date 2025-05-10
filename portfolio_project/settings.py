import os  # Para manejar rutas de archivos

# 1️⃣ Configuración Básica
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_KEY = 'tu_clave_secreta_aqui'
DEBUG = True  # Actívalo en desarrollo, desactívalo en producción
ALLOWED_HOSTS = []  # Puedes agregar dominios si despliegas el proyecto

# 2️⃣ Aplicaciones Instaladas
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'portfolio_app',  # Tu aplicación de portafolio
]

# 3️⃣ Middleware (Seguridad y rendimiento)
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# 4️⃣ Configuración de Templates
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],  # Ruta de tus HTML
        'APP_DIRS': True,
    },
]

# 5️⃣ Configuración de Archivos Estáticos
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'portfolio_app/static'),  # Ruta de archivos CSS/JS
]

# 6️⃣ Configuración de Base de Datos (Opcional si decides usarla)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}