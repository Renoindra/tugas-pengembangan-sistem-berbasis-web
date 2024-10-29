from flask import Flask, render_template

app = Flask(__name__)

# Route untuk menampilkan file index.html
@app.route('/index')
def show_index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)