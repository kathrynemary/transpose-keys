function capitalizeFirstLetter(str: string): string {
  if (!str) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const validChords: string[] = [
  "A",
  "B",
  "C",
  "D",
  "Dm",
  "E",
  "Em",
  "F",
  "Fm",
  "G",
];

function checkInputsAreValid(chordShape: string, capoPosition: number): string {
  if (!validChords.includes(chordShape)) {
    return "Error! invalid chord shape given.";
  } else if (!Number.isInteger(capoPosition)) {
    return "Error! invalid capo position given (not an integer).";
  } else if (!(-1 < capoPosition) || !(capoPosition < 13)) {
    return "Error! invalid capo position given (not within valid range).";
  } else {
    return "";
  }
}

export function capoLogic(chordShape: string, capoPosition: number): string {
  // If minor chord, calculate for capo-ing same as for a major chord, but add 'minor'.

  // TODO: Certainly there's a better way to do this.
  // Handle if checking a chord near the end of the array
  const duplicatedValidChords: string[] = [...validChords, ...validChords];

  // Capitalize first letter of chord shape:
  chordShape = capitalizeFirstLetter(chordShape);

  // Check that inputs are valid:
  const errorChecking = checkInputsAreValid(chordShape, capoPosition);
  if (errorChecking !== "") {
    return errorChecking;
  }

  let isMinor = false;
  if (chordShape.charAt(1) == "m") {
    isMinor = true;
  }

  const chordSansMinor = chordShape.charAt(0);

  const chords = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];

  // Get index of chordSansMinor within chords.
  // Add the capo # to that, and get the value of chords at that index.

  const originalIndex = chords.indexOf(chordSansMinor);

  let calculatedChord = chords[originalIndex + capoPosition];

  if (isMinor) {
    calculatedChord += "m";
  }

  let newResultString: string = "";
  if (calculatedChord !== "") {
    newResultString =
      "This shape will actually produce the sound of chord " + calculatedChord;
  }
  return newResultString;
}

export function removeCapoLogic(
  chordShape: string,
  capoPosition: number
): string {
  // If minor chord, calculate for capo-ing same as for a major chord, but add 'minor'.

  // TODO: Certainly there's a better way to do this.
  // Handle if checking a chord near the end of the array
  const duplicatedValidChords: string[] = [...validChords, ...validChords];

  // Capitalize first letter of chord shape:
  chordShape = capitalizeFirstLetter(chordShape);

  // Check that inputs are valid:
  const errorChecking = checkInputsAreValid(chordShape, capoPosition);
  if (errorChecking !== "") {
    return errorChecking;
  }

  let isMinor = false;
  if (chordShape.charAt(1) == "m") {
    isMinor = true;
  }

  const chordSansMinor = chordShape.charAt(0);

  const chords = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];

  // Get index of chordSansMinor within chords.
  // Add the capo # to that, and get the value of chords at that index.

  const originalIndex = chords.indexOf(chordSansMinor);

  let calculatedChord = chords[originalIndex - capoPosition];

  if (isMinor) {
    calculatedChord += "m";
  }

  let newResultString: string = "";
  if (calculatedChord !== "") {
    newResultString = "Taking off the capo will make this a " + calculatedChord;
  }
  return newResultString;
}
