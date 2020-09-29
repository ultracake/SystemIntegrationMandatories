CREATE TABLE [user](
    [Id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [CPR] TEXT NOT NULL,
    [NemID] TEXT NOT NULL,
    [Password] TEXT NOT NULL
);

CREATE TABLE [auth_log](
    [Id] INTEGER PRIMARY KEY AUTOINCREMENT,
    [UserId] INTEGER NOT NULL,
    [Code] TEXT NOT NULL,
    [Timestamp] DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ([UserId]) REFERENCES [user](Id)
);