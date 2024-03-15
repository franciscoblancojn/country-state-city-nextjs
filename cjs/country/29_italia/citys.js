"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.citys = void 0;
const citys_1 = require("./506_piemonte_-_torino/citys");
const citys_2 = require("./507_piemonte_-_alessandria/citys");
const citys_3 = require("./508_piemonte_-_asti/citys");
const citys_4 = require("./509_piemonte_-_biella/citys");
const citys_5 = require("./510_piemonte_-_cuneo/citys");
const citys_6 = require("./511_piemonte_-_novara/citys");
const citys_7 = require("./512_piemonte_-_verbania/citys");
const citys_8 = require("./513_piemonte_-_vercelli/citys");
const citys_9 = require("./514_valle_daosta_-_aosta/citys");
const citys_10 = require("./515_lombardia_-_milano/citys");
const citys_11 = require("./516_lombardia_-_bergamo/citys");
const citys_12 = require("./517_lombardia_-_brescia/citys");
const citys_13 = require("./518_lombardia_-_como/citys");
const citys_14 = require("./519_lombardia_-_cremona/citys");
const citys_15 = require("./520_lombardia_-_lecco/citys");
const citys_16 = require("./521_lombardia_-_lodi/citys");
const citys_17 = require("./522_lombardia_-_mantova/citys");
const citys_18 = require("./523_lombardia_-_pavia/citys");
const citys_19 = require("./524_lombardia_-_sondrio/citys");
const citys_20 = require("./525_lombardia_-_varese/citys");
const citys_21 = require("./526_trentino_alto_adige_-_trento/citys");
const citys_22 = require("./527_trentino_alto_adige_-_bolzano/citys");
const citys_23 = require("./528_veneto_-_venezia/citys");
const citys_24 = require("./529_veneto_-_belluno/citys");
const citys_25 = require("./530_veneto_-_padova/citys");
const citys_26 = require("./531_veneto_-_rovigo/citys");
const citys_27 = require("./532_veneto_-_treviso/citys");
const citys_28 = require("./533_veneto_-_verona/citys");
const citys_29 = require("./534_veneto_-_vicenza/citys");
const citys_30 = require("./535_friuli_venezia_giulia_-_trieste/citys");
const citys_31 = require("./536_friuli_venezia_giulia_-_gorizia/citys");
const citys_32 = require("./537_friuli_venezia_giulia_-_pordenone/citys");
const citys_33 = require("./538_friuli_venezia_giulia_-_udine/citys");
const citys_34 = require("./539_liguria_-_genova/citys");
const citys_35 = require("./540_liguria_-_imperia/citys");
const citys_36 = require("./541_liguria_-_la_spezia/citys");
const citys_37 = require("./542_liguria_-_savona/citys");
const citys_38 = require("./543_emilia_romagna_-_bologna/citys");
const citys_39 = require("./544_emilia_romagna_-_ferrara/citys");
const citys_40 = require("./545_emilia_romagna_-_forli-cesena/citys");
const citys_41 = require("./546_emilia_romagna_-_modena/citys");
const citys_42 = require("./547_emilia_romagna_-_parma/citys");
const citys_43 = require("./548_emilia_romagna_-_piacenza/citys");
const citys_44 = require("./549_emilia_romagna_-_ravenna/citys");
const citys_45 = require("./550_emilia_romagna_-_reggio_emilia/citys");
const citys_46 = require("./551_emilia_romagna_-_rimini/citys");
const citys_47 = require("./552_toscana_-_firenze/citys");
const citys_48 = require("./553_toscana_-_arezzo/citys");
const citys_49 = require("./554_toscana_-_grosseto/citys");
const citys_50 = require("./555_toscana_-_livorno/citys");
const citys_51 = require("./556_toscana_-_lucca/citys");
const citys_52 = require("./557_toscana_-_massa_carrara/citys");
const citys_53 = require("./558_toscana_-_pisa/citys");
const citys_54 = require("./559_toscana_-_pistoia/citys");
const citys_55 = require("./560_toscana_-_prato/citys");
const citys_56 = require("./561_toscana_-_siena/citys");
const citys_57 = require("./562_umbria_-_perugia/citys");
const citys_58 = require("./563_umbria_-_terni/citys");
const citys_59 = require("./564_marche_-_ancona/citys");
const citys_60 = require("./565_marche_-_ascoli_piceno/citys");
const citys_61 = require("./566_marche_-_macerata/citys");
const citys_62 = require("./567_marche_-_pesaro_-_urbino/citys");
const citys_63 = require("./568_lazio_-_roma/citys");
const citys_64 = require("./569_lazio_-_frosinone/citys");
const citys_65 = require("./570_lazio_-_latina/citys");
const citys_66 = require("./571_lazio_-_rieti/citys");
const citys_67 = require("./572_lazio_-_viterbo/citys");
const citys_68 = require("./573_abruzzo_-_laquila/citys");
const citys_69 = require("./574_abruzzo_-_chieti/citys");
const citys_70 = require("./575_abruzzo_-_pescara/citys");
const citys_71 = require("./576_abruzzo_-_teramo/citys");
const citys_72 = require("./577_molise_-_campobasso/citys");
const citys_73 = require("./578_molise_-_isernia/citys");
const citys_74 = require("./579_campania_-_napoli/citys");
const citys_75 = require("./580_campania_-_avellino/citys");
const citys_76 = require("./581_campania_-_benevento/citys");
const citys_77 = require("./582_campania_-_caserta/citys");
const citys_78 = require("./583_campania_-_salerno/citys");
const citys_79 = require("./584_puglia_-_bari/citys");
const citys_80 = require("./585_puglia_-_brindisi/citys");
const citys_81 = require("./586_puglia_-_foggia/citys");
const citys_82 = require("./587_puglia_-_lecce/citys");
const citys_83 = require("./588_puglia_-_taranto/citys");
const citys_84 = require("./589_basilicata_-_potenza/citys");
const citys_85 = require("./590_basilicata_-_matera/citys");
const citys_86 = require("./591_calabria_-_catanzaro/citys");
const citys_87 = require("./592_calabria_-_cosenza/citys");
const citys_88 = require("./593_calabria_-_crotone/citys");
const citys_89 = require("./594_calabria_-_reggio_calabria/citys");
const citys_90 = require("./595_calabria_-_vibo_valentia/citys");
const citys_91 = require("./596_sicilia_-_palermo/citys");
const citys_92 = require("./597_sicilia_-_agrigento/citys");
const citys_93 = require("./598_sicilia_-_caltanissetta/citys");
const citys_94 = require("./599_sicilia_-_catania/citys");
const citys_95 = require("./600_sicilia_-_enna/citys");
const citys_96 = require("./601_sicilia_-_messina/citys");
const citys_97 = require("./602_sicilia_-_ragusa/citys");
const citys_98 = require("./603_sicilia_-_siracusa/citys");
const citys_99 = require("./604_sicilia_-_trapani/citys");
const citys_100 = require("./605_sardegna_-_cagliari/citys");
const citys_101 = require("./606_sardegna_-_nuoro/citys");
const citys_102 = require("./607_sardegna_-_oristano/citys");
const citys_103 = require("./608_sardegna_-_sassari/citys");
exports.citys = [
    ...citys_1.citys,
    ...citys_2.citys,
    ...citys_3.citys,
    ...citys_4.citys,
    ...citys_5.citys,
    ...citys_6.citys,
    ...citys_7.citys,
    ...citys_8.citys,
    ...citys_9.citys,
    ...citys_10.citys,
    ...citys_11.citys,
    ...citys_12.citys,
    ...citys_13.citys,
    ...citys_14.citys,
    ...citys_15.citys,
    ...citys_16.citys,
    ...citys_17.citys,
    ...citys_18.citys,
    ...citys_19.citys,
    ...citys_20.citys,
    ...citys_21.citys,
    ...citys_22.citys,
    ...citys_23.citys,
    ...citys_24.citys,
    ...citys_25.citys,
    ...citys_26.citys,
    ...citys_27.citys,
    ...citys_28.citys,
    ...citys_29.citys,
    ...citys_30.citys,
    ...citys_31.citys,
    ...citys_32.citys,
    ...citys_33.citys,
    ...citys_34.citys,
    ...citys_35.citys,
    ...citys_36.citys,
    ...citys_37.citys,
    ...citys_38.citys,
    ...citys_39.citys,
    ...citys_40.citys,
    ...citys_41.citys,
    ...citys_42.citys,
    ...citys_43.citys,
    ...citys_44.citys,
    ...citys_45.citys,
    ...citys_46.citys,
    ...citys_47.citys,
    ...citys_48.citys,
    ...citys_49.citys,
    ...citys_50.citys,
    ...citys_51.citys,
    ...citys_52.citys,
    ...citys_53.citys,
    ...citys_54.citys,
    ...citys_55.citys,
    ...citys_56.citys,
    ...citys_57.citys,
    ...citys_58.citys,
    ...citys_59.citys,
    ...citys_60.citys,
    ...citys_61.citys,
    ...citys_62.citys,
    ...citys_63.citys,
    ...citys_64.citys,
    ...citys_65.citys,
    ...citys_66.citys,
    ...citys_67.citys,
    ...citys_68.citys,
    ...citys_69.citys,
    ...citys_70.citys,
    ...citys_71.citys,
    ...citys_72.citys,
    ...citys_73.citys,
    ...citys_74.citys,
    ...citys_75.citys,
    ...citys_76.citys,
    ...citys_77.citys,
    ...citys_78.citys,
    ...citys_79.citys,
    ...citys_80.citys,
    ...citys_81.citys,
    ...citys_82.citys,
    ...citys_83.citys,
    ...citys_84.citys,
    ...citys_85.citys,
    ...citys_86.citys,
    ...citys_87.citys,
    ...citys_88.citys,
    ...citys_89.citys,
    ...citys_90.citys,
    ...citys_91.citys,
    ...citys_92.citys,
    ...citys_93.citys,
    ...citys_94.citys,
    ...citys_95.citys,
    ...citys_96.citys,
    ...citys_97.citys,
    ...citys_98.citys,
    ...citys_99.citys,
    ...citys_100.citys,
    ...citys_101.citys,
    ...citys_102.citys,
    ...citys_103.citys,
];
//# sourceMappingURL=citys.js.map