let items = new Array();
items [0] = new Array("First blog heading", "First blog text");
items [1] = new Array("Second blog heading", "Second blog text");
items [2] = new Array("Third blog heading", "Third blog text");
items [3] = new Array("Fourth blog heading", "Fourth blog text");
items [4] = new Array("Fifth blog heading", "Fifth blog text");

for(i = 0; i < items.length; i++){

    const blogOuterBox = document.createElement("div");
    blogOuterBox.classList.add("blogOuterBox");

    const title = document.createElement("h2");
    title.innerHTML = items[i][0];

    const blogInnerBox = document.createElement("div");
    blogInnerBox.classList.add("blogInnerBox");
    blogInnerBox.innerHTML = items[i][1];

    blogOuterBox.appendChild(title);
    blogOuterBox.appendChild(blogInnerBox)
    document.getElementById("blogPosts").appendChild(blogOuterBox);
}