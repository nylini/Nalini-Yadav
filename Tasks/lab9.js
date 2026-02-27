// Literal Types
function move(direction) {
    console.log("Moving", direction);
}
move("up");
move("right");
// Type Narrowing
function formatValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(Math.round(value));
    }
}
formatValue("hello");
formatValue(4.7);
