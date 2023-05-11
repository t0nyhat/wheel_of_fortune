"""
Колесо Фортуны
"""
from flask import Flask, render_template
from flask_qrcode import QRcode

app = Flask(__name__)
QRcode(app)

@app.route('/')
def index_view():
    """Обычный вид, тестовое колесо"""
    return render_template('index_test.html')

@app.route('/<int:angle>')
def index_view_game(angle):
    """Призовая игра"""
    context = {'angle': angle}
    return render_template('game.html', **context)
@app.route('/tickets')

def index_view_tickets():
    """Призовая игра"""
    return render_template('tickets.html')

@app.route('/qrcode/<int:id>')
def index_view_qrcode(id):
    """генератор qrcode"""
    prize = {
    1:0,
    2:18,
    3:36,
    4:54,
    5:72,
    6:90,
    7:108,
    8:126,
    9:144,
    10:162,
    11:180,
    12:198,
    13:216,
    14:234,
    15:252,
    16:270,
    17:288,
    18:306,
    19:324,
    20:342,
  }
    context = {'string': "http://лотерея-тимофея.рф/"+str(prize[id]),'num':id}
    return render_template('qr.html',**context)

if __name__ == '__main__':
    app.run()
    