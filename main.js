@font-face {
    font-family: 'Silkscreen';
    src: url('fonts/Silkscreen-Regular.ttf') format('truetype');
}

* {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    user-select: none;
}

h1,
h2 {
    cursor: pointer;
    text-align: left;
    margin-left: 8%;
    margin-top: 1%;
    margin-bottom: 1%;
    font-family: 'Silkscreen', sans-serif;
    width: fit-content;
}

span {
    color: #4CAF50;
}

button {
    width: 100%;
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
}

button:hover {
    background-color: white;
    color: #4CAF50;
}

hr {
    border-top: 1px solid rgb(176, 164, 144);
    border-radius: 50px;
    margin-left: 50px;
    margin-right: 50px;
}

h1 {
    font-size: 50px;
}

h2 {
    margin-top: 1.821%;
    font-size: 30px;
    height: fit-content;
}

body {
    margin: 0px;
    background-color: blanchedalmond;
}

header,
footer {
    vertical-align: middle;
    padding-top: 1px;
    padding-bottom: 1px;
    background-color: blanchedalmond;
    display: flex;
    flex-wrap: wrap;
}

footer {
    display: block;
}

.Hdivider {
    background-color: rgb(176, 164, 144);
    width: 100%;
    height: 3px;
}

.footer {
    cursor: default;
    margin-bottom: 5px;
}

.info {
    cursor: default;
    text-align: left;
    margin: 10px;
    margin-left: 50px;
}

.blogs {
    background-color: rgb(219, 203, 179);
    display: flex;
    margin: 0px;
    padding-left: 5%;
    padding-right: 5%;
    flex-wrap: wrap;
    height: 73vh;
}

.blog {
    border-radius: 10px;
    border: 3px solid black;
    background-color: white;
    margin: 10px;
    flex-grow: 1;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
}

.blog:hover {
    background-color: #4CAF50;
    cursor: pointer;
}

.blogtitle {
    font-size: 25px;
    font-weight: 900;
}

.blogbody {
    font-size: 20px;
}

.choosen {
    background-color: #4CAF50;
    box-shadow: 0px 0px 11px 5px #4CAF50;
    padding-top: 1%;
    width: 100%;
    height: 5%;
}
