import email from "infra/email";
import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("infra/email.js", () => {
  test("send()", async () => {
    await orchestrator.deleteAllEmails();

    await email.send({
      from: "KinTsume <kintsume@kintsume.com.br>",
      to: "kintsume2@kintsume.com.br",
      subject: "Teste de Assunto",
      text: "Teste de corpo.",
    });

    await email.send({
      from: "KinTsume <kintsume@kintsume.com.br>",
      to: "kintsume2@kintsume.com.br",
      subject: "Último email enviado",
      text: "Corpo do último email.",
    });

    const lastEmail = await orchestrator.getLastEmail();
    expect(lastEmail.sender).toBe("<kintsume@kintsume.com.br>");
    expect(lastEmail.recipients[0]).toBe("<kintsume2@kintsume.com.br>");
    expect(lastEmail.subject).toBe("Último email enviado");
    expect(lastEmail.text).toBe("Corpo do último email.\r\n");
  });
});
