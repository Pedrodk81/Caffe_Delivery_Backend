-- CreateTable
CREATE TABLE "Caffes" (
    "id" TEXT NOT NULL,
    "image" BYTEA,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "category" JSONB NOT NULL,

    CONSTRAINT "Caffes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shoppingcart" (
    "id" TEXT NOT NULL,
    "caffesId" TEXT NOT NULL,

    CONSTRAINT "Shoppingcart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "shoppingcartId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "userPurchaseId" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("userPurchaseId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Caffes_name_key" ON "Caffes"("name");

-- AddForeignKey
ALTER TABLE "Shoppingcart" ADD CONSTRAINT "Shoppingcart_caffesId_fkey" FOREIGN KEY ("caffesId") REFERENCES "Caffes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_shoppingcartId_fkey" FOREIGN KEY ("shoppingcartId") REFERENCES "Shoppingcart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userPurchaseId_fkey" FOREIGN KEY ("userPurchaseId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
