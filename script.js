let activeFilters = {
    type: [],
    rarity: [],
    effect: []
};
let sortOrder = '';
const cards = [
/*✅*/  { name: "Starter Feu", image: "images/cards/Starter Feu.png", type: "Feu", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Starter Eau", image: "images/cards/Starter Eau.png", type: "Eau", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Starter Nature", image: "images/cards/Starter Nature.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Starter Terre", image: "images/cards/Starter Terre.png", type: "Terre", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Starter Ombre", image: "images/cards/Starter Ombre.png", type: "Ombre", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Starter Lumière", image: "images/cards/Starter Lumière.png", type: "Lumière", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Colosse igné", image: "images/cards/Colosse Igné.png", type: "Feu", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "compagnon du feu", image: "images/cards/Compagnon du Feu.png", type: "Feu", rarity: "Commun", pv: 375, effects: ["Fumee"] },
/*✅*/  { name: "La boule d'ebene", image: "images/cards/La Boule d'Ébène.png", type: "Feu", rarity: "Commun", pv: 375, effects: ["Mystere"] },
/*✅*/  { name: "L'émissaire des mers étoilées", image: "images/cards/LEmissaire_des_Mers_Etoilees.png", type: "Eau", rarity: "Commun", pv: 400, effects: ["Terrain"] },
/*✅*/  { name: "Crapaud de cristal", image: "images/cards/Crapaud_de_Cristal.png", type: "Eau", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Flot cristallin", image: "images/cards/Flot Cristallin.png", type: "Eau", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Petit papillon", image: "images/cards/Petit papillon.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Elytre étourdi", image: "images/cards/Élytre Étourdi.png", type: "Nature", rarity: "Commun", pv: 250, effects: ["Terrain"] },
/*✅*/  { name: "Fille des bois", image: "images/cards/Fille des Bois.png", type: "Nature", rarity: "Commun", pv: 400, effects: [] },
    { name: "Sage de la pierre sacrée", image: "images/cards/Sage_de_la_Pierre_Sacree.png", type: "Nature", rarity: "Commun", pv: 325, effects: ["Sac de frappe"] },
    { name: "Croqueur de fruits verdoyant", image: "images/cards/Croqueur de Fruits.png", type: "Nature", rarity: "Commun", pv: 300, effects: ["Terrain"] },
/*✅*/  { name: "Le sableux sifflant", image: "images/cards/Le_Sableux_Sifflant.png", type: "Terre", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Nebula nocturne", image: "images/cards/Nebula_Nocturne.png", type: "Ombre", rarity: "Commun", pv: 325, effects: ["Eternite"] },
/*✅*/  { name: "Vagabond celeste", image: "images/cards/Vagabond_Celeste.png", type: "Ombre", rarity: "Commun", pv: 400, effects: ["Poison"] },
    { name: "Félin errant", image: "images/cards/Félin Errant.png", type: "Ombre", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Lueur d'espoir", image: "images/cards/Lueur_dEspoir.png", type: "Lumière", rarity: "Commun", pv: 400, effects: [] },
    { name: "Le lezard lueur", image: "images/cards/Le Lézard Lueur.png", type: "Lumière", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Artisan des heures", image: "images/cards/Artisan_des_Heures.png", type: "Lumière", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Amber", image: "images/cards/Amber.png", type: "Feu", rarity: "Rare", pv: 400, effects: [] },
/*✅*/  { name: "Blaze", image: "images/cards/Blaze.png", type: "Feu", rarity: "Rare", pv: 400, effects: [] },
/*✅*/  { name: "Reine des ondes", image: "images/cards/La_Reine_des_Ondes.png", type: "Eau", rarity: "Rare", pv: 400, effects: ["Soin primitif"] },
/*✅*/  { name: "Princesse meridia", image: "images/cards/Princesse_Meridia.png", type: "Nature", rarity: "Rare", pv: 375, effects: [] },
/*✅*/  { name: "Gardien crépusculaire", image: "images/cards/Gardien Crépusculaire.png", type: "Nature", rarity: "Rare", pv: 375, effects: [] },
    { name: "Aurora majesté féline", image: "images/cards/Aurora_majeste_feline.png", type: "Terre", rarity: "Rare", pv: 300, effects: [] },
    { name: "Maitre des teintes", image: "images/cards/Maitre_des_Teintes.png", type: "Terre", rarity: "Rare", pv: 300, effects: [] },
    { name: "Gardien de la clairiere", image: "images/cards/Gardien de la Clairière.png", type: "Ombre", rarity: "Rare", pv: 300, effects: ["Revanche"] },
    { name: "Frost de la toundra", image: "images/cards/Frost de la Toundra.png", type: "Ombre", rarity: "Rare", pv: 275, effects: [] },
/*✅*/  { name: "Leo", image: "images/cards/Leo.png", type: "Lumière", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Le gamin des etoiles", image: "images/cards/Le_Gamin_des_Etoiles.png", type: "Lumière", rarity: "Rare", pv: 375, effects: [] },
    { name: "Roi des flammes ardentes", image: "images/cards/Roi_des_flammes_ardentes.png", type: "Feu", rarity: "Epique", pv: 300, effects: [] },
    { name: "Lumina créature mystique", image: "images/cards/Lumina_Creature_Mystique.png", type: "Eau", rarity: "Epique", pv: 300, effects: ["Erosion"] },
    { name: "Sylvan protecteur de la nature", image: "images/cards/Sylvan_protecteur_de_la_nature.png", type: "Nature", rarity: "Epique", pv: 300, effects: [] },
    { name: "L'epine protectrice", image: "images/cards/Lepine protectrice.png", type: "terre", rarity: "Epique", pv: 300, effects: ["Renvoi"] },
/*✅*/  { name: "Seigneur paisible", image: "images/cards/Seigneur_Paisible.png", type: "Ombre", rarity: "Epique", pv: 400, effects: ["Fumee"] },
    { name: "Dragonnet des lumieres", image: "images/cards/Dragonnet des Lumières.png", type: "Lumière", rarity: "Epique", pv: 300, effects: [] },
    { name: "Souverain des flammes", image: "images/cards/Souverain_des_flammes.png", type: "Feu", rarity: "Légendaire", pv: 300, effects: [] },
    { name: "Leviathan des cieux", image: "images/cards/Leviathan des Cieux.png", type: "Eau", rarity: "Légendaire", pv: 500, effects: [] },
    { name: "Aldrin gorakar", image: "images/cards/Aldrin_Gorakar.png", type: "Nature", rarity: "Légendaire", pv: 300, effects: [] },
    { name: "Le gardien des dunes", image: "images/cards/Le Gardien des Dunes.png", type: "Terre", rarity: "Légendaire", pv: 325, effects: [] },
/*✅*/  { name: "Veilleur nocturne", image: "images/cards/Veilleur_nocturne.png", type: "Ombre", rarity: "Légendaire", pv: 350, effects: [] },
    { name: "L'artiste des cieux", image: "images/cards/L'Artiste des Cieux.png", type: "Lumière", rarity: "Légendaire", pv: 300, effects: [] },
    { name: "Bouffon des braises", image: "images/cards/Bouffon_des_Braises.png", type: "Feu", rarity: "Commun", pv: 250, effects: [] },
    { name: "Incendie ravageur", image: "images/cards/Incendie Ravageur.png", type: "Feu", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Sorciere pyrokinetique", image: "images/cards/Sorcière Pyrokinétique.png", type: "Feu", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Batracien des marais", image: "images/cards/Batracien_des_Marais.png", type: "Eau", rarity: "Commun", pv: 450, effects: ["Renvoi"] },
    { name: "Danseur aquatique", image: "images/cards/Danseur aquatique.png", type: "Eau", rarity: "Commun", pv: 300, effects: ["Terrain"] },
/*✅*/  { name: "Loutre intrepide", image: "images/cards/Loutre Intrépide.png", type: "Eau", rarity: "Commun", pv: 350, effects: [] },
    { name: "Cameleon arcenciel", image: "images/cards/Cameleon_Arc_en_ciel.png", type: "Nature", rarity: "Commun", pv: 300, effects: ["Cimetiere"] },
/*✅*/  { name: "Vibrantes ecailles", image: "images/cards/Vibrantes Écailles.png", type: "Nature", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Mante des contrees", image: "images/cards/Mante des Contrées.png", type: "Nature", rarity: "Commun", pv: 250, effects: [] },
/*✅*/  { name: "Le transporteur sauvage", image: "images/cards/Le Transporteur Sauvage.png", type: "Terre", rarity: "Commun", pv: 400, effects: ["Sac de frappe"] },
/*✅*/  { name: "Guerrier des neiges", image: "images/cards/Guerrier des Neiges.png", type: "Terre", rarity: "Commun", pv: 325, effects: [] },
    { name: "La sorceleuse lunaire", image: "images/cards/La Sorceleuse Lunaire.png", type: "Ombre", rarity: "Commun", pv: 300, effects: [] },
    { name: "Planeur de la foret", image: "images/cards/Planeur de la Forêt.png", type: "Ombre", rarity: "Commun", pv: 300, effects: ["Terrain"] },
/*✅*/  { name: "Essence spectrale", image: "images/cards/Essence Spectrale.png", type: "Ombre", rarity: "Commun", pv: 400, effects: ["Terrain", "Soin primitif"] },
/*✅*/  { name: "Forgeron du fer", image: "images/cards/Forgeron du Fer.png", type: "Lumière", rarity: "Commun", pv: 425, effects: [] },
/*✅*/  { name: "Rayon d'or matinal", image: "images/cards/Rayon d'Or Matinal.png", type: "Lumière", rarity: "Commun", pv: 400, effects: ["Cimetiere"] },
    { name: "Coursier de l'aube", image: "images/cards/Coursier de l'Aube.png", type: "Lumière", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Sbire des flammes", image: "images/cards/Sbire des flammes.png", type: "Feu", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Scorch le lezard igné", image: "images/cards/Scorch_ le Lézard Igné.png", type: "Eau", rarity: "Rare", pv: 175, effects: ["Soin primitif"] },
    { name: "Pangolin des prairies", image: "images/cards/Pangolin des prairies.png", type: "Terre", rarity: "Commun", pv: 300, effects: [] },
    { name: "Le requin alaire", image: "images/cards/Le Requin Alaire.png", type: "Eau", rarity: "Rare", pv: 300, effects: [] },
    { name: "Soigneuse astrale des bois", image: "images/cards/Soigneuse Astrale des Bois.png", type: "Nature", rarity: "Rare", pv: 300, effects: [] },
/*✅*/  { name: "Girafe florale", image: "images/cards/Girafe Florale.png", type: "Nature", rarity: "Rare", pv: 350, effects: ["Sac de frappe"] },
/*✅*/  { name: "Le fauve colossal", image: "images/cards/Le Fauve Colossal.png", type: "Terre", rarity: "Rare", pv: 275, effects: [] },
    { name: "Gardien des pics", image: "images/cards/Gardien des Pics.png", type: "Terre", rarity: "Rare", pv: 300, effects: [] },
/*✅*/  { name: "Metamorphose urbaine", image: "images/cards/Métamorphose Urbaine.png", type: "Ombre", rarity: "Rare", pv: 400, effects: ["Erosion"] },
/*✅*/  { name: "Complices de la foret", image: "images/cards/Complices de la Forêt.png", type: "Ombre", rarity: "Rare", pv: 450, effects: [] },
/*✅*/  { name: "Le guide globuleux", image: "images/cards/Le Guide Globuleux.png", type: "Lumière", rarity: "Rare", pv: 400, effects: [] },
    { name: "Gardien vert", image: "images/cards/Gardien Vert.png", type: "Lumière", rarity: "Rare", pv: 300, effects: [] },
/*✅*/  { name: "Createur de la fusion", image: "images/cards/Créateur de la Fusion.png", type: "Feu", rarity: "Rare", pv: 450, effects: [] },
/*✅*/  { name: "Pyra flamme cachee", image: "images/cards/Pyra  Flamme Cachée.png", type: "Feu", rarity: "Epique", pv: 350, effects: [] },
    { name: "L'aviateur infernal", image: "images/cards/L'Aviateur Infernal.png", type: "Feu", rarity: "Epique", pv: 300, effects: [] },
    { name: "Luminaire abyssal", image: "images/cards/Luminaire Abyssal.png", type: "Eau", rarity: "Epique", pv: 300, effects: [] },
    { name: "Baleine farceuse", image: "images/cards/Baleine Farceuse.png", type: "Eau", rarity: "Epique", pv: 500, effects: [] },
/*✅*/  { name: "L'enchanteresse sylvaine", image: "images/cards/L'Enchanteresse Sylvaine.png", type: "Nature", rarity: "Epique", pv: 450, effects: ["Poison"] },
/*✅*/  { name: "Arbre des mystères", image: "images/cards/Arbre_des_Mystees_back.png", type: "Nature", rarity: "Epique", pv: 450, effects: [] },
/*✅*/  { name: "Gardien des entrees", image: "images/cards/Gardien des Entrées.png", type: "Terre", rarity: "Epique", pv: 375, effects: [] },
    { name: "Regent des abysses", image: "images/cards/Régent des Abysses.png", type: "Terre", rarity: "Epique", pv: 300, effects: [] },
/*✅*/  { name: "Le loup colosse", image: "images/cards/Le Loup Colosse.png", type: "Ombre", rarity: "Epique", pv: 325, effects: [] },
    { name: "Chouette prismatique", image: "images/cards/Chouette Prismatique.png", type: "Ombre", rarity: "Epique", pv: 300, effects: [] },
    { name: "L'oiseau tonnerre", image: "images/cards/L'Oiseau Tonnerre.png", type: "Lumière", rarity: "Epique", pv: 300, effects: [] },
/*✅*/  { name: "Crapaud des etoiles", image: "images/cards/Crapaud des Étoiles.png", type: "Lumière", rarity: "Epique", pv: 450, effects: ["Sac de frappe"] },
/*✅*/  { name: "Lyra", image: "images/cards/Lyra.png", type: "Lumière", rarity: "Epique", pv: 350, effects: [] },
    { name: "Lyra la dragonniere", image: "images/cards/Lyra la Dragonnière.png", type: "Feu", rarity: "Légendaire", pv: 300, effects: ["Terrain"] },
    { name: "Frost et Glacier", image: "images/cards/Frost & Glacier.png", type: "Eau", rarity: "Légendaire", pv: 300, effects: ["Erosion", "Etourdissement"] },
/*✅*/  { name: "Monarque des bois", image: "images/cards/Monarque des Bois.png", type: "Nature", rarity: "Légendaire", pv: 400, effects: ["Fumee"] },
    { name: "Protecteur des ruines", image: "images/cards/Protecteur des ruines.png", type: "Terre", rarity: "Légendaire", pv: 325, effects: ["Revanche"] },
    { name: "La gardienne des eons", image: "images/cards/La Gardienne des Éons.png", type: "Ombre", rarity: "Légendaire", pv: 300, effects: [] },
    { name: "Melodie des divinites", image: "images/cards/Mélodie des Divinités.png", type: "Lumière", rarity: "Légendaire", pv: 300, effects: [] },
    { name: "Pyro", image: "images/cards/Pyro.png", type: "Feu", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Petit pin enflamme", image: "images/cards/Petit pin enflammée.png", type: "Feu", rarity: "Commun", pv: 400, effects: ["Poison"] },
/*✅*/  { name: "Flamboyant des cavernes", image: "images/cards/Flamboyant des Cavernes.png", type: "Feu", rarity: "Commun", pv: 350, effects: ["Terrain"] },
/*✅*/  { name: "Blancheur aquatique", image: "images/cards/Blancheur_Aquatique.png", type: "Eau", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Dame navire", image: "images/cards/Dame Navire.png", type: "Eau", rarity: "Commun", pv: 350, effects: ["Temporalite"] },
/*✅*/  { name: "Murmures du corail noir", image: "images/cards/Murmures du Corail Noir.png", type: "Eau", rarity: "Commun", pv: 300, effects: ["Multiplicateur"] },
/*✅*/  { name: "Lame de la foret", image: "images/cards/Lame de la forêt.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
    { name: "Koala fleuri", image: "images/cards/Koala fleuri.png", type: "Nature", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Suricate elance", image: "images/cards/Suricate Élancé.png", type: "Nature", rarity: "Commun", pv: 250, effects: [] },
/*✅*/  { name: "l'epine d'amour", image: "images/cards/L'Épine d'Amour.png", type: "Terre", rarity: "Commun", pv: 350, effects: ["Renvoi"] },
/*✅*/  { name: "Elephant sacre", image: "images/cards/Éléphant Sacré.png", type: "Terre", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Ecaille", image: "images/cards/Ecaille.png", type: "Terre", rarity: "Commun", pv: 375, effects: ["Revanche"] },
/*✅*/  { name: "Demon miaulant", image: "images/cards/Démon Miaulant.png", type: "Ombre", rarity: "Commun", pv: 400, effects: [] },
    { name: "Errance du manoir", image: "images/cards/Errance du manoir.png", type: "Ombre", rarity: "Commun", pv: 300, effects: ["Poison"] },
/*✅*/  { name: "L'epouvante hesitante", image: "images/cards/L'Épouvante Hésitante.png", type: "Ombre", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Glouton de lueur", image: "images/cards/Glouton de Lueur.png", type: "Lumière", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Cygne des reflets dores", image: "images/cards/Cygne des Reflets Dorés.png", type: "Lumière", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Savoureur de soleil", image: "images/cards/Savourateur de Soleil.png", type: "Lumière", rarity: "Commun", pv: 350, effects: ["Terrain"] },
    { name: "Aidan", image: "images/cards/Aidan.png", type: "Feu", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Prisonniere de la machine", image: "images/cards/Prisonnière de la Machine.png", type: "Feu", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Keria", image: "images/cards/Keria.png", type: "Feu", rarity: "Rare", pv: 350, effects: [] },
    { name: "Poulpe parleur", image: "images/cards/Poulpe Parleur.png", type: "Eau", rarity: "Commun", pv: 300, effects: ["Fumee"] },
/*✅*/  { name: "Fleurmarine", image: "images/cards/Fleurmarine.png", type: "Eau", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Monstre des fleuves endormis", image: "images/cards/Monstre des fleuves Endormis.png", type: "Eau", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Panthere imaginaire", image: "images/cards/panthere imaginaire.png", type: "Nature", rarity: "Commun", pv: 300, effects: [] },
    { name: "Esprit de la faune", image: "images/cards/Esprit de la Faune.png", type: "Nature", rarity: "Commun", pv: 300, effects: [] },
    { name: "Tisseuse de mots", image: "images/cards/Tisseuse de Mots.png", type: "Nature", rarity: "Commun", pv: 300, effects: ["Sac de frappe"] },
/*✅*/  { name: "Wyrm des dunes cornu", image: "images/cards/Wyrm des Dunes Cornu.png", type: "Terre", rarity: "Commun", pv: 400, effects: ["Terrain", "Multiplicateur"] },
    { name: "Bleu mange cailloux", image: "images/cards/Bleu_mange_cailloux.png", type: "Terre", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Bondisseur metallique", image: "images/cards/Bondisseur Metallique.png", type: "Terre", rarity: "Commun", pv: 350, effects: [] },
    { name: "Spectre canin", image: "images/cards/Spectre Canin.png", type: "Ombre", rarity: "Commun", pv: 400, effects: ["Immunite"] },
/*✅*/  { name: "Herisson de minuit", image: "images/cards/Hérisson de Minuit.png", type: "Ombre", rarity: "Commun", pv: 350, effects: ["Poison", "Renvoi"] },
/*✅*/  { name: "Lapin titanesque", image: "images/cards/Lapin Titanesque.png", type: "Ombre", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Lueur rousse", image: "images/cards/Lueur rousse.png", type: "Lumière", rarity: "Commun", pv: 350, effects: ["Multiplicateur"] },
    { name: "L'ombre du blanc", image: "images/cards/L'Ombre du Blanc.png", type: "Lumière", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Lumiflore la boule de lumiere", image: "images/cards/Lumiflore_ la Boule de Lumière.png", type: "Lumière", rarity: "Commun", pv: 375, effects: [] },
    { name: "Keria l'ensorcelee", image: "images/cards/Keria l'ensorcelée.png", type: "Feu", rarity: "Rare", pv: 300, effects: [] },
    { name: "Felin eruptif", image: "images/cards/Félin Éruptif.png", type: "Feu", rarity: "Commun", pv: 300, effects: [] },
    { name: "Cauda regalis", image: "images/cards/Cauda_Regalis.png", type: "Eau", rarity: "Rare", pv: 300, effects: ["Poison"] },
    { name: "Seigneur des marees", image: "images/cards/Seigneur_des_Marees.png", type: "Eau", rarity: "Rare", pv: 350, effects: ["Sac de frappe", "Fumee"] },
/*✅*/  { name: "Titan des eaux brillantes", image: "images/cards/Titan des Eaux Brillantes.png", type: "Eau", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Cerf des couleurs funebres", image: "images/cards/Cerf_des_Couleurs_Funebres.png", type: "Nature", rarity: "Rare", pv: 350, effects: ["Multiplicateur"] },
/*✅*/  { name: "Venerable primate", image: "images/cards/Vénérable Primate.png", type: "Nature", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Drynn", image: "images/cards/Drynn.png", type: "Terre", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Souris des bles", image: "images/cards/souris des blés.png", type: "Terre", rarity: "Rare", pv: 350, effects: ["Disparition"] },
/*✅*/  { name: "Sombre messager des nuages", image: "images/cards/Sombre Messager des Nuages.png", type: "Ombre", rarity: "Rare", pv: 375, effects: ["Revanche", "Immunite"] },
/*✅*/  { name: "Araignee hantee", image: "images/cards/Araignee_Hantee.png", type: "Ombre", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Orion", image: "images/cards/Orion.png", type: "Lumière", rarity: "Rare", pv: 350, effects: [] },
    { name: "Saule ardent", image: "images/cards/Saule Ardent.png", type: "Feu", rarity: "Epique", pv: 325, effects: [] },
    { name: "Souverain des chutes d'ether", image: "images/cards/Souverain des Chutes d'Éther.png", type: "Eau", rarity: "Epique", pv: 300, effects: [] },
    { name: "Miracle des cieux lourds", image: "images/cards/Miracle des Cieux Lourds.png", type: "Nature", rarity: "Epique", pv: 300, effects: [] },
    { name: "Dragon de la roche vivante", image: "images/cards/Dragon de la Roche Vivante.png", type: "Terre", rarity: "Epique", pv: 300, effects: ["Revanche", "Immunite"] },
/*✅*/  { name: "L'emissaire des cauchemars", image: "images/cards/L'Émissaire des Cauchemars.png", type: "Ombre", rarity: "Epique", pv: 375, effects: ["Multiplicateur"] },
/*✅*/  { name: "L'oiseau de la dualite", image: "images/cards/L'Oiseau de la Dualité.png", type: "Lumière", rarity: "Epique", pv: 350, effects: [] },
    //Ajouts
/*✅*/  { name: "Hippocampe Nimbe", image: "images/cards/Hippocampe Nimbé.png", type: "Eau", rarity: "Rare", pv: 350, effects: ["Reset"] },
/*✅*/  { name: "Jeunesse D'aldryn", image: "images/cards/Jeunesse d'Aldryn.png", type: "Nature", rarity: "Rare", pv: 400, effects: ["Reset"] },
/*✅*/  { name: "Igniatius le dragon-flamme", image: "images/cards/Ignatus le dragon-flamme.png", type: "Nature", rarity: "Rare", pv: 325, effects: [] },
/*✅*/  { name: "Maitresse de la girafe pourpre", image: "images/cards/Maitresse de la giraphe pourpre.png", type: "Nature", rarity: "Rare", pv: 400, effects: ["Vengeur"] },
/*✅*/  { name: "Dragon des braises forestieres", image: "images/cards/Dragon des Braises Forestières.png", type: "Feu", rarity: "Commun", pv: 400, effects: ["Fumee","Immunite"] },
/*✅*/  { name: "Pyrosolain", image: "images/cards/Pyrosolain.png", type: "Feu", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Plante rouge aux yeux percant", image: "images/cards/Plante Rouge aux Yeux Perçants.png", type: "Eau", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Plumelotus aquatique", image: "images/cards/Plumelotus Aquatique.png", type: "Eau", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Papillon artificiel", image: "images/cards/Papillon Artificiel.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Lapin plume", image: "images/cards/Lapin Plume.png", type: "Nature", rarity: "Commun", pv: 550, effects: ["Sac de frappe"] },
/*✅*/  { name: "Bernard le fluide visqueux", image: "images/cards/Bernard_le_fluide_visqueux.png", type: "Ombre", rarity: "Commun", pv: 350, effects: ["Reset"] },
/*✅*/  { name: "Crustace de l'astre", image: "images/cards/Crustacé de l'astre.png", type: "Lumière", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Fluffybun", image: "images/cards/FluffyBun.png", type: "Lumière", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Chaman brule-guerre", image: "images/cards/Chaman_Brule-Guerre.png.png", type: "Feu", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Hibernatus le colossal", image: "images/cards/Hibernatus le Colossal.png", type: "Eau", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Aqua devorator mortalis", image: "images/cards/Aqua_Devorator_Mortalis.png", type: "Eau", rarity: "Commun", pv: 400, effects: ["Erosion"] },
/*✅*/  { name: "Enfant eucalyptus", image: "images/cards/Enfant_Eucalyptus.png", type: "Nature", rarity: "Commun", pv: 275, effects: ["Erosion"] },
/*✅*/  { name: "Zombie floral", image: "images/cards/Zombie floral.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Cortege des geants gris", image: "images/cards/Cortège des géants gris.png", type: "Terre", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Epine medusine", image: "images/cards/Epine Médusine.png", type: "Ombre", rarity: "Commun", pv: 350, effects: ["Reset"] },
/*✅*/  { name: "Fauve chromatique", image: "images/cards/Fauve chromatique.png", type: "Lumière", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Dragon ciel", image: "images/cards/Dragon ciel.png", type: "Lumière", rarity: "Commun", pv: 500, effects: ["Vengeur"] },
/*✅*/  { name: "Octoflore", image: "images/cards/Octoflore.png", type: "Nature", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Legende d'ardan", image: "images/cards/Legende d Ardan.png", type: "Ombre", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Leche nuages", image: "images/cards/Lèche-nuages.png", type: "Lumière", rarity: "Rare", pv: 375, effects: [] },
/*✅*/  { name: "Dragon cryogenique", image: "images/cards/Dragon Cryogénique.png", type: "Lumière", rarity: "Epique", pv: 250, effects: ["Revanche","Immunite"] },
/*✅*/  { name: "Gabriel", image: "images/cards/Gabriel.png", type: "Nature", rarity: "Epique", pv: 375, effects: [] },
/*✅*/  { name: "Codex des maux ancestraux", image: "images/cards/Codex des maux ancestraux.png", type: "Ombre", rarity: "Epique", pv: 200, effects: ["Immunite"] },
/*✅*/  { name: "Catimimi", image: "images/cards/Catimimi.png", type: "Feu", rarity: "Epique", pv: 350, effects: [] },
/*✅*/  { name: "Manchot des laves", image: "images/cards/Manchot des laves.png", type: "Feu", rarity: "Commun", pv: 450, effects: [] },
/*✅*/  { name: "Fleur de givre", image: "images/cards/Fleur de givre.png", type: "Eau", rarity: "Commun", pv: 250, effects: [] },
/*✅*/  { name: "Crimillion", image: "images/cards/Crimillion.png", type: "Eau", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Dragosaure celeste", image: "images/cards/Dragosaure Céleste.png", type: "Nature", rarity: "Commun", pv: 400, effects: ["Reset"] },
/*✅*/  { name: "Serpent tropical", image: "images/cards/Serpent tropical.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Buffle a bulles", image: "images/cards/Buffle_a_bulles.png", type: "Terre", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Pigmentus", image: "images/cards/Pigmentus.png", type: "Terre", rarity: "Commun", pv: 300, effects: ["Tenacite"] },
/*✅*/  { name: "Fennec funeste", image: "images/cards/Fennec Funeste.png", type: "Ombre", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Misty", image: "images/cards/Misty.png", type: "Ombre", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Chasseur de lueurs", image: "images/cards/Chasseur de lueurs.png", type: "Lumière", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Fleur de vie", image: "images/cards/Fleur de vie.png", type: "Lumière", rarity: "Commun", pv: 250, effects: [] },
/*✅*/  { name: "Dechiqueteur de lave", image: "images/cards/Dechiqueteur de lave.png", type: "Feu", rarity: "Commun", pv: 400, effects: ["Reset"] },
/*✅*/  { name: "Pyropoule", image: "images/cards/Pyropoule.png", type: "Feu", rarity: "Commun", pv: 350, effects: ["Reset"] },
/*✅*/  { name: "Chouette polychrome", image: "images/cards/Chouette polychrome.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Sylve fleurie", image: "images/cards/Sylve fleurie.png", type: "Nature", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Oisillons de midas", image: "images/cards/Oisillons de Midas.png", type: "Lumière", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Rongeur nuageux", image: "images/cards/Rongeur nuageux.png", type: "Lumière", rarity: "Commun", pv: 400, effects: ["Sac de frappe","Terrain"] },
/*✅*/  { name: "Voyageur des cretes", image: "images/cards/Voyageur des crêtes.png", type: "Eau", rarity: "Rare", pv: 600, effects: ["Immunite"] },
/*✅*/  { name: "Pegase d'azur cristallin", image: "images/cards/Pégase d'azur cristallin.png", type: "Eau", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Crocod'ile", image: "images/cards/Crodod'île.png", type: "Eau", rarity: "Rare", pv: 550, effects: [] },
/*✅*/  { name: "Zayd le frappeur", image: "images/cards/Zayd le Frappeur.png", type: "Terre", rarity: "Rare", pv: 600, effects: [] },
/*✅*/  { name: "Guerrier tatou", image: "images/cards/Guerrier Tatou.png", type: "Terre", rarity: "Rare", pv: 450, effects: [] },
/*✅*/  { name: "Gazpoison flottant", image: "images/cards/Gazpoison_Flottant.png", type: "Ombre", rarity: "Rare", pv: 250, effects: ["Poison"] },
/*✅*/  { name: "Dragonnet des etoiles", image: "images/cards/Dragonnet des étoiles.png", type: "Lumière", rarity: "Rare", pv: 350, effects: ["Fumee"] },
/*✅*/  { name: "Roi feu", image: "images/cards/Roi feu.png", type: "Feu", rarity: "Epique", pv: 400, effects: [] },
/*✅*/  { name: "Roi eau", image: "images/cards/Roi eau.png", type: "Eau", rarity: "Epique", pv: 400, effects: [] },
/*✅*/  { name: "Roi nature", image: "images/cards/Roi nature.png", type: "Nature", rarity: "Epique", pv: 400, effects: [] },
/*✅*/  { name: "Roi ombre", image: "images/cards/Roi ombre.png", type: "Ombre", rarity: "Epique", pv: 400, effects: [] },
/*✅*/  { name: "Roi lumiere", image: "images/cards/Roi lumiere.png", type: "Lumière", rarity: "Epique", pv: 400, effects: [] },
/*✅*/  { name: "Roi terre", image: "images/cards/Roi terre.png", type: "Terre", rarity: "Epique", pv: 400, effects: [] },
/*✅*/  { name: "Solara reine du feu", image: "images/cards/Solara Reine du Feu.png", type: "Feu", rarity: "Légendaire", pv: 450, effects: ["Sac de frappe"] },
/*✅*/  { name: "Verdelune licorne du sous bois", image: "images/cards/Verdelune_ licorne du Sous-Bois.png", type: "Nature", rarity: "Légendaire", pv: 400, effects: ["Tenacite"] },
/*✅*/  { name: "Dragon de la cite infernale", image: "images/cards/Dragon de la cité infernale Takoo.png", type: "Feu", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Yotaru gardefeuille", image: "images/cards/Yotaru Gardefeuille.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Aristocrate nebulaire", image: "images/cards/Aristocrate_Nebulaire_Luga.png", type: "Lumière", rarity: "Commun", pv: 175, effects: [] },
/*✅*/  { name: "Chaman mycete pecheur", image: "images/cards/Chaman mycèle pêcheur.png", type: "Terre", rarity: "Commun", pv: 250, effects: [] },
/*✅*/  { name: "Commando Gerz", image: "images/cards/Commando Gerz.png", type: "Terre", rarity: "Rare", pv: 600, effects: ["Poison"] },
/*✅*/  { name: "Familier ailé", image: "images/cards/Familier ailé.png", type: "Ombre", rarity: "Rare", pv: 250, effects: [] },
/*✅*/  { name: "Gnome aventurier ailé", image: "images/cards/Gnome aventurier.png", type: "Terre", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Le cavalier solitaire", image: "images/cards/Le cavalier solitaire.png", type: "Terre", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Paguroniyx", image: "images/cards/Paguroniyx.png", type: "Ombre", rarity: "Commun", pv: 375, effects: ["Mystere"] },
/*✅*/  { name: "Mere Eucalyptus", image: "images/cards/Mere_Eucalyptus.png", type: "Nature", rarity: "Rare", pv: 400, effects: ["Vengeur"] },
/*✅*/  { name: "Sir Citrouille", image: "images/cards/Sir Citrouille.png", type: "Feu", rarity: "Rare", pv: 300, effects: ["Vengeur"] },
/*✅*/  { name: "Vladislaus", image: "images/cards/Vladislaus.png", type: "Feu", rarity: "Epique", pv: 200, effects: ["Tenacite"] },
/*✅*/  { name: "Mange Cauchemars", image: "images/cards/Mange-Cauchemars.png", type: "Ombre", rarity: "Commun", pv: 350, effects: ["Sac de frappe"] },
/*✅*/  { name: "Sanglier doré", image: "images/cards/Sanglier_dore.png", type: "Terre", rarity: "Commun", pv: 350, effects: ["Sac de frappe"] },
/*✅*/  { name: "Crabe Joyau Monde", image: "images/cards/Crabe Joyau-Monde.png", type: "Terre", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Crocabyss", image: "images/cards/Crocabyss.png", type: "Eau", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Terraia Gardienne des Racines", image: "images/cards/Terraia_Gardienne_des_Racines.png", type: "Terre", rarity: "Légendaire", pv: 400, effects: ["Mimetisme"] },
/*✅*/  { name: "Fanure", image: "images/cards/Fanure.png", type: "Nature", rarity: "Epique", pv: 300, effects: [] },
/*✅*/  { name: "Le compagnon des esprits Amytisarts", image: "images/cards/Le_compagnon_des_esprits Amytisarts.png", type: "Eau", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Gardien de la Mort Fleurie", image: "images/cards/Gardien de la Mort Fleurie.png", type: "Ombre", rarity: "Epique", pv: 550, effects: ["Cimetiere"] },
/*✅*/  { name: "Haut-bois des glaces", image: "images/cards/Haut-bois des glaces.png", type: "Eau", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Cimeterre du Néant", image: "images/cards/Cimeterre du Néant.png", type: "Eau", rarity: "Commun", pv: 350, effects: ["Cimetiere","Sac de frappe","Mimetisme"] },
/*✅*/  { name: "Ignéa Lame de l'Ardent", image: "images/cards/Ignéa Lame de l'Ardent.png", type: "Feu", rarity: "Légendaire", pv: 400, effects: [] },
/*✅*/  { name: "Duchesse tourmentée", image: "images/cards/Duchesse tourmentée.png", type: "Ombre", rarity: "Légendaire", pv: 400, effects: [] },
/*✅*/  { name: "Aurore d'Aurelia", image: "images/cards/Aurore_d_Aurelia.png", type: "Lumière", rarity: "Légendaire", pv: 400, effects: ["Reset"] },
/*✅*/  { name: "Héraldesse Serpentine", image: "images/cards/Héraldesse Serpentine.png", type: "Terre", rarity: "Légendaire", pv: 500, effects: ["Eternite"] },
/*✅*/  { name: "Chat de l'autre coté", image: "images/cards/Chat de l'autre-coté.png", type: "Ombre", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Apprentie de la Mort", image: "images/cards/Apprentie_de_la_Mort.png", type: "Feu", rarity: "Rare", pv: 350, effects: ["Cimetiere","Vengeur"] },
/*✅*/  { name: "Maitre Amphibian", image: "images/cards/Maitre Amphibian.png", type: "Terre", rarity: "Rare", pv: 350, effects: ["Erosion"] },
/*✅*/  { name: "Golem de sable", image: "images/cards/Golem de sable.png", type: "Terre", rarity: "Rare", pv: 350, effects: ["Immunite"] },
/*✅*/  { name: "Samurai Croc's", image: "images/cards/Samurai Croc's.png", type: "Terre", rarity: "Epique", pv: 350, effects: ["Tenacite","Cimetiere"] },
/*✅*/  { name: "Emeroldoth Gardien des Temples", image: "images/cards/Emeroldoth_ Gardien des Temples.png", type: "Nature", rarity: "Légendaire", pv: 500, effects: [] },
/*✅*/  { name: "Lueur de désespoir", image: "images/cards/Lueur de désespoir.png", type: "Ombre", rarity: "Rare", pv: 375, effects: ["Fumee"] },
/*✅*/  { name: "Codex des sorts lumineux", image: "images/cards/Codex des sorts lumineux.png", type: "Lumière", rarity: "Epique", pv: 200, effects: ["Immunite"] },
/*✅*/  { name: "Chenille Mielleuse", image: "images/cards/Chenille Mielleuse.png", type: "Lumière", rarity: "Epique", pv: 300, effects: ["Tenacite"] },
/*✅*/  { name: "Baleine astrale", image: "images/cards/Baleine_astrale.png", type: "Lumière", rarity: "Légendaire", pv: 500, effects: ["Reset"] },
/*✅*/  { name: "Lyrana Voix d'Azur", image: "images/cards/Lyrana_Voix_dAzur.png", type: "Eau", rarity: "Légendaire", pv: 500, effects: ["Reset"] },
/*✅*/  { name: "Cornu mythologique", image: "images/cards/Cornu mythologique.png", type: "Terre", rarity: "Rare", pv: 400, effects: [] },
/*✅*/  { name: "Lumisaros", image: "images/cards/Lumisaros.png", type: "Lumière", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Princesse Lysandra", image: "images/cards/Princesse Lysandra.png", type: "Ombre", rarity: "Légendaire", pv: 400, effects: [] },
/*✅*/  { name: "Obscurgale", image: "images/cards/Obscurgale.png", type: "Ombre", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Apprentie evocateur", image: "images/cards/apprentie_evocateur.png", type: "Eau", rarity: "Commun", pv: 350, effects: ["Mystere","Mystere"] },
/*✅*/  { name: "Pyrocoq", image: "images/cards/Pyrocoq.png", type: "Feu", rarity: "Rare", pv: 500, effects: [] },
/*✅*/  { name: "Insecte Flammeveille", image: "images/cards/Insecte Flammeveille.png", type: "Feu", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Sylvignis", image: "images/cards/Sylvignis.png", type: "Feu", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Serpent de cristal arctique", image: "images/cards/Serpent de cristal arctique.png", type: "Eau", rarity: "Légendaire", pv: 425, effects: ["Vengeur"] },
/*✅*/  { name: "Sarah Melodie Marine", image: "images/cards/Sarah Melodie Marine.png", type: "Eau", rarity: "Rare", pv: 350, effects: [ "Sac de frappe","Tenacite"] },
/*✅*/  { name: "Shinobi Éclairant", image: "images/cards/Shinobi Éclairant.png", type: "Lumière", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Cauchemar des Navigateurs", image: "images/cards/Cauchemar_des_Navigateurs.png", type: "Eau", rarity: "Rare", pv: 375, effects: [] },
/*✅*/  { name: "Chef Croac Croac", image: "images/cards/Chef Croac Croac.png", type: "Ombre", rarity: "Rare", pv: 400, effects: [] },
/*✅*/  { name: "Chaman fongique", image: "images/cards/Chaman fongique.png", type: "Lumière", rarity: "Rare", pv: 375, effects: ["Multiplicateur"] },
/*✅*/  { name: "Léonid Cornubi", image: "images/cards/Léonid Cornubis.png", type: "Feu", rarity: "Rare", pv: 450, effects: [] },
/*✅*/  { name: "Godlur Gardien des Monts", image: "images/cards/Godlur Gardien des Monts.png", type: "Terre", rarity: "Commun", pv: 600, effects: ["Soin primitif","Tenacite"] }
];

//todo ajouter Mimetisme ?
const effectClasses = {
        "Aleatoire": "aleatoire",
        "Cimetiere": "cimetiere",
        "Contrecoup": "contrecoup",
        "Cout": "cout",
        "Disparition": "disparition",
        "Fumee": "fumee",
        "Immunite": "immunite",
        "Multiplicateur": "multiplicateur",
        "Mystere": "mystere",
        "Poison": "poison",
        "Provocation": "provocation",
        "Purge": "purge",
        "Renvoi": "renvoi",
        "Reset": "reset",
        "Revanche": "revanche",
        "Sac de frappe": "frappe",
        "Soin primitif": "soin-primitif",
        "Temporalite": "temporalite",
        "Terrain": "terrain",
        "Tenacite": "tenacite",
        "Usage limite": "usage-limite",
        "Vampirisme": "vampirisme",
        "Vengeur": "vengeur",
        "Erosion": "erosion",
        "Eternite": "eternite",
        "Etourdissement": "etourdissement",
        "Vengeance": "vengeance"
};
document.getElementById("pokedex").addEventListener("click", function(e) {
    let card = e.target.closest(".card");
    if (card) {
        card.classList.toggle("flipped");
        let img = card.querySelector("img");
        if (img.src.includes("images/cards/")) {
            img.src = img.src.replace("images/cards/", "images/back/");
        } else {
            img.src = img.src.replace("images/back/", "images/cards/");
        }
    }
});

  
function toggleFilter(category, value) {
    document.querySelector(`.filter-group button[data-${category}="cancel"]`).classList.remove("active");

    const index = activeFilters[category].indexOf(value);
    const button = document.querySelector(`.filter-group button[data-${category}="${value}"]`);

    if (index === -1) {
        activeFilters[category].push(value);
        button.classList.add("active");
    } else {
        activeFilters[category].splice(index, 1);
        button.classList.remove("active");

        // Si aucun filtre -> activer le bouton reset
        if (activeFilters[category].length === 0) {
            document.querySelector(`.filter-group button[data-${category}="cancel"]`).classList.add("active");
        }
    }

    updateFilterInfo();
    filterCards();
}

function resetFilter(category) {
    document.querySelectorAll(`.filter-group button[data-${category}]:not([data-${category}="cancel"])`).forEach(btn => {
        btn.classList.remove("active");
    });

    document.querySelector(`.filter-group button[data-${category}="cancel"]`).classList.add("active");
    activeFilters[category] = [];
    updateFilterInfo();
    filterCards();
}

function setSort(order) {
    sortOrder = order;
    document.querySelectorAll(`.filter-group button[data-sort]`).forEach(btn => {
        btn.classList.remove("active");
    });
    document.querySelector(`.filter-group button[data-sort="${order}"]`)?.classList.add("active");

    filterCards();
}

function updateFilterInfo() {
    const typeFilters = activeFilters.type.length > 0 ? activeFilters.type.join(', ') : '';
    const rarityFilters = activeFilters.rarity.length > 0 ? activeFilters.rarity.join(', ') : '';
    const effectFilters = activeFilters.effect.length > 0 ? activeFilters.effect.join(', ') : '';

    let infoText = '';

    const filterParts = [];
    if (typeFilters) filterParts.push(`Types: ${typeFilters}`);
    if (rarityFilters) filterParts.push(`Raretés: ${rarityFilters}`);
    if (effectFilters) filterParts.push(`Effets: ${effectFilters}`);

    infoText = filterParts.length > 0 ? filterParts.join(' | ') : 'Aucun filtre actif';

    document.getElementById('filter-info').textContent = infoText;
}
function getEffectClass(effect) {
    return effectClasses[effect] || "";
}

function filterCards() {
    const searchText = document.getElementById("searchBar").value.toLowerCase();

    let filteredCards = cards.filter(card => {
        const matchesType = activeFilters.type.length === 0 || activeFilters.type.includes(card.type);
        const matchesRarity = activeFilters.rarity.length === 0 || activeFilters.rarity.includes(card.rarity);
        const matchesSearch = searchText === '' || card.name.toLowerCase().includes(searchText);
        const matchesEffect = activeFilters.effect.length === 0 ||
            activeFilters.effect.some(effect => card.effects.includes(effect));
        return matchesType && matchesRarity && matchesSearch && matchesEffect;
    });

    if (sortOrder) {
        filteredCards.sort((a, b) => sortOrder === 'asc' ? a.pv - b.pv : b.pv - a.pv);
    }

    const pokedex = document.getElementById("pokedex");
    pokedex.innerHTML = "";

    filteredCards.forEach(card => {
        const div = document.createElement("div");
        div.className = "card";

        let effectsHTML = '';
        if (card.effects.length > 0) {
            effectsHTML = '<div class="card-effects">';
            card.effects.forEach(effect => {
                const effectClass = getEffectClass(effect);
                effectsHTML += `<span class="effect-tag ${effectClass}">${effect}</span>`;
            });
            effectsHTML += '</div>';
        }

        div.innerHTML = `
            <img src="${card.image}" alt="${card.name}" loading="lazy">
            <div class="card-info">
                <h3>${card.name}</h3>
                <p>Type: ${card.type}</p>
                <p>PV: ${card.pv}</p>
                ${effectsHTML}
            </div>
        `;
        pokedex.appendChild(div);
    });
}

updateFilterInfo();
filterCards();