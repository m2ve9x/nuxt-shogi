import { describe, test, expect } from "@jest/globals";
import { Pawn } from "~/domain/piece/pawn";
import { Piece } from "~/domain/piece/piece";

describe('pawn', () => {
  test('constructor', () => {
    const piece: Piece = new Pawn();
    expect(piece.name).toEqual('pawn');
  })
})
