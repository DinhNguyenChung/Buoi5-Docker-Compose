from flask import Flask, request, render_template_string
import redis
import os

app = Flask(__name__)
r = redis.Redis(host=os.environ.get("REDIS_HOST", "localhost"), port=6379, db=0)

html = '''
    <form action="/" method="POST">
        <button name="vote" value="Cats">Cats</button>
        <button name="vote" value="Dogs">Dogs</button>
    </form>
'''

@app.route("/", methods=["GET", "POST"])
def main():
    if request.method == "POST":
        vote = request.form["vote"]
        r.rpush("votes", vote)
    return html
