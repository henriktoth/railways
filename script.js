const mainscreenDiv = document.querySelector('.main_screen');
const descriptionDiv = document.querySelector('.description');

const nameInputField = document.querySelector('#input_name');
const menuInputErrorDiv = document.querySelector('.menu_input_error');

const button5by5 = document.querySelector('#button_diff_5by5');
const button7by7 = document.querySelector('#button_diff_7by7');

const buttonStart = document.querySelector('#button_start');
const buttonDescOpen = document.querySelector('#button_desc');
const buttonDescClose = document.querySelector('#button_close_desc');
const buttonErrorClose = document.querySelector('#button_close_error');

const gameScreenDiv = document.querySelector('.game_screen');
const winnerDiv = document.querySelector('.game_winner');
const toplistDiv = document.querySelector('.game_toplist');
const restartButton = document.querySelector('#game_restart');

const gameInfoTable = document.querySelector('#game_info_table');
const gameTimeText = document.querySelector('#game_timer');
const gameNameText  = document.querySelector('#game_name');
const gameBoard = document.querySelector('#game_board');

let difficulty = "";
let playerName = '';
let startTime;
let timeInterval;

let gameMatrixEasy = [
    [   [{ field: 'E', rotation: 0 }, { field: 'H', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'L', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 0 }, { field: 'L', rotation: 0 }],
        [{ field: 'B', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 2 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'L', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 3 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }]
    ],
    [   [{ field: 'L', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'H', rotation: 2 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 2 }],
        [{ field: 'B', rotation: 0 }, { field: 'L', rotation: 0 }, { field: 'H', rotation: 3 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'L', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }]
    ],
    [   [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'H', rotation: 2 }, { field: 'B', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'L', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 2 }]
    ],
    [   [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'B', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 1 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'L', rotation: 0 }, { field: 'H', rotation: 3 }, { field: 'E', rotation: 0 }]
    ],
    [   [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'H', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'B', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 3 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 0 }, { field: 'L', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'H', rotation: 2 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }]
    ]
];
let gameMatrixHard = [
    [
        [{ field: 'E', rotation: 0 }, { field: 'H', rotation: 1 }, { field: 'L', rotation: 0 }, { field: 'L', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }],
        [{ field: 'B', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 3 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'H', rotation: 3 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'L', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
    ],
    [
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 1 }, { field: 'L', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'B', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 2 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 0 }],
        [{ field: 'H', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'L', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'H', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'L', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
    ],
    [
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }],
        [{ field: 'L', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 3 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'L', rotation: 0 }, { field: 'H', rotation: 3 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'B', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 1 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'L', rotation: 0 }, { field: 'H', rotation: 3 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
    ],
    [
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 2 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 3 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'L', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 2 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'B', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 3 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
    ],
    [
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'B', rotation: 1 }, { field: 'B', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 1 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'H', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'L', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'H', rotation: 2 }, { field: 'E', rotation: 0 }, { field: 'B', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
        [{ field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }, { field: 'E', rotation: 0 }],
    ]

]

let currentGameMatrix = []; 
let railMatrix = [];

//5x5 gomb event
button5by5.addEventListener('click', function() {
    difficulty = "easy";
    button5by5.style.backgroundColor = '#f0f0f0';
    button5by5.style.color = '#333';
    button7by7.style.backgroundColor = '';
    button7by7.style.color = '';
});

//7x7 gomb event
button7by7.addEventListener('click', function() {
    difficulty = "hard";
    button7by7.style.backgroundColor = '#f0f0f0';
    button7by7.style.color = '#333';
    button5by5.style.backgroundColor = '';
    button5by5.style.color = '';
});

//Start gomb event
buttonStart.addEventListener('click', function() {
    playerName = nameInputField.value;
    if (difficulty !== '' && playerName !== '') {
        mainscreenDiv.style.display = 'none';
        descriptionDiv.style.display = 'none'; 
        gameScreenDiv.style.display = 'flex';
        
        gameNameText.innerText = playerName;
        
        startTime = new Date();
        setInterval(updateTime, 1000);
        
        if(difficulty === 'easy'){
            let randomLevel = Math.floor(Math.random() * 5) + 1;
            setGameMatrix(difficulty, randomLevel);
            createGameTable(5,5);
            initializeRailMatrix(5,5);
            gameBoard.style.backgroundImage = `url('levels/easy/level_e${randomLevel}.png')`;
            gameBoard.style.backgroundSize = 'cover';
        }
        else{
            let randomLevel = Math.floor(Math.random() * 5) + 1;
            setGameMatrix(difficulty, randomLevel);
            createGameTable(7,7);
            initializeRailMatrix(7,7);
            gameBoard.style.backgroundImage = `url('levels/hard/level_d${randomLevel}.png')`;
            gameBoard.style.backgroundSize = 'cover';
        } 
    } 
    else {
        menuInputErrorDiv.style.display = 'block';
    }
});
// Description div megnyitás és bezárás
buttonDescOpen.addEventListener('click', function() {
    descriptionDiv.style.display = 'block';
});
buttonDescClose.addEventListener('click', function() {
    descriptionDiv.style.display = 'none';
});

//Menu Error div bezárás
buttonErrorClose.addEventListener('click', function() {
    menuInputErrorDiv.style.display = 'none';
});

//Táblázat generálás
function createGameTable(rows, cols) {
    gameBoard.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');

            tr.appendChild(td);
        }
        gameBoard.appendChild(tr);
    }
}

//boardmátrix generálás
function setGameMatrix(difficulty, randomLevel){
    if(difficulty === 'easy'){
        currentGameMatrix = gameMatrixEasy[randomLevel - 1];
    }
    else{
        currentGameMatrix = gameMatrixHard[randomLevel - 1];
    }
    console.log(currentGameMatrix);
}

//Rail mátrix inicializálás
function initializeRailMatrix(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push({
                entry: '',
                exit: '',
                placed: false
            });
        }
        railMatrix.push(row);
    }
    console.log(railMatrix);
}

//Timer
function updateTime() {
    let currentTime = new Date();
    let elapsedTime = new Date(currentTime - startTime);
    let minutes = String(elapsedTime.getUTCMinutes()).padStart(2, '0');
    let seconds = String(elapsedTime.getUTCSeconds()).padStart(2, '0');
    gameTimeText.innerText = `${minutes}:${seconds}`;
}

//End game ellenőrzés
function checkGameEnd() {
    console.log('Checking game end...');
    for (let i = 0; i < railMatrix.length; i++) {
        for (let j = 0; j < railMatrix[i].length; j++) {
            if (currentGameMatrix[i][j].field === 'E' && !railMatrix[i][j].placed) {
                return false;
            }
        }
    }

    let requiredLength = 0;
    for (let i = 0; i < currentGameMatrix.length; i++) {
        for (let j = 0; j < currentGameMatrix.length; j++){
            if(currentGameMatrix[i][j].field != 'L'){
                requiredLength++;
            }
        }
    }

    let firstRail = null;
    for (let i = 0; i < railMatrix.length; i++) {
        for (let j = 0; j < railMatrix[i].length; j++) {
            if (railMatrix[i][j].placed) {
                firstRail = [i,j];
                break;
            }
        }
        if (firstRail) break;
    }

    let visited = new Set();
    let currentPos = firstRail.slice();
    let currentRail = railMatrix[currentPos[0]][currentPos[1]];
    let currentDir = currentRail.exit;

    function getNextPosition([row, col], direction) {
        switch (direction) {
            case 'N': return [row - 1, col];
            case 'S': return [row + 1, col];
            case 'E': return [row, col + 1];
            case 'W': return [row, col - 1];
        }
    }

    function getOppositeDirection(direction) {
        switch (direction) {
            case 'N': return 'S';
            case 'S': return 'N';
            case 'E': return 'W';
            case 'W': return 'E';
        }
    }

    let traversalLength = 0;
    while (true) {
        let posKey = `${currentPos[0]},${currentPos[1]}`;

        if (traversalLength > 0 && currentPos[0] === firstRail[0] && currentPos[1] === firstRail[1]) {
            return traversalLength === requiredLength;
        }

        if (visited.has(posKey)) {
            return false;
        }

        visited.add(posKey);
        traversalLength++;

        let nextPos = getNextPosition(currentPos, currentDir);

        if (
            nextPos[0] < 0 || nextPos[0] >= railMatrix.length ||
            nextPos[1] < 0 || nextPos[1] >= railMatrix[0].length
        ) {
            return false;
        }

        let nextRail = railMatrix[nextPos[0]][nextPos[1]];

        if (!nextRail.placed) {
            return false;
        }

        let expectedEntryDir = getOppositeDirection(currentDir);
        if (nextRail.entry === expectedEntryDir) {
            currentDir = nextRail.exit;
        } else if (nextRail.exit === expectedEntryDir) {
            currentDir = nextRail.entry;
        } else {
            return false;
        }

        currentPos = nextPos;
    }
}

// Rail placement és rotation
gameBoard.addEventListener('click', function(event) {
    if (event.target.tagName === 'TD') {
        let cell = event.target;
        let rowIndex = cell.closest('tr').rowIndex;
        let colIndex = cell.cellIndex;
        let cellData = currentGameMatrix[rowIndex][colIndex];
        let railData = railMatrix[rowIndex][colIndex];
        console.log(`Field: ${cellData.field}, Rotation: ${cellData.rotation}`);
        switch (cellData.field) {
            case 'E':
                if (!railData.placed) {
                    cell.style.backgroundImage = "url('./tiles/straight_rail.png')";
                    railData.placed = true;
                    railData.entry = 'N';
                    railData.exit = 'S';
                } else {
                    cellData.rotation = (cellData.rotation + 1) % 4;
                    if (cell.style.backgroundImage.includes('straight_rail.png')) {
                        cell.style.transform = `rotate(${cellData.rotation * 90}deg)`;
                        switch (cellData.rotation) {
                            case 0:
                                railData.entry = 'N';
                                railData.exit = 'S'; 
                                break;
                            case 1:
                                railData.entry = 'W';
                                railData.exit = 'E';
                                break;
                            case 2:
                                railData.entry = 'N';
                                railData.exit = 'S'; 
                                break;
                            case 3:
                                railData.entry = 'W';
                                railData.exit = 'E';
                                break;
                        }
                    } else if (cell.style.backgroundImage.includes('curve_rail.png')) {
                        cell.style.transform = `rotate(${cellData.rotation * 90}deg)`;
                        switch (cellData.rotation) {
                            case 0:
                                railData.entry = 'S'; 
                                railData.exit = 'E'; 
                                break;
                                case 1:
                                railData.entry = 'W';
                                railData.exit = 'S';
                                break;
                                case 2:
                                railData.entry = 'N'; 
                                railData.exit = 'W'; 
                                break;
                                case 3:
                                railData.entry = 'E'; 
                                railData.exit = 'N'; 
                                break;
                        }
                    }
                }
                console.log(railData);
                break;
            case 'B':
                if(cellData.rotation === 0){
                    cell.style.backgroundImage = "url('./tiles/bridge_rail.png')";
                    railData.entry = 'N';
                    railData.exit = 'S';
                }
                else{
                    cell.style.backgroundImage = "url('./tiles/bridge_rail.png')";
                    cell.style.transform = `rotate(${cellData.rotation * 90}deg)`;
                    railData.entry = 'W';
                    railData.exit = 'E';
                }
                railData.placed = true;
                console.log(railData);
                break;
            case 'H':
                if (cellData.rotation === 0) {
                    cell.style.backgroundImage = "url('./tiles/mountain_rail.png')";
                    railData.entry = 'S';
                    railData.exit = 'E';
                } else {
                    cell.style.backgroundImage = "url('./tiles/mountain_rail.png')";
                    cell.style.transform = `rotate(${cellData.rotation * 90}deg)`;
                    switch (cellData.rotation) {
                        case 1:
                            railData.entry = 'W';
                            railData.exit = 'S';
                            break;
                        case 2:
                            railData.entry = 'N';
                            railData.exit = 'W';
                            break;
                        case 3:
                            railData.entry = 'E';
                            railData.exit = 'N';
                            break;
                    }
                }
                railData.placed = true;
                console.log(railData);
                break;
            case 'L':
                console.log(railData);
                break;
        }
        cell.style.backgroundSize = 'cover';
        if (checkGameEnd()) {
            clearInterval(timeInterval);
            setTimeout(() => {
                //Win div
                winnerDiv.style.display = 'block';
                toplistDiv.style.display = 'block';
                winnerDiv.innerHTML = `<p>Gratulálunk, ${playerName}! Nyertél! </p><p>Játékidő: ${gameTimeText.innerText}</p>`;
                restartButton.style.display = 'block';
                //Toplista div
                let topPlayers = JSON.parse(localStorage.getItem('topPlayers')) || [];
                topPlayers.push({ name: playerName, time: gameTimeText.innerText });
                topPlayers.sort((a, b) => {
                    let [aMinutes, aSeconds] = a.time.split(':').map(Number);
                    let [bMinutes, bSeconds] = b.time.split(':').map(Number);
                    return (aMinutes * 60 + aSeconds) - (bMinutes * 60 + bSeconds);
                });
                topPlayers = topPlayers.slice(0, 3);
                localStorage.setItem('topPlayers', JSON.stringify(topPlayers));

                toplistDiv.innerHTML = '<h3>Toplista</h3>';
                topPlayers.forEach(player => {
                    toplistDiv.innerHTML += `<p>${player.name}: ${player.time}</p>`;
                });
            }, 100);
        }
    }
});

//Rail curve
gameBoard.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    if (event.target.tagName === 'TD') {
        let cell = event.target;
        let rowIndex = cell.closest('tr').rowIndex;
        let colIndex = cell.cellIndex;
        let cellData = currentGameMatrix[rowIndex][colIndex];
        let railData = railMatrix[rowIndex][colIndex];
        if (cellData.field === 'E' && railData.placed) {
            if (cell.style.backgroundImage.includes('straight_rail.png')) {
            cell.style.backgroundImage = "url('./tiles/curve_rail.png')";
            switch (cellData.rotation) {
                case 0:
                railData.entry = 'S'; 
                railData.exit = 'E'; 
                break;
                case 1:
                railData.entry = 'W';
                railData.exit = 'S';
                break;
                case 2:
                railData.entry = 'N';
                railData.exit = 'W'; 
                break;
                case 3:
                railData.entry = 'E';
                railData.exit = 'N';
                break;
            }
            } else {
            cell.style.backgroundImage = "url('./tiles/straight_rail.png')";
            switch (cellData.rotation) {
                case 0:
                    railData.entry = 'N'; 
                    railData.exit = 'S';
                    break;
                case 1:
                    railData.entry = 'W';
                    railData.exit = 'E';
                    break;
                case 2:
                    railData.entry = 'N'; 
                    railData.exit = 'S';
                    break;
                case 3:
                    railData.entry = 'W';
                    railData.exit = 'E';
                    break;
            }
            }
        }
        console.log(railData);
    }
});

// Restart
restartButton.addEventListener('click', function() {
    winnerDiv.style.display = 'none';
    toplistDiv.style.display = 'none';
    restartButton.style.display = 'none';
    gameScreenDiv.style.display = 'none';
    mainscreenDiv.style.display = 'flex';
    gameBoard.innerHTML = '';
    playerName = '';
    difficulty = '';
    startTime = null;
    clearInterval(timeInterval);
    gameTimeText.innerText = '00:00';
}); 