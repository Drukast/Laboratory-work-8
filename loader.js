const Loader = document.getElementById('loader');

function ClearList() {
    DivList.forEach(Div => {
        BlogsElem.removeChild(Div)
    });
    BlogsElem.style = 'height: 73vh;'
}

Loader.onclick = function () {
    ClearList()
    BlockList = []
    DivList = []
    BlogsElem.style = 'height: 100%;'
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    }).then((response) => response.json()).then((json) => json.forEach((blog) => AddBlogToList(blog)))
}