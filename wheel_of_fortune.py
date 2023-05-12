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
    prize = {2: 342, 8: 288, 17: 36, 12: 270, 5: 234, 13: 306, 11: 72, 14: 162, 1: 216, 7: 252, 10: 324, 19: 108, 15: 126, 18: 90, 9: 198, 20: 54, 6: 0, 16: 180, 3: 18, 4: 144}
    context = {'string': "http://лотерея-тимофея.рф/"+str(prize[id]),'num':id}
    return render_template('qr.html',**context)

if __name__ == '__main__':
    app.run()
    