export interface IUserInput {
    username: string
    password: string
}

export type LoginFormProps = {
    onSubmit: (values: IUserInput) => void
}
