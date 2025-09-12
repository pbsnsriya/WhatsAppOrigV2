const StartFunc = ({ inRequestBody, inColumnsArray }) => {
  let LocalReturnObject = {};
  LocalReturnObject.KTF = false;

  const LocalBody = inRequestBody;
  const LocalColumnsAsArray = inColumnsArray;

  const bodyKeys = Object.keys(LocalBody);

  const missingKeys = LocalColumnsAsArray.filter(key => !bodyKeys.includes(key));

  if (missingKeys.length > 0) {
    LocalReturnObject.KTF = true;
    LocalReturnObject.KReason = `Add missing field(s): ${missingKeys.join(", ")}`;

    return LocalReturnObject;
  };

  return LocalReturnObject;
};

export { StartFunc };
