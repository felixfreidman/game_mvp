let allTiles = document.querySelectorAll('.cage-tile');
let counter = 0;
allTiles.forEach(tile => {
    tile.id = `tile${counter}`;
    counter++;
    tile.addEventListener('click', (event) => {
        let firstID = event.target.id;
        if (document.querySelector('.cage-tile--active')) {
            let tileID = document.querySelector('.cage-tile--active').id;
            if (document.getElementById(tileID).classList.contains('cage-tile--enemy')) {
                document.getElementById(tileID).classList.remove('cage-tile--enemy');
                document.getElementById(firstID).classList.add('cage-tile--enemy');
            } else if (document.getElementById(tileID).classList.contains('cage-tile--our')) {
                document.getElementById(tileID).classList.remove('cage-tile--our');
                document.getElementById(firstID).classList.add('cage-tile--our');
            }

        }
        if (tile.classList.contains('cage-tile--enemy') || tile.classList.contains('cage-tile--our')) {
            tile.classList.add('cage-tile--active');
        }

    })
    document.addEventListener('keyup', (event) => {
        var name = event.key;
        if (name == 'n') {
            allTiles.forEach(tile => {
                if (tile.classList.contains('cage-tile--active')) {
                    tile.classList.remove('cage-tile--active');
                }
            });
        }
    }, false);
})
window.onclick = function (event) {
    if (event.target != document.querySelector('.cage-tile--active')) {
        document.querySelector('.cage-tile--active').classList.remove("cage-tile--active");
    }
}

