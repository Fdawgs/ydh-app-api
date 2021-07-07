// PostgreSQL lowercases columns and alias if they are not double-quoted
const registerSelect = ({
	whereClausePredicates,
	documentRegisterTable,
	page,
	perPage,
}) => `
SELECT COUNT(*) AS total
FROM ${documentRegisterTable}
WHERE ${whereClausePredicates};

SELECT GUID AS guid,
fhir_id AS "fhirId",
Title AS title,
Specialty AS specialty,
Clinic AS clinic,
Document_Type AS "documentType",
Filesname AS "fileName",
BaseURL AS "baseUrl",
BaseSite AS "baseSite",
FullPath AS "fullPath",
URL AS url,
CreatedDate AS "createdDate",
Modified AS "modifiedDate",
patient_visible AS "patientVisible"
FROM ${documentRegisterTable}
WHERE ${whereClausePredicates}
ORDER BY Modified DESC
OFFSET ${page * perPage} ROWS
FETCH NEXT ${perPage} ROWS ONLY;`;

module.exports = { registerSelect };
