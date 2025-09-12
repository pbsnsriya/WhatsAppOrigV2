import { StartFunc as showInTable } from "./showInTable.js";

let StartFunc = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });

      const firstSheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheetName]);

      showInTable({ inData: sheetData });
    };

    reader.readAsBinaryString(file);
  }
};

export { StartFunc };
