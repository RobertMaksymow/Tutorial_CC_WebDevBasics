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
  //do something

  return {
    specimenNum: number,
    dna: dnaBases,
    mutate() {
      const generateRandomIndex = Math.floor(Math.random() * 15);
      let currentBase = this.dna[generateRandomIndex];
      const selectNewDNAbase = () => returnRandBase();
      let newDNAbase = selectNewDNAbase();
      while (currentBase === newDNAbase) {
        newDNAbase = selectNewDNAbase();
        console.log("inside while", newDNAbase);
      }
      this.dna[generateRandomIndex] = newDNAbase;
      console.log("this DNA after mutation", this.dna);
    },
    compareDNA(obj) {
      console.log("temp1", this.dna);
      console.log("temp2", obj.dna);
      let counter = null;
      const calc = (num) => {
        return (num / this.dna.length) * 100;
      };
      for (i = 0; i < this.dna.length; i++) {
        for (j = 0; j < obj.dna.length; j++) {
          console.log(i, this.dna[i], j, obj.dna[j]);
          if (i === j && this.dna[i] === obj.dna[j]) {
            console.log("match");
            counter = counter + 1;
          }
        }
        // console.log(this.dna[i])
      }
      // console.log("counter", counter);
      const inCommon = Math.floor(calc(counter));
      // console.log(inCommon);
      console.log(
        `specimen #${this.specimenNum} and specimen #${obj.specimenNum}  have ${inCommon}% DNA in common`,
      );
    },
  };
}

const temp1 = pAequorFactory(3, mockUpStrand());
const temp2 = pAequorFactory(5, mockUpStrand());

// temp1.mutate();
temp1.compareDNA(temp2);
