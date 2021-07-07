CREATE SCHEMA IF NOT EXISTS lookup;

CREATE SCHEMA IF NOT EXISTS patient;

CREATE SCHEMA IF NOT EXISTS receipt;

CREATE SCHEMA IF NOT EXISTS register;


CREATE TABLE IF NOT EXISTS lookup.preferenceType
(
    preferenceTypeId INT GENERATED ALWAYS AS IDENTITY,
    preferenceType VARCHAR NOT NULL,
    CONSTRAINT PK_PreferenceTypeId PRIMARY KEY (preferenceTypeId)
);

CREATE TABLE IF NOT EXISTS lookup.preferenceValue
(
    preferenceValueId INT GENERATED ALWAYS AS IDENTITY,
    preferenceValue VARCHAR NOT NULL,
    CONSTRAINT PK_PreferenceValueId PRIMARY KEY (preferenceValueId)
);

CREATE TABLE IF NOT EXISTS patient.preferences
(
    patientId VARCHAR (255) NOT NULL,
    preferenceTypeId INT NOT NULL,
    preferenceValueId INT NULL,
    preferencePriority INT NULL,
    created TIMESTAMP NOT NULL,
    lastUpdated TIMESTAMP,
    CONSTRAINT CK_PatientPreference PRIMARY KEY (patientId, preferenceTypeId),
    CONSTRAINT FK_PreferenceType FOREIGN KEY (preferenceTypeId) REFERENCES lookup.preferenceType (preferenceTypeId),
    CONSTRAINT FK_PreferenceValue FOREIGN KEY (preferenceValueId) REFERENCES lookup.preferenceValue (preferenceValueid)
);


CREATE TABLE IF NOT EXISTS receipt.documents
(
    patientId VARCHAR (255) NOT NULL,
    guid CHAR (36) NOT NULL,
    ts TIMESTAMP NOT NULL,
    CONSTRAINT CK_DocumentReceipt PRIMARY KEY (patientId, guid)
);

-- This table was created independent of this API, thus the mixture of snakecase and camelcase
CREATE TABLE
IF NOT EXISTS register.documents
(
    GUID VARCHAR (36) NULL,
    fhir_id VARCHAR (19) NULL,
    Title VARCHAR (191) NULL,
    Clinic VARCHAR (191) NULL,
    Document_Type VARCHAR (191) NULL,
    Filesname VARCHAR (191) NULL,
    URL VARCHAR (191) NULL,
    Patient_Visible SMALLINT NULL,
    CreatedDate TIMESTAMP NULL,
    Modified TIMESTAMP NULL,
    Specialty VARCHAR (100) NULL,
    FullPath VARCHAR (555) NULL,
    BaseURL VARCHAR (50) NULL,
    BaseSite VARCHAR (50) NULL
);