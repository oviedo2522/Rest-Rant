const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/style.css" />
            </head>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/public/images/PIXNIO-317090-4389x3026.jpg" alt="" />
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = error404
