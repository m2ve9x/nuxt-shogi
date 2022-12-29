import { Piece } from "./piece";

export class Pawn implements Piece {
    name: string;
    constructor() {
        this.name = 'pawn'
    }
}