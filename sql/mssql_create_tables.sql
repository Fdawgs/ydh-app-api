SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE SCHEMA lookup;
GO

CREATE SCHEMA patient;
GO

CREATE SCHEMA receipt;
GO

CREATE SCHEMA register;
GO

CREATE TABLE lookup.preferenceType
(
    preferenceTypeId INT IDENTITY(1,1) NOT NULL,
    preferenceType VARCHAR(MAX) NOT NULL,
    CONSTRAINT PK_PreferenceTypeId PRIMARY KEY (preferenceTypeId)
);
GO

CREATE TABLE lookup.preferenceValue
(
    preferenceValueId INT IDENTITY(1,1) NOT NULL,
    preferenceValue VARCHAR(255) NOT NULL,
    CONSTRAINT PK_PreferenceValueId PRIMARY KEY (preferenceValueId)
);
GO

CREATE TABLE patient.preferences
(
    patientId VARCHAR(255) NOT NULL,
    preferenceTypeId INT NOT NULL,
    preferenceValueId INT NULL,
    preferencePriority INT NULL,
    created DATETIME NOT NULL,
    lastUpdated DATETIME,
    CONSTRAINT CK_PatientPreference PRIMARY KEY (patientId, preferenceTypeId),
    CONSTRAINT FK_PreferenceType FOREIGN KEY (preferenceTypeId) REFERENCES lookup.preferenceType(preferenceTypeId),
    CONSTRAINT FK_PreferenceValue FOREIGN KEY (preferenceValueId) REFERENCES lookup.preferenceValue(preferenceValueid)
);
GO


CREATE TABLE receipt.documents
(
    patientId VARCHAR(255) NOT NULL,
    guid CHAR(36) NOT NULL,
    ts DATETIME NOT NULL,
    CONSTRAINT CK_DocumentReceipt PRIMARY KEY (patientId, guid)
);
GO

-- This table was created independent of this API, thus the mixture of snakecase and camelcase
CREATE TABLE register.documents
(
    GUID NVARCHAR(36) NULL,
    fhir_id NVARCHAR(19) NULL,
    Title NVARCHAR(191) NULL,
    Clinic NVARCHAR(191) NULL,
    Document_Type NVARCHAR(191) NULL,
    Filesname NVARCHAR(191) NULL,
    URL NVARCHAR(191) NULL,
    Patient_Visible TINYINT NULL,
    CreatedDate DATETIME NULL,
    Modified DATETIME NULL,
    Specialty NVARCHAR(100) NULL,
    FullPath NVARCHAR(555) NULL,
    BaseURL NVARCHAR(50) NULL,
    BaseSite NVARCHAR(50) NULL
);
GO 