export type ZodiacSign =
  | "aries"
  | "tauro"
  | "geminis"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "escorpio"
  | "sagitario"
  | "capricornio"
  | "acuario"
  | "piscis";

export type CatBreedCode =
  | "abys"
  | "beng"
  | "mcoo"
  | "sphy"
  | "siam"
  | "ragd"
  | "pers"
  | "birm"
  | "sibe"
  | "norw"
  | "rexs"
  | "snow";

export const zodiacCatMap: Record<ZodiacSign, CatBreedCode> = {
  aries: "abys",        // Abyssinian
  tauro: "beng",        // Bengal
  geminis: "mcoo",      // Maine Coon
  cancer: "sphy",       // Sphynx
  leo: "siam",          // Siamese
  virgo: "ragd",        // Ragdoll
  libra: "pers",        // Persian
  escorpio: "birm",     // Birman
  sagitario: "sibe",    // Siberian
  capricornio: "norw",  // Norwegian Forest Cat
  acuario: "rexs",      // Devon Rex 
  piscis: "snow"        // Snowshoe
};