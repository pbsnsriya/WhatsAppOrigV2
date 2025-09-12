import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnGitLink = LocalRequestBody.GitLink;
	let LocalCoumnfile = LocalRequestBody.file;
	let LocalCoumnRollNumber = LocalRequestBody.RollNumber;
	let LocalCoumnBack_logs = LocalRequestBody.Back_logs;
	let LocalCoumnYearPassOut = LocalRequestBody.YearPassOut;
	let LocalCoumnEntranceRank = LocalRequestBody.EntranceRank;
	let LocalCoumnCountry = LocalRequestBody.Country;
	let LocalCoumnCollegeName = LocalRequestBody.CollegeName;
	let LocalCoumnemail = LocalRequestBody.email;
	let LocalCoumnMobile = LocalRequestBody.Mobile;
	let LocalCoumnStudentName = LocalRequestBody.StudentName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnemail,LocalCoumnCollegeName,LocalCoumnCountry,LocalCoumnEntranceRank,LocalCoumnYearPassOut,LocalCoumnBack_logs,LocalCoumnRollNumber,LocalCoumnfile,LocalCoumnGitLink});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};