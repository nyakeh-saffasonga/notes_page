// Day 4 starter — implement the functions below and wire up the UI.

const decInput = document.getElementById("dec");
const binInput = document.getElementById("bin");
const convertBtn = document.getElementById("convertBtn");
const fromBinBtn = document.getElementById("fromBinBtn");

const binOut = document.getElementById("binOut");
const hexOut = document.getElementById("hexOut");
const bytesOut = document.getElementById("bytesOut");
const decOut = document.getElementById("decOut");

function isNonNegInt(n){
  return Number.isInteger(n) && n >= 0;
}

// TODO: return binary string (e.g., 42 -> "101010")
function toBinary(decimal){
  return "";
}

// TODO: return hex string uppercase without prefix (e.g., 42 -> "2A")
function toHex(decimal){
  return "";
}

// TODO: take a binary string (e.g., "1010") -> decimal number (10)
// return null if invalid
function fromBinary(binaryString){
  return null;
}

// TODO: take a bits number (e.g., 16) -> string like "16 bits = 2 bytes"
function explainBytes(bits){
  return "";
}

function showError(msg){
  binOut.textContent = "—";
  hexOut.textContent = "—";
  bytesOut.textContent = msg;
}

convertBtn.addEventListener("click", () => {
  const dec = Number(decInput.value);

  if(!isNonNegInt(dec)){
    showError("Enter a non-negative whole number.");
    return;
  }

  binOut.textContent = toBinary(dec);
  hexOut.textContent = toHex(dec);
  bytesOut.textContent = explainBytes(toBinary(dec).length);
});

fromBinBtn.addEventListener("click", () => {
  const raw = binInput.value.trim();
  const dec = fromBinary(raw);
  decOut.textContent = dec === null ? "Invalid binary" : String(dec);
});
