let activeFilters = {
    type: [],
    rarity: [],
    effect: []
};
let sortOrder = '';
const cards = [
/*✅*/  { name: "Starter Feu", image: "images/cards/starter_feu.png", type: "Feu", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Starter Eau", image: "images/cards/starter_eau.png", type: "Eau", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Starter Nature", image: "images/cards/starter_nature.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Starter Terre", image: "images/cards/starter_terre.png", type: "Terre", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Starter Ombre", image: "images/cards/starter_ombre.png", type: "Ombre", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Starter Lumière", image: "images/cards/starter_lumiere.png", type: "Lumière", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Colosse igné", image: "images/cards/colosse_igné.png", type: "Feu", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "compagnon du feu", image: "images/cards/compagnon_du_feu.png", type: "Feu", rarity: "Commun", pv: 375, effects: ["Fumee"] },
/*✅*/  { name: "La boule d'ebene", image: "images/cards/la_boule_d_ébéne.png", type: "Feu", rarity: "Commun", pv: 375, effects: ["Mystere"] },
/*✅*/  { name: "L'émissaire des mers étoilées", image: "images/cards/l_émissaire_des_mers_étoilées.png", type: "Eau", rarity: "Commun", pv: 400, effects: ["Terrain"] },
/*✅*/  { name: "Crapaud de cristal", image: "images/cards/crapaud_de_cristal.png", type: "Eau", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Flot cristallin", image: "images/cards/flot_cristallin.png", type: "Eau", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Petit papillon", image: "images/cards/petit_papillon.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Elytre étourdi", image: "images/cards/élytre_étourdi.png", type: "Nature", rarity: "Commun", pv: 250, effects: ["Terrain"] },
/*✅*/  { name: "Fille des bois", image: "images/cards/fille_des_bois.png", type: "Nature", rarity: "Commun", pv: 400, effects: [] },
    { name: "Sage de la pierre sacrée", image: "images/cards/sage_de_la_pierre_sacrée.png", type: "Nature", rarity: "Commun", pv: 325, effects: ["Sac de frappe"] },
    { name: "Croqueur de fruits verdoyant", image: "images/cards/croqueur_de_fruits_verdoyant.png", type: "Nature", rarity: "Commun", pv: 300, effects: ["Terrain"] },
/*✅*/  { name: "Le sableux sifflant", image: "images/cards/le_sableux_sifflant.png", type: "Terre", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Nebula nocturne", image: "images/cards/nebula_nocturne.png", type: "Ombre", rarity: "Commun", pv: 325, effects: ["Eternite"] },
/*✅*/  { name: "Vagabond celeste", image: "images/cards/vagabond_celeste.png", type: "Ombre", rarity: "Commun", pv: 400, effects: ["Poison"] },
    { name: "Félin errant", image: "images/cards/félin_errant..png", type: "Ombre", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Lueur d'espoir", image: "images/cards/lueur_d_espoir.png", type: "Lumière", rarity: "Commun", pv: 400, effects: [] },
    { name: "Le lezard lueur", image: "images/cards/le_lezard_lueur.png", type: "Lumière", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Artisan des heures", image: "images/cards/artisan_des_heures.png", type: "Lumière", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Amber", image: "images/cards/amber.png", type: "Feu", rarity: "Rare", pv: 400, effects: [] },
/*✅*/  { name: "Blaze", image: "images/cards/blaze.png", type: "Feu", rarity: "Rare", pv: 400, effects: [] },
/*✅*/  { name: "Reine des ondes", image: "images/cards/reine_des_ondes.png", type: "Eau", rarity: "Rare", pv: 400, effects: ["Soin primitif"] },
/*✅*/  { name: "Princesse meridia", image: "images/cards/princesse_meridia.png", type: "Nature", rarity: "Rare", pv: 375, effects: [] },
/*✅*/  { name: "Gardien crépusculaire", image: "images/cards/gardien_crépusculaire.png", type: "Nature", rarity: "Rare", pv: 375, effects: [] },
    { name: "Aurora majesté féline", image: "images/cards/aurora_majesté_féline.png", type: "Terre", rarity: "Rare", pv: 300, effects: [] },
    { name: "Maitre des teintes", image: "images/cards/maitre_des_teintes.png", type: "Terre", rarity: "Rare", pv: 300, effects: [] },
    { name: "Gardien de la clairiere", image: "images/cards/gardien_de_la_clairiere.png", type: "Ombre", rarity: "Rare", pv: 300, effects: ["Revanche"] },
    { name: "Frost de la toundra", image: "images/cards/frost_de_la_toundra.png", type: "Ombre", rarity: "Rare", pv: 275, effects: [] },
/*✅*/  { name: "Leo", image: "images/cards/leo.png", type: "Lumière", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Le gamin des etoiles", image: "images/cards/le_gamin_des_etoiles.png", type: "Lumière", rarity: "Rare", pv: 375, effects: [] },
    { name: "Roi des flammes ardentes", image: "images/cards/roi_des_flammes_ardentes.png", type: "Feu", rarity: "Epique", pv: 300, effects: [] },
    { name: "Lumina créature mystique", image: "images/cards/lumina_créature_mystique.png", type: "Eau", rarity: "Epique", pv: 300, effects: ["Erosion"] },
    { name: "Sylvan protecteur", image: "images/cards/sylvan_protecteur.png", type: "Nature", rarity: "Epique", pv: 300, effects: [] },
    { name: "L'epine protectrice", image: "images/cards/l_epine_protectrice.png", type: "terre", rarity: "Epique", pv: 300, effects: ["Renvoi"] },
/*✅*/  { name: "Seigneur paisible", image: "images/cards/seigneur_paisible.png", type: "Ombre", rarity: "Epique", pv: 400, effects: ["Fumee"] },
    { name: "Dragonnet des lumieres", image: "images/cards/dragonnet_des_lumieres.png", type: "Lumière", rarity: "Epique", pv: 300, effects: [] },
    { name: "Souverain des flammes", image: "images/cards/souverain_des_flammes.png", type: "Feu", rarity: "Légendaire", pv: 300, effects: [] },
    { name: "Leviathan des cieux", image: "images/cards/leviathan_des_cieux.png", type: "Eau", rarity: "Légendaire", pv: 500, effects: [] },
    { name: "Aldrin gorakar", image: "images/cards/aldrin_gorakar.png", type: "Nature", rarity: "Légendaire", pv: 300, effects: [] },
    { name: "Le gardien des dunes", image: "images/cards/le_gardien_des_dunes.png", type: "Terre", rarity: "Légendaire", pv: 325, effects: [] },
/*✅*/  { name: "Veilleur nocturne", image: "images/cards/veilleur_nocturne.png", type: "Ombre", rarity: "Légendaire", pv: 350, effects: [] },
    { name: "L'artiste des cieux", image: "images/cards/l_artiste_des_cieux.png", type: "Lumière", rarity: "Légendaire", pv: 300, effects: [] },
    { name: "Bouffon des braises", image: "images/cards/bouffon_des_braises.png", type: "Feu", rarity: "Commun", pv: 250, effects: [] },
    { name: "Incendie ravageur", image: "images/cards/incendie_ravageur.png", type: "Feu", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Sorciere pyrokinetique", image: "images/cards/sorciere_pyrokinetique.png", type: "Feu", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Batracien des marais", image: "images/cards/batracien_des_marais.png", type: "Eau", rarity: "Commun", pv: 450, effects: ["Renvoi"] },
    { name: "Danseur aquatique", image: "images/cards/danseur_aquatique.png", type: "Eau", rarity: "Commun", pv: 300, effects: ["Terrain"] },
/*✅*/  { name: "Loutre intrepide", image: "images/cards/loutre_intrepide.png", type: "Eau", rarity: "Commun", pv: 350, effects: [] },
    { name: "Cameleon arcenciel", image: "images/cards/cameleon_arcenciel.png", type: "Nature", rarity: "Commun", pv: 300, effects: ["Cimetiere"] },
/*✅*/  { name: "Vibrantes ecailles", image: "images/cards/vibrantes_ecailles.png", type: "Nature", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Mante des contrees", image: "images/cards/mante_des_contrees.png", type: "Nature", rarity: "Commun", pv: 250, effects: [] },
/*✅*/  { name: "Le transporteur sauvage", image: "images/cards/le_transporteur_sauvage.png", type: "Terre", rarity: "Commun", pv: 400, effects: ["Sac de frappe"] },
/*✅*/  { name: "Guerrier des neiges", image: "images/cards/guerrier_des_neiges.png", type: "Terre", rarity: "Commun", pv: 325, effects: [] },
    { name: "La sorceleuse lunaire", image: "images/cards/la_sorceleuse_lunaire.png", type: "Ombre", rarity: "Commun", pv: 300, effects: [] },
    { name: "Planeur de la foret", image: "images/cards/planeur_de_la_foret.png", type: "Ombre", rarity: "Commun", pv: 300, effects: ["Terrain"] },
/*✅*/  { name: "Essence spectrale", image: "images/cards/essence_spectrale.png", type: "Ombre", rarity: "Commun", pv: 400, effects: ["Terrain", "Soin primitif"] },
/*✅*/  { name: "Forgeron du fer", image: "images/cards/forgeron_du_fer.png", type: "Lumière", rarity: "Commun", pv: 425, effects: [] },
/*✅*/  { name: "Rayon d'or matinal", image: "images/cards/rayon_d_or_matinal.png", type: "Lumière", rarity: "Commun", pv: 400, effects: ["Cimetiere"] },
    { name: "Coursier de l'aube", image: "images/cards/coursier_de_l_aube.png", type: "Lumière", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Sbire des flammes", image: "images/cards/sbire_des_flammes.png", type: "Feu", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Scorch le lezard igné", image: "images/cards/scorch_le_lezard_igné.png", type: "Eau", rarity: "Rare", pv: 175, effects: ["Soin primitif"] },
    { name: "Pangolin des prairies", image: "images/cards/pangolin_des_prairies.png", type: "Terre", rarity: "Commun", pv: 300, effects: [] },
    { name: "Le requin alaire", image: "images/cards/le_requin_alaire.png", type: "Eau", rarity: "Rare", pv: 300, effects: [] },
    { name: "Soigneuse astrale des bois", image: "images/cards/soigneuse_astrale_des_bois.png", type: "Nature", rarity: "Rare", pv: 300, effects: [] },
/*✅*/  { name: "Girafe florale", image: "images/cards/girafe_florale.png", type: "Nature", rarity: "Rare", pv: 350, effects: ["Sac de frappe"] },
/*✅*/  { name: "Le fauve colossal", image: "images/cards/le_fauve_colossal.png", type: "Terre", rarity: "Rare", pv: 275, effects: [] },
    { name: "Gardien des pics", image: "images/cards/gardien_des_pics.png", type: "Terre", rarity: "Rare", pv: 300, effects: [] },
/*✅*/  { name: "Metamorphose urbaine", image: "images/cards/metamorphose_urbaine.png", type: "Ombre", rarity: "Rare", pv: 400, effects: ["Erosion"] },
/*✅*/  { name: "Complices de la foret", image: "images/cards/complices_de_la_foret.png", type: "Ombre", rarity: "Rare", pv: 450, effects: [] },
/*✅*/  { name: "Le guide globuleux", image: "images/cards/le_guide_globuleux.png", type: "Lumière", rarity: "Rare", pv: 400, effects: [] },
    { name: "Gardien vert", image: "images/cards/gardien_vert.png", type: "Lumière", rarity: "Rare", pv: 300, effects: [] },
/*✅*/  { name: "Createur de la fusion", image: "images/cards/createur_de_la_fusion.png", type: "Feu", rarity: "Rare", pv: 450, effects: [] },
/*✅*/  { name: "Pyra flamme cache", image: "images/cards/pyra_flamme_cache.png", type: "Feu", rarity: "Epique", pv: 350, effects: [] },
    { name: "L'aviateur infernal", image: "images/cards/l_aviateur_infernal.png", type: "Feu", rarity: "Epique", pv: 300, effects: [] },
    { name: "Luminaire abyssal", image: "images/cards/luminaire_abyssal.png", type: "Eau", rarity: "Epique", pv: 300, effects: [] },
    { name: "Baleine farceuse", image: "images/cards/baleine_farceuse.png", type: "Eau", rarity: "Epique", pv: 500, effects: [] },
/*✅*/  { name: "L'enchanteresse sylvaine", image: "images/cards/l_enchanteresse_sylvaine.png", type: "Nature", rarity: "Epique", pv: 450, effects: ["Poison"] },
/*✅*/  { name: "Arbre des mystères", image: "images/cards/arbre_des_mystères.png", type: "Nature", rarity: "Epique", pv: 450, effects: [] },
/*✅*/  { name: "Gardien des entrees", image: "images/cards/gardien_des_entrees.png", type: "Terre", rarity: "Epique", pv: 375, effects: [] },
    { name: "Regent des abysses", image: "images/cards/regent_des_abysses.png", type: "Terre", rarity: "Epique", pv: 300, effects: [] },
/*✅*/  { name: "Le loup colosse", image: "images/cards/le_loup_colosse.png", type: "Ombre", rarity: "Epique", pv: 325, effects: [] },
    { name: "Chouette prismatique", image: "images/cards/chouette_prismatique.png", type: "Ombre", rarity: "Epique", pv: 300, effects: [] },
    { name: "L'oiseau tonnerre", image: "images/cards/l_oiseau_tonnerre.png", type: "Lumière", rarity: "Epique", pv: 300, effects: [] },
/*✅*/  { name: "Crapaud des etoiles", image: "images/cards/crapaud_des_etoiles.png", type: "Lumière", rarity: "Epique", pv: 450, effects: ["Sac de frappe"] },
/*✅*/  { name: "Lyra", image: "images/cards/lyra.png", type: "Lumière", rarity: "Epique", pv: 350, effects: [] },
    { name: "Lyra la dragonniere", image: "images/cards/lyra_la_dragonniere.png", type: "Feu", rarity: "Légendaire", pv: 300, effects: ["Terrain"] },
    { name: "Frost et Glacier", image: "images/cards/Frost_et_Glacier.png", type: "Eau", rarity: "Légendaire", pv: 300, effects: ["Erosion", "Etourdissement"] },
/*✅*/  { name: "Monarque des bois", image: "images/cards/monarque_des_bois.png", type: "Nature", rarity: "Légendaire", pv: 400, effects: ["Fumee"] },
    { name: "Protecteur des ruines", image: "images/cards/protecteur_des_ruines.png", type: "Terre", rarity: "Légendaire", pv: 325, effects: ["Revanche"] },
    { name: "La gardienne des eons", image: "images/cards/la_gardienne_des_eons.png", type: "Ombre", rarity: "Légendaire", pv: 300, effects: [] },
    { name: "Melodie des divinites", image: "images/cards/melodie_des_divinites.png", type: "Lumière", rarity: "Légendaire", pv: 300, effects: [] },
    { name: "Pyro", image: "images/cards/pyro.png", type: "Feu", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Petit pin enflamme", image: "images/cards/petit_pin_enflamme.png", type: "Feu", rarity: "Commun", pv: 400, effects: ["Poison"] },
/*✅*/  { name: "Flamboyant des cavernes", image: "images/cards/flamboyant_des_cavernes.png", type: "Feu", rarity: "Commun", pv: 350, effects: ["Terrain"] },
/*✅*/  { name: "Blancheur aquatique", image: "images/cards/blancheur_aquatique.png", type: "Eau", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Dame navire", image: "images/cards/dame_navire.png", type: "Eau", rarity: "Commun", pv: 350, effects: ["Temporalite"] },
/*✅*/  { name: "Murmures du corail noir", image: "images/cards/murmures_du_corail_noir.png", type: "Eau", rarity: "Commun", pv: 300, effects: ["Multiplicateur"] },
/*✅*/  { name: "Lame de la foret", image: "images/cards/lame_de_la_foret.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
    { name: "Koala fleuri", image: "images/cards/koala_fleuri.png", type: "Nature", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Suricate elance", image: "images/cards/suricate_elance.png", type: "Nature", rarity: "Commun", pv: 250, effects: [] },
/*✅*/  { name: "l'epine d'amour", image: "images/cards/l_epine_d_amour.png", type: "Terre", rarity: "Commun", pv: 350, effects: ["Renvoi"] },
/*✅*/  { name: "Elephant sacre", image: "images/cards/elephant_sacre.png", type: "Terre", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Ecaille", image: "images/cards/ecaille.png", type: "Terre", rarity: "Commun", pv: 375, effects: ["Revanche"] },
/*✅*/  { name: "Demon miaulant", image: "images/cards/demon_miaulant.png", type: "Ombre", rarity: "Commun", pv: 400, effects: [] },
    { name: "Errance du manoir", image: "images/cards/errance_du_manoir.png", type: "Ombre", rarity: "Commun", pv: 300, effects: ["Poison"] },
/*✅*/  { name: "L'epouvante hesitante", image: "images/cards/l_epouvante_hesitante.png", type: "Ombre", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Glouton de lueur", image: "images/cards/glouton_de_lueur.png", type: "Lumière", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Cygne des reflets dores", image: "images/cards/cygne_des_reflets_dores.png", type: "Lumière", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Savoureur de soleil", image: "images/cards/savoureur_de_soleil.png", type: "Lumière", rarity: "Commun", pv: 350, effects: ["Terrain"] },
    { name: "Aidan", image: "images/cards/aidan.png", type: "Feu", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Prisonniere de la machine", image: "images/cards/prisonniere_de_la_machine.png", type: "Feu", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Keria", image: "images/cards/keria.png", type: "Feu", rarity: "Rare", pv: 350, effects: [] },
    { name: "Poulpe parleur", image: "images/cards/poulpe_parleur.png", type: "Eau", rarity: "Commun", pv: 300, effects: ["Fumee"] },
/*✅*/  { name: "Fleurmarine", image: "images/cards/fleurmarine.png", type: "Eau", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Monstre des fleuves endormis", image: "images/cards/monstre_des_fleuves_endormis.png", type: "Eau", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Panthere imaginaire", image: "images/cards/panthere_imaginaire.png", type: "Nature", rarity: "Commun", pv: 300, effects: [] },
    { name: "Esprit de la faune", image: "images/cards/esprit_de_la_faune.png", type: "Nature", rarity: "Commun", pv: 300, effects: [] },
    { name: "Tisseuse de mots", image: "images/cards/tisseuse_de_mots.png", type: "Nature", rarity: "Commun", pv: 300, effects: ["Sac de frappe"] },
/*✅*/  { name: "Wyrm des dunes cornu", image: "images/cards/wyrm_des_dunes_cornu.png", type: "Terre", rarity: "Commun", pv: 400, effects: ["Terrain", "Multiplicateur"] },
    { name: "Bleu mange cailloux", image: "images/cards/bleu_mange_cailloux.png", type: "Terre", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Bondisseur metallique", image: "images/cards/bondisseur_metallique.png", type: "Terre", rarity: "Commun", pv: 350, effects: [] },
    { name: "Spectre canin", image: "images/cards/spectre_canin.png", type: "Ombre", rarity: "Commun", pv: 400, effects: ["Immunite"] },
/*✅*/  { name: "Herisson de minuit", image: "images/cards/herisson_de_minuit.png", type: "Ombre", rarity: "Commun", pv: 350, effects: ["Poison", "Renvoi"] },
/*✅*/  { name: "Lapin titanesque", image: "images/cards/lapin_titanesque.png", type: "Ombre", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Lueur rousse", image: "images/cards/lueur_rousse.png", type: "Lumière", rarity: "Commun", pv: 350, effects: ["Multiplicateur"] },
    { name: "L'ombre du blanc", image: "images/cards/l_ombre_du_blanc.png", type: "Lumière", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Lumiflore la boule de lumiere", image: "images/cards/lumiflore_la_boule_de_lumiere.png", type: "Lumière", rarity: "Commun", pv: 375, effects: [] },
    { name: "Keria l'ensorcelee", image: "images/cards/keria_l_ensorcelee.png", type: "Feu", rarity: "Rare", pv: 300, effects: [] },
    { name: "Felin eruptif", image: "images/cards/felin_eruptif.png", type: "Feu", rarity: "Commun", pv: 300, effects: [] },
    { name: "Cauda regalis", image: "images/cards/cauda_regalis.png", type: "Eau", rarity: "Rare", pv: 300, effects: ["Poison"] },
    { name: "Seigneur des marees", image: "images/cards/seigneur_des_marees.png", type: "Eau", rarity: "Rare", pv: 350, effects: ["Sac de frappe", "Fumee"] },
/*✅*/  { name: "Titan des eaux brillantes", image: "images/cards/titan_des_eaux_brillantes.png", type: "Eau", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Cerf des couleurs funebres", image: "images/cards/cerf_des_couleurs_funebres.png", type: "Nature", rarity: "Rare", pv: 350, effects: ["Multiplicateur"] },
/*✅*/  { name: "Venerable primate", image: "images/cards/venerable_primate.png", type: "Nature", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Drynn", image: "images/cards/Drynn.png", type: "Terre", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Souris des bles", image: "images/cards/souris_des_bles.png", type: "Terre", rarity: "Rare", pv: 350, effects: ["Disparition"] },
/*✅*/  { name: "Sombre messager des nuages", image: "images/cards/sombre_messager_des_nuages.png", type: "Ombre", rarity: "Rare", pv: 375, effects: ["Revanche", "Immunite"] },
/*✅*/  { name: "Araignee hantee", image: "images/cards/araignee_hantee.png", type: "Ombre", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Orion", image: "images/cards/orion.png", type: "Lumière", rarity: "Rare", pv: 350, effects: [] },
    { name: "Saule ardent", image: "images/cards/saule_ardent.png", type: "Feu", rarity: "Epique", pv: 325, effects: [] },
    { name: "Souverain des chutes d'ether", image: "images/cards/souverain_des_chutes_d_ether.png", type: "Eau", rarity: "Epique", pv: 300, effects: [] },
    { name: "Miracle des cieux lourds", image: "images/cards/miracle_des_cieux_lourds.png", type: "Nature", rarity: "Epique", pv: 300, effects: [] },
    { name: "Dragon de la roche vivante", image: "images/cards/dragon_de_la_roche_vivante.png", type: "Terre", rarity: "Epique", pv: 300, effects: ["Revanche", "Immunite"] },
/*✅*/  { name: "L'emissaire des cauchemars", image: "images/cards/l_emissaire_des_cauchemars.png", type: "Ombre", rarity: "Epique", pv: 375, effects: ["Multiplicateur"] },
/*✅*/  { name: "L'oiseau de la dualite", image: "images/cards/l_oiseau_de_la_dualite.png", type: "Lumière", rarity: "Epique", pv: 350, effects: [] },
    //Ajouts
/*✅*/  { name: "Hippocampe Nimbe", image: "images/cards/hippocampe_nimbe.png", type: "Eau", rarity: "Rare", pv: 350, effects: ["Reset"] },
/*✅*/  { name: "Jeunesse D'aldryn", image: "images/cards/jeunesse_d_aldryn.png", type: "Nature", rarity: "Rare", pv: 400, effects: ["Reset"] },
/*✅*/  { name: "Igniatius le dragon-flamme", image: "images/cards/igniatius_le_dragon_flamme.png", type: "Nature", rarity: "Rare", pv: 325, effects: [] },
/*✅*/  { name: "Maitresse de la girafe pourpre", image: "images/cards/maitresse_de_la_girafe_pourpre.png", type: "Nature", rarity: "Rare", pv: 400, effects: ["Vengeur"] },
/*✅*/  { name: "Dragon des braises forestieres", image: "images/cards/dragon_des_braises_forestieres.png", type: "Feu", rarity: "Commun", pv: 400, effects: ["Fumee","Immunite"] },
/*✅*/  { name: "Pyrosolain", image: "images/cards/pyrosolain.png", type: "Feu", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Plante rouge aux yeux percant", image: "images/cards/plante_rouge_aux_yeux_percant.png", type: "Eau", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Plumelotus aquatique", image: "images/cards/plumelotus_aquatique.png", type: "Eau", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Papillon artificiel", image: "images/cards/papillon_artificiel.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Lapin plume", image: "images/cards/lapin_plume.png", type: "Nature", rarity: "Commun", pv: 550, effects: ["Sac de frappe"] },
/*✅*/  { name: "Bernard le fluide visqueux", image: "images/cards/bernard_le_fluide_visqueux.png", type: "Ombre", rarity: "Commun", pv: 350, effects: ["Reset"] },
/*✅*/  { name: "Crustace de l'astre", image: "images/cards/crustace_de_l_astre.png", type: "Lumière", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Fluffybun", image: "images/cards/fluffybun.png", type: "Lumière", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Chaman brule-guerre", image: "images/cards/chaman_brule-guerre.png", type: "Feu", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Hibernatus le colossal", image: "images/cards/hibernatus_le_colossal.png", type: "Eau", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Aqua devorator mortalis", image: "images/cards/aqua_devorator_mortalis.png", type: "Eau", rarity: "Commun", pv: 400, effects: ["Erosion"] },
/*✅*/  { name: "Enfant eucalyptus", image: "images/cards/enfant_eucalyptus.png", type: "Nature", rarity: "Commun", pv: 275, effects: ["Erosion"] },
/*✅*/  { name: "Zombie floral", image: "images/cards/zombie_floral.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Cortege des geants gris", image: "images/cards/cortege_des_geants_gris.png", type: "Terre", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Epine medusine", image: "images/cards/epine_medusine.png", type: "Ombre", rarity: "Commun", pv: 350, effects: ["Reset"] },
/*✅*/  { name: "Fauvre chromatique", image: "images/cards/fauvre_chromatique.png", type: "Lumière", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Dragon ciel", image: "images/cards/dragon_ciel.png", type: "Lumière", rarity: "Commun", pv: 500, effects: ["Vengeur"] },
/*✅*/  { name: "Octoflore", image: "images/cards/octoflore.png", type: "Nature", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Legende d'ardan", image: "images/cards/legende_d_ardan.png", type: "Ombre", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Leche nuages", image: "images/cards/leche_nuages.png", type: "Lumière", rarity: "Rare", pv: 375, effects: [] },
/*✅*/  { name: "Dragon cryogenique", image: "images/cards/dragon_cryogenique.png", type: "Lumière", rarity: "Epique", pv: 250, effects: ["Revanche","Immunite"] },
/*✅*/  { name: "Gabriel", image: "images/cards/gabriel.png", type: "Nature", rarity: "Epique", pv: 375, effects: [] },
/*✅*/  { name: "Codex des maux ancestraux", image: "images/cards/codex_des_maux_ancestraux.png", type: "Ombre", rarity: "Epique", pv: 200, effects: ["Immunite"] },
/*✅*/  { name: "Catimimi", image: "images/cards/catimimi.png", type: "Feu", rarity: "Epique", pv: 350, effects: [] },
/*✅*/  { name: "Manchot des laves", image: "images/cards/manchot_des_laves.png", type: "Feu", rarity: "Commun", pv: 450, effects: [] },
/*✅*/  { name: "Fleur de givre", image: "images/cards/fleur_de_givre.png", type: "Eau", rarity: "Commun", pv: 250, effects: [] },
/*✅*/  { name: "Crimillion", image: "images/cards/crimillion.png", type: "Eau", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Dragosaure celeste", image: "images/cards/dragosaure_celeste.png", type: "Nature", rarity: "Commun", pv: 400, effects: ["Reset"] },
/*✅*/  { name: "Serpent tropical", image: "images/cards/serpent_tropical.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Buffle a bulles", image: "images/cards/buffle_a_bulles.png", type: "Terre", rarity: "Commun", pv: 400, effects: [] },
/*✅*/  { name: "Pigmentus", image: "images/cards/pigmentus.png", type: "Terre", rarity: "Commun", pv: 300, effects: ["Tenacite"] },
/*✅*/  { name: "Fennec funeste", image: "images/cards/fennec_funeste.png", type: "Ombre", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Misty", image: "images/cards/misty.png", type: "Ombre", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Chasseur de lueurs", image: "images/cards/chasseur_de_lueurs.png", type: "Lumière", rarity: "Commun", pv: 300, effects: [] },
/*✅*/  { name: "Fleur de vie", image: "images/cards/fleur_de_vie.png", type: "Lumière", rarity: "Commun", pv: 250, effects: [] },
/*✅*/  { name: "Dechiqueteur de lave", image: "images/cards/dechiqueteur_de_lave.png", type: "Feu", rarity: "Commun", pv: 400, effects: ["Reset"] },
/*✅*/  { name: "Pyropoule", image: "images/cards/pyropoule.png", type: "Feu", rarity: "Commun", pv: 350, effects: ["Reset"] },
/*✅*/  { name: "Chouette polychrome", image: "images/cards/chouette_polychrome.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Sylve fleurie", image: "images/cards/sylve_fleurie.png", type: "Nature", rarity: "Commun", pv: 375, effects: [] },
/*✅*/  { name: "Oisillons de midas", image: "images/cards/oisillons_de_midas.png", type: "Lumière", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Rongeur nuageux", image: "images/cards/rongeur_nuageux.png", type: "Lumière", rarity: "Commun", pv: 400, effects: ["Sac de frappe","Terrain"] },
/*✅*/  { name: "Voyageur des cretes", image: "images/cards/voyageur_des_cretes.png", type: "Eau", rarity: "Rare", pv: 600, effects: ["Immunite"] },
/*✅*/  { name: "Pegase d'azur cristallin", image: "images/cards/pegase_d_azur_cristallin.png", type: "Eau", rarity: "Rare", pv: 350, effects: [] },
/*✅*/  { name: "Crocod'ile", image: "images/cards/crocod_ile.png", type: "Eau", rarity: "Rare", pv: 550, effects: [] },
/*✅*/  { name: "Zayd le frappeur", image: "images/cards/zayd_le_frappeur.png", type: "Terre", rarity: "Rare", pv: 600, effects: [] },
/*✅*/  { name: "Guerrier tatou", image: "images/cards/guerrier_tatou.png", type: "Terre", rarity: "Rare", pv: 450, effects: [] },
/*✅*/  { name: "Gazpoison flottant", image: "images/cards/gazpoison_flottant.png", type: "Ombre", rarity: "Rare", pv: 250, effects: ["Poison"] },
/*✅*/  { name: "Dragonnet des etoiles", image: "images/cards/dragonnet_des_etoiles.png", type: "Lumière", rarity: "Rare", pv: 350, effects: ["Fumee"] },
/*✅*/  { name: "Roi feu", image: "images/cards/roi_feu.png", type: "Feu", rarity: "Epique", pv: 400, effects: [] },
/*✅*/  { name: "Roi nature", image: "images/cards/roi_nature.png", type: "Nature", rarity: "Epique", pv: 400, effects: [] },
/*✅*/  { name: "Roi ombre", image: "images/cards/roi_ombre.png", type: "Ombre", rarity: "Epique", pv: 400, effects: [] },
/*✅*/  { name: "Roi lumiere", image: "images/cards/roi_lumiere.png", type: "Lumière", rarity: "Epique", pv: 400, effects: [] },
/*✅*/  { name: "Solara reine du feu", image: "images/cards/solara_reine_du_feu.png", type: "Feu", rarity: "Légendaire", pv: 450, effects: ["Sac de frappe"] },
/*✅*/  { name: "Verdelune licorne du sous bois", image: "images/cards/verdelune_licorne_du_sous_bois.png", type: "Nature", rarity: "Légendaire", pv: 400, effects: ["Tenacite"] },
/*✅*/  { name: "Dragon de la cite infernale", image: "images/cards/dragon_de_la_cite_infernale.png", type: "Feu", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Yotaru gardefeuille", image: "images/cards/yotaru_gardefeuille.png", type: "Nature", rarity: "Commun", pv: 350, effects: [] },
/*✅*/  { name: "Aristocrate nebulaire", image: "images/cards/aristocrate_nebulaire.png", type: "Lumière", rarity: "Commun", pv: 175, effects: [] },
];

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
            <img src="${card.image}" alt="${card.name}">
            <div class="card-info">
                ${effectsHTML}
            </div>
        `;
        pokedex.appendChild(div);
    });
}
updateFilterInfo();
filterCards();