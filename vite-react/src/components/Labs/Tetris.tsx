import React, { useState, useEffect, useCallback } from 'react';

// 테트리스 블록 타입 정의
type TetriminoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';

// 테트리미노 형태 정의
const TETROMINOES: Record<TetriminoType, number[][]> = {
  'I': [[1, 1, 1, 1]],
  'O': [[1, 1], [1, 1]],
  'T': [[0, 1, 0], [1, 1, 1]],
  'S': [[0, 1, 1], [1, 1, 0]],
  'Z': [[1, 1, 0], [0, 1, 1]],
  'J': [[1, 0, 0], [1, 1, 1]],
  'L': [[0, 0, 1], [1, 1, 1]]
};

// 색상 매핑
const COLORS: Record<TetriminoType, string> = {
  'I': 'bg-cyan-500',
  'O': 'bg-yellow-500',
  'T': 'bg-purple-500',
  'S': 'bg-green-500',
  'Z': 'bg-red-500',
  'J': 'bg-blue-500',
  'L': 'bg-orange-500'
};

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const Tetris = () => {
  const [board, setBoard] = useState<(string | null)[][]>(
    Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(null))
  );
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [currentPiece, setCurrentPiece] = useState<{
    type: TetriminoType;
    position: { x: number; y: number };
    shape: number[][];
  } | null>(null);

  // 새로운 테트리미노 생성
  const generateNewPiece = useCallback(() => {
    const types: TetriminoType[] = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];
    const type = types[Math.floor(Math.random() * types.length)];
    return {
      type,
      position: { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 },
      shape: TETROMINOES[type]
    };
  }, []);

  // 충돌 검사
  const checkCollision = useCallback((piece: typeof currentPiece, board: any): boolean => {
    if (!piece) return false;
    
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x]) {
          const newX = piece.position.x + x;
          const newY = piece.position.y + y;
          
          if (
            newX < 0 || 
            newX >= BOARD_WIDTH || 
            newY >= BOARD_HEIGHT ||
            (newY >= 0 && board[newY][newX])
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }, []);

  // 보드에 현재 피스 병합
  const mergePieceToBoard = useCallback(() => {
    if (!currentPiece) return;

    const newBoard = board.map(row => [...row]);
    
    currentPiece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          const newY = currentPiece.position.y + y;
          const newX = currentPiece.position.x + x;
          if (newY >= 0 && newY < BOARD_HEIGHT) {
            newBoard[newY][newX] = COLORS[currentPiece.type];
          }
        }
      });
    });

    // 상태 업데이트 후 라인 클리어
    setBoard(newBoard);
    clearLines(newBoard);  // 새로 업데이트된 보드 상태를 전달
    setCurrentPiece(generateNewPiece());
  }, [board, currentPiece, generateNewPiece]);

  // 행 제거 및 점수 계산
  const clearLines = useCallback((newBoard: (string | null)[][]) => {
    const newFilteredBoard = newBoard.filter(row => !row.every(cell => cell !== null));
    const clearedLines = BOARD_HEIGHT - newFilteredBoard.length;

    if (clearedLines > 0) {
      const newRows = Array(clearedLines)
        .fill(null)
        .map(() => Array(BOARD_WIDTH).fill(null));
      setBoard([...newRows, ...newFilteredBoard]);
      setScore(prev => prev + (clearedLines * 100));
    }
  }, []);

  // 키보드 입력 처리
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (!currentPiece || gameOver) return;

    const movePiece = (dx: number, dy: number) => {
      const newPiece = {
        ...currentPiece,
        position: {
          x: currentPiece.position.x + dx,
          y: currentPiece.position.y + dy
        }
      };

      if (!checkCollision(newPiece, board)) {
        setCurrentPiece(newPiece);
      } else if (dy > 0) {
        mergePieceToBoard();
      }
    };

    switch (e.key) {
      case 'ArrowLeft':
        movePiece(-1, 0);
        break;
      case 'ArrowRight':
        movePiece(1, 0);
        break;
      case 'ArrowDown':
        movePiece(0, 1);
        break;
      case 'ArrowUp':
        // 회전 로직
        const rotatedShape = currentPiece.shape[0].map((_, i) =>
          currentPiece.shape.map(row => row[i]).reverse()
        );
        const rotatedPiece = {
          ...currentPiece,
          shape: rotatedShape
        };
        if (!checkCollision(rotatedPiece, board)) {
          setCurrentPiece(rotatedPiece);
        }
        break;
      case ' ':
        // 스페이스바 눌렀을 때 즉시 떨어지게 처리
        let newPiece = { ...currentPiece };
        while (!checkCollision({ ...newPiece, position: { x: newPiece.position.x, y: newPiece.position.y + 1 } }, board)) {
          newPiece.position.y += 1;
        }
        setCurrentPiece(newPiece);
        mergePieceToBoard(); // 최종 위치에 병합
        break;
    }
  }, [currentPiece, board, gameOver, checkCollision, mergePieceToBoard]);

  // 게임 루프
  useEffect(() => {
    if (!currentPiece) {
      setCurrentPiece(generateNewPiece());
    }

    // 점수에 따라 게임 속도 조절
    const gameSpeed = Math.max(1000 - Math.floor(score / 100) * 100, 200);  // 속도는 최소 200ms
    const gameLoop = setInterval(() => {
      if (currentPiece && !gameOver) {
        const newPiece = {
          ...currentPiece,
          position: {
            ...currentPiece.position,
            y: currentPiece.position.y + 1
          }
        };

        if (checkCollision(newPiece, board)) {
          if (currentPiece.position.y <= 0) {
            setGameOver(true);
          } else {
            mergePieceToBoard();
          }
        } else {
          setCurrentPiece(newPiece);
        }
      }
    }, gameSpeed);

    return () => clearInterval(gameLoop);
  }, [currentPiece, board, gameOver, score, checkCollision, mergePieceToBoard, generateNewPiece]);

  // 키보드 이벤트 리스너
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // 게임 재시작
  const restartGame = () => {
    setBoard(Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(null)));
    setScore(0);
    setGameOver(false);
    setCurrentPiece(generateNewPiece());
  };

  // 현재 피스를 보드에 렌더링
  const getRenderBoard = () => {
    const renderBoard = board.map(row => [...row]);
    
    if (currentPiece) {
      currentPiece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value) {
            const newY = currentPiece.position.y + y;
            const newX = currentPiece.position.x + x;
            if (newY >= 0 && newY < BOARD_HEIGHT) {
              renderBoard[newY][newX] = COLORS[currentPiece.type];
            }
          }
        });
      });
    }
    
    return renderBoard;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 p-4 h-full">
      <div className="mb-4 text-white text-2xl">Score: {score}</div>
      
      <div className="bg-gray-800 p-2 rounded-lg">
        {getRenderBoard().map((row, y) => (
          <div key={y} className="flex">
            {row.map((cell, x) => (
              <div
                key={`${y}-${x}`}
                className={`w-6 h-6 border border-gray-700 ${cell || 'bg-gray-900'}`}
              />
            ))}
          </div>
        ))}
      </div>

      {gameOver && (
        <div className="mt-4 flex flex-col items-center">
          <div className="text-white text-xl mb-2">Game Over!</div>
          <button
            onClick={restartGame}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Tetris;
