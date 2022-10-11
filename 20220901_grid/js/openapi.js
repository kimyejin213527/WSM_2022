//시도교육청 코드 B10: 서울특별시교육청
// 표준학교 코드 7010569
//식사코드: 2: 중식

//KEY:
// ATPT_OFCDC_SC_CODE	     STRING(필수)	    시도교육청코드
//     SD_SCHUL_CODE	     STRING(필수)	    표준학교코드
//     MMEAL_SC_CODE	     STRING(선택)	    식사코드
//     MLSV_YMD	     STRING(선택)	    급식일자
//     MLSV_FROM_YMD	     STRING(선택)	    급식시작일자
//     MLSV_TO_YMD	     STRING(선택)	    급식종료일자

//  https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010569&MMEAL_SC_CODE=2&MLSV_YMD=20220927&Type=json



const KEY = "f9f06af16f3449b6860a8b365af1f232";
const ATPT_OFCDC_SC_CODE = "B10";
const c = "7010569";
let MMEAL_SC_CODE = 2;
let MLSV_YMD = "20220927";

let url = `https://open.neis.go.kr/hub/mealServiceDietInfo?`
    + `KEYE=${KEY}`
    + `ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}`
    + `SD_SCHUL_CODE=${SD_SCHUL_CODE}`
    + `MMEAL_SC_CODE=${MMEAL_SC_CODE}`
    + `MLSV_YMD=${MLSV_YMD}`;
console.log(url);