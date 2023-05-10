"""
Колесо Фортуны
"""
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index_view():
    """Обычный вид, тестовое колесо"""
    return render_template('index_test.html')

@app.route('/<int:id>')
def index_view_game(id):
    """Призовая игра"""
    context = {'id': id}
    return render_template('index.html', **context)

if __name__ == '__main__':
    app.run()
    