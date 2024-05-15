let items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// items [0] = new Array();
// items [1] = new Array();
// items [2] = new Array();
// items [3] = new Array();
// items [4] = new Array();

for(i = 0; i < items.length; i++)
{   
    const row = document.createElement("div")
    document.body.appendChild(row);

    for(j = 0; j < items.length; j++)
    {
        console.log(i, j);
        const grid = document.createElement("span");
        grid.innerHTML = i + "," + j;
        grid.classList.add("grids");
        document.body.appendChild(grid);
    }
}