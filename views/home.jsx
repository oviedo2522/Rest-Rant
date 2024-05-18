const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/style.css" />
            </head>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
                <div>
                    <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home

