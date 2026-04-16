// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(number, dnaBases) {
  const originalDNA = dnaBases;
  // console.log("ORIGINAL DNA", originalDNA);
  return {
    specimenNum: number,
    dna: dnaBases,
    mutate() {
      const oldDNA = this.dna;
      const generateRandomIndex = Math.floor(Math.random() * 15);
      let currentBase = this.dna[generateRandomIndex];
      const selectNewDNAbase = () => returnRandBase();
      let newDNAbase = selectNewDNAbase();
      while (currentBase === newDNAbase) {
        newDNAbase = selectNewDNAbase();
      }
      this.dna[generateRandomIndex] = newDNAbase;
      console.log("MUTATED DNA", this.dna);
    },
    compareDNA(obj) {
      let counter = null;
      const calc = (num) => {
        return (num / this.dna.length) * 100;
      };
      for (i = 0; i < this.dna.length; i++) {
        for (j = 0; j < obj.dna.length; j++) {
          if (i === j && this.dna[i] === obj.dna[j]) {
            counter = counter + 1;
          }
        }
      }
      const inCommon = Math.floor(calc(counter));
      console.log(
        `specimen #${this.specimenNum} and specimen #${obj.specimenNum}  have ${inCommon}% DNA in common`,
      );
    },
    willLikelySurvive() {
      let counterC = null;
      let counterG = null;
      let calculateTotal = () =>
        ((counterC + counterG) / this.dna.length) * 100;
      for (i = 0; i < this.dna.length; i++) {
        // console.log(i, this.dna[i]);
        if (this.dna[i] === "C") {
          counterC = counterC + 1;
        } else if (this.dna[i] === "G") {
          counterG = counterG + 1;
        }
      }
      if (calculateTotal() > 60) {
        console.log(counterC, counterG, calculateTotal());
        return true;
      } else {
        return false;
      }
    },
  };
}

// const temp1 = pAequorFactory(3, mockUpStrand());
// const temp2 = pAequorFactory(5, mockUpStrand());

// CALL
// temp1.mutate();
// temp1.compareDNA(temp2);
// CALL TO CREATE 30 instances of DNA
const dna30times = [];
const create30 = () => {
  while (dna30times.length < 30) {
    const newDNA = pAequorFactory(3, mockUpStrand());
    const isTrue = newDNA.willLikelySurvive();
    console.log("DNA", newDNA);
    if (isTrue) {
      dna30times.push(newDNA);
    }
  }
  console.log("dna30 array", dna30times);
  return dna30times;
};

create30();
