from datetime import datetime
from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)
Cafes_Puntos = 0
Cafes_EXP = 0
Cafes_CORT = 0
Cafes_CAPU = 0
Cafes_CAPU_NUTELLA = 0
Cafes_CONLECHE = 0
TÉS = 0
pedidos = []

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/user')
def user():
    return render_template("user.html",  Cafes_Puntos=Cafes_Puntos)

@app.route('/enviado', methods=['POST', 'GET'])
def enviado():
    
    if request.method == 'POST':
        nombre = request.form.get('nombre')
        cafe_seleccionado = request.form.get('Cafes')
        fecha = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        pedido = {
            'nombre': nombre,
            'cafe': cafe_seleccionado,
            'fecha': fecha,
        }
        
        global Cafes_Puntos
        Cafes_Puntos += 1
        global Cafes_EXP
        global Cafes_CAPU
        global Cafes_CORT
        global Cafes_CAPU_NUTELLA
        global Cafes_CONLECHE
        global TÉS
        if cafe_seleccionado == "Cafe Expreso":
            global Cafes_EXP
            Cafes_EXP += 1
        elif cafe_seleccionado == "Cafe Cortado":
            global Cafes_CORT
            Cafes_CORT += 1
        elif cafe_seleccionado == "Cafe Capuchino":
            global Cafes_CAPU
            Cafes_CAPU += 1
        elif cafe_seleccionado == "capuchino con nutella":
            global Cafes_CAPU_NUTELLA
            Cafes_CAPU_NUTELLA += 1
        elif cafe_seleccionado == "Cafe Con Leche":
            global Cafes_CONLECHE
            Cafes_CONLECHE += 1
        else:
            global TÉS
            TÉS += 1

        pedidos.append(pedido)
        return redirect(url_for('cafe_enviado_user', nombre=nombre, cafe_seleccionado=cafe_seleccionado, fecha=fecha))

@app.route('/cafe_enviado_user')
def cafe_enviado_user():
    nombre = request.args.get('nombre')
    cafe_seleccionado = request.args.get('cafe_seleccionado')
    fecha = request.args.get('fecha')
    return render_template('cafe_enviado_user.html', nombre=nombre, cafe_seleccionado=cafe_seleccionado, fecha=fecha)

@app.route('/admin')
def admin():
    return render_template('admin.html', pedidos=pedidos)

@app.route('/vaciar')
def vaciar():
    global pedidos
    pedidos = []    
    return redirect(url_for('admin'))

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0', debug=True)

