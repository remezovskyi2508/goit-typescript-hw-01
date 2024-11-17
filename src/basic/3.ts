// Створіть змінну, яка може містити або рядок, або число (union type)?
type numOrstr = number | string;
let quanty: numOrstr;
quanty = 21;
quanty = "21";
quanty = true;
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).;
type value = "enable" | "disable";
let answer: value;
answer = "enable";
answer = "disable";
answer = "off";
