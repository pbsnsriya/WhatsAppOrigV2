import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnemail,LocalCoumnCollegeName,LocalCoumnCountry,LocalCoumnEntranceRank,LocalCoumnYearPassOut,LocalCoumnBack_logs,LocalCoumnRollNumber,LocalCoumnfile,LocalCoumnGitLink}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnemail,LocalCoumnCollegeName,LocalCoumnCountry,LocalCoumnEntranceRank,LocalCoumnYearPassOut,LocalCoumnBack_logs,LocalCoumnRollNumber,LocalCoumnfile,LocalCoumnGitLink});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};