// Create type alias
type Point = {
  x: number;
  y: number;
};

// Function to print point
function printPoint(point: Point): void {
  console.log(`Point Coordinates: (${point.x}, ${point.y})`);
}

// Example usage
const p1: Point = { x: 10, y: 20 };

printPoint(p1);
