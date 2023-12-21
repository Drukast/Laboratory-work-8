const BlogsElem = document.getElementById('list');
let BlogList = []
let DivList = []

function CloseBlog(Div) {
  for (let i = 0; i < DivList.length; i++) {
    if (Div !== DivList[i]) {
      DivList[i].lastChild.textContent = DivList[i].lastChild.textContent.split('\n')[0]
      DivList[i].classList.remove('choosen');
    }
  }
}

function OpenBlog(Div) {
  let DivID = Div.getAttribute('id')
  BlogList.forEach(Blog => {
    if (Blog['id'] == DivID) {
      Div.lastChild.textContent = Blog['body']
      Div.classList.add('choosen');
    }
  });
}

function AddBlogToList(blog) {
  BlogList.push(blog)
  let NewDiv = document.createElement('div');
  NewDiv.onclick = function () {
    CloseBlog(NewDiv)
    OpenBlog(NewDiv)
  }
  NewDiv.setAttribute('id', blog['id'])
  NewDiv.classList.add('blog');
  let NewH3 = document.createElement('h3');
  NewH3.classList.add('blogtitle');
  let NewP = document.createElement('p');
  NewP.classList.add('blogbody');

  NewH3.textContent = blog['title'];
  NewP.textContent = blog['body'].split('\n')[0];

  NewDiv.append(NewH3);
  NewDiv.append(NewP);
  DivList.push(NewDiv);
  BlogsElem.append(NewDiv);
}
