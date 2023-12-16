const BlogsElem = document.getElementById('list');

function AddBlogToList(blog) {
  let NewDiv = document.createElement('div');
  NewDiv.classList.add('blog');
  let NewH1 = document.createElement('h1');
  NewH1.classList.add('blogtitle');
  let NewP = document.createElement('p');

  NewH1.textContent = blog['title'];
  NewP.textContent = blog['body'];

  NewDiv.append(NewH1);
  NewDiv.append(NewP);
  BlogsElem.append(NewDiv);
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
}).then((response) => response.json()).then((json) => json.forEach((blog) => AddBlogToList(blog)))