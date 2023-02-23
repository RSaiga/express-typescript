import { Prisma, PrismaClient } from '@prisma/client'

export class TestPrismaHelper extends PrismaClient {
  clear = async () => {
    const tables = Prisma.dmmf.datamodel.models.map((model) => model.dbName || model.name)
    for (const table of tables) {
      await this.$executeRawUnsafe(`TRUNCATE TABLE "${table}" CASCADE;`)
    }
  }
}
