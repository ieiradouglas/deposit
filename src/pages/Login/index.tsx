import { Field, Input, Button, Flex } from "@chakra-ui/react";

export default function Login() {
  return (
    <>
      <main className="w-full h-screen flex items-center justify-center">
        <form
          onSubmit={() => console.log("teste")}
          className="w-full max-w-[350px] flex flex-col gap-3"
        >
          <h1 className="text-center">DEPOSIT</h1>
          <Field.Root required>
            <Field.Label>
              Email <Field.RequiredIndicator />
            </Field.Label>
            <Input placeholder="Digite seu e-mail..." />
          </Field.Root>

          <Field.Root required>
            <Field.Label>
              Senha <Field.RequiredIndicator />
            </Field.Label>
            <Input type="password" placeholder="Digite sua senha..." />
          </Field.Root>

          <Flex justify={"center"}>
            <Button type={"submit"} width={"150px"}>
              Entrar
            </Button>
          </Flex>
        </form>
      </main>
    </>
  );
}
