import "./styles.css";

export default function App() {
  function stripComments(s) {
    var re1 = /^\s+|\s+$/g; // Strip leading and trailing spaces
    var re2 = /\s*[#;].+$/g; // Strip everything after # or ; to the end of the line, including preceding spaces
    return s.replace(re1, "").replace(re2, "");
  }

  function stripComments2(input, markers) {
    let markerFound = false;
    let stripped = [];
    let letters = input.split("");
    for (let i = 0; i < letters.length; i++) {
      if (markers.includes(letters[i])) {
        markerFound = true;
      }

      if (markerFound && letters[i] === "\n") {
        markerFound = false;
      }

      if (!markerFound) {
        stripped.push(letters[i]);
      }
    }
    return stripped
      .join("")
      .trim()
      .replace(/\\r\\n?|\\n/g, "\\n");
  }

  function solution(input, markers) {
    let s_list = input.split("\n");
    let n_list = [];
    let fra = "";

    console.log(s_list);

    s_list.map(function (item) {
      let s = item.split("");
      s.map(function (letra) {
        if (markers.includes(letra)) {
        } else {
          fra = fra + letra;
        }
      });
      console.log(fra);
    });

    //console.log(n_list);
  }

  function solution22(input, markers) {
    return input
      .split("\n")
      .map((line) =>
        markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
      )
      .join("\n");
  }
  let input = "apples, plums % and bananas\npears\noranges\n !applesauce";
  let markers = ["%", "!"];

  //"apples, plums\npears\noranges"

  //console.log(solution(input , markers));

  solution22(input, markers);

  return (
    <div className="App">
      <input />
    </div>
  );
}
