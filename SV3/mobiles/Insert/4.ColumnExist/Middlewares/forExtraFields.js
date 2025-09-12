const StartFunc = ({ inRequestBody, inColumnsArray }) => {
  let LocalReturnObject = {};
  LocalReturnObject.KTF = false;

  const LocalBody = inRequestBody;
  const LocalColumnsAsArray = inColumnsArray;

  const bodyKeys = Object.keys(LocalBody);

  const missingKeys = bodyKeys.filter(key => !LocalColumnsAsArray.includes(key));

  if (missingKeys.length > 0) {
    LocalReturnObject.KTF = true;
    LocalReturnObject.KReason = `Remove extra field(s): ${missingKeys.join(", ")}`;

    return LocalReturnObject;
  };

  return LocalReturnObject;
};

export { StartFunc };
