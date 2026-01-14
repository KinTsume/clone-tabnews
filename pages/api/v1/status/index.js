import database from "infra/database.js";

export default async function status(request, response) {
  //Todo: implementar o retorno da versão do postgres, conexões máximas, conexões usadas. Implementar testes também.
  const updatedAt = new Date().toISOString();
  const databaseVersion = await database
    .query("SHOW server_version;")
    .then((res) => res.rows[0].server_version);

  const maxConnections = await database
    .query("SHOW max_connections;")
    .then((res) => res.rows[0].max_connections);

  const databaseName = process.env.POSTGRES_DB;
  const openedConnections = await database
    .query(
      {
        text: `SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;`,
        values: [databaseName],
      },
      //"SELECT count(*)::int FROM pg_stat_activity WHERE datname = current_database()",
    )
    .then((response) => response.rows[0].count);

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersion,
        max_connections: parseInt(maxConnections),
        opened_connections: openedConnections,
      },
    },
  });
}
