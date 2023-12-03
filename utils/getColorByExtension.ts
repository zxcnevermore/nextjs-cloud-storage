const extColor = {
  pdf: "purple",
  xls: "green",
  doc: "blue",
  txt: "blue",
  png: "orange",
  jpeg: "orange",
  jpg: "orange",
  zip: "red"
};

export type Extension = keyof typeof extColor;
export type Color = typeof extColor[Extension]

export const getColorByExtension = (ext: string): Color => {
  return extColor[ext];
}
