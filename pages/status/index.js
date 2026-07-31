import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

const CapsLock = (props) => {
  return <text>{props.texto.toUpperCase()}</text>;
};

const StatusPage = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Status</h1>
      <UpdatedAt />
    </div>
  );
};

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  const maxConnections = data.dependencies.database.max_connections;
  const openedConnections = data.dependencies.database.opened_connections;

  let updatedAtText = "Carregando...";
  let versionText = "Carregando...";
  let maxConnectionsText = "Carregando...";
  let openedConnecionsText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
    versionText = data.dependencies.database.version;
    maxConnectionsText = maxConnections;
    openedConnecionsText = openedConnections;
    console.log(versionText);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>Última atualização: {updatedAtText}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <h2 style={{ marginTop: 5, marginBottom: 5 }}>Dependências</h2>
        <h3 style={{ marginTop: 5, marginBottom: 5 }}>Banco de dados</h3>
        <p style={{ marginTop: 0, marginBottom: 5 }}>Versão: {versionText}</p>
        <p style={{ marginTop: 0, marginBottom: 5 }}>
          Conexões máximas: {maxConnectionsText}
        </p>
        <p style={{ marginTop: 0, marginBottom: 5 }}>
          Conexões abertas: {openedConnecionsText} (
          {((openedConnecionsText * 100) / maxConnections).toFixed(2)}%)
        </p>
      </div>
    </div>
  );
}

export default StatusPage;
