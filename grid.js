import { Cell } from "./cell.js";

const GRID_SIZE = 3;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE;

export class Grid {
    constructor(gridElement) {
        this.cells = []; // Создаем 9 ячеек, сохраняем их в массив cells
        for (let i = 0; i < CELLS_COUNT; i++) {
            this.cells.push(new Cell(gridElement, i % GRID_SIZE, Math.floor( i / GRID_SIZE)));          
        }
    }
}