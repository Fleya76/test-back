"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const justify_1 = __importDefault(require("../../src/helpers/justify"));
const chai_1 = require("chai");
const smallSentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const bigSentence = "Longtemps, je me suis couchÃ© de bonne heure. Parfois, Ã peine ma bougie Ã©teinte, mes yeux se fermaient si vite que je nâ€™avais pas le temps de me dire: Â«Je mâ€™endors.Â» Et, une demi-heure aprÃs, la pensÃ©e quâ€™il Ã©tait temps de chercher le sommeil mâ€™Ã©veillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumiÃre; je nâ€™avais pas cessÃ© en dormant de faire des rÃ©flexions sur ce que je venais de lire, mais ces rÃ©flexions avaient pris un tour un peu particulier; il me semblait que jâ€™Ã©tais moi-mÃªme ce dont parlait lâ€™ouvrage: une Ã©glise, un quatuor, la rivalitÃ© de FranÃ§ois Ier et de Charles-Quint. Cette croyance survivait pendant quelques secondes Ã mon rÃ©veil; elle ne choquait pas ma raison, mais pesait comme des Ã©cailles sur mes yeux et les empÃªchait de se rendre compte que le bougeoir nâ€™Ã©tait plus allumÃ©. Puis elle commenÃ§ait Ã me devenir inintelligible, comme aprÃs la mÃ©tempsycose les pensÃ©es dâ€™une existence antÃ©rieure; le sujet du livre se dÃ©tachait de moi, jâ€™Ã©tais libre de mâ€™y appliquer ou non; aussitÃ´t je recouvrais la vue et jâ€™Ã©tais bien Ã©tonnÃ© de trouver autour de moi une obscuritÃ©, douce et reposante pour mes yeux, mais peut-Ãªtre plus encore pour mon esprit, Ã qui elle apparaissait comme une chose sans cause, incomprÃ©hensible, comme une chose vraiment obscure. Je me demandais quelle heure il pouvait Ãªtre; jâ€™entendais le sifflement des trains qui, plus ou moins Ã©loignÃ©, comme le chant dâ€™un oiseau dans une forÃªt, relevant les distances, me dÃ©crivait lâ€™Ã©tendue de la campagne dÃ©serte oÃ¹ le voyageur se hÃ¢te vers la station prochaine; et le petit chemin quâ€™il suit va Ãªtre gravÃ© dans son souvenir par lâ€™excitation quâ€™il doit Ã des lieux nouveaux, Ã des actes inaccoutumÃ©s, Ã la causerie rÃ©cente et aux adieux sous la lampe Ã©trangÃre qui le suivent encore dans le silence de la nuit, Ã la douceur prochaine du retour.";
const wordWithALongLength = "Anticonstitutionnellement";
describe('Should test justify function', () => {
    it('should justify the sentence with length', () => {
        (0, chai_1.expect)((0, justify_1.default)(bigSentence, 80)).to.equal("Longtemps, je me suis couchÃ© de bonne heure. Parfois, Ã peine ma bougie\n" +
            "Ã©teinte, mes yeux se fermaient si vite que je nâ€™avais pas le temps de me\n" +
            "dire: Â«Je mâ€™endors.Â» Et, une demi-heure aprÃs, la pensÃ©e quâ€™il Ã©tait\n" +
            "temps de chercher le sommeil mâ€™Ã©veillait; je voulais poser le volume que je\n" +
            "croyais avoir dans les mains et souffler ma lumiÃre; je nâ€™avais pas cessÃ© en\n" +
            "dormant de faire des rÃ©flexions sur ce que je venais de lire, mais ces\n" +
            "rÃ©flexions avaient pris un tour un peu particulier; il me semblait que\n" +
            "jâ€™Ã©tais moi-mÃªme ce dont parlait lâ€™ouvrage: une Ã©glise, un quatuor, la\n" +
            "rivalitÃ© de FranÃ§ois Ier et de Charles-Quint. Cette croyance survivait\n" +
            "pendant quelques secondes Ã mon rÃ©veil; elle ne choquait pas ma raison, mais\n" +
            "pesait comme des Ã©cailles sur mes yeux et les empÃªchait de se rendre compte\n" +
            "que le bougeoir nâ€™Ã©tait plus allumÃ©. Puis elle commenÃ§ait Ã me devenir\n" +
            "inintelligible, comme aprÃs la mÃ©tempsycose les pensÃ©es dâ€™une existence\n" +
            "antÃ©rieure; le sujet du livre se dÃ©tachait de moi, jâ€™Ã©tais libre de mâ€™y\n" +
            "appliquer ou non; aussitÃ´t je recouvrais la vue et jâ€™Ã©tais bien Ã©tonnÃ© de\n" +
            "trouver autour de moi une obscuritÃ©, douce et reposante pour mes yeux, mais\n" +
            "peut-Ãªtre plus encore pour mon esprit, Ã qui elle apparaissait comme une chose\n" +
            "sans cause, incomprÃ©hensible, comme une chose vraiment obscure. Je me\n" +
            "demandais quelle heure il pouvait Ãªtre; jâ€™entendais le sifflement des trains\n" +
            "qui, plus ou moins Ã©loignÃ©, comme le chant dâ€™un oiseau dans une forÃªt,\n" +
            "relevant les distances, me dÃ©crivait lâ€™Ã©tendue de la campagne dÃ©serte oÃ¹\n" +
            "le voyageur se hÃ¢te vers la station prochaine; et le petit chemin quâ€™il suit\n" +
            "va Ãªtre gravÃ© dans son souvenir par lâ€™excitation quâ€™il doit Ã des lieux\n" +
            "nouveaux, Ã des actes inaccoutumÃ©s, Ã la causerie rÃ©cente et aux adieux sous\n" +
            "la lampe Ã©trangÃre qui le suivent encore dans le silence de la nuit, Ã la\n" +
            "douceur prochaine du retour.");
    });
    it('should return  an empty string  we the sentence and the length is empty', () => {
        (0, chai_1.expect)((0, justify_1.default)("")).to.be.equal("");
    });
    it('should return an empty string we the sentence is empty and the length is 150', () => {
        (0, chai_1.expect)((0, justify_1.default)("", 150)).to.be.equal("");
    });
    it('should justify the sentence without length', () => {
        (0, chai_1.expect)((0, justify_1.default)(smallSentence)).to.be.equal("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
            "incididunt ut labore et dolore magna aliqua.");
    });
    it('should justify the sentence with a text length upper than length parameter', () => {
        (0, chai_1.expect)((0, justify_1.default)(smallSentence, 15)).to.be.equal("Lorem ipsum\n" +
            "dolor sit\n" +
            "amet,\n" +
            "consectetur\n" +
            "adipiscing\n" +
            "elit, sed do\n" +
            "eiusmod tempor\n" +
            "incididunt ut\n" +
            "labore et\n" +
            "dolore magna\n" +
            "aliqua.");
    });
    it('should not justify anything with a word length upper than length parameter', () => {
        (0, chai_1.expect)((0, justify_1.default)(wordWithALongLength, 10)).to.be.equal(wordWithALongLength);
    });
});
