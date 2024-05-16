let myCarObject1 = {
    make: "Ford",
    model: "Focus",
    colour: "black",
    numberOfDoors: 5,
    logo: "https://th.bing.com/th/id/R.a2a5756f6e887600e4d85bf688e045d3?rik=T34VXR1J6sdI4g&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fFord-Logo-PNG-Transparent-Image.png&ehk=gUndRcFx%2byYKLEdu3%2b%2bzWkFYmF9VNMQaB3T5BKJm9mw%3d&risl=&pid=ImgRaw&r=0",
    tags: ["diesel", "hatchback", "dog friendly"]
}

let myCarObject2 = {
    make: "Ferrari",
    model: "F40",
    colour: "red",
    numberOfDoors: 2,
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Ferrari_logo.png",
    tags: ["fast", "sporty", "supercar"]
}

let myCarObject3 = {
    make: "McLaren",
    model: "F1",
    colour: "silver",
    numberOfDoors: 2,
    logo: "https://clipart-library.com/image_gallery2/McLaren-Logo-PNG.png",
    tags: ["supercar", "rare", "awesome"]
}

let myArray = [];

myArray.push(myCarObject1, myCarObject2, myCarObject3);

for(i = 0; i < myArray.length; i++)
{
    const innerBox = document.createElement("div");
    innerBox.classList.add("innerBox");

        const titleBox = document.createElement("div");
        titleBox.classList.add("titleBox");

            const title = document.createElement("h2");
            title.innerHTML = myArray[i].make + " " + myArray[i].model;

            const createImage = document.createElement("img");
            createImage.src = myArray[i].logo;

        const mainBox = document.createElement("div");
        mainBox.classList.add("standardBox");

            const mainBoxItem1 = document.createElement("p");
            mainBoxItem1.innerHTML = "Colour = " + myArray[i].colour;

            const mainBoxItem2 = document.createElement("p");
            mainBoxItem2.innerHTML = "Number of doors = " + myArray[i].numberOfDoors;

            const mainBoxItem3 = document.createElement("p");
            mainBoxItem3.innerHTML = "Tags = " + myArray[i].tags;

    document.getElementById("blogPosts").appendChild(innerBox);
    innerBox.appendChild(titleBox);
        titleBox.appendChild(title);
        titleBox.appendChild(createImage);
    innerBox.appendChild(mainBox);
        mainBox.appendChild(mainBoxItem1);
        mainBox.appendChild(mainBoxItem2);
        mainBox.appendChild(mainBoxItem3);
}