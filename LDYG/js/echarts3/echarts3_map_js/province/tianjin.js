﻿(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('澶╂触', {"type":"FeatureCollection","features":[{"id":"120101","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@BhB`R@DA@CD@DCFCHBLDF@DABKFIJGQG@COEQM@@OASB"],"encodeOffsets":[[119992,40041]]},"properties":{"cp":[117.195907,39.118327],"name":"鍜屽钩鍖?,"childNum":1}},{"id":"120102","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@XFFIE@BGGA@KVBN_]CCCLg聠MGE@CD@AGB@AEGMEACB@BA@BFWFACKA@DA@@DA@C@CCCDGIAKMBWLGFERWT]bADCNE@DDIDEFBHTHBD@DLMPJj@ARX@"],"encodeOffsets":[[120075,40099]]},"properties":{"cp":[117.226568,39.122125],"name":"娌充笢鍖?,"childNum":1}},{"id":"120103","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@TAPB@@RNPF@DRHPSXSFQHEXK聜E@CMIFUQA@DC@CCA@CDE@CEE@FOc@@D{@ch]IGFCFE`A\\"],"encodeOffsets":[[119992,40041]]},"properties":{"cp":[117.217536,39.101897],"name":"娌宠タ鍖?,"childNum":1}},{"id":"120104","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@C@@DCBQ@AcAmBOFaDEHEgKID]ZQTINCJEdkhHDRNCB@FD@BAFDFHB@JIDANFDECCZCBA\\B@Hd@LB@CAU"],"encodeOffsets":[[120007,40074]]},"properties":{"cp":[117.164143,39.120474],"name":"鍗楀紑鍖?,"childNum":1}},{"id":"120105","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@FBBAJBFDJK\\NFEFBLKBBBATP`]QOLB@AHBBEJ@DDDE@QW@BQi@OIKN@CACQECG@CFCJCCCMCGAEDCFBT@DSTQN@BFDBDCJBJAHKAIFDDXDAB"],"encodeOffsets":[[119993,40130]]},"properties":{"cp":[117.201569,39.156632],"name":"娌冲寳鍖?,"childNum":1}},{"id":"120106","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@JELBBGAIDIACEC@ARMTSKAc@@G[AABYDDDCFMECBIJC@CPHZ@LHNFFNHBCDAZBB@DEJE"],"encodeOffsets":[[119980,40125]]},"properties":{"cp":[117.163301,39.175066],"name":"绾㈡ˉ鍖?,"childNum":1}},{"id":"120110","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@CK@QOCEAEK@KAAKAKEoRECIYK{\\Af@BMb@@WAGBC@GV@KYBUkB@@OD@AEUE@IQDAGSJEDFD@CIDAAKDE@KECOKKEABMVMRGBSGE@KDCDADDN@FCHCBGAIGUKUEcB]JULINIZGD[AU@QDMDGFQR_NODiBcDBLHJDCDDF@@CB@@CLBBDXEAEB@@ADAFBHNBFA@BHC@@DHF聟NKhDD^DM`UA@LHBAHF@EJWE@RCFCCI@AFGA@BKARP_^ZXZL\\JfHNHEdEAAFBBQCAFPHRGtMBEB@NB^Cb@lECFHDPD@DNBJCFE@CEG@GTCPHBF`@JFBCHJJKRCP@JGTIAQGIDAPAVH@GCEKEEBAAVEBDADPFBBCFBBHE@WHClQPCFBTARE"],"encodeOffsets":[[120391,40118]]},"properties":{"cp":[117.313967,39.087764],"name":"涓滀附鍖?,"childNum":1}},{"id":"120111","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@CGECABC@@EDAQMGClgD]DM^c^YHCF@聜VrwJBBINBHAFAHBDAN@LDDGCCA@AC@AACBAAEFKA@KDCCJCJDFGF@DCBGDQJERFHGMCLEAAGAFGMMAWE@BHQLKIBAJECCCAAGQW[DAAjS@AIYXKGG聬聝T@NBFEBABOJBDMFADGG@BGH@@AACFKGCG@FMWMDABCBAACLCIGCAE@[P楼\\]N炉聵MNORU^聨]XKF聧`_XIIAIkDDZF@@FMDJLmTSDaHgDBJE@@DOBDH[HFJCBCGCBIMKH[L@AAAADUBACECGHWKCHTHBHaJDLF@JNF@FNLAH\\FABPD@EF@@HELCHVF@GXBB@DJBI\\PB@BN@BHK@GBAJ\\F@AACLABBAB@DFHB@FFJCDL@BA@@DF@JEBKHB@CjHBENDH@HSFBDKEAFG\\H@DE@AF@HHBANH@BQ@CBGNFT@`LFABIN@ALDBCFRHFB`D`ANANCG[DM"],"encodeOffsets":[[119940,40092]]},"properties":{"cp":[117.012247,39.139446],"name":"瑗块潚鍖?,"childNum":1}},{"id":"120112","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ZAZEVKXSPGVEnDHCJYJMVKNEPCdAZHRJJHHBDADG@ECMBCDCLCF@THHANQPWD@DBXRJ@HAJERSJAJBDCEOCAKYBQCA@GBCDSGAGBIHSNA@KCQMCF]IN聡aC聧uOSGU{zm_聺yENH@HDELBD@BG@AHH@CHEBCNIAAPABEFMAS@聫聞HHWLJZ@BiTBB\\CRXBHDBDDIFABLJRKAGF@BXNNEHHBBBKFNDGHQEIFCRAHCDE@EHICIDDDLCB@ELBFABBD@BBDB@DDCHKCM@CBGAEBGBMAAJIAMP|@@Cd@EPF@DFF@DCB@DDD@@CRBEVNJ@D"],"encodeOffsets":[[120108,40016]]},"properties":{"cp":[117.382549,38.989577],"name":"娲ュ崡鍖?,"childNum":1}},{"id":"120113","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@PQFFJICABACCDAKGJGLHRMVMMERKHH`WBFFCRFJHHIBOK_MC@QLCDIBAMA@COCGCDEkFa@]DMAA@AFsNQHOGBERDAABEFBFcMGeG[IQGGCmgABAAKLEAEF[MILECKA@BA@CABAWCCCIFEFYACBADICIIGM@KMDgDO@UCWIDECABKM@AJEB_KS@MEAH@DARG@BMGA@GBEF@@C[GEHFBCLEAGTG@MCAFgGA@@DGAALIFE@@CB@@ACKIDIGQJ@DHD@@GAAH@FDPbB@BDEJ@BBAFBNBHDBCDBDHBEJFBBDCFANA@AFTFFARPBNLABARA@DD@BB@HFA@PXBBLDACRKEAJF@GPD@AN@BjHCGZFJUN@BA^F@FIAAFNDCF@B\\LONADtJTAFBDCPBDGPETBADNDFFDFCD@LHBBKJFALIA@DB@@BNFBGHBBEN@@DHD@FFBDAH@AHBBCLDBF@@HFBBGJ@BBAFfLLABCH@ADLFJENAHKLAFBDEH@AHBDJB@DB@B@AADEFCLBNCDMDER@BKGA@ADEZDBELH"],"encodeOffsets":[[120140,40274]]},"properties":{"cp":[117.13482,39.225555],"name":"鍖楄景鍖?,"childNum":1}},{"id":"120114","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@DKEC^QZS^Q聬wVMAAB@CCI@@CB@H@JCBCFEDBCFF@D@H@FALIXMBIECM@ADE@OABEPA@CBCD@HEDIGEC@AC@KJ@DCH@@DFADEDAFBFALGBMFABKGAAA@CAALEJOFAFIFEB@JKDEJBDCCAEAFI@IDIDINECABGBQBCFC@AOKIHED@EKG@JDFOH@EIEDEFOC@BCEACAACAEI@AAHUXC@GD@AMDED@BEF@BBHAKADID@BGCIBEIIGCAFOAGAEF@BHBALQ@CFCNMDKAEDCFBBC@@CIAACBGG@CFEAKBGLMBIFKEBCG@ADKBeKBEAAI@AHEA@GE@CADKAABGG@CBEA@EGC@CM@AFGAAHME@AA@@CJBBKIEALGA@KDCCEEEMCBCSAOFCHOACDEASBsIBCPM[K@ADEMCBEJB@E]EABM@IVYEDHiG@ABMC@HOE@BILFDQCBAKWA@OEB@GAAC@@CQBABKBAMQOEBSEBEB@BMDEACEAFIGAACDCCAAGAMBEAAI@CF@AaACO@EBGHB@@GC@CRICE@CBAAAKBBD@B[EBIHAL@AGM@@AOAJ[IA@CAAHWM@AHJ@G^G@AF@DA@@FEBBFcJqAEDECFFABBRCHBFEDDNAHA@@`@@CHG@AT`D@AH@@PBBCJDBFABGB@@BBAB@BIFBBDJ@@FE@DHKD@JA@@FGCCDE@AZFDM\\JBCZCRKA@FGA@JHB@FBBXFBCFB@BB@CRJ@DJ@HCTF@ADB@AHEAIFKACH@CA@CLA@FBAFB@@DH@CFE@ADIEKA@FAABIB@BCG@@CC@BAOMCJGG[C@BABG\\AAAD@FL@@DJBADHB@BA@ABOCCDC@@BC@ADB@ADA@AFL@@A\\D@FFBBEB@CLB@ELB@@BAB@DBB@DEA@DD@AFCACDBHJDALF@AFFBBCPB@DB@ABBBBBD@@DDBFB@DHBCHDBLEJNMF@DKCIFCFQCBAA@@AEBAA@@EA@DOICDGD@BB@ALDA@BYLKA@BBGGA@AMHEABCC@GNLE@NC@@DAAAFEAAJKBBBF@CB@BF@AFH@@BN@ADZF@DD@@DF@DCFBEBF@@JB@EDCPA@@FI@@BF@@DDCCTH@C@TD@BB@G^FAGPECBGG@@BSAEDALG@AJA@AHC@ABC@@FEAAHB@@DB@BDF@AHHFA@DBABD@D@CBBBCBXH@DB@AFH@EHCACFCBCFA@CFDACL@BB@AFB@BCDBBA@BBBBCFBADE@B@@BCBBBD@ABE@ABAA@BLD@BHDBEGA@AD@CABEL@CJHBEHDBEJBBPDFCBEJDDBH@@FADHBMNIHFDEFFD@AJFADBBBAF@D@AHDBRDBD@RCBBJV@@BD@BDPBFEBBCDTHL@DAHBBCDBABTDCJJBGJNBAND@ADFBHE@DED@H@@@FH@X@BCBBBCB@DFZ@DMA@CFA@GMCADGAGBCNMAAIA@KXGCODOJMD@LJJC@C@KC@BCFAFDRDBAD@CD^F@DF@BFFA@FJB@DbEPEbElMTIZGAAFA@CJ@BE@@@FHA@EJA@CHBADBGPA@BG@AFBBVGHFL@BBABD@"],"encodeOffsets":[[119960,40574]]},"properties":{"cp":[117.057959,39.376925],"name":"姝︽竻鍖?,"childNum":1}},{"id":"120115","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@GBAAE@AFC@CFBNC@@HWDGVBBJ@BFBDDBFBADD@EPCFJF@FPGCE@ILH@FFCJGPL@BEDADARAHDBMFCJCJ@JEJFBDBCDIACFILA@EFEJEBIPKFBB@DBBHBALEBANKHEBEACBCFEB@CG@CDI@@LBDD@HFCJGFC@AD@DOBAFPBF@BCN@FDAJWNKJEBG@C@E@DECAEFADIDG@ADJ@DDA@BBUN聫x]RYT]RFDCLJBADDBGDBDHBFJJ@TBBHB@@DH@AFKBCB@HE@@BEA@D@@ADBHC@@AA@@DCB@DB@@FJ@@FD@@HH@E\\F@ADB@ARBBBFED@BD@@BCA@HD@AJE@@ACAAHDB@BH@AHCB@EAAADGB@BE@BBK@FLEBDDADA@BDNB@DJCBBIR@DBBDBFALDX@DHL@DJFA@BH@HHKJAB@DC@GFOHED@BCBAZE@ADE@AFGACEEDA@@AGAAVJ@IVB@@DB@@DHGJB@JpFBCFBEPPBBCNFBGHBPC@EHBFFRDRA^GD@JCFDJGHBLGFECCBGHBBCFBDCFB@EFGD@@BF@@DPALEDCECDEDABED@HCHJH@FDDEFDHENCLBDDDA@ERABEN@JEDDBACEJ@AINMRBJGAIDCZEJCLAFRTJHAHJHFD@@AEKBAFBRJGF@BPAFBHEDBFHBAFO@@NFH@BEFGHAD@BFBBJID@BFDBDEB@J@AGDCL@FBNIBBFJD@HKDCNDF@DAFGFCdE@A@AICBCJC@C@AGAEFC@@MIBAABC@CKA@CBANACAGC@ARBJG@GLGHCX@LENBNE@EDAFBHHD@DCDIIMLCBGN@@AIEBANEGKLEJDDAAGIKHKCIBECIECSF@GBKGCIDC@FKAAGCBOC@OB@MKGC@CHCAAEFUB@HDLPJDBCAIFGDARDHGBC@EIKDGB@N@PHJHBLHBNARQXGFG@GIGK@IDEFEAAC@EHILCP@JCDGCEOFCBGABCKCBSEEK@ADIGO@AEOCEDDBqNAAH]MKiIAW@@CA@GA@DIMA@CGAAD_EEH@FIA@HIAAHUEDOHAFIOSKGSEcDAEI@@CBCOEC@CDCFEBKEFIMEGEA@@BIA@ER聛FBDQCABADQDCCAHMJBDEMEADGAUCCC@CDA@CCCICGO@BDJG@CADGK@CCGFICCBKEEDGBCAAEKDAABGFE@ACABCAAeA@HM@GBYD@BE@@NABGB@CCAW@@ACAEF_BYECII@CG"],"encodeOffsets":[[120145,40295]]},"properties":{"cp":[117.308094,39.716965],"name":"瀹濆澔鍖?,"childNum":1}},{"id":"120116","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@@LCFBLCBDJC@CEIFHTCBJRF@FXPC@@lAAVLZU@@HADBH@Xa@ANe@[BL|J\\FBpQLFLBBB@LFLFBPD@RDLpMpGBPNREHE@@dVF@BJB@BD@@DFDLBDGHGDA^c\\@@cFD聤@@jEBJZFLhrePFBEJGAENE@IVC@@RBLV@DPT@zJLHPFVDNECC@SACjQJBJCACIDMQhQD@t聨CD]LBHDBH@GLHNB@DQHBAFDHE@@DEBDFFAD@@BF@BBAB@BNFBEHCXDT@JGAGVEBEDCDB@BF@@DRC@BZ@PAP@BCFAJ@@B@BTC@DB@JEAAB@FB@ACAB@@CC@BCHOF@BADAAADCHBH@HECEB@BCHBDBBCFDBAACBAD@BBPGJF@@ABDB@BD@ABBDDAFCBC@CB@CCAKNECG@EF@@EzQBiAC@Ey@BUI@卤]GaQa媒楼Y_YeK]EaDqPmHcD{DK聵QBMMaKEUC_BOASY_YAYD聴XSIaa鹿JgCeOQ[@聭RUbK露MPGJMA炉CUSQ脫gOKMWEa鲁OqIGFG@EBEACIGCFK]EE@@DFD@B@BG@BHCFC@@EEAIHEACBC@BFCBQCaDFKACEBECADE@聫SSKMIKHQKHEJ@[UGCoO@d[CFSMIAIE@AH[A@DOA@AQKOEEBARGNI@G@BSgE@AOACJSKMVC@IXF@hJAFmKCHB@PVVFAHHB@JC@CH@BABD@ABMFC@@BSB@BAAAHG@JL@BBBWABHHB@N@BMBMAEEESMA@EA@@CCE@FC@AEQ@@GCAA@AJC@BEK@AAABSGA@@FEA@BCBC@@EC@@DK@LHBD@HCDBFCBABB@F@@FB@@DFJ@HB@BLADK@HBDBCBG@@DH@@F@DCJIB@JK@AJFBCLBHH@DCBJFF@PATBHB@ABDTbB@DaCAAE@@CAACAOF@HADE@@BICAFBHEBhTBPDBJCFC陋vEFeVTROJVT`O聞聙FH庐_\\OF@DBJHKDBDABADCB露聢n`|yHVPT聨vbDM聢^JDERNLDB@TMJGHAHBCTAD@HDBARLZDBFPCDIAGBUVOFGB"],"encodeOffsets":[[120348,39943]]},"properties":{"cp":[117.654173,39.032846],"name":"婊ㄦ捣鏂板尯","childNum":1}},{"id":"120117","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ABCJKD@RNDL`APGJIGQEEDAE_XGGQLNFUNQNKGIHLHCBDDABDBIJEEORFFAFDJAHC@CJLBDHJ@DJZF`AFEDB@BX@DB@DHABA@MF@@AZCHAN@@GfBBBADDB@BEFAHBBLCBFDBHAFCLFDAJDHEDDL@CHDBH@CI@AHPJDDD@DCB@DDDVDHBBCNFCFIAGNDBCDCRABDBCREAQ聜@FJB@AB@HFNFEJLFFADEDCD@PFAD@DJ@BFdCTFLHPTEJGBCPVFBGJB@GJB@EFG`FBCHB@DNBCJB@@HDB@@BXjJNLGZ@DBBrMACFANDBFP@JHBCL@FFATLDADHBDAPEAC@EBIFIJGNJJ@JBJJHJHFSZA@BND@@LVB@BJ@AFDBBDEDILjTABlEHHTBvWVAPDHCDFL@LHHB`MFALDNC^M^GJIEKABEGACC@IMA@AOB@EACIGAAEBAECCBDAAAAADAAEFCBDB@ACB@AAAABEBAD@AG@ADFAEB@A@GKSCCgG@AEJA@AFO@ECCQEEEOBGYG@B聴qGBKXBFKCYJKOIKNEASCeA_ECSBGFENEF@HDZ@FCBE`TEFB@EFHFFEECBCFDFADBDEUWCOGBAIECLG@CEIFA@CF@CGBEGACRA@GMHKG@CAAG^KDCs聧C@gRNRJCBDIDIAiRBD@TDDMFUCOEKGyIS@COU@AK@QD@JUF@FMHBFIEAfOgqEKIYFA@i聣@EC@d[@]dCBGHCHKAEC@CC@@AIA@AUE@cF@FGMQAOgF聣VSBEAODkRGD@XGFAADEAAOEBCACUFBBFALFDF@HUGOBCBHJBRSJIHO@QDILGIADIE_@AEOGSD@HFH@DEFID"],"encodeOffsets":[[120221,40183]]},"properties":{"cp":[117.82828,39.328886],"name":"瀹佹渤鍖?,"childNum":1}},{"id":"120118","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@AHC@@FCA@DHB@JS@@DA@@H]BCTKfG@BHK@@FEAADJD@RJhNNI@@FQBBDCBQA@BBLMIBNFJADHHEBuK@IA@AKU@UDDH聴KI@HAGAAC]@CDCA@MSAHPGBOEMEIA@EC@@DA@MBAASB@BCB@TE@@BBBBDAHCBDFABFNGBBFKBBFC@BDB@FPC@BPCPMACEoBE@AAC@@DcB_D@ECB@A@BA@B@@DC@@CA@@IE@AAG@BDK@EBABQA@JE@@HC@ABA@@BB@ADOA@DIAACA@NxQB@FIBHXHABFKBFLIDLPDTF@DNC@CAGB@FA@BJDXmBA聹[@@聢D@@NL@BHB@H\\BTD@HRB@JF@FL@FHDNDABJDCDTD@DTA@@LF@BB@XGBADE@@B@B@DJXJ@XEDFHAFHCBBDBDJBBHTCAIGBAAGBEA@EC@BCB@@BBAC@@AB@@CD@@DB@@DJ@DDF@DAF@@CLABBF@@AB@BBJ@@IBBDBB@ACJBJDR@@HD@@GfBAFXBCLH@GTPFjKAGSGDGXLHGFDBDVABCBB@B\\KLGJNDADHDAEI\\GCGPA@CF@AIhCbGTCnSIKNC@EE@CYlCBJJJ`W~W\\M^W聙聧V]^_掳聴VIEG聝_PUSPISQfUFE漏uEDIDCAAOgSFAAGBEJD@AF@BC@GPEDBBB@DF@BBbD@CaACSBAA@AGBS@OEEAICDG@AGDKEABIL@@IJADI@C@EG@@CH@DACAGAL@@OA@@GEI@CA@@EE@A@BADAAEDC@GACOKB@BMEB@ESEAABECAWBAECBBCC@CIBCS@@IWD"],"encodeOffsets":[[119909,39513]]},"properties":{"cp":[116.925304,38.935671],"name":"闈欐捣鍖?,"childNum":1}},{"id":"120119","type":"Feature","geometry":{"type":"Polygon","coordinates":[],"encodeOffsets":[]},"properties":{"cp":[117.407449,40.045342],"name":"钃熷窞鍖?,"childNum":0}}],"UTF8Encoding":true});
}));