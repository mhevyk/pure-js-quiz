(function() {
    document.addEventListener("DOMContentLoaded", () => {
        const voc = new Vocabulary();

        voc.add({ word: "cat", translates: ["кіт"], group: "Тварини" });
        voc.add({ word: "cat", translates: ["кіт"], group: "Риби" });
        voc.add({ word: "cat", translates: ["кішка"], group: "Риби" });
        voc.add({ word: "dog", translates: ["пес"], group: "Тварини" });
        voc.add({ word: "fish", translates: ["риба"], group: "Щось" });
        voc.add({ word: "dino", translates: ["дино"], group: "Щось" });
        voc.add({ word: "tiger", translates: ["тигр"], group: "Щось" });
        voc.add({ word: "lion", translates: ["лев"], group: "Щось" });
        
        voc.print();
        updateSelectsWithGroups();
    });
})();