-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");
-- Insert data into the "Contact" table
INSERT INTO "Contact" (
        "name",
        "email",
        "phoneNumber",
        "imageUrl",
        "updatedAt"
    )
VALUES (
        'Timothy Lewis',
        'timothy.lewis@example.com',
        '+36 01 234 5678',
        'https://ux-contact-profile-pictures.s3.eu-north-1.amazonaws.com/Timothy.png',
        CURRENT_TIMESTAMP
    ),
    (
        'Sarah Wright',
        'sarah.wright@example.com',
        '+36 01 234 5678',
        'https://ux-contact-profile-pictures.s3.eu-north-1.amazonaws.com/Sarah.png',
        CURRENT_TIMESTAMP
    ),
    (
        'Lucy Jones',
        'lucy.jones@example.com',
        '+36 01 234 5678',
        'https://ux-contact-profile-pictures.s3.eu-north-1.amazonaws.com/Lucy.png',
        CURRENT_TIMESTAMP
    ),
    (
        'Jake Perez',
        'jake.perez@example.com',
        '+36 01 234 5678',
        'https://ux-contact-profile-pictures.s3.eu-north-1.amazonaws.com/Jake.png',
        CURRENT_TIMESTAMP
    ),
    (
        'Adebayo Rodriguez',
        'adebayo.rodriguez@example.com',
        '+36 01 234 5678',
        'https://ux-contact-profile-pictures.s3.eu-north-1.amazonaws.com/Adebayo.png',
        CURRENT_TIMESTAMP
    );