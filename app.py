from flask import Flask, render_template, url_for

# Crear una instancia de la aplicación Flask
app = Flask(__name__, template_folder="templates", static_folder="static")

# Ruta para la página de inicio
@app.route("/")
def home():
    return render_template("index.html")

# Ruta para la página "Sobre Mí"
@app.route("/about")
def about():
    return render_template("about.html")

# Ruta para la página "Habilidades"
@app.route("/skills")
def skills():
    return render_template("skills.html")

# Ruta para la página "Proyectos"
@app.route("/projects")
def projects():
    return render_template("projects.html")

# Ruta para la página "Contacto"
@app.route("/contact")
def contact():
    return render_template("contact.html")

# Verificar si este archivo es el principal y ejecutar la aplicación
if __name__ == "__main__":
    app.run(debug=True)