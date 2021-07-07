SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

INSERT INTO lookup.preferenceType
    (preferenceType)
VALUES
    ('SMS'),
    ('Email'),
    ('Phone'),
    ('Letters');
GO

INSERT INTO lookup.preferenceValue
    (preferenceValue)
VALUES
    ('yes'),
    ('no');
GO

INSERT INTO patient.preferences
    (patientId, preferenceTypeId, preferenceValueId, preferencePriority, created)
VALUES
    (9999999999, 1, 1, 0, CURRENT_TIMESTAMP),
    (9999999999, 2, 2, 1, CURRENT_TIMESTAMP),
    (9999999999, 3, 1, 2, CURRENT_TIMESTAMP),
    (9999999999, 4, 2, 3, CURRENT_TIMESTAMP),
    (9999999998, 1, 1, 0, CURRENT_TIMESTAMP),
    (9999999998, 2, 2, 1, CURRENT_TIMESTAMP);
GO