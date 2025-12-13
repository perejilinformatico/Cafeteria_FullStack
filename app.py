from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

pedidos = []

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/user')
def user():
    return render_template("user.html")

@app.route('/enviado', methods=['POST', 'GET'])
def enviado():
    
    if request.method == 'POST':
        nombre = request.form.get('nombre')
        cafe_seleccionado = request.form.get('Cafes')
        pedido = {
            'nombre': nombre,
            'cafe': cafe_seleccionado,
        }
        pedidos.append(pedido)
        return redirect(url_for('cafe_enviado_user', nombre=nombre, cafe_seleccionado=cafe_seleccionado))

@app.route('/cafe_enviado_user')
def cafe_enviado_user():
    nombre = request.args.get('nombre')
    cafe_seleccionado = request.args.get('cafe_seleccionado')
    return render_template('cafe_enviado_user.html', nombre=nombre, cafe_seleccionado=cafe_seleccionado)

@app.route('/admin')
def admin():
    return render_template('admin.html', pedidos=pedidos)

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0')

