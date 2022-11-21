document.addEventListener("DOMContentLoaded", () => {
    const voc = new Vocabulary();

    voc.addMany([
        { word: "cat", translates: ["кіт"], group: "Тварини" },
        { word: "cat", translates: ["кіт"], group: "Риби" },
        { word: "cat", translates: ["кішка"], group: "Риби" },
        { word: "dog", translates: ["пес"], group: "Тварини" },
        { word: "fish", translates: ["риба"], group: "Щось" },
        { word: "dino", translates: ["дино"], group: "Щось" },
        { word: "tiger", translates: ["тигр"], group: "Щось" },
        { word: "lion", translates: ["лев"], group: "Щось" }
    ]);
    
    voc.print();
    updateSelectsWithGroups();
});