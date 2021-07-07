// PostgreSQL lowercases columns and alias if they are not double-quoted
const userInsert = ({
	patientId,
	preferenceTypeId,
	preferenceValueId,
	preferencePriority,
	patientPreferencesTable,
}) => `IF EXISTS(SELECT patientId 
FROM ${patientPreferencesTable}
WHERE patientId = '${patientId}'
AND preferenceTypeId = '${preferenceTypeId}')
UPDATE ${patientPreferencesTable}
SET preferencePriority = '${preferencePriority}',
preferenceValueId = '${preferenceValueId}',
lastUpdated = CURRENT_TIMESTAMP
WHERE patientId = '${patientId}'
AND preferenceTypeId = '${preferenceTypeId}'
ELSE
INSERT INTO ${patientPreferencesTable} (patientId, preferenceTypeId, preferenceValueId, preferencePriority, created)
VALUES('${patientId}', '${preferenceTypeId}', '${preferenceValueId}', '${preferencePriority}', CURRENT_TIMESTAMP)`;

const userSelect = ({
	patientId,
	patientPreferencesTable,
	patientPreferencesTypeTable,
	patientPreferencesValueTable,
}) => `SELECT pat.patientId AS id,
pat.created AS "metaCreated",
pat.lastUpdated AS "metaLastUpdated",
pat.preferenceValueId AS "preferenceValueId",
pat.preferenceTypeId AS "preferenceTypeId",
prefType.preferenceType AS "preferenceTypeDisplay",
pat.preferencePriority AS "preferenceTypePriority"
FROM ${patientPreferencesTable} pat
LEFT JOIN ${patientPreferencesTypeTable} prefType
ON pat.preferenceTypeId = prefType.preferenceTypeId
WHERE patientId = '${patientId}';

SELECT prefType.preferenceTypeId AS "preferenceTypeId",
prefType.preferenceType AS "preferenceTypeDisplay",
prefVal.preferenceValue AS "preferenceOptionDisplay",
prefVal.preferenceValueId AS "preferenceOptionValue"
FROM ${patientPreferencesTypeTable} prefType
CROSS JOIN ${patientPreferencesValueTable} prefVal;
`;

module.exports = { userInsert, userSelect };
