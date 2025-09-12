let StartFunc = ({ inDataToShow }) => {
   let jVarLocalData = inDataToShow;

   jFLocalToInputFarmerNameId({ inFarmerNameId: jVarLocalData.DATETIME });
   jFLocalToInputFarmerMobileId({ inFarmerMobileId: jVarLocalData.TREENAME });
   jFLocalToInputFarmerCityId({ inFarmerCityId: jVarLocalData.LATITUDE });
   jFLocalToInputFarmerFieldId({ inFarmerFieldId: jVarLocalData.LONGITUDE })

};

let jFLocalToInputFarmerNameId = ({ inFarmerNameId }) => {
   let jVarLocalHtmlId = 'DateTimeId';
   let jVarLocalFarmerNameId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalFarmerNameId === null === false) {
      jVarLocalFarmerNameId.value = inFarmerNameId;
   };
};

let jFLocalToInputFarmerMobileId = ({ inFarmerMobileId }) => {
   let jVarLocalHtmlId = 'TreeNameId';
   let jVarLocalFarmerMobileId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalFarmerMobileId === null === false) {
      jVarLocalFarmerMobileId.value = inFarmerMobileId;
   };
};

let jFLocalToInputFarmerCityId = ({ inFarmerCityId }) => {
   let jVarLocalHtmlId = 'LatitudeId';
   let jVarLocalFarmerCityId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalFarmerCityId === null === false) {
      jVarLocalFarmerCityId.value = inFarmerCityId;
   };
};

let jFLocalToInputFarmerFieldId = ({ inFarmerFieldId }) => {
   let jVarLocalHtmlId = 'LongitudeId';
   let jVarLocalFarmerFieldId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalFarmerFieldId === null === false) {
      jVarLocalFarmerFieldId.value = inFarmerFieldId;
   };
};

export { StartFunc };