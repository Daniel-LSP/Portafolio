from django.urls import path, include

urlpatterns = [
    path('', include('portfolio_app.urls')),  # Incluye las rutas de la aplicación
]